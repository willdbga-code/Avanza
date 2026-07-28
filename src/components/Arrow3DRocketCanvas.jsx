import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function Arrow3DRocketCanvas({ isLaunching, onLandingComplete }) {
  const mountRef = useRef(null);
  const rocketMeshRef = useRef(null);
  const flightStateRef = useRef('IDLE'); // IDLE | LAUNCHING | ORBIT | LANDING
  const launchProgressRef = useRef(0);

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
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // -------------------------------------------------------------
    // Lighting
    // -------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0x005a7a, 1.8);
    scene.add(ambientLight);

    const cyanSpot = new THREE.SpotLight(0x00f0ff, 6, 35, Math.PI / 4, 0.5);
    cyanSpot.position.set(0, 8, 8);
    scene.add(cyanSpot);

    const blueRimLight = new THREE.PointLight(0x008dcd, 8, 25);
    blueRimLight.position.set(-8, -4, -3);
    scene.add(blueRimLight);

    const rocketGroup = new THREE.Group();
    scene.add(rocketGroup);

    // -------------------------------------------------------------
    // Load Blender 4.2 GLB 3D Rocket Model
    // -------------------------------------------------------------
    const loader = new GLTFLoader();
    loader.load(
      '/assets/avanza_rocket_logo.glb',
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.9, 0.9, 0.9);
        rocketGroup.add(model);
        rocketMeshRef.current = model;
      },
      undefined,
      (err) => {
        console.warn('Fallback procedural rocket creation:', err);
        // Procedural fallback cone shape
        const shape = new THREE.ConeGeometry(1.2, 3.2, 32);
        const mat = new THREE.MeshPhysicalMaterial({
          color: 0x008dcd,
          emissive: 0x003550,
          roughness: 0.1,
          metalness: 0.8,
          clearcoat: 1.0,
          transmission: 0.6
        });
        const fallbackMesh = new THREE.Mesh(shape, mat);
        rocketGroup.add(fallbackMesh);
        rocketMeshRef.current = fallbackMesh;
      }
    );

    // -------------------------------------------------------------
    // Thruster Particle Plasma Trail
    // -------------------------------------------------------------
    const particleCount = 350;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = [];

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 1.5;
      particlePositions[i + 1] = -1.5 - Math.random() * 2;
      particlePositions[i + 2] = (Math.random() - 0.5) * 1.5;
      particleVelocities.push({
        y: -Math.random() * 0.15 - 0.05,
        x: (Math.random() - 0.5) * 0.04
      });
    }

    particleGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.16,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    rocketGroup.add(particleSystem);

    // -------------------------------------------------------------
    // Starry Atmosphere Particles
    // -------------------------------------------------------------
    const starsCount = 300;
    const starsGeo = new THREE.BufferGeometry();
    const starsPositions = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount * 3; i += 3) {
      starsPositions[i] = (Math.random() - 0.5) * 30;
      starsPositions[i + 1] = (Math.random() - 0.5) * 30;
      starsPositions[i + 2] = (Math.random() - 0.5) * 20;
    }

    starsGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(starsPositions, 3)
    );

    const starsMat = new THREE.PointsMaterial({
      color: 0x69c9f2,
      size: 0.1,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });

    const starsSystem = new THREE.Points(starsGeo, starsMat);
    scene.add(starsSystem);

    // -------------------------------------------------------------
    // Mouse Interaction
    // -------------------------------------------------------------
    let mouseX = 0;
    let mouseY = 0;
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
    // Animation Loop (Rocket Launch & Landing Physics)
    // -------------------------------------------------------------
    let animationFrameId;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Rocket Flight Sequence State Handling
      if (flightStateRef.current === 'LAUNCHING') {
        launchProgressRef.current += 0.015;

        // Ascend Rocket into Orbit
        rocketGroup.position.y += 0.18;
        rocketGroup.position.x = Math.sin(elapsedTime * 8) * 0.1;
        rocketGroup.rotation.z = Math.sin(elapsedTime * 6) * 0.1;
        particleMat.opacity = 1.0;
        particleMat.size = 0.25;

        if (rocketGroup.position.y > 14) {
          flightStateRef.current = 'ORBIT';
          launchProgressRef.current = 0;
        }
      } else if (flightStateRef.current === 'ORBIT') {
        // Orbit around Zaha Hadid parametric curve in sky
        launchProgressRef.current += 0.02;
        rocketGroup.position.x = Math.sin(launchProgressRef.current) * 6;
        rocketGroup.position.y = Math.cos(launchProgressRef.current) * 4 + 4;
        rocketGroup.rotation.z = -launchProgressRef.current * 0.5;

        if (launchProgressRef.current > Math.PI * 1.5) {
          flightStateRef.current = 'LANDING';
          launchProgressRef.current = 0;
        }
      } else if (flightStateRef.current === 'LANDING') {
        // Smooth Parametric Re-entry & Precision Touchdown
        rocketGroup.position.x += (0 - rocketGroup.position.x) * 0.06;
        rocketGroup.position.y += (0.3 - rocketGroup.position.y) * 0.06;
        rocketGroup.rotation.z += (0 - rocketGroup.rotation.z) * 0.08;
        rocketGroup.rotation.x += (0 - rocketGroup.rotation.x) * 0.08;

        if (Math.abs(rocketGroup.position.y - 0.3) < 0.05) {
          flightStateRef.current = 'IDLE';
          particleMat.opacity = 0.6;
          particleMat.size = 0.16;
          if (onLandingComplete) onLandingComplete();
        }
      } else {
        // IDLE Hover & Gentle Float
        rocketGroup.rotation.y = elapsedTime * 0.4 + mouseX * 0.4;
        rocketGroup.rotation.x = Math.sin(elapsedTime * 1.2) * 0.12 - mouseY * 0.3;
        rocketGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.2;
        rocketGroup.position.x += (0 - rocketGroup.position.x) * 0.05;
      }

      // Animate Thruster Plasma Particles
      const positions = particleGeo.attributes.position.array;
      for (let i = 1; i < particleCount * 3; i += 3) {
        positions[i] -= 0.1;
        if (positions[i] < -4) {
          positions[i] = -1.2;
          positions[i - 1] = (Math.random() - 0.5) * 0.6;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      starsSystem.rotation.y = elapsedTime * 0.03;

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

  // React to trigger launch prop
  useEffect(() => {
    if (isLaunching) {
      flightStateRef.current = 'LAUNCHING';
      launchProgressRef.current = 0;
    }
  }, [isLaunching]);

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
