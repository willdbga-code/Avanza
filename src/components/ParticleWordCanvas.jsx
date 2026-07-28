import React, { useEffect, useRef } from 'react';

export default function ParticleWordCanvas({ text = "elétrica." }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let particles = [];

    function setup() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const width = rect.width || canvas.parentElement.offsetWidth || window.innerWidth;
      const height = rect.height || 80;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Offscreen canvas to sample text pixels
      const offCanvas = document.createElement('canvas');
      offCanvas.width = width;
      offCanvas.height = height;
      const offCtx = offCanvas.getContext('2d');

      // Calculate font size responsive to container width
      const fontSize = Math.min(width / (text.length * 0.54), height * 0.82);
      offCtx.font = `italic 300 ${fontSize}px "Fraunces", serif`;
      offCtx.fillStyle = '#FFFFFF';
      offCtx.textAlign = 'left';
      offCtx.textBaseline = 'middle';
      offCtx.fillText(text, 2, height / 2);

      // Sample pixels
      const imgData = offCtx.getImageData(0, 0, width, height);
      const data = imgData.data;
      particles = [];

      const step = Math.max(2, Math.floor(fontSize / 24));

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];
          if (alpha > 128) {
            particles.push({
              targetX: x,
              targetY: y,
              x: x + (Math.random() - 0.5) * 80,
              y: y + (Math.random() - 0.5) * 80,
              vx: (Math.random() - 0.5) * 0.5,
              vy: (Math.random() - 0.5) * 0.5,
              radius: Math.random() * 1.2 + 0.9,
              color: Math.random() > 0.3 ? '#5BC2D8' : '#7DE1F5',
              alpha: Math.random() * 0.7 + 0.3
            });
          }
        }
      }
    }

    setup();

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const rect = canvas.getBoundingClientRect();
        mouse = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top
        };
      }
    };
    window.addEventListener('touchmove', handleTouchMove);

    function animate() {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Physics spring to target
        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        p.vx += dx * 0.05;
        p.vy += dy * 0.05;
        p.vx *= 0.8;
        p.vy *= 0.8;

        p.x += p.vx;
        p.y += p.vy;

        // Mouse repulsion
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 60) {
          const force = (60 - mdist) / 60;
          p.x -= (mdx / mdist) * force * 5;
          p.y -= (mdy / mdist) * force * 5;
        }

        // Slight ambient wave
        const floatOffset = Math.sin(Date.now() * 0.003 + i) * 0.3;

        ctx.beginPath();
        ctx.arc(p.x, p.y + floatOffset, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      setup();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [text]);

  return (
    <div style={{ position: 'relative', width: '100%', height: 'clamp(50px, 12vw, 110px)' }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          pointerEvents: 'auto'
        }}
      />
    </div>
  );
}
