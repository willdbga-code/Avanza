import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Activity, Cpu } from 'lucide-react';

export default function GlassNavbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: scrolled ? '14px' : '22px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '92%',
        maxWidth: '1240px',
        zIndex: 100,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div
        className="glass-panel"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 28px',
          borderRadius: '9999px',
          background: scrolled ? 'rgba(5, 14, 23, 0.92)' : 'rgba(9, 23, 38, 0.75)',
          boxShadow: scrolled
            ? '0 12px 40px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 240, 255, 0.25)'
            : '0 8px 32px rgba(0, 0, 0, 0.4)',
          border: '1px solid var(--glass-border)'
        }}
      >
        {/* Brand Logo & Name */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'rgba(0, 240, 255, 0.12)',
              border: '1px solid var(--neon-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(0, 240, 255, 0.35)'
            }}
          >
            <img
              src="/branding/logo.png"
              alt="Avanza Logo"
              style={{ width: '22px', height: 'auto', objectFit: 'contain' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-kanit)',
                fontSize: '1.45rem',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                lineHeight: 1
              }}
            >
              Avanza
            </span>
            <span
              style={{
                fontFamily: 'var(--font-open-sans)',
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                color: 'var(--neon-cyan)',
                textTransform: 'uppercase',
                marginTop: '2px'
              }}
            >
              Tech & Performance
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            alignItems: 'center',
            gap: '32px'
          }}
          className="desktop-nav"
        >
          <a href="#rising-glass" className="nav-link">
            Módulos de Vidro
          </a>
          <a href="#tech-matrix" className="nav-link">
            Matriz Tech
          </a>
          <a href="#solucoes" className="nav-link">
            Soluções
          </a>
          <a href="#simulador" className="nav-link">
            Simulador Vector
          </a>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(0, 240, 255, 0.1)',
              padding: '6px 12px',
              borderRadius: '9999px',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              fontSize: '0.78rem',
              color: 'var(--neon-cyan)',
              fontWeight: 600,
              '@media (min-width: 1024px)': { display: 'flex' }
            }}
          >
            <Activity size={12} />
            <span>BLENDER 4.2 LIVE</span>
          </div>

          <button onClick={onOpenContact} className="btn-avanza" style={{ padding: '10px 22px', fontSize: '0.9rem' }}>
            <span>Acelerar Marca</span>
            <ArrowUpRight size={16} />
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              display: 'flex',
              padding: '6px'
            }}
            className="mobile-toggle"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="glass-panel"
          style={{
            marginTop: '12px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            borderRadius: '20px'
          }}
        >
          <a href="#rising-glass" onClick={() => setMobileOpen(false)} className="nav-link-mobile">
            Módulos de Vidro
          </a>
          <a href="#tech-matrix" onClick={() => setMobileOpen(false)} className="nav-link-mobile">
            Matriz Tech
          </a>
          <a href="#solucoes" onClick={() => setMobileOpen(false)} className="nav-link-mobile">
            Soluções
          </a>
          <a href="#simulador" onClick={() => setMobileOpen(false)} className="nav-link-mobile">
            Simulador Vector
          </a>
        </div>
      )}

      <style>{`
        .nav-link {
          color: rgba(255, 255, 255, 0.78);
          font-family: var(--font-open-sans);
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }
        .nav-link:hover {
          color: var(--neon-cyan);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 2px;
          background: var(--neon-cyan);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link-mobile {
          color: #FFFFFF;
          font-family: var(--font-kanit);
          font-size: 1.1rem;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 8px;
          transition: background 0.3s ease;
        }
        .nav-link-mobile:hover {
          background: rgba(0, 240, 255, 0.15);
          color: var(--neon-cyan);
        }
        .desktop-nav {
          display: none;
        }
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
