import React, { useState } from 'react';
import { Rocket, Gauge, Sparkles, Zap, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RocketSimulator({ onOpenContact, onTriggerRocket }) {
  const [rocketThrust, setRocketThrust] = useState(6);
  const [glassRefraction, setGlassRefraction] = useState(75);

  const reach = Math.round(rocketThrust * glassRefraction * 2100);
  const roiMultiplier = (1.2 + (rocketThrust * 0.7) * (glassRefraction / 100)).toFixed(1);
  const escapeVelocity = Math.min(99.9, (rocketThrust * 8.5 + glassRefraction * 0.25)).toFixed(1);

  const triggerConfetti = () => {
    confetti({
      particleCount: 110,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#00F0FF', '#008DCD', '#69C9F2', '#FFFFFF']
    });
  };

  return (
    <section id="simulador" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 70px auto' }}>
          <div className="glass-pill" style={{ marginBottom: '16px' }}>
            <Gauge size={14} />
            <span>SIMULADOR DE PROPULSÃO FOGUETE 3D</span>
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
            Calcule o Empuxo da sua <span className="text-gradient-cyan">Marca no Mercado</span>
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.78)', fontWeight: 300 }}>
            Ajuste a força de propulsão dos motores 3D e o refinamento do branding para calcular a velocidade de escape da gravidade dos concorrentes.
          </p>
        </div>

        {/* Interactive Calculator Panel */}
        <div className="niemeyer-card" style={{ padding: '48px 40px', borderRadius: '40px 12px 40px 12px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            {/* Sliders */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <label style={{ fontFamily: 'var(--font-kanit)', fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 600 }}>
                    Empuxo dos Motores Foguete 3D
                  </label>
                  <span style={{ fontFamily: 'var(--font-kanit)', color: 'var(--cyan-plasma)', fontWeight: 700, fontSize: '1.2rem' }}>
                    {rocketThrust}x
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={rocketThrust}
                  onChange={(e) => setRocketThrust(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    accentColor: 'var(--cyan-plasma)',
                    cursor: 'pointer'
                  }}
                />
                <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.55)', marginTop: '6px' }}>
                  Regula a escala de veiculação em mídia e a velocidade de alcance da marca.
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <label style={{ fontFamily: 'var(--font-kanit)', fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 600 }}>
                    Refinamento de Vidro & Branding Volumétrico
                  </label>
                  <span style={{ fontFamily: 'var(--font-kanit)', color: 'var(--cyan-plasma)', fontWeight: 700, fontSize: '1.2rem' }}>
                    {glassRefraction}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={glassRefraction}
                  onChange={(e) => setGlassRefraction(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    accentColor: 'var(--ocean-vector)',
                    cursor: 'pointer'
                  }}
                />
                <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.55)', marginTop: '6px' }}>
                  Ajusta o apelo estético, requinte e sofisticação percebida pelos clientes.
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    onTriggerRocket();
                    triggerConfetti();
                  }}
                  className="btn-avanza"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <Rocket size={18} />
                  <span>Testar Decolagem 3D</span>
                </button>
              </div>
            </div>

            {/* Live Telemetry Display */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div
                style={{
                  padding: '26px',
                  borderRadius: '24px 10px 24px 10px',
                  background: 'rgba(3, 8, 15, 0.88)',
                  textAlign: 'center',
                  borderTop: '4px solid var(--cyan-plasma)',
                  border: '1px solid rgba(0, 240, 255, 0.2)'
                }}
              >
                <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.65)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Projeção de Trajetória
                </div>
                <div style={{ fontFamily: 'var(--font-kanit)', fontSize: '2.4rem', fontWeight: 800, color: '#FFFFFF' }}>
                  {(reach / 1000).toFixed(1)}k
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--cyan-plasma)', marginTop: '4px' }}>
                  Alcance qualificado / mês
                </div>
              </div>

              <div
                style={{
                  padding: '26px',
                  borderRadius: '10px 24px 10px 24px',
                  background: 'rgba(3, 8, 15, 0.88)',
                  textAlign: 'center',
                  borderTop: '4px solid var(--ocean-vector)',
                  border: '1px solid rgba(0, 240, 255, 0.2)'
                }}
              >
                <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.65)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Multiplicador de ROI
                </div>
                <div style={{ fontFamily: 'var(--font-kanit)', fontSize: '2.4rem', fontWeight: 800, color: 'var(--cyan-plasma)' }}>
                  {roiMultiplier}x
                </div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.65)', marginTop: '4px' }}>
                  Retorno sob investimento
                </div>
              </div>

              <div
                style={{
                  gridColumn: '1 / -1',
                  padding: '24px',
                  borderRadius: '20px',
                  background: 'rgba(0, 240, 255, 0.12)',
                  border: '1px solid var(--cyan-plasma)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase' }}>
                    Velocidade de Escape da Gravidade
                  </div>
                  <div style={{ fontFamily: 'var(--font-kanit)', fontSize: '1.9rem', fontWeight: 800, color: '#FFFFFF' }}>
                    {escapeVelocity}% MACH
                  </div>
                </div>
                <Sparkles size={36} style={{ color: 'var(--cyan-plasma)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
