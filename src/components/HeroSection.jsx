import React from 'react';
import DigitzFluidCanvas from './DigitzFluidCanvas';
import ParticleWordCanvas from './ParticleWordCanvas';
import { ArrowRight, Compass } from 'lucide-react';

export default function HeroSection({ onOpenContact }) {
  return (
    <section id="sec-hero" className="digitz-hero">
      {/* Background Fluid Gradient Smoke Canvas */}
      <DigitzFluidCanvas />

      {/* Hero Content Container */}
      <div className="digitz-hero-container">
        {/* Monospace Tag with Pindamonhangaba, SP */}
        <div className="digitz-tag">
          <span className="digitz-tag-dot" />
          <span>AGÊNCIA DIGITAL E-MOBILITY · PINDAMONHANGABA, SP · BRASIL</span>
        </div>

        {/* Hero Title */}
        <h1 className="digitz-title">
          <span>Aceleração di<span className="digitz-title-cyan">g</span>ital </span>
        </h1>

        {/* Line 2: Dynamic Particle Word Canvas for "elétrica." */}
        <div style={{ maxWidth: '780px', margin: '8px 0 0 0' }}>
          <ParticleWordCanvas text="elétrica." />
        </div>

        {/* Subtitle */}
        <p className="digitz-subtitle">
          O ecossistema completo para marcas de mobilidade elétrica. Aceleração de vendas, fotografia autoral, vídeo cinematográfico, e-commerce 3D e tráfego pago de alta precisão no Google & Meta Ads.
        </p>

        {/* Action Buttons */}
        <div className="digitz-hero-btns">
          <button onClick={onOpenContact} className="btn-digitz-primary">
            <span>Ver Nossas Soluções</span>
            <ArrowRight size={14} />
          </button>

          <a href="#solucoes" className="btn-digitz-ghost">
            <Compass size={16} style={{ color: 'var(--c-cyan)' }} />
            <span>Falar sobre um Projeto</span>
          </a>
        </div>
      </div>
    </section>
  );
}
