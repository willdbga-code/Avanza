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
      const container = canvas.parentElement;
      const width = container ? container.offsetWidth : (window.innerWidth - 32);
      // Give sufficient height on mobile so font sampling never cuts off
      const height = Math.max(56, Math.min(width * 0.28, 120));

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.scale(dpr, dpr);

      // Offscreen canvas to sample text pixels
      const offCanvas = document.createElement('canvas');
      offCanvas.width = width;
      offCanvas.height = height;
      const offCtx = offCanvas.getContext('2d');

      // Calculate font size responsive to container width
      const fontSize = Math.min(width / (text.length * 0.52), height * 0.82);
      offCtx.font = `italic 300 ${fontSize}px "Fraunces", serif`;
      offCtx.fillStyle = '#FFFFFF';
      offCtx.textAlign = 'left';
      offCtx.textBaseline = 'middle';
      offCtx.fillText(text, 0, height / 2);

      const imgData = offCtx.getImageData(0, 0, width, height);
      const data = imgData.data;
      particles = [];

      // Sampling step: denser on small screens for sharp detail
      const step = width < 480 ? 2 : 3;

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];
          if (alpha > 120) {
            particles.push({
              targetX: x,
              targetY: y,
              x: x + (Math.random() - 0.5) * 60,
              y: y + (Math.random() - 0.5) * 60,
              vx: (Math.random() - 0.5) * 0.5,
              vy: (Math.random() - 0.5) * 0.5,
              radius: width < 480 ? (Math.random() * 0.9 + 0.7) : (Math.random() * 1.2 + 0.9),
              color: Math.random() > 0.3 ? '#5BC2D8' : '#7DE1F5',
              alpha: Math.random() * 0.75 + 0.25
            });
          }
        }
      }
    }

    setup();

    let mouse = { x: -1000, y: -1000 };

    const updatePointer = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      mouse = {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const handleMouseMove = (e) => updatePointer(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        updatePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        updatePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    function animate() {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        p.vx += dx * 0.05;
        p.vy += dy * 0.05;
        p.vx *= 0.8;
        p.vy *= 0.8;

        p.x += p.vx;
        p.y += p.vy;

        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 55) {
          const force = (55 - mdist) / 55;
          p.x -= (mdx / mdist) * force * 5;
          p.y -= (mdy / mdist) * force * 5;
        }

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
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('resize', handleResize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [text]);

  return (
    <div className="particle-word-container">
      {/* Subtle HTML text underlay so word is 100% visible on any screen */}
      <span className="particle-word-text">
        {text}
      </span>

      {/* Live Canvas particles running on both Mobile & Desktop */}
      <canvas
        ref={canvasRef}
        className="particle-word-canvas"
      />
    </div>
  );
}
