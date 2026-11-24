import React, { useEffect, useState } from 'react'
import { BRAND, ProjectCase, RouteKey } from '../data/avanzaContent'
import { AvanzaRingBadge } from './BrandMark'

interface TheFooterProps {
  currentRoute: RouteKey
  projects: ProjectCase[]
  onNavigate: (route: RouteKey) => void
  onSelectProject: (project: ProjectCase) => void
  onOpenContact: () => void
  onOpenPitchdeck: () => void
}

export const TheFooter: React.FC<TheFooterProps> = ({
  currentRoute,
  projects,
  onNavigate,
  onSelectProject,
  onOpenContact,
  onOpenPitchdeck,
}) => {
  const featuredSlots = projects.slice(0, 4)
  const [autoIndex, setAutoIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Match unanim.studio's serene auto-cycling single-lit footer cell
  useEffect(() => {
    if (hoveredIndex !== null) return
    const id = setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % featuredSlots.length)
    }, 3400)
    return () => clearInterval(id)
  }, [hoveredIndex, featuredSlots.length])

  const activeIndex = hoveredIndex !== null ? hoveredIndex : autoIndex

  return (
    <footer className="the-footer relative h-[46.75rem] bg-black text-white max-[767px]:grid max-[767px]:h-auto max-[767px]:grid-cols-2 max-[767px]:gap-y-10 max-[767px]:px-5 max-[767px]:pb-[6.5rem] max-[767px]:pt-8">
      {/* Column 1: Pages */}
      <nav
        aria-label="Páginas"
        className="absolute left-[1.625rem] top-[1.3125rem] flex flex-col gap-0.5 max-[767px]:relative max-[767px]:left-auto max-[767px]:top-auto"
      >
        <span className="hidden text-xs font-medium text-white/45 mb-1.5 max-[767px]:block">
          Páginas
        </span>
        {(
          [
            { key: 'home', label: 'Início' },
            { key: 'projetos', label: 'Projetos' },
            { key: 'servicos', label: 'Serviços' },
            { key: 'estudio', label: 'Estúdio' },
          ] as { key: RouteKey; label: string }[]
        ).map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => onNavigate(item.key)}
            className={`t-ui hover-prefix text-left leading-6 text-white ${
              currentRoute === item.key ? 'is-active' : ''
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Column 2: Contact */}
      <nav
        aria-label="Contato"
        className="absolute left-[calc(18.75%+5.84375rem)] top-[1.3125rem] flex flex-col gap-0.5 max-[767px]:relative max-[767px]:left-auto max-[767px]:top-auto"
      >
        <span className="hidden text-xs font-medium text-white/45 mb-1.5 max-[767px]:block">
          Contato
        </span>
        <button
          type="button"
          onClick={onOpenContact}
          className="t-ui hover-prefix text-left leading-6 text-white"
        >
          Falar conosco
        </button>
        <button
          type="button"
          onClick={onOpenPitchdeck}
          className="t-ui hover-prefix text-left leading-6 text-white"
        >
          Manifesto & Deck
        </button>
      </nav>

      {/* Column 3: Social */}
      <ul className="absolute left-1/2 top-[1.3125rem] flex flex-col gap-0.5 max-[767px]:relative max-[767px]:left-auto max-[767px]:top-auto">
        <span className="hidden text-xs font-medium text-white/45 mb-1.5 max-[767px]:block">
          Social
        </span>
        {BRAND.socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="t-ui hover-prefix leading-6 text-white"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>

      {/* 4-Column Interactive Cycling Case Preview Strip (.footer-cells) */}
      <div
        className="absolute inset-x-0 top-[21.25rem] grid h-[16.25rem] grid-cols-4 gap-[0.3125rem] px-[1.625rem] max-[767px]:hidden"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {featuredSlots.map((project, idx) => {
          const isVisible = activeIndex === idx
          const isHovered = hoveredIndex === idx
          return (
            <button
              key={project.slug}
              type="button"
              onMouseEnter={() => setHoveredIndex(idx)}
              onClick={() => onSelectProject(project)}
              className="relative h-full w-full text-left focus:outline-none"
              aria-label={`Abrir projeto ${project.name}`}
            >
              <span
                className={`t-small pointer-events-none absolute bottom-[calc(100%+0.625rem)] left-[0.0625rem] whitespace-nowrap text-white transition-opacity duration-300 ${
                  isHovered || isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {project.name}
              </span>
              <span className="absolute inset-0 overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className={`h-full w-full object-cover transition-all ease-out ${
                    hoveredIndex !== null ? 'duration-200' : 'duration-1000'
                  } ${
                    isVisible
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-[1.02]'
                  }`}
                />
              </span>
            </button>
          )
        })}
      </div>

      {/* Bottom-Left AVANZA Emblem + Descriptor */}
      <div className="absolute left-[1.625rem] top-[39.375rem] flex items-center gap-3 max-[767px]:relative max-[767px]:left-auto max-[767px]:top-auto max-[767px]:col-span-full max-[767px]:mt-4">
        <AvanzaRingBadge className="h-[2.125rem] w-[2.125rem]" />
        <div className="flex flex-col leading-none">
          <span className="text-[1rem] font-semibold tracking-[-0.03em] text-white">
            {BRAND.name}
          </span>
          <span className="text-[0.68rem] tracking-[0.01em] text-[#69C9F2]">
            {BRAND.descriptor}
          </span>
        </div>
      </div>

      {/* Copyright */}
      <p className="t-small-regular absolute left-[1.625rem] top-[42.35rem] whitespace-pre-line leading-[1.15rem] text-white/60 max-[767px]:relative max-[767px]:left-auto max-[767px]:top-auto max-[767px]:col-span-full max-[767px]:-mt-4">
        {BRAND.copyright}
      </p>

      {/* Mobile Pitchdeck Preview Card */}
      <button
        type="button"
        onClick={onOpenPitchdeck}
        className="pressable relative hidden h-44 overflow-hidden rounded-lg border border-white/10 bg-[#0B1419] text-left max-[767px]:col-span-full max-[767px]:block"
      >
        <img
          src="/images/pitchdeck-cover.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <span className="absolute bottom-3.5 left-3.5 flex flex-col gap-0.5">
          <span className="t-ui text-white">{BRAND.pitchdeckTitle}</span>
          <span className="t-small-regular text-white/60">
            {BRAND.pitchdeckSubtitle}
          </span>
        </span>
      </button>
    </footer>
  )
}
