import React, { useState, useEffect } from 'react'
import { BRAND, RouteKey } from '../data/avanzaContent'
import { AvanzaRingBadge, DiagonalArrow } from './BrandMark'

interface StickyBookingProps {
  isReceded: boolean
  onOpenContact: () => void
}

export const StickyBookingPill: React.FC<StickyBookingProps> = ({
  isReceded,
  onOpenContact,
}) => {
  const [scrolled, setScrolled] = useState(false)
  const [folded, setFolded] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36)
      setFolded(window.scrollY > 180)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="the-header pointer-events-none fixed inset-x-0 top-0 z-30 h-0 text-white">
      <div
        className={`absolute right-[0.9375rem] w-[20.5625rem] transition-[top] duration-300 ease-out-expo max-[767px]:right-4 max-[767px]:top-3 max-[767px]:w-[15rem] ${
          scrolled ? 'top-[0.95rem]' : 'top-[2.85rem]'
        }`}
      >
        <button
          type="button"
          onClick={onOpenContact}
          className={`group pressable pointer-events-auto relative block h-[4.25rem] w-full text-left transition-all duration-300 ease-out-expo max-[767px]:h-[3.75rem] ${
            isReceded ? 'scale-[0.96] opacity-75' : ''
          } ${folded ? 'max-[767px]:w-[10.85rem] max-[767px]:ml-auto max-[767px]:h-[3.1rem]' : ''}`}
          aria-label={`${BRAND.bookingLabel} — ${BRAND.bookingAvailability}`}
        >
          <span className="glass absolute inset-0 rounded-lg transition-colors duration-300 group-hover:bg-[#005A7A]/60 group-hover:border-[#00C2FF]/35" />

          {/* Orbital AVANZA Emblem */}
          <span
            className={`absolute left-3 top-1/2 -translate-y-1/2 flex h-[2.75rem] w-[2.75rem] items-center justify-center transition-opacity duration-200 max-[767px]:left-2.5 max-[767px]:h-9 max-[767px]:w-9 ${
              folded ? 'max-[767px]:opacity-0 max-[767px]:pointer-events-none' : ''
            }`}
          >
            <AvanzaRingBadge className="w-[2.25rem] h-[2.25rem]" animated />
          </span>

          {/* Label + Availability */}
          <span
            className={`t-ui absolute left-[4.125rem] top-[1.05rem] whitespace-nowrap text-white transition-all duration-250 max-[767px]:left-[3.35rem] max-[767px]:top-[0.82rem] ${
              folded
                ? 'max-[767px]:left-[1rem] max-[767px]:top-1/2 max-[767px]:-translate-y-1/2'
                : ''
            }`}
          >
            {BRAND.bookingLabel}
          </span>
          <span
            className={`t-small-regular absolute left-[4.125rem] top-[2.22rem] flex items-center gap-1.5 whitespace-nowrap text-white/60 transition-opacity duration-200 max-[767px]:left-[3.35rem] max-[767px]:top-[1.95rem] ${
              folded ? 'max-[767px]:opacity-0 max-[767px]:pointer-events-none' : ''
            }`}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00C2FF] animate-pulse" />
            {BRAND.bookingAvailability}
          </span>

          {/* Rotating Diagonal Arrow */}
          <DiagonalArrow className="absolute right-4 top-1/2 -translate-y-1/2 h-[0.5625rem] w-[0.5625rem] text-white/90" />
        </button>
      </div>
    </div>
  )
}

interface FloatingMenuProps {
  currentRoute: RouteKey
  isOpen: boolean
  isModalOpen: boolean
  onToggle: () => void
  onCloseAll: () => void
  onNavigate: (route: RouteKey) => void
  onOpenContact: () => void
  onOpenPitchdeck: () => void
}

const ROUTE_LABELS: Record<RouteKey, string> = {
  home: 'Início',
  projetos: 'Projetos',
  servicos: 'Serviços',
  estudio: 'Estúdio',
}

export const FloatingMenu: React.FC<FloatingMenuProps> = ({
  currentRoute,
  isOpen,
  isModalOpen,
  onToggle,
  onCloseAll,
  onNavigate,
  onOpenContact,
  onOpenPitchdeck,
}) => {
  const isAnyOverlayActive = isOpen || isModalOpen

  const handleBarClick = () => {
    if (isModalOpen) {
      onCloseAll()
    } else {
      onToggle()
    }
  }

  return (
    <div className="the-menu">
      {/* Dark backdrop veil when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[220] bg-black/45 backdrop-blur-[2px] transition-opacity duration-500"
          onClick={onToggle}
          aria-hidden="true"
        />
      )}

      {/* Fixed Bottom-Center Anchor */}
      <div className="the-menu__anchor fixed bottom-[2.375rem] left-1/2 z-[250] w-[17.4375rem] -translate-x-1/2 max-[767px]:bottom-[calc(0.85rem+env(safe-area-inset-bottom))] max-[767px]:left-[8%] max-[767px]:right-[8%] max-[767px]:w-auto max-[767px]:translate-x-0">
        {/* Expanding Glass Menu Panel */}
        {isOpen && (
          <nav
            aria-label="Navegação principal"
            className="animate-drawer-open glass-strong mb-2.5 w-full rounded-[1.25rem] px-[1.375rem] pb-[1.375rem] pt-[1.45rem] text-white shadow-2xl"
          >
            <p className="t-small-regular mb-3 text-white/45">Menu</p>
            <ul className="flex flex-col gap-2">
              {(
                [
                  { key: 'home', label: 'Início' },
                  { key: 'projetos', label: 'Projetos' },
                  { key: 'servicos', label: 'Serviços' },
                  { key: 'estudio', label: 'Estúdio' },
                ] as { key: RouteKey; label: string }[]
              ).map((item, idx) => (
                <li
                  key={item.key}
                  className="animate-rise-in overflow-hidden"
                  style={{ animationDelay: `${80 + idx * 45}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate(item.key)
                      onToggle()
                    }}
                    className={`t-menu hover-prefix text-left text-white transition-colors hover:text-[#69C9F2] ${
                      currentRoute === item.key ? 'is-active' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li
                className="animate-rise-in overflow-hidden"
                style={{ animationDelay: '260ms' }}
              >
                <button
                  type="button"
                  onClick={() => {
                    onToggle()
                    onOpenContact()
                  }}
                  className="t-menu hover-prefix text-left text-white transition-colors hover:text-[#69C9F2]"
                >
                  Contato
                </button>
              </li>
            </ul>

            <hr className="my-5 border-0 border-t border-white/20" />

            <p className="t-small-regular mb-2.5 text-white/45">Social</p>
            <ul className="flex flex-col gap-1.5">
              {BRAND.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="t-ui hover-prefix text-white/90 hover:text-[#69C9F2]"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => {
                onToggle()
                onOpenPitchdeck()
              }}
              className="pressable t-ui mt-6 flex h-[2.5rem] w-full items-center justify-center rounded-[2.375rem] bg-white text-[#0A1319] transition-colors hover:bg-[#69C9F2]"
            >
              {BRAND.pitchdeckTitle}
            </button>
          </nav>
        )}

        {/* Persistent Floating Bottom Pill Bar */}
        <button
          type="button"
          onClick={handleBarClick}
          className={`the-menu__bar pressable relative block h-[3.125rem] w-full rounded-[3.4375rem] bg-[#161B1E] text-left text-white shadow-[0_12px_32px_rgba(0,0,0,0.45)] border border-white/10 [--bar-pill-width:max(5.5rem,78px)] max-[767px]:h-[3.25rem] max-[767px]:rounded-[1.625rem] max-[767px]:[--bar-pill-width:6.25rem] ${
            isAnyOverlayActive ? 'is-active' : ''
          }`}
          aria-expanded={isOpen}
          aria-label={isAnyOverlayActive ? 'Fechar painel' : 'Abrir menu'}
        >
          <span className="t-small absolute left-5 top-1/2 -translate-y-1/2 text-white">
            Menu
          </span>
          <span className="the-menu__bar-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="t-small absolute right-[0.5625rem] top-[0.625rem] flex h-[1.875rem] w-[var(--bar-pill-width)] items-center justify-center overflow-hidden rounded-[2.1875rem] bg-white text-black max-[767px]:right-[0.4375rem] max-[767px]:top-[0.4375rem] max-[767px]:h-[2.375rem] max-[767px]:rounded-[1.1875rem]">
            <span className="the-menu__bar-word the-menu__bar-word--rest">
              {ROUTE_LABELS[currentRoute]}
            </span>
            <span className="the-menu__bar-word the-menu__bar-word--active">
              Fechar
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}

interface OverlayFormModalProps {
  mode: 'contact' | 'pitchdeck' | null
  onClose: () => void
}

export const OverlayFormModal: React.FC<OverlayFormModalProps> = ({
  mode,
  onClose,
}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setSubmitted(false)
    setError('')
  }, [mode])

  useEffect(() => {
    if (!mode) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mode, onClose])

  if (!mode) return null

  const isPitchdeck = mode === 'pitchdeck'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !email.includes('@')) {
      setError('Preencha seu nome e um e-mail corporativo válido.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-[240] flex items-end justify-center bg-black/45 pb-[6.5rem] backdrop-blur-[3px] max-[767px]:px-4 max-[767px]:pb-[5.25rem]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={isPitchdeck ? 'Solicitar apresentação' : 'Iniciar conversa'}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="animate-drawer-open glass-strong w-[23rem] max-w-full rounded-[1.25rem] px-[1.5rem] pb-6 pt-[1.6rem] text-white shadow-2xl"
        noValidate
      >
        {submitted ? (
          <div className="flex flex-col gap-4 py-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C2FF]/20 text-[#00C2FF]">
              ✓
            </span>
            <h2 className="t-menu leading-snug">
              {isPitchdeck
                ? 'Material a caminho.'
                : 'Recebemos sua mensagem.'}
            </h2>
            <p className="t-text text-white/70">
              {isPitchdeck
                ? `Enviamos o Manifesto & Deck da avanza para ${email}. Se quiser trocar ideias sobre o momento da ${company || 'sua empresa'}, responderemos pessoalmente.`
                : `Obrigado, ${name}. Antes de propor qualquer solução, vamos ler seu contexto com atenção e retornar em até 1 dia útil.`}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="pressable t-ui mt-2 flex h-[2.6rem] w-full items-center justify-center rounded-[2.375rem] bg-white text-black hover:bg-[#69C9F2] transition-colors"
            >
              Voltar ao site
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <p className="t-small-regular text-[#69C9F2]">
              {isPitchdeck ? 'Manifesto & Deck' : 'Contato'}
            </p>
            <h2 className="t-menu -mt-2 leading-[1.25]">
              {isPitchdeck
                ? 'Receba nossa apresentação institucional'
                : 'Conte sobre o momento da sua empresa'}
            </h2>

            <label className="flex flex-col gap-1.5">
              <span className="t-small-regular text-white/55">Nome</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como prefere ser chamado"
                className="t-ui w-full border-0 border-b border-white/25 bg-transparent py-1.5 text-white placeholder:text-white/25 transition-colors focus:border-[#00C2FF] focus:outline-none"
                required
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="t-small-regular text-white/55">E-mail</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@empresa.com.br"
                className="t-ui w-full border-0 border-b border-white/25 bg-transparent py-1.5 text-white placeholder:text-white/25 transition-colors focus:border-[#00C2FF] focus:outline-none"
                required
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="t-small-regular text-white/55">Empresa</span>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Nome da marca ou organização"
                className="t-ui w-full border-0 border-b border-white/25 bg-transparent py-1.5 text-white placeholder:text-white/25 transition-colors focus:border-[#00C2FF] focus:outline-none"
              />
            </label>

            {!isPitchdeck && (
              <label className="flex flex-col gap-1.5">
                <span className="t-small-regular text-white/55">
                  Qual desafio quer destravar?
                </span>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escute primeiro: o que precisa evoluir hoje?"
                  className="t-ui w-full resize-none border-0 border-b border-white/25 bg-transparent py-1.5 text-white placeholder:text-white/25 transition-colors focus:border-[#00C2FF] focus:outline-none"
                />
              </label>
            )}

            {error && (
              <p className="t-small-regular text-[#69C9F2]">{error}</p>
            )}

            <button
              type="submit"
              className="pressable t-ui mt-2 flex h-[2.65rem] w-full items-center justify-center rounded-[2.375rem] bg-white text-black transition-colors hover:bg-[#69C9F2]"
            >
              {isPitchdeck ? 'Receber apresentação' : 'Enviar mensagem'}
            </button>
          </div>
        )}
      </form>
    </div>
  )
}
