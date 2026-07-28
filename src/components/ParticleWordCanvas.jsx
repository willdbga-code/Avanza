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
      const width = rect.width || 600;
      const height = rect.height || 140;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Offscreen canvas to sample text pixels
      const offCanvas = document.createElement('canvas');
      offCanvas.width = width;
      offCanvas.height = height;
      const offCtx = offCanvas.getContext('2d');

      // Draw text to offscreen canvas
      const fontSize = Math.min(width / (text.length * 0.58), height * 0.85);
      offCtx.font = `italic 300 ${fontSize}px "Fraunces", serif`;
      offCtx.fillStyle = '#FFFFFF';
      offCtx.textAlign = 'left';
      offCtx.textBaseline = 'middle';
      offCtx.fillText(text, 10, height / 2);

      // Sample pixels
      const imgData = offCtx.getImageData(0, 0, width, height);
      const data = imgData.data;
      particles = [];

      const step = Math.max(3, Math.floor(fontSize / 28));

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];
          if (alpha > 128) {
            particles.push({
              targetX: x,
              targetY: y,
              x: x + (Math.random() - 0.5) * 120,
              y: y + (Math.random() - 0.5) * 120,
              vx: (Math.random() - 0.5) * 0.5,
              vy: (Math.random() - 0.5) * 0.5,
              radius: Math.random() * 1.3 + 1,
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
        p.vx += dx * 0.04;
        p.vy += dy * 0.04;
        p.vx *= 0.82;
        p.vy *= 0.82;

        p.x += p.vx;
        p.y += p.vy;

        // Mouse repulsion
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 70) {
          const force = (70 - mdist) / 70;
          p.x -= (mdx / mdist) * force * 6;
          p.y -= (mdy / mdist) * force * 6;
        }

        // Slight ambient wave
        const floatOffset = Math.sin(Date.now() * 0.003 + i) * 0.4;

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
      window.removeEventListener('resize', handleResize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [text]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '130px',
        display: 'block',
        pointerEvents: 'auto'
      }}
    />
  );
}
