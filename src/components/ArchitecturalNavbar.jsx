import React, { useState } from 'react';
import { ArrowRight, Menu, X, Sparkles } from 'lucide-react';

const navItems = [
  { n: '01', label: 'E-Mobility', href: '#sec-hero' },
  { n: '02', label: 'Verticales', href: '#verticales' },
  { n: '03', label: 'Soluções', href: '#solucoes' },
  { n: '04', label: 'Simulador', href: '#simulador' }
];

export default function ArchitecturalNavbar({ onOpenContact, onOpenZ8Presentation }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="digitz-header">
      <div className="digitz-header-inner">
        {/* Left: Brand Logo */}
        <a href="#" className="digitz-logo-box">
          <div className="digitz-logo-icon">
            <img src="/branding/logo.svg" alt="Avanza SVG Logo" style={{ width: '20px', height: 'auto' }} />
          </div>
          <span className="digitz-logo-text">Avanza</span>
        </a>

        {/* Center: Digitz Rectangular Nav Box */}
        <nav className="digitz-nav-box">
          {navItems.map((item) => (
            <a key={item.n} href={item.href} className="digitz-nav-item">
              <span className="digitz-nav-num">{item.n}</span>
              <span className="digitz-nav-label">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right: Contact & Z8 Pitch Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={onOpenZ8Presentation}
            style={{
              background: 'rgba(91, 194, 216, 0.12)',
              border: '1px solid var(--c-cyan)',
              color: 'var(--c-cyan)',
              padding: '8px 14px',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.05em'
            }}
          >
            <Sparkles size={13} />
            <span>Proposta Loja Z8</span>
          </button>

          <button onClick={onOpenContact} className="digitz-btn-contact">
            <span>Entrar em Contato</span>
            <ArrowRight size={14} />
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--c-off)',
              cursor: 'pointer',
              display: 'flex',
              padding: '6px'
            }}
            className="mobile-toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            background: 'var(--c-ink)',
            borderTop: '1px solid var(--c-line)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenZ8Presentation();
            }}
            style={{
              background: 'rgba(91, 194, 216, 0.15)',
              border: '1px solid var(--c-cyan)',
              color: 'var(--c-cyan)',
              padding: '12px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px'
            }}
          >
            <Sparkles size={14} />
            <span>Ver Proposta Comercial Loja Z8</span>
          </button>

          {navItems.map((item) => (
            <a
              key={item.n}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: 'var(--c-off)',
                textDecoration: 'none',
                padding: '10px 0',
                borderBottom: '1px solid var(--c-line)',
                fontFamily: 'var(--font-fraunces)',
                fontSize: '1.1rem'
              }}
            >
              <span>{item.label}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--c-cyan)' }}>
                {item.n}
              </span>
            </a>
          ))}

          <button onClick={onOpenContact} className="btn-digitz-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
            <span>Entrar em Contato</span>
            <ArrowRight size={14} />
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
