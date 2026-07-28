import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function Real3DLogoCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // -------------------------------------------------------------
    // Scene & Camera Setup
    // -------------------------------------------------------------
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03080f, 0.025);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // -------------------------------------------------------------
    // Lighting Setup
    // -------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0x005a7a, 1.8);
    scene.add(ambientLight);

    const cyanKeyLight = new THREE.DirectionalLight(0x00f0ff, 4.5);
    cyanKeyLight.position.set(6, 8, 6);
    scene.add(cyanKeyLight);

    const blueRimLight = new THREE.PointLight(0x008dcd, 6, 25);
    blueRimLight.position.set(-6, -4, -2);
    scene.add(blueRimLight);

    const logoGroup = new THREE.Group();
    scene.add(logoGroup);

    // -------------------------------------------------------------
    // Load Real 3D Logo GLB Model from Blender
    // -------------------------------------------------------------
    const loader = new GLTFLoader();
    loader.load(
      '/assets/avanza_real_3d_logo.glb',
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(1.1, 1.1, 1.1);
        logoGroup.add(model);
      },
      undefined,
      (error) => {
        console.warn('Fallback 3D logo creation:', error);
        // Fallback procedural geometry
        const shape = new THREE.Shape();
        shape.moveTo(0, 2.2);
        shape.quadraticCurveTo(0.1, 2.2, 0.85, -0.2);
        shape.quadraticCurveTo(1.0, -0.6, 0.6, -0.7);
        shape.quadraticCurveTo(0.1, 0.1, 0, 0.2);
        shape.quadraticCurveTo(-0.1, 0.1, -0.6, -0.7);
        shape.quadraticCurveTo(-1.0, -0.6, -0.85, -0.2);
        shape.quadraticCurveTo(-0.1, 2.2, 0, 2.2);

        const geo = new THREE.ExtrudeGeometry(shape, {
          depth: 0.35,
          bevelEnabled: true,
          bevelThickness: 0.08,
          bevelSize: 0.08,
          bevelSegments: 5
        });
        geo.center();

        const mat = new THREE.MeshPhysicalMaterial({
          color: 0x008dcd,
          emissive: 0x003550,
          roughness: 0.1,
          metalness: 0.8,
          clearcoat: 1.0,
          transmission: 0.5,
          opacity: 0.9
        });

        const mesh = new THREE.Mesh(geo, mat);
        logoGroup.add(mesh);
      }
    );

    // -------------------------------------------------------------
    // Subtle Ambient Light Particles
    // -------------------------------------------------------------
    const particlesCount = 180;
    const particlePositions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 22;
      particlePositions[i + 1] = (Math.random() - 0.5) * 22;
      particlePositions[i + 2] = (Math.random() - 0.5) * 15;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.12,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // -------------------------------------------------------------
    // Mouse Interaction
    // -------------------------------------------------------------
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // -------------------------------------------------------------
    // Animation Loop
    // -------------------------------------------------------------
    let animationFrameId;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      targetRotationY += (mouseX * 0.7 - targetRotationY) * 0.05;
      targetRotationX += (mouseY * 0.4 - targetRotationX) * 0.05;

      logoGroup.rotation.y = elapsedTime * 0.35 + targetRotationY;
      logoGroup.rotation.x = Math.sin(elapsedTime * 0.8) * 0.12 - targetRotationX;
      logoGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.18;

      particleSystem.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
}
