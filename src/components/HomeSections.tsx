import React, { useEffect, useState } from 'react'
import { BRAND, HOME_CONTENT, ProjectCase, RouteKey } from '../data/avanzaContent'
import { AvanzaHeroWordmark, DiagonalArrow, Eyebrow } from './BrandMark'

function useLiveClock(timezone: string) {
  const [time, setTime] = useState('')
  useEffect(() => {
    const format = () => {
      try {
        setTime(
          new Intl.DateTimeFormat('pt-BR', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          }).format(new Date())
        )
      } catch {
        setTime(new Date().toTimeString().slice(0, 8))
      }
    }
    format()
    const id = setInterval(format, 1000)
    return () => clearInterval(id)
  }, [timezone])
  return time
}

/* ==========================================================================
   Block 1: Full-Bleed Editorial Home Hero
   ========================================================================== */
export const HomeHero: React.FC<{
  onOpenPitchdeck: () => void
}> = ({ onOpenPitchdeck }) => {
  const clock = useLiveClock(BRAND.timezone)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = window.innerHeight || 900
      setScrollProgress(Math.min(1, Math.max(0, window.scrollY / h)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="home-hero relative z-[1] overflow-hidden text-white">
      {/* Background Studio Editorial Image with subtle parallax */}
      <div className="fit overflow-hidden">
        <img
          src="/images/hero-editorial.jpg"
          alt=""
          className="h-[114%] w-full object-cover object-center transition-transform duration-150 ease-out"
          style={{
            transform: `translate3d(0, ${scrollProgress * 6}%, 0) scale(${1 + scrollProgress * 0.03})`,
          }}
          draggable={false}
        />
        {/* Subtle AVANZA slate-teal atmospheric depth & bottom readability vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,22,32,0.22) 0%, rgba(0,42,58,0.12) 48%, rgba(0,0,0,0.62) 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Top-Right Header Strip (inside hero, matching unanim.studio/en exact positions) */}
      <div className="pointer-events-none absolute inset-0">
        <p className="t-ui-regular absolute left-[calc(100%-21.45rem)] top-[1.21875rem] max-[767px]:hidden">
          <a
            href={BRAND.socials[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline pointer-events-auto text-white/95"
          >
            Instagram
          </a>
          <span className="text-white/60">, </span>
          <a
            href={BRAND.socials[1].href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline pointer-events-auto text-white/95"
          >
            LinkedIn
          </a>
        </p>

        <p className="t-ui-regular absolute right-[0.9375rem] top-[1.21875rem] flex gap-3 text-white/95 max-[767px]:hidden">
          <span>{BRAND.city}</span>
          <time className="tabular-nums text-white/85">{clock || '12:00:00'}</time>
        </p>

        {/* Pitchdeck Preview Card right beneath the Sticky Booking Pill */}
        <button
          type="button"
          onClick={onOpenPitchdeck}
          className="group pressable pointer-events-auto absolute right-[0.9375rem] top-[7.75rem] h-[11.1875rem] w-[20.5625rem] overflow-hidden rounded-lg border border-white/10 bg-[#0B1419] text-left shadow-xl max-[767px]:hidden"
        >
          <img
            src="/images/pitchdeck-cover.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 ease-out-expo group-hover:scale-105 group-hover:opacity-95"
            draggable={false}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            aria-hidden="true"
          />
          <span className="absolute bottom-[0.875rem] left-[0.9375rem] flex flex-col gap-[0.25rem]">
            <span className="t-ui text-white">{BRAND.pitchdeckTitle}</span>
            <span className="t-small-regular text-white/60 transition-colors group-hover:text-[#69C9F2]">
              {BRAND.pitchdeckSubtitle}
            </span>
          </span>
          <DiagonalArrow className="absolute right-4 top-4 h-[0.55rem] w-[0.55rem] text-white/60 group-hover:text-[#00C2FF]" />
        </button>
      </div>

      {/* Mid-Lower Asymmetric Editorial Metadata */}
      <p className="t-ui absolute left-[calc(37.5%+2.8rem)] top-[calc(100%-20.2rem)] flex flex-col leading-[1.18rem] text-white/95 max-[767px]:left-5 max-[767px]:top-[calc(50%-6.8rem)]">
        {BRAND.taglineLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>

      <p className="t-ui absolute left-[calc(50%+9.4rem)] top-[calc(100%-20.35rem)] -translate-x-full whitespace-pre-line text-right leading-[1.18rem] text-white/95 max-[767px]:left-auto max-[767px]:right-5 max-[767px]:top-[calc(50%+3.8rem)] max-[767px]:translate-x-0">
        {BRAND.signature}
      </p>

      {/* Bottom Edge-to-Edge Monumental Wordmark */}
      <div className="pointer-events-none absolute bottom-2 left-[0.625rem] right-[0.5625rem] w-[calc(100%-1.1875rem)] max-[767px]:bottom-auto max-[767px]:left-1/2 max-[767px]:right-auto max-[767px]:top-[calc(50%-2rem)] max-[767px]:w-[calc(100%-2.5rem)] max-[767px]:-translate-x-1/2">
        <AvanzaHeroWordmark className="h-auto w-full" />
      </div>

      {/* Scroll-driven darkening shade */}
      <div
        className="pointer-events-none absolute inset-0 bg-black"
        style={{ opacity: scrollProgress * 0.55 }}
        aria-hidden="true"
      />
    </section>
  )
}

/* ==========================================================================
   Block 2: Asymmetric Editorial Statement (Crisp White Gallery Surface)
   ========================================================================== */
export const StatementBlock: React.FC = () => {
  const { eyebrow, lead, paragraphs } = HOME_CONTENT.statement
  return (
    <section
      className="statement relative z-[1] bg-white pb-[10.3125rem] pt-[1.3125rem] text-black max-[767px]:px-4 max-[767px]:pb-16 max-[767px]:pt-[5.5rem]"
      data-surface="light"
    >
      <div className="ml-[calc(50%+0.9375rem)] max-[767px]:relative max-[767px]:ml-0">
        <Eyebrow
          label={eyebrow}
          tone="dark"
          className="max-[767px]:mb-6"
        />

        <h1 className="t-title t-indent mt-[6.75rem] max-w-[38.5rem] text-black max-[767px]:mt-2 max-[767px]:max-w-none">
          {lead}
        </h1>

        <div className="t-body mt-[2.6875rem] max-w-[24.5rem] space-y-[1.35em] text-black/80 max-[767px]:ml-0 max-[767px]:mt-8 max-[767px]:max-w-none max-[767px]:text-black/70">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ==========================================================================
   Block 3: Alternating 50/50 Checkerboard Case List with Focus-Fade & Crosshairs
   ========================================================================== */
export const ProjectListBlock: React.FC<{
  projects: ProjectCase[]
  onSelectProject: (project: ProjectCase) => void
  onViewAll: () => void
}> = ({ projects, onSelectProject, onViewAll }) => {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null)
  const isFocused = hoveredSlug !== null

  return (
    <section
      className={`project-list relative z-[1] bg-white text-black max-[767px]:pb-[3.75rem] max-[767px]:pt-2 ${
        isFocused ? 'is-focused' : ''
      }`}
      data-surface="light"
      onMouseLeave={() => setHoveredSlug(null)}
    >
      {projects.map((project, idx) => {
        const isRight = idx % 2 === 1
        const isHovered = hoveredSlug === project.slug

        return (
          <article
            key={project.slug}
            onMouseEnter={() => setHoveredSlug(project.slug)}
            className={`project-list__row group relative flex h-[35rem] cursor-pointer max-[767px]:block max-[767px]:h-auto ${
              isRight ? 'flex-row-reverse' : ''
            } ${isHovered ? 'is-hovered' : ''}`}
            onClick={() => onSelectProject(project)}
          >
            {/* 50% Visual Media */}
            <div className="project-list__image relative block h-full flex-[0_0_50%] overflow-hidden bg-[#F2F5F7] max-[767px]:mx-4 max-[767px]:aspect-[4/5] max-[767px]:h-auto">
              <div className="project-list__media relative h-full w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* 50% Pure White Editorial Caption Panel */}
            <div
              className={`project-list__text flex flex-[0_0_50%] flex-col justify-between p-5 max-[767px]:items-stretch max-[767px]:px-4 max-[767px]:pb-[3.5rem] max-[767px]:pt-[0.875rem] max-[767px]:text-left ${
                isRight ? 'items-end text-right' : 'items-start text-left'
              }`}
            >
              {/* Top Corner Hover Reveal: Ver caso ↗ */}
              <div
                className={`flex w-full items-center max-[767px]:hidden ${
                  isRight ? 'justify-end' : 'justify-start'
                }`}
              >
                <span
                  className={`t-ui inline-flex items-center gap-[0.35rem] text-[#005A7A] transition-all duration-500 ease-out-expo ${
                    isHovered
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-1.5 opacity-0'
                  }`}
                >
                  <span>Ver caso</span>
                  <DiagonalArrow
                    variant="slide"
                    className="h-[0.5625rem] w-[0.5625rem]"
                  />
                </span>
              </div>

              {/* Bottom Corner Caption */}
              <div
                className={`flex w-[22rem] max-w-full flex-col max-[767px]:grid max-[767px]:w-auto max-[767px]:grid-cols-[1fr_auto] max-[767px]:gap-x-4 ${
                  isRight ? 'items-end max-[767px]:items-start' : 'items-start'
                }`}
              >
                <span className="t-text font-medium text-black">
                  {project.name}
                </span>
                <span className="t-text text-black/50">
                  {project.services}
                </span>
                {project.resultHighlight && (
                  <span className="t-small mt-2 inline-flex items-center gap-1.5 text-[#005A7A] max-[767px]:col-span-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00C2FF]" />
                    <span>{project.resultHighlight}</span>
                  </span>
                )}
                <span className="t-text hidden text-black/45 max-[767px]:col-start-2 max-[767px]:row-start-1 max-[767px]:block max-[767px]:text-right">
                  {project.year}
                </span>
              </div>
            </div>
          </article>
        )
      })}

      {/* Mobile View-All Pill */}
      <button
        type="button"
        onClick={onViewAll}
        className="pressable t-ui hidden max-[767px]:mx-4 max-[767px]:flex max-[767px]:h-11 max-[767px]:w-[calc(100%-2rem)] max-[767px]:items-center max-[767px]:justify-center max-[767px]:rounded-[2.5rem] max-[767px]:border max-[767px]:border-black/15"
      >
        Todos os projetos ({projects.length})
      </button>

      {/* Center Architectural Grid Crosshairs (.ui-grid-cross) at every 35rem intersection */}
      {projects.map((_, i) => (
        <i
          key={i}
          aria-hidden="true"
          className={`pointer-events-none absolute left-1/2 z-[3] -ml-[5px] -mt-[5px] h-[11px] w-[11px] transition-opacity duration-500 max-[767px]:hidden ${
            isFocused ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ top: `${i * 35}rem` }}
        >
          <span className="absolute left-0 top-[5px] h-px w-[11px] bg-[#005A7A]" />
          <span className="absolute left-[5px] top-0 h-[11px] w-px bg-[#005A7A]" />
        </i>
      ))}
    </section>
  )
}

/* ==========================================================================
   Block 4: Dramatic Split Closing Statement with Monumental AV. / ©26 Word
   ========================================================================== */
export const ClosingStatementBlock: React.FC<{
  theme?: 'dark' | 'light'
  eyebrow: string
  text: string
  ctaLabel: string
  word: string
  image: string
  onCtaClick: () => void
}> = ({
  theme = 'dark',
  eyebrow,
  text,
  ctaLabel,
  word,
  image,
  onCtaClick,
}) => {
  const isLight = theme === 'light'

  return (
    <section
      className={`closing relative z-[1] h-[88.5rem] overflow-hidden max-[767px]:flex max-[767px]:h-auto max-[767px]:flex-col max-[767px]:items-start ${
        isLight
          ? 'closing--light bg-white text-black'
          : 'closing--dark bg-black text-white'
      }`}
    >
      {/* Full-bleed background photography */}
      <div className="fit max-[767px]:top-auto max-[767px]:h-[var(--photo)]">
        <img
          src={image}
          alt=""
          loading="lazy"
          draggable={false}
          className="h-full w-full object-cover object-center"
        />
        {!isLight && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,90,122,0.22) 55%, rgba(0,0,0,0.55) 100%)',
            }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Architectural L-Cut Mask Box on Top-Left 50% */}
      <div className="closing__box closing__box--text" aria-hidden="true" />

      {/* Giant Monumental Bleeding Wordmark ("AV." or "©26") */}
      <p
        className="t-giant pointer-events-none absolute bottom-[-0.1em] left-[-0.03em] z-[1] whitespace-nowrap text-white select-none max-[767px]:bottom-[-0.06em]"
        aria-hidden="true"
      >
        {word}
      </p>

      {/* Top-Left Eyebrow */}
      <Eyebrow
        label={eyebrow}
        tone={isLight ? 'dark' : 'light'}
        className="absolute left-[1.375rem] top-[1.375rem] z-[2] max-[767px]:relative max-[767px]:left-auto max-[767px]:top-auto max-[767px]:mb-6"
      />

      {/* Indented Statement Headline */}
      <h2 className="t-title t-indent absolute bottom-[42.625rem] left-[1.625rem] z-[2] w-[38.5rem] leading-[3.25rem] max-[767px]:relative max-[767px]:bottom-auto max-[767px]:left-auto max-[767px]:w-auto max-[767px]:max-w-[22rem] max-[767px]:leading-[2.35rem]">
        {text}
      </h2>

      {/* Pill CTA + Attached Circular Rotating Arrow */}
      <button
        type="button"
        onClick={onCtaClick}
        className="group pressable absolute left-[1.625rem] top-[49.125rem] z-[2] inline-flex items-center gap-0.5 max-[767px]:relative max-[767px]:left-auto max-[767px]:top-auto max-[767px]:mt-8"
      >
        <span
          className={`t-ui flex h-[2.05rem] items-center rounded-[2.1875rem] border px-3.5 transition-colors duration-200 max-[767px]:h-10 max-[767px]:px-4 ${
            isLight
              ? 'border-black text-black group-hover:bg-black group-hover:text-white'
              : 'border-white/80 text-white group-hover:border-[#00C2FF] group-hover:bg-[#00C2FF] group-hover:text-black'
          }`}
        >
          {ctaLabel}
        </span>
        <span
          className={`flex h-[2.05rem] w-[2.05rem] items-center justify-center rounded-full transition-colors duration-200 max-[767px]:h-10 max-[767px]:w-10 ${
            isLight
              ? 'bg-black text-white group-hover:bg-[#008DCD]'
              : 'bg-white text-black group-hover:bg-[#00C2FF]'
          }`}
        >
          <DiagonalArrow className="h-[0.5625rem] w-[0.5625rem]" />
        </span>
      </button>

      {/* Mid-Right Tagline & Signature */}
      <p className="t-ui absolute left-[calc(56.25%+0.9rem)] top-[49.25rem] z-[2] flex flex-col leading-[1.18rem] text-white max-[767px]:hidden">
        {BRAND.taglineLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>

      <p className="t-ui absolute left-[calc(62.5%+5.4rem)] top-[58.6875rem] z-[2] -translate-x-full whitespace-pre-line text-right leading-[1.18rem] text-white max-[767px]:hidden">
        {BRAND.signature}
      </p>
    </section>
  )
}
