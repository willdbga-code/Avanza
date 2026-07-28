import React, { useState } from 'react';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';

const zahaTabsData = [
  {
    id: 'audiovisual-3d',
    num: '01',
    label: 'Fotografia & 3D Engine',
    title: 'Produção Audiovisual & Renders 3D para E-Mobility',
    codeSnippet: `// Avanza E-Mobility 3D Render Pipeline
const bikeModel = await loadGLTF("ev_motorcycle_spec.glb");
bikeModel.material.setRefraction(0.92);
bikeModel.setLighting("chiaroscuro_studio_v4");
renderEngine.export4K({ resolution: "3840x2160" });`,
    items: [
      'Captação fotográfica autoral com iluminação chiaroscuro em estúdio e pista urbana',
      'Vídeos promocionais em 4K/6K destacando motor elétrico, bateria e suspensão',
      'Renders 3D hiper-realistas para configuradores visuais e lançamentos'
    ]
  },
  {
    id: 'web-ecommerce',
    num: '02',
    label: 'Landing Pages & E-Commerce',
    title: 'Plataforma Web Paramétrica de Alta Conversão',
    codeSnippet: `// Avanza High-Conversion Platform Architecture
<EMobilityStorefront
  interactive3D={true}
  testDriveScheduler={enabled}
  checkoutSystem="instant_pix_credit"
  conversionRate="7.8%"
/>`,
    items: [
      'Landing pages de lançamento focadas em captação massiva de test-drives',
      'E-commerce completo com vitrine 3D, catálogo de peças e acessórios',
      'Interface em vidro temperado fosco com carregamento ultra-rápido'
    ]
  },
  {
    id: 'instagram-ads',
    num: '03',
    label: 'Instagram & Mídia Ads',
    title: 'Engajamento no Instagram & Funis de Anúncios no Meta/Google',
    codeSnippet: `// Avanza Paid Media & Social Engine
const campaign = new AdCampaign({
  targetAudience: "EV_Enthusiasts_Urban_Mobility",
  platforms: ["Google_Search", "Meta_Instagram_Reels"],
  funnelGoal: "Leads_TestDrive_DirectSales"
});`,
    items: [
      'Artes exclusivas para feed e templates dinâmicos para stories no Instagram',
      'Campanhas no Google Ads capturando buscas de intenção direta de compra',
      'Anúncios estratégicos no Meta Ads qualificados para concessionárias e venda direta'
    ]
  }
];

export default function ZahaMatrix({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('audiovisual-3d');
  const currentTab = zahaTabsData.find((t) => t.id === activeTab) || zahaTabsData[0];

  return (
    <section id="zaha-matrix" style={{ background: 'var(--c-ink)', padding: '90px 0', borderTop: '1px solid var(--c-line)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '32px', borderBottom: '1px solid var(--c-line)', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-cyan)', border: '1px solid var(--c-cyan)', padding: '2px 8px' }}>
              04
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-cyan)', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
              Engenharia & Tech Matrix
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', fontWeight: 300, lineHeight: 1.05, color: 'var(--c-off)' }}>
            Infraestrutura digital <em style={{ fontStyle: 'italic', color: 'var(--c-cyan)' }}>de alta precisão.</em>
          </h2>
        </div>

        {/* Tab Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
          {zahaTabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                padding: '12px 20px',
                borderRadius: '8px',
                border: activeTab === tab.id ? '1px solid var(--c-cyan)' : '1px solid var(--c-line)',
                background: activeTab === tab.id ? 'rgba(91, 194, 216, 0.12)' : 'transparent',
                color: activeTab === tab.id ? 'var(--c-cyan)' : 'var(--c-off-soft)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>{tab.num}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Display Content Box */}
        <div className="sol-card-digitz" style={{ padding: '40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.8rem', fontWeight: 300, color: 'var(--c-off)', marginBottom: '20px' }}>
                {currentTab.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {currentTab.items.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: 'var(--c-off-soft)' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--c-cyan)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button onClick={onOpenContact} className="btn-digitz-primary">
                <span>Solicitar Proposta Tech</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Code Box */}
            <div style={{ background: 'rgba(6, 11, 20, 0.9)', padding: '24px', borderRadius: '12px', border: '1px solid var(--c-line)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
              <div style={{ display: 'flex', itemsCenter: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--c-line)', paddingBottom: '10px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F' }} />
                </div>
                <span style={{ color: 'var(--c-cyan)', fontSize: '10px' }}>avanza-spec-engine.ts</span>
              </div>

              <pre style={{ color: 'var(--c-cyan-light)', lineHeight: 1.6, overflowX: 'auto' }}>
                <code>{currentTab.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
