import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactGlassModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Guia de Marca Completo (Brandbook) & Identidade 3D',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 110,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#5BC2D8', '#7DE1F5', '#FFFFFF']
    });
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        background: 'rgba(8, 13, 26, 0.92)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      <div
        className="sol-card-digitz"
        style={{
          maxWidth: '640px',
          width: '100%',
          padding: '40px',
          borderRadius: '16px',
          position: 'relative',
          background: 'rgba(8, 13, 26, 0.98)',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.9), 0 0 30px rgba(91, 194, 216, 0.2)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid var(--c-line)',
            color: 'var(--c-off)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--c-cyan)', border: '1px solid var(--c-cyan)', padding: '3px 12px', borderRadius: '9999px', display: 'inline-block', marginBottom: '12px' }}>
                INICIAR UM PROJETO · CONTATO
              </span>
              <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '2.1rem', color: 'var(--c-off)', fontWeight: 300 }}>
                Fale com a Equipe <em style={{ fontStyle: 'italic', color: 'var(--c-cyan)' }}>Avanza E-Mobility</em>
              </h3>
              <p style={{ fontFamily: 'var(--font-geist)', color: 'var(--c-off-soft)', fontSize: '0.92rem', marginTop: '6px' }}>
                Preencha os dados da sua marca de e-bikes ou e-motos para receber um plano estratégico em até 24 horas.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-off-soft)', marginBottom: '6px', display: 'block' }}>
                  Seu Nome ou Nome do Executivo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Silva"
                  className="glass-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-off-soft)', marginBottom: '6px', display: 'block' }}>
                    E-mail Corporativo
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="willdbga@gmail.com"
                    className="glass-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-off-soft)', marginBottom: '6px', display: 'block' }}>
                    Nome da Empresa / Marca
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: VoltBikes Elétricas"
                    className="glass-input"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-off-soft)', marginBottom: '6px', display: 'block' }}>
                  Solução Principal Desejada
                </label>
                <select
                  className="glass-input"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{ background: 'rgba(8, 13, 26, 0.95)', cursor: 'pointer' }}
                >
                  <option value="Guia de Marca Completo (Brandbook) & Identidade 3D">Guia de Marca Completo (Brandbook) & Identidade 3D</option>
                  <option value="Produção Audiovisual (Fotografia & Vídeo Cinematográfico)">Produção Audiovisual (Fotografia & Vídeo Cinematográfico)</option>
                  <option value="Gestão de Instagram (Artes para Feed & Stories)">Gestão de Instagram (Artes para Feed & Stories)</option>
                  <option value="Landing Page de Vendas & Test-Drive">Landing Page de Vendas & Agendamento de Test-Drive</option>
                  <option value="Site Completo E-commerce para Motos / Bikes Elétricas">Site Completo E-commerce para Motos / Bikes Elétricas</option>
                  <option value="Tráfego Pago em Google Ads & Meta Ads">Tráfego Pago em Google Ads & Meta Ads</option>
                  <option value="Ecossistema Completo de Aceleração (Todas as Soluções)">Ecossistema Completo de Aceleração (Todas as Soluções)</option>
                </select>
              </div>

              <div>
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--c-off-soft)', marginBottom: '6px', display: 'block' }}>
                  Detalhes do Projeto ou Visão de Mercado
                </label>
                <textarea
                  rows={3}
                  placeholder="Nos conte sobre seus modelos de e-bikes ou e-motos, desafios e objetivos de vendas..."
                  className="glass-input"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ resize: 'none' }}
                />
              </div>

              <button type="submit" className="btn-digitz-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', marginTop: '10px' }}>
                <span>Enviar Briefing e Iniciar Aceleração</span>
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px 10px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(91, 194, 216, 0.15)', border: '1px solid var(--c-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', color: 'var(--c-cyan)' }}>
              <CheckCircle2 size={32} />
            </div>

            <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '2rem', color: 'var(--c-off)', fontWeight: 300, marginBottom: '8px' }}>
              Briefing <em style={{ fontStyle: 'italic', color: 'var(--c-cyan)' }}>Recebido com Sucesso!</em>
            </h3>

            <p style={{ fontFamily: 'var(--font-geist)', color: 'var(--c-off-soft)', fontSize: '0.94rem', maxWidth: '440px', margin: '0 auto 24px auto' }}>
              Obrigado, <strong>{formData.name}</strong>. Nossa equipe em Pindamonhangaba/SP está analisando os dados da <strong>{formData.company}</strong> e entrará em contato pelo telefone <strong>(12) 98813-0316</strong> ou e-mail em até 24 horas.
            </p>

            <button onClick={() => { setSubmitted(false); onClose(); }} className="btn-digitz-ghost">
              <span>Fechar Janela</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
