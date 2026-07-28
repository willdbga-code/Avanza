import React, { useEffect, useRef } from 'react';

export default function DigitzFluidCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let mouse = { x: width * 0.4, y: height * 0.3 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x += (e.clientX - rect.left - mouse.x) * 0.05;
      mouse.y += (e.clientY - rect.top - mouse.y) * 0.05;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    function render() {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Deep dark ink background
      ctx.fillStyle = '#080D1A';
      ctx.fillRect(0, 0, width, height);

      // Radial fluid glow orbs following mouse and waving
      const orbX = mouse.x + Math.sin(time * 0.7) * 40;
      const orbY = mouse.y + Math.cos(time * 0.5) * 30;

      const grad1 = ctx.createRadialGradient(orbX, orbY, 10, orbX, orbY, 520);
      grad1.addColorStop(0, 'rgba(91, 194, 216, 0.22)');
      grad1.addColorStop(0.5, 'rgba(10, 25, 45, 0.15)');
      grad1.addColorStop(1, 'rgba(8, 13, 26, 0)');

      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Second ambient fluid glow at bottom right
      const grad2 = ctx.createRadialGradient(width * 0.85, height * 0.7, 50, width * 0.85, height * 0.7, 600);
      grad2.addColorStop(0, 'rgba(60, 140, 180, 0.12)');
      grad2.addColorStop(1, 'rgba(8, 13, 26, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Subtle Grid Mesh Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
      ctx.lineWidth = 1;
      const step = 80;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    }

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
}
