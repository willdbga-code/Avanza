import React from 'react';
import { Eye, Layers, Feather, Compass, CheckCircle2 } from 'lucide-react';

export default function ManifestoSection() {
  return (
    <section id="manifesto" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 70px auto' }}>
          <div className="glass-pill" style={{ marginBottom: '16px' }}>
            <Eye size={14} />
            <span>MANIFESTO DE VANGUARDA</span>
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
            A Arte de Sobrescrever o <span className="text-gradient-cyan">Óbvio</span>
          </h2>
          <p
            style={{
              fontSize: '1.15rem',
              color: 'rgba(255, 255, 255, 0.75)',
              fontWeight: 300
            }}
          >
            Inspirados pela precisão escultural da fotografia de George Mayer e pela geometria fluida do nosso Brand Book, transformamos marcas comuns em ícones inesquecíveis.
          </p>
        </div>

        {/* Main Grid Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          {/* Surreal Image Artwork */}
          <div className="surreal-frame glass-panel" style={{ padding: '12px', borderRadius: '24px' }}>
            <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden' }}>
              <img
                src="/assets/campaign1.jpg"
                alt="Arte Surrealista Avanza - George Mayer Inspired"
                style={{ width: '100%', height: 'auto', display: 'block', minHeight: '400px', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(3, 15, 26, 0.9) 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '30px'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--poolside-blue)', letterSpacing: '0.15em', fontWeight: 600 }}>
                    EXPOSIÇÃO DE CONCEITO Nº 01
                  </div>
                  <div style={{ fontFamily: 'var(--font-kanit)', fontSize: '1.4rem', color: '#FFFFFF', fontWeight: 600 }}>
                    Chiaroscuro & Fluidez Geométrica
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Brand Values & Philosophy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div className="glass-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(0, 141, 205, 0.15)',
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--poolside-blue)',
                    flexShrink: 0
                  }}
                >
                  <Layers size={24} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-kanit)', fontSize: '1.35rem', marginBottom: '8px', color: '#FFFFFF' }}>
                    Corporate Modernism & Precisão
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.98rem' }}>
                    Eliminamos o ruído desnecessário para destacar a essência singular da sua empresa com design minimalista de classe mundial.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(105, 201, 242, 0.15)',
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--poolside-blue)',
                    flexShrink: 0
                  }}
                >
                  <Compass size={24} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-kanit)', fontSize: '1.35rem', marginBottom: '8px', color: '#FFFFFF' }}>
                    Momento Profissional Continuo
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.98rem' }}>
                    Nossas estratégias agem como vetores aceleradores que mantêm sua marca em rota constante de expansão e domínio de mercado.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(0, 90, 122, 0.25)',
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--poolside-blue)',
                    flexShrink: 0
                  }}
                >
                  <Feather size={24} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-kanit)', fontSize: '1.35rem', marginBottom: '8px', color: '#FFFFFF' }}>
                    Acessibilidade Tecnológica
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.98rem' }}>
                    Inteligência artificial, analytics avançado e WebGL 3D traduzidos em experiências simples, belas e focadas no usuário.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
