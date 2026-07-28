import React, { useState } from 'react';
import { Cpu, Terminal, Shield, Activity, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';

const tabsData = [
  {
    id: 'analytics',
    label: 'Analytics & Tração',
    title: 'Monitoramento de Performance e Tração de Mídia',
    codeSnippet: `// Avanza Realtime Telemetry Engine
const telemetry = new AvanzaVectorTracker({
  refreshRate: '60fps',
  precision: 'ultra-high',
  aiOptimization: true
});
telemetry.scaleCampaign({ boost: '400%' });`,
    items: [
      'Relatórios transparentes com atualização em tempo real',
      'Atribuição precisa de funil de conversão',
      'Painéis integrados com métricas estratégicas'
    ]
  },
  {
    id: 'blender-3d',
    label: 'Render 3D Blender',
    title: 'Pipeline de Assets 3D Volumétricos e Animações',
    codeSnippet: `// Blender 4.2 GLTF/GLB Production Pipeline
bpy.ops.export_scene.gltf(
  filepath="avanza_vector_scene.glb",
  export_materials="EXPORT",
  use_draco_compression=true
);`,
    items: [
      'Modelagem tridimensional de marca feita no Blender',
      'Exportação GLB comprimida de alta performance',
      'Refração de vidro e iluminação ciano em Three.js WebGL'
    ]
  },
  {
    id: 'glass-ux',
    label: 'Arquitetura Glass UI',
    title: 'Interface Modular Glassmorphism de Alta Velocidade',
    codeSnippet: `.glass-panel {
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(0, 240, 255, 0.2);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}`,
    items: [
      'Visual moderno inspirado na tecnologia SharpLink',
      'Micro-animações de elevação de vidro',
      'Carregamento instantâneo e layout 100% responsivo'
    ]
  }
];

export default function TechMatrixSection({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('analytics');

  const currentTab = tabsData.find((t) => t.id === activeTab) || tabsData[0];

  return (
    <section id="tech-matrix" style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          <div className="glass-pill" style={{ marginBottom: '16px' }}>
            <Terminal size={14} />
            <span>ECOSSISTEMA TECNOLÓGICO</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-kanit)',
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '18px'
            }}
          >
            Matriz de Tecnologia & <span className="text-gradient-cyan">Inovação Avanza</span>
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.75)', fontWeight: 300 }}>
            Conheça o motor técnico por trás das nossas soluções de marketing, propaganda e modelagem 3D.
          </p>
        </div>

        {/* Tab Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '40px'
          }}
        >
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="glass-pill"
              style={{
                padding: '12px 24px',
                fontSize: '0.92rem',
                cursor: 'pointer',
                background: activeTab === tab.id ? 'rgba(0, 240, 255, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                borderColor: activeTab === tab.id ? 'var(--neon-cyan)' : 'var(--glass-border)',
                color: activeTab === tab.id ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                transition: 'all 0.3s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Box */}
        <div className="glass-panel" style={{ padding: '44px', borderRadius: '28px', position: 'relative' }}>
          <div className="tech-pin tech-pin-tl" />
          <div className="tech-pin tech-pin-tr" />
          <div className="tech-pin tech-pin-bl" />
          <div className="tech-pin tech-pin-br" />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-kanit)',
                  fontSize: '1.9rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '16px'
                }}
              >
                {currentTab.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {currentTab.items.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255, 255, 255, 0.85)' }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--neon-cyan)', flexShrink: 0 }} />
                    <span style={{ fontSize: '1rem' }}>{item}</span>
                  </div>
                ))}
              </div>

              <button onClick={onOpenContact} className="btn-avanza">
                <span>Solicitar Demonstração</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Code / Telemetry Visualizer */}
            <div
              className="glass-card"
              style={{
                padding: '24px',
                borderRadius: '16px',
                background: 'rgba(3, 10, 18, 0.9)',
                border: '1px solid rgba(0, 240, 255, 0.3)',
                fontFamily: 'monospace'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F56' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27C93F' }} />
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--neon-cyan)' }}>avanza-core.ts</span>
              </div>

              <pre style={{ fontSize: '0.85rem', color: 'var(--poolside-blue)', overflowX: 'auto', lineHeight: 1.6 }}>
                <code>{currentTab.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
