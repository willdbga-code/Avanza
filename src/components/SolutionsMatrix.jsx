import React from 'react';
import { Sparkles, Camera, Smartphone, Globe, ShoppingCart, TrendingUp, ArrowUpRight, CheckCircle } from 'lucide-react';

const solutionsData = [
  {
    num: '01',
    icon: Sparkles,
    title: 'Brandbook & Guia de Marca',
    tag: 'ARQUITETURA DE MARCA',
    desc: 'Construção da voz, diretrizes visuais e universo 3D para posicionar sua fabricante ou concessionária de e-bikes e e-motos no topo do segmento.',
    features: ['Manual de Marca 3D Interativo', 'Tipografia & Geometria Fluida Avanza', 'Diretrizes de Aplicação nos Veículos', 'Posicionamento Premium & Eco-Luxury']
  },
  {
    num: '02',
    icon: Camera,
    title: 'Produção de Fotografia & Vídeo',
    tag: 'FOTOGRAFIA & CINEMA',
    desc: 'Ensaios fotográficos de produto com iluminação chiaroscuro e vídeos comerciais cinematográficos gravados em estúdio ou ação urbana.',
    features: ['Fotografia Editorial de E-Bikes e Motos', 'Vídeos Promocionais para Lançamentos', 'Takes em 4K/6K de Motor & Bateria', 'Clipes Dinâmicos em Alta Velocidade']
  },
  {
    num: '03',
    icon: Smartphone,
    title: 'Conteúdo para Instagram (Feed & Stories)',
    tag: 'SOCIAL MEDIA STRATEGY',
    desc: 'Linha editorial diária e artes de vanguarda para feed e stories. Convertemos seguidores em compradores de mobilidade elétrica.',
    features: ['Design Paramétrico para Artes de Feed', 'Templates Exclusivos para Stories Diários', 'Carrosséis Técnicos de Autonomia & Baterias', 'Roteiros de Reels com Foco em Vendas']
  },
  {
    num: '04',
    icon: Globe,
    title: 'Landing Pages de Vendas & Test-Drive',
    tag: 'CONVERSÃO EXTREMA',
    desc: 'Páginas ultrarrápidas e envolventes projetadas para pré-venda de novos modelos, agendamento de test-drive e qualificação de leads.',
    features: ['UX Glassmórfica de Alta Fluidez', 'Sistema Integrado de Agendamento', 'Copywriting Especialista em E-Mobility', 'Taxas de Conversão Acima da Média']
  },
  {
    num: '05',
    icon: ShoppingCart,
    title: 'Site Completo E-commerce de Veículos',
    tag: 'LOJA VIRTUAL 3D',
    desc: 'Plataforma completa de vendas online para motos, bicicletas elétricas, peças e acessórios. Experiência de compra intuitiva e configurador visual.',
    features: ['Catálogo Inteligente com Filtros Técnicos', 'Configurador Visual de Cores & Modelos', 'Checkout Otimizado com Múltiplos Pagamentos', 'SEO Avançado para Buscas de Mobilidade']
  },
  {
    num: '06',
    icon: TrendingUp,
    title: 'Tráfego Pago em Google & Meta Ads',
    tag: 'AQUISIÇÃO DE CLIENTES',
    desc: 'Gestão estratégica de anúncios para atrair compradores altamente qualificados, escalar vendas diretas e gerar leads para concessionárias.',
    features: ['Campanhas no Google Ads para Busca Direta', 'Anúncios no Instagram & Facebook Meta Ads', 'Segmentação de Alto Poder de Aquisição', 'Gestão Contínua de CAC, ROAS & Métricas']
  }
];

export default function SolutionsMatrix({ onOpenContact }) {
  return (
    <section id="solucoes" style={{ background: 'var(--c-ink)', padding: '90px 0', borderTop: '1px solid var(--c-line)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '32px', borderBottom: '1px solid var(--c-line)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-cyan)', border: '1px solid var(--c-cyan)', padding: '2px 8px' }}>
              03
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-cyan)', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
              Expertises E-Mobility
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2.2rem, 3.8vw, 3.5rem)', fontWeight: 300, lineHeight: 1.05, color: 'var(--c-off)' }}>
            O ecossistema completo de uma agência e-mobility. <em style={{ fontStyle: 'italic', color: 'var(--c-cyan)' }}>Tecnologia, IA e design em harmonia.</em>
          </h2>
        </div>

        {/* Solutions Grid Digitz Style */}
        <div className="solutions-grid-3col">
          {solutionsData.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.num} className="sol-card-digitz">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(91, 194, 216, 0.12)', border: '1px solid var(--c-line-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-cyan)' }}>
                      <Icon size={20} />
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--c-cyan)', letterSpacing: '0.12em' }}>
                      / {item.num}
                    </span>
                  </div>

                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-cyan)', letterSpacing: '0.18em', display: 'block', marginBottom: '8px' }}>
                    {item.tag}
                  </span>

                  <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.45rem', fontWeight: 300, color: 'var(--c-off)', marginBottom: '12px' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.88rem', color: 'var(--c-off-soft)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {item.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                    {item.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--c-off-soft)' }}>
                        <CheckCircle size={14} style={{ color: 'var(--c-cyan)', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenContact}
                  className="btn-digitz-ghost"
                  style={{ width: '100%', justifyContent: 'space-between', fontSize: '12px', padding: '10px 18px' }}
                >
                  <span>Solicitar Briefing</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
