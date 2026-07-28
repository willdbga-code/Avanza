import React, { useEffect, useState } from 'react';
import { Compass, Sparkles, Layers, Camera, Smartphone, ShoppingCart, ArrowUpRight } from 'lucide-react';

const pavilionsData = [
  {
    id: 'pavilhao-branding',
    number: '01',
    tag: 'BRANDBOOK & GUIA DE MARCA',
    title: 'Arquitetura de Marca & Universo 3D',
    desc: 'Construção do guia de marca completo para montadoras e distribuidores de e-bikes e e-motos. Tipografia, paleta cromática de alta energia, logotipo 3D e posicionamento de luxo sustentável.',
    icon: Layers
  },
  {
    id: 'pavilhao-audiovisual',
    number: '02',
    tag: 'FOTOGRAFIA & VÍDEO CINEMATOGRÁFICO',
    title: 'Produção Audiovisual de Alta Velocidade',
    desc: 'Ensaios fotográficos de produto com iluminação chiaroscuro e filmes comerciais em movimento. Valorizamos cada curva, motor elétrico e detalhe de engenharia dos seus veículos.',
    icon: Camera
  },
  {
    id: 'pavilhao-instagram',
    number: '03',
    tag: 'INSTAGRAM & REELS STRATEGY',
    title: 'Conteúdo de Vanguarda para Feed & Stories',
    desc: 'Transformamos o Instagram da sua marca em uma referência do setor elétrico. Artes autorais para feed, carrosséis educativos de autonomia e baterias, e templates interativos para stories.',
    icon: Smartphone
  },
  {
    id: 'pavilhao-ecommerce',
    number: '04',
    tag: 'LANDING PAGES & E-COMMERCE',
    title: 'Plataformas Web & Conversão de Test-Drive',
    desc: 'Landing pages paramétricas para lançamentos e e-commerces completos de motos e bicicletas elétricas com visualização 3D, agendamento de test-drive e checkout fluido.',
    icon: ShoppingCart
  }
];

export default function NiemeyerPavilions({ onOpenContact }) {
  const [visibleIndices, setVisibleIndices] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.niemeyer-pavilhou-card');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          setVisibleIndices((prev) => (prev.includes(index) ? prev : [...prev, index]));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="pavilhoes" style={{ padding: '130px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 80px auto' }}>
          <div className="glass-pill" style={{ marginBottom: '18px' }}>
            <Sparkles size={14} />
            <span>PAVILHÕES ESCULTÓRICOS AVANZA E-MOBILITY</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-kanit)',
              fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              marginBottom: '22px'
            }}
          >
            Pavilhões de Aceleração para <span className="text-gradient-cyan">Mobilidade Elétrica</span>
          </h2>
          <p style={{ fontSize: '1.18rem', color: 'rgba(255, 255, 255, 0.78)', fontWeight: 300 }}>
            Conheça as quatro estruturas fundamentais projetadas para garantir dominância visual, desejo de marca e vendas recorrentes de e-bikes e e-motos.
          </p>
        </div>

        {/* Pavilions Cards Grid - Ultra Clean & Balanced */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {pavilionsData.map((pav, idx) => {
            const Icon = pav.icon;
            const isVisible = visibleIndices.includes(idx);

            return (
              <div
                key={pav.id}
                className="niemeyer-pavilhou-card niemeyer-card"
                style={{
                  padding: '40px 36px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.96)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.1}s`,
                  background: 'rgba(6, 17, 29, 0.75)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '16px',
                        background: 'rgba(0, 240, 255, 0.12)',
                        border: '1px solid var(--cyan-plasma)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--cyan-plasma)'
                      }}
                    >
                      <Icon size={28} />
                    </div>
                    <span style={{ fontSize: '1.1rem', fontFamily: 'var(--font-kanit)', fontWeight: 800, color: 'var(--cyan-plasma)' }}>
                      / {pav.number}
                    </span>
                  </div>

                  <span className="glass-pill" style={{ fontSize: '0.75rem', marginBottom: '14px' }}>
                    {pav.tag}
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-kanit)',
                      fontSize: '1.6rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginTop: '8px',
                      marginBottom: '14px'
                    }}
                  >
                    {pav.title}
                  </h3>

                  <p style={{ color: 'rgba(255, 255, 255, 0.76)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '32px' }}>
                    {pav.desc}
                  </p>
                </div>

                <button onClick={onOpenContact} className="btn-glass-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.94rem', padding: '12px 24px' }}>
                  <span>Explorar Pavilhão</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
