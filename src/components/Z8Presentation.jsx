import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Sparkles, TrendingUp, Camera, Smartphone, Globe, Bot, CheckCircle2, Zap, BarChart2, ShieldCheck, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import DigitzFluidCanvas from './DigitzFluidCanvas';
import ParticleWordCanvas from './ParticleWordCanvas';

export default function Z8Presentation({ onBackToSite }) {
  const [includeBot, setIncludeBot] = useState(false);
  const [activeTab, setActiveTab] = useState('escopo'); // 'escopo' | 'projecao' | 'investimento'
  const [accepted, setAccepted] = useState(false);

  const basePrice = 3600;
  const botPrice = includeBot ? 400 : 0;
  const totalPrice = basePrice + botPrice;

  const handleApprove = () => {
    setAccepted(true);
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#5BC2D8', '#7DE1F5', '#FFFFFF']
    });
  };

  return (
    <div style={{ background: 'var(--c-ink)', color: 'var(--c-off)', minHeight: '100vh', position: 'relative' }}>
      {/* Background Fluid Smoke Canvas */}
      <DigitzFluidCanvas />

      {/* Top Bar Navigation */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(8, 13, 26, 0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--c-line)', padding: '14px 24px' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            onClick={onBackToSite}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: '1px solid var(--c-line-cyan)', color: 'var(--c-off)', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontFamily: 'var(--font-geist)', fontSize: '13px' }}
          >
            <ArrowLeft size={16} style={{ color: 'var(--c-cyan)' }} />
            <span>Voltar ao Site Avanza</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-cyan)', border: '1px solid var(--c-cyan)', padding: '3px 10px', borderRadius: '9999px', textTransform: 'uppercase' }}>
              PROPOSTA COMERCIAL EXCLUSIVA
            </span>
            <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.2rem', color: 'var(--c-off)' }}>
              CLIENTE: <strong style={{ color: 'var(--c-cyan)', fontWeight: 400 }}>LOJA Z8</strong>
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section of Presentation */}
      <section style={{ padding: '60px 0 40px 0', borderBottom: '1px solid var(--c-line)', position: 'relative', zIndex: 2 }}>
        <div className="container">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-cyan)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '6px', height: '6px', background: 'var(--c-cyan)', borderRadius: '1px' }} />
            <span>PLANO DE ACELERAÇÃO DIGITAL & VENDAS · LOJA Z8</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 'clamp(2.4rem, 5vw, 4.8rem)', fontWeight: 300, lineHeight: 1.08, color: 'var(--c-off)', maxWidth: '960px' }}>
            Ecossistema de Alta Performance para a <em style={{ fontStyle: 'italic', color: 'var(--c-cyan)' }}>Loja Z8.</em>
          </h1>

          <div style={{ maxWidth: '680px', margin: '8px 0 0 0' }}>
            <ParticleWordCanvas text="vendas Z8." />
          </div>

          <p style={{ fontFamily: 'var(--font-geist)', fontSize: '1.1rem', color: 'var(--c-off-soft)', maxWidth: '760px', marginTop: '24px', lineHeight: 1.6 }}>
            Apresentação comercial desenvolvida exclusivamente para a <strong>Loja Z8</strong>. Unimos tráfego pago no Google & Meta Ads, fotografia autoral, produção de Reels, gestão editorial para Instagram e uma Landing Page de vendas para dominar o mercado de mobilidade elétrica.
          </p>

          {/* Nav Tabs inside Presentation */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '40px' }}>
            <button
              onClick={() => setActiveTab('escopo')}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                padding: '12px 24px',
                borderRadius: '6px',
                border: activeTab === 'escopo' ? '1px solid var(--c-cyan)' : '1px solid var(--c-line)',
                background: activeTab === 'escopo' ? 'rgba(91, 194, 216, 0.12)' : 'rgba(6, 11, 20, 0.6)',
                color: activeTab === 'escopo' ? 'var(--c-cyan)' : 'var(--c-off-soft)',
                cursor: 'pointer'
              }}
            >
              01 · ESCOPO DE SERVIÇOS
            </button>

            <button
              onClick={() => setActiveTab('projecao')}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                padding: '12px 24px',
                borderRadius: '6px',
                border: activeTab === 'projecao' ? '1px solid var(--c-cyan)' : '1px solid var(--c-line)',
                background: activeTab === 'projecao' ? 'rgba(91, 194, 216, 0.12)' : 'rgba(6, 11, 20, 0.6)',
                color: activeTab === 'projecao' ? 'var(--c-cyan)' : 'var(--c-off-soft)',
                cursor: 'pointer'
              }}
            >
              02 · GRÁFICOS & ENGAJAMENTO
            </button>

            <button
              onClick={() => setActiveTab('investimento')}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                padding: '12px 24px',
                borderRadius: '6px',
                border: activeTab === 'investimento' ? '1px solid var(--c-cyan)' : '1px solid var(--c-line)',
                background: activeTab === 'investimento' ? 'rgba(91, 194, 216, 0.12)' : 'rgba(6, 11, 20, 0.6)',
                color: activeTab === 'investimento' ? 'var(--c-cyan)' : 'var(--c-off-soft)',
                cursor: 'pointer'
              }}
            >
              03 · INVESTIMENTO & CONDIÇÕES
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section style={{ padding: '60px 0 90px 0', position: 'relative', zIndex: 2 }}>
        <div className="container">

          {/* TAB 1: ESCOPO DOS 5 PILARES INCLUSOS */}
          {activeTab === 'escopo' && (
            <div>
              <div style={{ marginBottom: '32px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-cyan)', letterSpacing: '0.18em' }}>
                  / O QUE ESTÁ INCLUSO NO PACOTE PRINCIPAL Z8
                </span>
                <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '2.4rem', fontWeight: 300, color: 'var(--c-off)', marginTop: '8px' }}>
                  Os 5 Pilares de Tração para a <em style={{ color: 'var(--c-cyan)', fontStyle: 'italic' }}>Loja Z8</em>
                </h2>
              </div>

              <div className="solutions-grid-3col">
                {/* Pilar 1 */}
                <div className="sol-card-digitz">
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(91, 194, 216, 0.12)', border: '1px solid var(--c-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-cyan)' }}>
                        <TrendingUp size={20} />
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-cyan)' }}>PILAR 01</span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.4rem', color: 'var(--c-off)', fontWeight: 300, marginBottom: '10px' }}>
                      Tráfego Pago (Google & Meta Ads)
                    </h3>
                    <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.88rem', color: 'var(--c-off-soft)', lineHeight: 1.5, marginBottom: '16px' }}>
                      Anúncios patrocinados estratégicos no Instagram, Facebook e Google para atrair compradores diretos na região da Loja Z8.
                    </p>

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem', color: 'var(--c-off-soft)' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} style={{ color: 'var(--c-cyan)' }} /> <span>Anúncios para compradores de e-bikes & e-motos</span></li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} style={{ color: 'var(--c-cyan)' }} /> <span>Campanhas no Google Search para busca de intenção</span></li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} style={{ color: 'var(--c-cyan)' }} /> <span>Remarketing contínuo de alta conversão</span></li>
                    </ul>
                  </div>
                </div>

                {/* Pilar 2 */}
                <div className="sol-card-digitz">
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(91, 194, 216, 0.12)', border: '1px solid var(--c-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-cyan)' }}>
                        <Camera size={20} />
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-cyan)' }}>PILAR 02</span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.4rem', color: 'var(--c-off)', fontWeight: 300, marginBottom: '10px' }}>
                      Fotografia Profissional
                    </h3>
                    <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.88rem', color: 'var(--c-off-soft)', lineHeight: 1.5, marginBottom: '16px' }}>
                      Ensaios fotográficos editoriais dos veículos e produtos da Loja Z8 com iluminação avançada de estúdio e cenas urbanas.
                    </p>

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem', color: 'var(--c-off-soft)' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} style={{ color: 'var(--c-cyan)' }} /> <span>Fotos de detalhes de motor, bateria & design</span></li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} style={{ color: 'var(--c-cyan)' }} /> <span>Tratamento de cor & estética de luxo Z8</span></li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} style={{ color: 'var(--c-cyan)' }} /> <span>Material exclusivo para anúncios e site</span></li>
                    </ul>
                  </div>
                </div>

                {/* Pilar 3 */}
                <div className="sol-card-digitz">
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(91, 194, 216, 0.12)', border: '1px solid var(--c-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-cyan)' }}>
                        <Zap size={20} />
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-cyan)' }}>PILAR 03</span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.4rem', color: 'var(--c-off)', fontWeight: 300, marginBottom: '10px' }}>
                      Produção de Reels Cinematográficos
                    </h3>
                    <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.88rem', color: 'var(--c-off-soft)', lineHeight: 1.5, marginBottom: '16px' }}>
                      Vídeos curtos de alto impacto para Instagram Reels e TikTok, destacando aceleração, autonomia e o estilo de vida elétrico.
                    </p>

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem', color: 'var(--c-off-soft)' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} style={{ color: 'var(--c-cyan)' }} /> <span>Roteiros focados em desejo & conversão</span></li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} style={{ color: 'var(--c-cyan)' }} /> <span>Edição rítmica com trilhas em alta</span></li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} style={{ color: 'var(--c-cyan)' }} /> <span>Demonstrações reais dos modelos Z8</span></li>
                    </ul>
                  </div>
                </div>

                {/* Pilar 4 */}
                <div className="sol-card-digitz">
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(91, 194, 216, 0.12)', border: '1px solid var(--c-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-cyan)' }}>
                        <Smartphone size={20} />
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-cyan)' }}>PILAR 04</span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.4rem', color: 'var(--c-off)', fontWeight: 300, marginBottom: '10px' }}>
                      Social Media & Gestão de Instagram
                    </h3>
                    <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.88rem', color: 'var(--c-off-soft)', lineHeight: 1.5, marginBottom: '16px' }}>
                      Posicionamento diário no perfil oficial da Loja Z8. Design para feed, carrosséis educativos e interações em stories.
                    </p>

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem', color: 'var(--c-off-soft)' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} style={{ color: 'var(--c-cyan)' }} /> <span>Artes autorais para Feed com estética vanguardista</span></li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} style={{ color: 'var(--c-cyan)' }} /> <span>Stories diários aumentando engajamento</span></li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} style={{ color: 'var(--c-cyan)' }} /> <span>Calendário editorial com foco em vendas</span></li>
                    </ul>
                  </div>
                </div>

                {/* Pilar 5 */}
                <div className="sol-card-digitz" style={{ gridColumn: 'span 2' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(91, 194, 216, 0.12)', border: '1px solid var(--c-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-cyan)' }}>
                        <Globe size={20} />
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-cyan)' }}>PILAR 05 · VENDAS ONLINE</span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.5rem', color: 'var(--c-off)', fontWeight: 300, marginBottom: '10px' }}>
                      Landing Page de Vendas & Test-Drive para a Loja Z8
                    </h3>
                    <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.9rem', color: 'var(--c-off-soft)', lineHeight: 1.6, marginBottom: '16px' }}>
                      Construção de uma página web ultraveloz, responsiva e otimizada para transformar visitantes em agendamentos de test-drive e vendas de veículos da Loja Z8.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', fontSize: '0.82rem', color: 'var(--c-off-soft)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} style={{ color: 'var(--c-cyan)' }} /> <span>Catálogo com fotos 360° dos modelos Z8</span></div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} style={{ color: 'var(--c-cyan)' }} /> <span>Formulário direto de agendamento no WhatsApp</span></div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} style={{ color: 'var(--c-cyan)' }} /> <span>Carregamento em menos de 1 segundo</span></div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14} style={{ color: 'var(--c-cyan)' }} /> <span>SEO otimizado para a região de Pindamonhangaba/SP</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: GRÁFICOS ELUCIDATIVOS & ESPECULAÇÕES */}
          {activeTab === 'projecao' && (
            <div>
              <div style={{ marginBottom: '32px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-cyan)', letterSpacing: '0.18em' }}>
                  / METRICAS & METAS ESTIMADAS DE CRESCIMENTO
                </span>
                <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '2.4rem', fontWeight: 300, color: 'var(--c-off)', marginTop: '8px' }}>
                  Especulações de Alcance & <em style={{ color: 'var(--c-cyan)', fontStyle: 'italic' }}>Retorno para a Loja Z8</em>
                </h2>
              </div>

              {/* Graphic Chart Simulation Panel */}
              <div className="sol-card-digitz" style={{ padding: '36px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--c-line)', paddingBottom: '16px', marginBottom: '24px' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-cyan)', letterSpacing: '0.1em' }}>
                      GRÁFICO DE TRAÇÃO ESTIMADO (PRIMEIROS 90 DIAS)
                    </span>
                    <h4 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.4rem', color: 'var(--c-off)', fontWeight: 300 }}>
                      Crescimento de Visibilidade & Captação de Leads
                    </h4>
                  </div>
                  <BarChart2 size={28} style={{ color: 'var(--c-cyan)' }} />
                </div>

                {/* SVG/CSS Bar Chart */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', alignItems: 'flex-end', height: '200px', borderBottom: '1px solid var(--c-line)', paddingBottom: '12px', marginBottom: '20px' }}>
                  {/* Month 1 */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-cyan)', marginBottom: '8px' }}>15.000</span>
                    <div style={{ width: '100%', maxWidth: '60px', height: '35%', background: 'linear-gradient(to top, var(--ocean-vector), var(--c-cyan))', borderRadius: '6px 6px 0 0' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-mute)', marginTop: '8px' }}>Mês 1</span>
                  </div>

                  {/* Month 2 */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-cyan)', marginBottom: '8px' }}>38.000</span>
                    <div style={{ width: '100%', maxWidth: '60px', height: '62%', background: 'linear-gradient(to top, var(--ocean-vector), var(--c-cyan))', borderRadius: '6px 6px 0 0' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-mute)', marginTop: '8px' }}>Mês 2</span>
                  </div>

                  {/* Month 3 */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-cyan)', marginBottom: '8px' }}>65.000</span>
                    <div style={{ width: '100%', maxWidth: '60px', height: '85%', background: 'linear-gradient(to top, var(--ocean-vector), var(--c-cyan))', borderRadius: '6px 6px 0 0' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-mute)', marginTop: '8px' }}>Mês 3</span>
                  </div>

                  {/* Target 90 Days */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#FFFFFF', fontWeight: 700, marginBottom: '8px' }}>90.000+</span>
                    <div style={{ width: '100%', maxWidth: '60px', height: '100%', background: 'linear-gradient(to top, var(--c-cyan), #FFFFFF)', borderRadius: '6px 6px 0 0', boxShadow: '0 0 15px rgba(91, 194, 216, 0.5)' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-cyan)', marginTop: '8px' }}>Meta Meta</span>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginTop: '24px' }}>
                  <div style={{ background: 'rgba(6, 11, 20, 0.9)', padding: '20px', borderRadius: '8px', border: '1px solid var(--c-line)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-mute)', textTransform: 'uppercase' }}>Alcance Mensal</span>
                    <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.8rem', color: 'var(--c-off)', display: 'block', margin: '4px 0' }}>45k — 90k</span>
                    <span style={{ fontFamily: 'var(--font-geist)', fontSize: '0.78rem', color: 'var(--c-off-soft)' }}>Pessoas qualificadas/mês</span>
                  </div>

                  <div style={{ background: 'rgba(6, 11, 20, 0.9)', padding: '20px', borderRadius: '8px', border: '1px solid var(--c-line)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-mute)', textTransform: 'uppercase' }}>Taxa de Engajamento</span>
                    <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.8rem', color: 'var(--c-cyan)', display: 'block', margin: '4px 0' }}>+340%</span>
                    <span style={{ fontFamily: 'var(--font-geist)', fontSize: '0.78rem', color: 'var(--c-off-soft)' }}>Crescimento no Instagram</span>
                  </div>

                  <div style={{ background: 'rgba(6, 11, 20, 0.9)', padding: '20px', borderRadius: '8px', border: '1px solid var(--c-line)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-mute)', textTransform: 'uppercase' }}>Leads & Test-Drive</span>
                    <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.8rem', color: '#FFFFFF', display: 'block', margin: '4px 0' }}>50 — 120</span>
                    <span style={{ fontFamily: 'var(--font-geist)', fontSize: '0.78rem', color: 'var(--c-off-soft)' }}>Contatos diretos/mês</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: INVESTIMENTO & TABELA COMERCIAL */}
          {activeTab === 'investimento' && (
            <div>
              <div style={{ marginBottom: '32px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-cyan)', letterSpacing: '0.18em' }}>
                  / VALORES & CONDIÇÕES COMERCIAIS
                </span>
                <h2 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '2.4rem', fontWeight: 300, color: 'var(--c-off)', marginTop: '8px' }}>
                  Investimento para Acelerar a <em style={{ color: 'var(--c-cyan)', fontStyle: 'italic' }}>Loja Z8</em>
                </h2>
              </div>

              {/* Pricing Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                
                {/* Main All-Inclusive Package Card */}
                <div className="sol-card-digitz" style={{ border: '1px solid var(--c-cyan)', background: 'rgba(12, 22, 42, 0.85)', padding: '36px', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '16px', right: '16px', fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-cyan)', background: 'rgba(91, 194, 216, 0.15)', border: '1px solid var(--c-cyan)', padding: '4px 10px', borderRadius: '9999px' }}>
                    PACOTE COMPLETO RECOMENDADO
                  </span>

                  <div>
                    <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.8rem', color: 'var(--c-off)', fontWeight: 300, marginBottom: '6px' }}>
                      Aceleração Z8 Completa
                    </h3>
                    <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.88rem', color: 'var(--c-off-soft)', marginBottom: '24px' }}>
                      Tudo o que sua loja precisa para vender motos e bicicletas elétricas todos os dias.
                    </p>

                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '24px', borderBottom: '1px solid var(--c-line)', paddingBottom: '20px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--c-cyan)' }}>R$</span>
                      <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '3.2rem', color: '#FFFFFF', fontWeight: 300 }}>3.600</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--c-mute)' }}>/ mês</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: 'var(--c-off-soft)', marginBottom: '32px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={16} style={{ color: 'var(--c-cyan)' }} /> <span><strong>Tráfego Pago</strong> (Gestão no Google Ads & Meta Ads)</span></div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={16} style={{ color: 'var(--c-cyan)' }} /> <span><strong>Fotografia Profissional</strong> de produto e catálogo</span></div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={16} style={{ color: 'var(--c-cyan)' }} /> <span><strong>Reels Cinematográficos</strong> para Instagram & TikTok</span></div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={16} style={{ color: 'var(--c-cyan)' }} /> <span><strong>Gestão de Instagram</strong> (Feed & Stories diários)</span></div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={16} style={{ color: 'var(--c-cyan)' }} /> <span><strong>Landing Page de Vendas Z8</strong> com agendamento</span></div>
                    </div>
                  </div>
                </div>

                {/* Add-on Bot Card */}
                <div className="sol-card-digitz" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--c-mute)', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '8px' }}>
                      ADD-ON OPCIONAL DE INTELIGÊNCIA ARTIFICIAL
                    </span>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <Bot size={24} style={{ color: 'var(--c-cyan)' }} />
                      <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.6rem', color: 'var(--c-off)', fontWeight: 300 }}>
                        ChatBot I.A no WhatsApp
                      </h3>
                    </div>

                    <p style={{ fontFamily: 'var(--font-geist)', fontSize: '0.88rem', color: 'var(--c-off-soft)', marginBottom: '20px' }}>
                      Atendimento inteligente 24 horas por dia no WhatsApp da Loja Z8. Responde dúvidas técnicas, qualifica o cliente e agenda test-drives automaticamente.
                    </p>

                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--c-cyan)' }}>+ R$</span>
                      <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '2.6rem', color: 'var(--c-cyan)', fontWeight: 300 }}>400</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--c-mute)' }}>/ mês</span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-mute)', display: 'block', marginBottom: '24px' }}>
                      * Valor de créditos de envio API cobrados à parte conforme uso.
                    </span>

                    <label style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(6, 11, 20, 0.9)', padding: '14px', borderRadius: '8px', border: '1px solid var(--c-line-cyan)', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={includeBot}
                        onChange={(e) => setIncludeBot(e.target.checked)}
                        style={{ width: '18px', height: '18px', accentColor: 'var(--c-cyan)', cursor: 'pointer' }}
                      />
                      <span style={{ fontFamily: 'var(--font-geist)', fontSize: '0.88rem', color: 'var(--c-off)' }}>
                        Incluir ChatBot I.A no pacote Z8 (+ R$ 400/mês)
                      </span>
                    </label>
                  </div>
                </div>

              </div>

              {/* Total Calculation & Approval Action */}
              <div style={{ background: 'rgba(91, 194, 216, 0.1)', padding: '32px', borderRadius: '12px', border: '1px solid var(--c-line-cyan)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-cyan)', letterSpacing: '0.18em', uppercase: true }}>
                    INVESTIMENTO TOTAL MENSAL SELECIONADO PARA A LOJA Z8
                  </span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginTop: '6px' }}>
                    <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '2.8rem', color: '#FFFFFF', fontWeight: 300 }}>
                      R$ {totalPrice.toLocaleString('pt-BR')}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--c-off-soft)' }}>
                      / mês ({includeBot ? 'Pacote Completo + ChatBot I.A' : 'Pacote Completo Z8'})
                    </span>
                  </div>
                </div>

                {!accepted ? (
                  <button onClick={handleApprove} className="btn-digitz-primary" style={{ padding: '16px 36px', fontSize: '15px' }}>
                    <span>Aprovar Proposta Comercial Z8</span>
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--c-cyan)', fontFamily: 'var(--font-fraunces)', fontSize: '1.2rem' }}>
                    <ShieldCheck size={28} />
                    <span>Proposta Aprovada com Sucesso!</span>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--c-marine-deep)', borderTop: '1px solid var(--c-line)', padding: '30px 0', textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-mute)' }}>
        <div className="container">
          Proposta Comercial Avanza E-Mobility para a Loja Z8 · Pindamonhangaba/SP · {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
