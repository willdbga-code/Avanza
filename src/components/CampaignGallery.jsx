import React, { useState } from 'react';
import { Camera, ExternalLink, X, Sparkles, Award } from 'lucide-react';

const campaigns = [
  {
    id: 1,
    title: 'NeuroLuxe Essence',
    category: 'REBRANDING & FOTOGRAFIA SURREALISTA',
    image: '/assets/campaign1.jpg',
    stats: '+420% Engajamento Estrutural',
    client: 'NeuroLuxe Global Paris',
    description: 'Desenvolvimento de marca e campanha editorial inspirada em George Mayer. Utilizamos luz chiaroscuro, projeções de vidro fosco e elementos 3D flutuantes que elevaram o valor percebido do produto em 350%.'
  },
  {
    id: 2,
    title: 'Avanza Cyber Vector',
    category: 'INSTITUCIONAL 3D & PROPAGANDA',
    image: '/assets/campaign2.jpg',
    stats: '1.2M Visualizações Orgânicas',
    client: 'Avanza Identity Labs',
    description: 'Campanha de manifesto 3D que explorou a seta da logo Avanza como uma escultura cromada flutuante. Transmitiu dinamismo, autoridade e momentum no setor corporativo internacional.'
  },
  {
    id: 3,
    title: 'Prisma High-Fashion',
    category: 'DIREÇÃO DE ARTE & LUXO DIGITAL',
    image: '/assets/campaign3.jpg',
    stats: '+290% Conversão em Vendas',
    client: 'Prisma Luxury Atelier',
    description: 'Fotografia com refração óptica de cristal e iluminação ciano em fundo preto profundo. A peça se tornou referência de design minimalista no setor de moda de alto padrão.'
  }
];

export default function CampaignGallery() {
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  return (
    <section id="campanhas" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 70px auto' }}>
          <div className="glass-pill" style={{ marginBottom: '16px' }}>
            <Camera size={14} />
            <span>GALERIA DE CAMPANHAS SURREALISTAS</span>
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
            Obras de Arte que <span className="text-gradient-cyan">Geram Resultados</span>
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.75)', fontWeight: 300 }}>
            Uma seleção de produções conceituais onde a estética de vanguarda encontra métricas expressivas de negócios.
          </p>
        </div>

        {/* Gallery Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px'
          }}
        >
          {campaigns.map((camp) => (
            <div
              key={camp.id}
              className="surreal-frame glass-panel"
              style={{
                cursor: 'pointer',
                borderRadius: '24px',
                padding: '12px',
                overflow: 'hidden'
              }}
              onClick={() => setSelectedCampaign(camp)}
            >
              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden' }}>
                <img
                  src={camp.image}
                  alt={camp.title}
                  style={{
                    width: '100%',
                    height: '360px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    zIndex: 2
                  }}
                >
                  <span className="glass-pill" style={{ fontSize: '0.75rem', background: 'rgba(3, 15, 26, 0.75)' }}>
                    <Award size={12} /> {camp.stats}
                  </span>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 30%, rgba(3, 15, 26, 0.95) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '28px'
                  }}
                >
                  <span style={{ fontSize: '0.75rem', color: 'var(--poolside-blue)', letterSpacing: '0.12em', fontWeight: 600 }}>
                    {camp.category}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-kanit)', fontSize: '1.6rem', color: '#FFFFFF', marginTop: '4px', marginBottom: '6px' }}>
                    {camp.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.88rem' }}>
                    <span>Ver detalhes do case</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Case Detail */}
        {selectedCampaign && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              background: 'rgba(3, 15, 26, 0.88)',
              backdropFilter: 'blur(24px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
            onClick={() => setSelectedCampaign(null)}
          >
            <div
              className="glass-panel"
              style={{
                maxWidth: '850px',
                width: '100%',
                padding: '36px',
                borderRadius: '28px',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCampaign(null)}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#FFFFFF',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center' }}>
                <img
                  src={selectedCampaign.image}
                  alt={selectedCampaign.title}
                  style={{ width: '100%', borderRadius: '20px', height: '360px', objectFit: 'cover' }}
                />
                <div>
                  <span className="glass-pill" style={{ marginBottom: '12px' }}>
                    {selectedCampaign.category}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-kanit)', fontSize: '2.2rem', color: '#FFFFFF', marginTop: '10px', marginBottom: '12px' }}>
                    {selectedCampaign.title}
                  </h3>
                  <div style={{ fontSize: '0.95rem', color: 'var(--poolside-blue)', fontWeight: 600, marginBottom: '18px' }}>
                    Cliente: {selectedCampaign.client}
                  </div>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                    {selectedCampaign.description}
                  </p>

                  <div className="glass-card" style={{ padding: '16px 20px', borderLeft: '4px solid var(--ocean-blue)' }}>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.65)', textTransform: 'uppercase' }}>
                      Resultado Alcançado
                    </div>
                    <div style={{ fontFamily: 'var(--font-kanit)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--poolside-blue)' }}>
                      {selectedCampaign.stats}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
