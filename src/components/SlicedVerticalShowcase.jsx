import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const verticalsData = [
  {
    num: '01',
    name: 'Motos Elétricas',
    meta: 'montadoras, alta velocidade, e-motos urbanas',
    tag: 'E-MOTORS / RACING',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1600&auto=format&fit=crop'
  },
  {
    num: '02',
    name: 'Bicicletas Elétricas',
    meta: 'D2C, e-mountain, mobilidade sustentável',
    tag: 'E-BIKES / URBAN',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=1600&auto=format&fit=crop'
  },
  {
    num: '03',
    name: 'Mídia & Tráfego Ads',
    meta: 'Google Ads, Meta Ads, aquisição qualificada',
    tag: 'PERFORMANCE / ADS',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop'
  },
  {
    num: '04',
    name: 'E-commerce & Test-Drive',
    meta: 'configurador 3D, agendamento, checkout instantâneo',
    tag: 'STOREFRONT / 3D',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop'
  }
];

export default function SlicedVerticalShowcase({ onOpenContact }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="verticales" className="section-showcase">
      <div className="container">
        {/* Section Header */}
        <div className="showcase-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-cyan)', border: '1px solid var(--c-cyan)', padding: '2px 8px' }}>
                02
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-cyan)', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                Sectores & Verticais E-Mobility
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', fontWeight: 300, lineHeight: 1.05, color: 'var(--c-off)' }}>
              Quatro verticais, <em style={{ fontStyle: 'italic', color: 'var(--c-cyan)' }}>um ecossistema soberano.</em>
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', borderLeft: '1px solid var(--c-line)', paddingLeft: '24px' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.8rem', color: 'var(--c-off)', display: 'block' }}>04</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-mute)', textTransform: 'uppercase', letterSpacing: '0.18em' }}>Verticais</span>
            </div>
            <div style={{ borderLeft: '1px solid var(--c-line)', paddingLeft: '24px' }}>
              <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.8rem', color: 'var(--c-cyan)', display: 'block' }}>100%</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-mute)', textTransform: 'uppercase', letterSpacing: '0.18em' }}>E-Mobility</span>
            </div>
          </div>
        </div>

        {/* Sliced Vertical Row */}
        <div className="showcase-slices-row">
          {verticalsData.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={item.num}
                className={`slice-item ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={onOpenContact}
              >
                <div
                  className="slice-bg"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="slice-overlay" />

                <div className="slice-content">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-cyan)', border: '1px solid var(--c-line-cyan)', padding: '2px 8px', borderRadius: '4px' }}>
                      {item.num}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-cyan)', letterSpacing: '0.18em' }}>
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.6rem', fontWeight: 300, color: 'var(--c-off)', marginBottom: '8px' }}>
                      {item.name}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.85rem', color: 'var(--c-off-soft)', marginBottom: '16px' }}>
                      {item.meta}
                    </p>

                    {isActive && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--c-cyan)', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em' }}>
                        <span>EXPLORAR A VERTICAL</span>
                        <ArrowUpRight size={14} />
                      </div>
                    )}
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
