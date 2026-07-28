import React, { useEffect, useState } from 'react';
import { Layers, Cpu, ShieldCheck, Zap, ArrowUpRight, Activity, Database, Sparkles } from 'lucide-react';

const risingCardsData = [
  {
    id: 'tech-engine',
    tag: 'TECNOLOGIA DE IMPACTO',
    title: 'Engine de Tração & Algoritmos de Mídia',
    desc: 'Processamento de dados em tempo real para otimização contínua de campanhas digitais. Nosso sistema analisa padrões de engajamento e ajusta lances de mídia em milissegundos.',
    metrics: { label: 'Latência de Conversão', value: '< 0.4s' },
    status: 'ONLINE',
    icon: Cpu
  },
  {
    id: 'blender-pipeline',
    tag: 'MODELAGEM 3D BLENDER',
    title: 'Pipeline Volumétrico & Iluminação WebGL',
    desc: 'Assets 3D gerados no Blender 4.2 e renderizados via Three.js. Combinamos refração de vidro temperado, iluminação ciano e materiais físicos para destacar o vetor da marca.',
    metrics: { label: 'Fidelidade de Render', value: '100% Native' },
    status: 'OPTIMIZED',
    icon: Layers
  },
  {
    id: 'roi-engine',
    tag: 'PERFORMANCE ORIENTADA A DADOS',
    title: 'Otimização Dinâmica de ROI & Escala',
    desc: 'Painéis analíticos com simulação de investimento, previsão de alcance e minimização de custo de aquisição. Acompanhamento transparente de cada etapa do funil.',
    metrics: { label: 'Multiplicador de Escala', value: '4.8x' },
    status: 'ACTIVE',
    icon: Activity
  },
  {
    id: 'glass-ui',
    tag: 'DESIGN SYSTEM CONTEMPORÂNEO',
    title: 'Arquitetura Glassmorphism de Alta Performance',
    desc: 'Interface modular construída com cartões translúcidos de vidro fosco, contornos de iluminação neon e responsividade fluida em todas as telas.',
    metrics: { label: 'Taxa de Retenção UI', value: '98.6%' },
    status: 'LIVE',
    icon: ShieldCheck
  }
];

export default function RisingGlassSections({ onOpenContact }) {
  const [visibleIndices, setVisibleIndices] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.rising-section-card');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          setVisibleIndices((prev) => (prev.includes(index) ? prev : [...prev, index]));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="rising-glass" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 80px auto' }}>
          <div className="glass-pill" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} />
            <span>MÓDULOS DE VIDRO INTERATIVOS</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-kanit)',
              fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              marginBottom: '20px'
            }}
          >
            Seções de Vidro que <span className="text-gradient-cyan">Elevam a Experiência</span>
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.75)', fontWeight: 300 }}>
            Inspirado na arquitetura tech de alto desempenho: cartões glassmórficos com elevação scroll-driven, marcações de pinos e métricas ativas em tempo real.
          </p>
        </div>

        {/* Rising Cards Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {risingCardsData.map((card, idx) => {
            const Icon = card.icon;
            const isVisible = visibleIndices.includes(idx);

            return (
              <div
                key={card.id}
                className="rising-section-card glass-panel"
                style={{
                  position: 'relative',
                  padding: '40px',
                  borderRadius: '24px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.96)',
                  transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.1}s`,
                  background: 'rgba(9, 25, 43, 0.7)',
                  borderLeft: '4px solid var(--neon-cyan)'
                }}
              >
                {/* Tech Pin Corners */}
                <div className="tech-pin tech-pin-tl" />
                <div className="tech-pin tech-pin-tr" />
                <div className="tech-pin tech-pin-bl" />
                <div className="tech-pin tech-pin-br" />

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <span className="glass-pill" style={{ fontSize: '0.78rem' }}>
                        {card.tag}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--neon-cyan)', fontWeight: 600, letterSpacing: '0.1em' }}>
                        STATUS: {card.status}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-kanit)',
                        fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        marginBottom: '14px'
                      }}
                    >
                      {card.title}
                    </h3>

                    <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.02rem', lineHeight: 1.6, marginBottom: '24px' }}>
                      {card.desc}
                    </p>

                    <button onClick={onOpenContact} className="btn-glass-secondary" style={{ fontSize: '0.92rem', padding: '10px 24px' }}>
                      <span>Explorar Módulo</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>

                  {/* Right Glass Metric HUD */}
                  <div
                    className="glass-card"
                    style={{
                      padding: '30px',
                      borderRadius: '20px',
                      background: 'rgba(5, 14, 23, 0.8)',
                      textAlign: 'center',
                      border: '1px solid rgba(0, 240, 255, 0.25)'
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        background: 'rgba(0, 240, 255, 0.12)',
                        border: '1px solid var(--neon-cyan)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--neon-cyan)',
                        margin: '0 auto 16px auto'
                      }}
                    >
                      <Icon size={28} />
                    </div>

                    <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.65)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {card.metrics.label}
                    </div>

                    <div style={{ fontFamily: 'var(--font-kanit)', fontSize: '2.4rem', fontWeight: 800, color: 'var(--neon-cyan)', marginTop: '4px' }}>
                      {card.metrics.value}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
