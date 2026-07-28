import React, { useState } from 'react';
import { Sliders, Gauge, Sparkles, TrendingUp, Rocket, ShieldAlert } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function GrowthSimulator({ onOpenContact }) {
  const [brandInvestment, setBrandInvestment] = useState(65);
  const [accelerationVector, setAccelerationVector] = useState(4);

  // Realtime calculations
  const reach = Math.round(brandInvestment * accelerationVector * 1850);
  const roiMultiplier = (1 + (brandInvestment / 100) * (accelerationVector * 0.85)).toFixed(1);
  const brandPrestige = Math.min(99, Math.round(brandInvestment * 0.7 + accelerationVector * 4.5));

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#008DCD', '#69C9F2', '#005A7A', '#FFFFFF']
    });
  };

  return (
    <section id="simulador" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 70px auto' }}>
          <div className="glass-pill" style={{ marginBottom: '16px' }}>
            <Gauge size={14} />
            <span>SIMULADOR INTERATIVO AVANZA VECTOR</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-kanit)',
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '20px'
            }}
          >
            Calcule o Seu <span className="text-gradient-cyan">Vetor de Aceleração</span>
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.75)', fontWeight: 300 }}>
            Ajuste os parâmetros de presença visual e força de tração para simular o impacto do ecossistema Avanza na sua marca.
          </p>
        </div>

        {/* Interactive Panel Container */}
        <div className="glass-panel" style={{ padding: '44px 36px', borderRadius: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '44px', alignItems: 'center' }}>
            {/* Slider Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <label style={{ fontFamily: 'var(--font-kanit)', fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 600 }}>
                    Nível de Identidade Surrealista & Branding
                  </label>
                  <span style={{ fontFamily: 'var(--font-kanit)', color: 'var(--poolside-blue)', fontWeight: 700, fontSize: '1.1rem' }}>
                    {brandInvestment}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={brandInvestment}
                  onChange={(e) => setBrandInvestment(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    accentColor: 'var(--ocean-blue)',
                    cursor: 'pointer'
                  }}
                />
                <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.55)', marginTop: '6px' }}>
                  Determina a sofisticação visual, peças 3D e refração conceitual da campanha.
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <label style={{ fontFamily: 'var(--font-kanit)', fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 600 }}>
                    Intensidade de Aceleração Mídia (Vector Multiplier)
                  </label>
                  <span style={{ fontFamily: 'var(--font-kanit)', color: 'var(--poolside-blue)', fontWeight: 700, fontSize: '1.1rem' }}>
                    {accelerationVector}x
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={accelerationVector}
                  onChange={(e) => setAccelerationVector(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    accentColor: 'var(--poolside-blue)',
                    cursor: 'pointer'
                  }}
                />
                <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.55)', marginTop: '6px' }}>
                  Ajusta o alcance algorítmico, campanhas omnichannel e aquisição contínua.
                </div>
              </div>

              <button
                onClick={() => {
                  triggerConfetti();
                  onOpenContact();
                }}
                className="btn-avanza"
                style={{ marginTop: '10px', width: '100%', justifyContent: 'center' }}
              >
                <Rocket size={18} />
                <span>Aplicar esta Aceleração à Minha Empresa</span>
              </button>
            </div>

            {/* Live Metrics Display HUD */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div className="glass-card" style={{ padding: '24px', textAlign: 'center', borderTop: '3px solid var(--poolside-blue)' }}>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.65)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Projeção de Alcance
                </div>
                <div style={{ fontFamily: 'var(--font-kanit)', fontSize: '2.3rem', fontWeight: 800, color: '#FFFFFF' }}>
                  {(reach / 1000).toFixed(1)}k
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--poolside-blue)', marginTop: '4px' }}>
                  Pessoas impactadas / mês
                </div>
              </div>

              <div className="glass-card" style={{ padding: '24px', textAlign: 'center', borderTop: '3px solid var(--ocean-blue)' }}>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.65)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Multiplicador de ROI
                </div>
                <div style={{ fontFamily: 'var(--font-kanit)', fontSize: '2.3rem', fontWeight: 800, color: 'var(--poolside-blue)' }}>
                  {roiMultiplier}x
                </div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.65)', marginTop: '4px' }}>
                  Retorno estimado s/ investimento
                </div>
              </div>

              <div
                className="glass-card"
                style={{
                  gridColumn: '1 / -1',
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(0, 141, 205, 0.12)'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.65)', textTransform: 'uppercase' }}>
                    Índice de Prestígio Avanza
                  </div>
                  <div style={{ fontFamily: 'var(--font-kanit)', fontSize: '1.8rem', fontWeight: 700, color: '#FFFFFF' }}>
                    {brandPrestige} / 100 PTS
                  </div>
                </div>
                <Sparkles size={36} style={{ color: 'var(--poolside-blue)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
