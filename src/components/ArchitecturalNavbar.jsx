import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const navItems = [
  { n: '01', label: 'E-Mobility', href: '#sec-hero' },
  { n: '02', label: 'Verticales', href: '#verticales' },
  { n: '03', label: 'Soluções', href: '#solucoes' },
  { n: '04', label: 'Simulador', href: '#simulador' }
];

export default function ArchitecturalNavbar({ onOpenContact }) {
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

        {/* Right: Contact Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
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
