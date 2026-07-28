import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VectorSimulator({ onOpenContact }) {
  const [vectorThrust, setVectorThrust] = useState(7);
  const [glassRefraction, setGlassRefraction] = useState(80);

  const reach = Math.round(vectorThrust * glassRefraction * 2100);
  const roiMultiplier = (1.2 + (vectorThrust * 0.7) * (glassRefraction / 100)).toFixed(1);
  const prestigeScore = Math.min(99, Math.round(vectorThrust * 6.5 + glassRefraction * 0.45));

  const triggerConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#5BC2D8', '#7DE1F5', '#FFFFFF']
    });
  };

  return (
    <section id="simulador" style={{ background: 'var(--c-ink)', padding: '90px 0', borderTop: '1px solid var(--c-line)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '32px', borderBottom: '1px solid var(--c-line)', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-cyan)', border: '1px solid var(--c-cyan)', padding: '2px 8px' }}>
              05
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-cyan)', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
              Simulador E-Mobility
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', fontWeight: 300, lineHeight: 1.05, color: 'var(--c-off)' }}>
            Simule o alcance e o ROI da sua <em style={{ fontStyle: 'italic', color: 'var(--c-cyan)' }}>marca de veículos elétricos.</em>
          </h2>
        </div>

        {/* Calculator Panel */}
        <div className="sol-card-digitz" style={{ padding: '40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            {/* Sliders */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <label style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.1rem', color: 'var(--c-off)', fontWeight: 300 }}>
                    Intensidade de Mídia Pago (Google & Meta Ads)
                  </label>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--c-cyan)', fontWeight: 700, fontSize: '1.1rem' }}>
                    {vectorThrust}x
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={vectorThrust}
                  onChange={(e) => setVectorThrust(Number(e.target.value))}
                  style={{ width: '100%', height: '6px', borderRadius: '4px', accentColor: 'var(--c-cyan)', cursor: 'pointer' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <label style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.1rem', color: 'var(--c-off)', fontWeight: 300 }}>
                    Sofisticação (Brandbook, Photo, Video & E-commerce)
                  </label>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--c-cyan)', fontWeight: 700, fontSize: '1.1rem' }}>
                    {glassRefraction}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={glassRefraction}
                  onChange={(e) => setGlassRefraction(Number(e.target.value))}
                  style={{ width: '100%', height: '6px', borderRadius: '4px', accentColor: 'var(--c-cyan)', cursor: 'pointer' }}
                />
              </div>

              <button
                onClick={() => {
                  triggerConfetti();
                  onOpenContact();
                }}
                className="btn-digitz-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Aplicar Ecossistema à Minha Marca</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'rgba(6, 11, 20, 0.9)', padding: '24px', borderRadius: '12px', border: '1px solid var(--c-line)', textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-mute)', textTransform: 'uppercase', letterSpacing: '0.18em', display: 'block', marginBottom: '8px' }}>
                  Projeção de Reach
                </span>
                <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '2.4rem', color: 'var(--c-off)', fontWeight: 300, display: 'block' }}>
                  {(reach / 1000).toFixed(1)}k
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-cyan)' }}>
                  Impactos / mês
                </span>
              </div>

              <div style={{ background: 'rgba(6, 11, 20, 0.9)', padding: '24px', borderRadius: '12px', border: '1px solid var(--c-line)', textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-mute)', textTransform: 'uppercase', letterSpacing: '0.18em', display: 'block', marginBottom: '8px' }}>
                  Estimativa ROAS / ROI
                </span>
                <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '2.4rem', color: 'var(--c-cyan)', fontWeight: 300, display: 'block' }}>
                  {roiMultiplier}x
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-off-soft)' }}>
                  Retorno sob investimento
                </span>
              </div>

              <div style={{ gridColumn: '1 / -1', background: 'rgba(91, 194, 216, 0.1)', padding: '20px', borderRadius: '12px', border: '1px solid var(--c-line-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-cyan)', textTransform: 'uppercase', letterSpacing: '0.18em', display: 'block', marginBottom: '4px' }}>
                    Dominância no Mercado Elétrico
                  </span>
                  <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.6rem', color: 'var(--c-off)', fontWeight: 300 }}>
                    {prestigeScore} / 100 PTS
                  </span>
                </div>
                <Sparkles size={28} style={{ color: 'var(--c-cyan)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
