import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  return (
    <footer style={{ background: 'var(--c-marine-deep)', borderTop: '1px solid var(--c-line)', padding: '60px 0 40px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(91, 194, 216, 0.12)', border: '1px solid var(--c-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/branding/logo.svg" alt="Avanza SVG Logo" style={{ width: '20px', height: 'auto' }} />
              </div>
              <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--c-off)' }}>
                Avanza
              </span>
            </div>

            <p style={{ fontFamily: 'var(--font-geist)', color: 'var(--c-off-soft)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Branding de luxo, fotografia, vídeo, conteúdo para Instagram, e-commerce e tráfego pago especialista no mercado de motos e bicicletas elétricas.
            </p>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-cyan)', letterSpacing: '0.12em' }}>
              ▪ AGÊNCIA DIGITAL E-MOBILITY · PINDAMONHANGABA, SP · BRASIL
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-off)', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '20px' }}>
              Navegação & Verticais
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontFamily: 'var(--font-geist)', fontSize: '0.9rem' }}>
              <li>
                <a href="#sec-hero" style={{ color: 'var(--c-off-soft)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  01 · E-Mobility Hero
                </a>
              </li>
              <li>
                <a href="#verticales" style={{ color: 'var(--c-off-soft)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  02 · Verticais (Motos & E-Bikes)
                </a>
              </li>
              <li>
                <a href="#solucoes" style={{ color: 'var(--c-off-soft)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  03 · Soluções Integradas
                </a>
              </li>
              <li>
                <a href="#simulador" style={{ color: 'var(--c-off-soft)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  04 · Simulador E-Mobility
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-off)', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '20px' }}>
              Contato & Localização
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-off-soft)', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={14} style={{ color: 'var(--c-cyan)' }} />
                <a href="mailto:willdbga@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>willdbga@gmail.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={14} style={{ color: 'var(--c-cyan)' }} />
                <a href="https://wa.me/5512988130316" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>+55 (12) 98813-0316</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={14} style={{ color: 'var(--c-cyan)' }} />
                <span>Pindamonhangaba / SP — Brasil</span>
              </div>
            </div>

            <button onClick={onOpenContact} className="btn-digitz-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <span>Falar sobre um Projeto</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{ borderTop: '1px solid var(--c-line)', paddingTop: '28px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-mute)' }}>
          <div>
            © {new Date().getFullYear()} Avanza Soluções em Mobilidade Elétrica. Pindamonhangaba/SP, Brasil. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
