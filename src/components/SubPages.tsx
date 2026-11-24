import React, { useState } from 'react'
import {
  BRAND,
  PROJECTS,
  ProjectCase,
  RouteKey,
  SERVICES_CONTENT,
  STUDIO_CONTENT,
} from '../data/avanzaContent'
import { DiagonalArrow, Eyebrow } from './BrandMark'
import { ClosingStatementBlock, ProjectListBlock } from './HomeSections'

/* ==========================================================================
   Subpage 1: /projetos (Works)
   ========================================================================== */
export const WorksPage: React.FC<{
  onSelectProject: (p: ProjectCase) => void
  onOpenContact: () => void
}> = ({ onSelectProject, onOpenContact }) => {
  const categories = [
    'Todos',
    'Branding',
    'Ecossistema Digital',
    'Estratégia',
    'Conteúdo',
  ] as const
  const [activeCat, setActiveCat] = useState<string>('Todos')

  const filtered =
    activeCat === 'Todos'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCat)

  return (
    <div>
      {/* Dark Architectural Works Hero */}
      <section className="relative min-h-[78svh] overflow-hidden bg-black px-[1.625rem] pb-16 pt-[6.5rem] text-white flex flex-col justify-between">
        <div className="fit opacity-35">
          <img
            src="/images/case-lumina.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#005A7A]/25 to-black" />
        </div>

        <div className="relative z-10 max-w-[44rem]">
          <Eyebrow label="Projetos" tone="light" />
          <h1 className="t-title t-indent mt-10 text-white">
            Cada projeto começa com uma escuta profunda — e termina em um ecossistema vivo que sustenta o crescimento.
          </h1>

          {/* Minimalist Filter Pills */}
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCat(cat)}
                className={`t-small rounded-full border px-4 py-1.5 transition-colors ${
                  activeCat === cat
                    ? 'border-[#00C2FF] bg-[#00C2FF] text-black'
                    : 'border-white/25 text-white/75 hover:border-white/60 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <p
          className="t-service-word relative z-10 mt-16 select-none text-white/95"
          aria-hidden="true"
        >
          PROJETOS.
        </p>
      </section>

      <ProjectListBlock
        projects={filtered}
        onSelectProject={onSelectProject}
        onViewAll={() => setActiveCat('Todos')}
      />

      <ClosingStatementBlock
        theme="dark"
        eyebrow="Próximo passo"
        text="Seu negócio não precisa de mais barulho. Precisa de fundamentos claros que transformem clientes satisfeitos em motor contínuo."
        ctaLabel="Agendar conversa"
        word="AV."
        image="/images/closing-editorial.jpg"
        onCtaClick={onOpenContact}
      />
    </div>
  )
}

/* ==========================================================================
   Subpage 2: /servicos (Services — exact mirror of services.json)
   ========================================================================== */
export const ServicesPage: React.FC<{
  onSelectProject: (p: ProjectCase) => void
  onOpenContact: () => void
}> = ({ onSelectProject, onOpenContact }) => {
  const [expanded, setExpanded] = useState<string>('01')

  return (
    <div>
      {/* Services Hero */}
      <section className="relative min-h-[84svh] overflow-hidden bg-black px-[1.625rem] pb-14 pt-[6.5rem] text-white flex flex-col justify-between">
        <div className="fit opacity-40">
          <img
            src="/images/hero-editorial.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-[#005A7A]/25 to-black" />
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow label={SERVICES_CONTENT.eyebrow} tone="light" />
            <h1 className="t-title t-indent mt-10 text-white">
              {SERVICES_CONTENT.heroLead}
            </h1>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pt-16">
            <p className="t-small-regular mb-3 text-[#69C9F2]">
              06 disciplinas integradas
            </p>
            <ul className="space-y-1.5 border-t border-white/20 pt-4">
              {SERVICES_CONTENT.pillars.map((p) => (
                <li
                  key={p.index}
                  className="t-ui flex items-center justify-between text-white/80"
                >
                  <span>{p.name}</span>
                  <span className="t-small-regular text-white/40">
                    {p.index}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          className="t-service-word relative z-10 mt-14 select-none text-white"
          aria-hidden="true"
        >
          {SERVICES_CONTENT.heroWord}
        </p>
      </section>

      {/* Crisp White 6-Pillar Service Architecture */}
      <section className="service-list bg-white px-[1.625rem] py-24 text-black max-[767px]:py-14">
        <div className="divide-y divide-black/12 border-y border-black/12">
          {SERVICES_CONTENT.pillars.map((pillar) => {
            const isOpen = expanded === pillar.index
            const relatedCase = PROJECTS.find(
              (p) => p.slug === pillar.featuredCaseSlug
            )

            return (
              <div key={pillar.index} className="py-10 max-[767px]:py-7">
                <button
                  type="button"
                  onClick={() =>
                    setExpanded(isOpen ? '' : pillar.index)
                  }
                  className="grid w-full grid-cols-1 items-start gap-4 text-left md:grid-cols-12"
                >
                  <span className="t-ui text-[#008DCD] md:col-span-1">
                    ./ {pillar.index}
                  </span>
                  <span className="t-title text-[2rem] leading-tight text-black md:col-span-5">
                    {pillar.name}
                  </span>
                  <span className="t-body text-black/70 md:col-span-5">
                    {pillar.summary}
                  </span>
                  <span className="t-ui text-right text-black/50 md:col-span-1">
                    {isOpen ? '—' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12 animate-rise-in">
                    <div className="md:col-span-5 md:col-start-2">
                      <p className="t-small-regular mb-3 text-[#005A7A]">
                        Princípio: {pillar.philosophyNote}
                      </p>
                      <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {pillar.capabilities.map((cap) => (
                          <li
                            key={cap}
                            className="t-text flex items-center gap-2 text-black/80"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00C2FF]" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {relatedCase && (
                      <div className="md:col-span-5 md:col-start-8">
                        <button
                          type="button"
                          onClick={() => onSelectProject(relatedCase)}
                          className="group flex w-full items-center gap-4 rounded-xl border border-black/10 p-3 text-left transition-colors hover:border-[#008DCD]"
                        >
                          <img
                            src={relatedCase.image}
                            alt={relatedCase.name}
                            className="h-20 w-28 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <p className="t-small-regular text-black/45">
                              Caso aplicado
                            </p>
                            <p className="t-ui mt-0.5 text-black">
                              {relatedCase.name}
                            </p>
                            <p className="t-small-regular text-black/55">
                              {relatedCase.services}
                            </p>
                          </div>
                          <DiagonalArrow className="mr-2 h-3 w-3 text-[#008DCD]" />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <ClosingStatementBlock
        theme="dark"
        eyebrow={SERVICES_CONTENT.closing.eyebrow}
        text={SERVICES_CONTENT.closing.text}
        ctaLabel={SERVICES_CONTENT.closing.ctaLabel}
        word={SERVICES_CONTENT.closing.word}
        image={SERVICES_CONTENT.closing.image}
        onCtaClick={onOpenContact}
      />
    </div>
  )
}

/* ==========================================================================
   Subpage 3: /estudio (Studio / About — exact mirror of about.json)
   ========================================================================== */
export const StudioPage: React.FC<{
  onNavigate: (r: RouteKey) => void
}> = ({ onNavigate }) => {
  return (
    <div>
      {/* Dark Studio Hero */}
      <section className="relative min-h-[84svh] overflow-hidden bg-black px-[1.625rem] pb-14 pt-[6.5rem] text-white flex flex-col justify-between">
        <div className="fit opacity-45">
          <img
            src="/images/hero-editorial.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#005A7A]/20 to-black" />
        </div>

        <div className="relative z-10 max-w-[44rem]">
          <Eyebrow label={STUDIO_CONTENT.eyebrow} tone="light" />
          <h1 className="t-title t-indent mt-10 text-white">
            {STUDIO_CONTENT.heroLead}
          </h1>
        </div>

        <div className="relative z-10 mt-14 flex items-end justify-between">
          <p className="t-service-word select-none text-white" aria-hidden="true">
            {STUDIO_CONTENT.heroWord}
          </p>
          <p className="t-ui hidden whitespace-pre-line text-right text-white/80 md:block">
            {BRAND.signature}
          </p>
        </div>
      </section>

      {/* Key Figures Block (mirroring about.json key-figures) */}
      <section className="bg-white px-[1.625rem] py-24 text-black max-[767px]:py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow label={`Desde ${STUDIO_CONTENT.foundedYear}`} tone="dark" />
            <p className="t-small-regular mt-8 text-[#005A7A]">
              {STUDIO_CONTENT.manifestoNote.label}
            </p>
            <p className="t-body mt-3 max-w-[23rem] text-black/75">
              {STUDIO_CONTENT.manifestoNote.text}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:col-span-8">
            {STUDIO_CONTENT.figures.map((fig) => (
              <div
                key={fig.label}
                className="border-t border-black/15 pt-5"
              >
                <p className="t-figure text-black">{fig.value}</p>
                <p className="t-ui mt-3 text-[#005A7A]">{fig.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precursores / Founders Section (William Del Barrio & Higor Freitas Alves) */}
      <section className="bg-white px-[1.625rem] pb-24 pt-6 text-black max-[767px]:pb-14">
        <div className="border-t border-black/12 pt-14">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <Eyebrow label="Precursores" tone="dark" />
            <p className="t-body max-w-[30rem] text-black/65">
              Duas trajetórias complementares — estética autoral em chiaroscuro e disciplina cinematográfica de campo — reunidas para construir ecossistemas naturais.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {STUDIO_CONTENT.founders.map((founder) => (
              <article
                key={founder.name}
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0A1115]">
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-black/12 pt-4">
                  <div>
                    <h3 className="text-[1.45rem] font-medium tracking-[-0.02em] text-black">
                      {founder.name}
                    </h3>
                    <p className="t-small-regular mt-1 text-[#005A7A]">
                      {founder.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={founder.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="t-small hover-underline text-black/75 hover:text-black"
                    >
                      {founder.handle}
                    </a>
                    {founder.website && (
                      <a
                        href={founder.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="t-small hover-underline text-[#008DCD]"
                      >
                        Site
                      </a>
                    )}
                  </div>
                </div>
                <p className="t-text mt-3 max-w-[34rem] text-black/65">
                  {founder.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Core Authorial Values (Carnegie + Rackham + O Básico Bem Feito) */}
      <section className="values bg-[#071015] px-[1.625rem] py-24 text-white max-[767px]:py-14">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Eyebrow label="Princípios" tone="light" />
          <p className="t-body max-w-[32rem] text-white/70">
            Nossa metodologia une a engenharia humana da escuta genuína ao rigor investigativo que transforma potencial em resultado mensurável.
          </p>
        </div>

        <div className="divide-y divide-white/12 border-y border-white/12">
          {STUDIO_CONTENT.values.map((val) => (
            <div
              key={val.index}
              className="grid grid-cols-1 gap-4 py-9 md:grid-cols-12"
            >
              <span className="t-ui text-[#00C2FF] md:col-span-2">
                ./ {val.index}
              </span>
              <h3 className="t-title text-[1.95rem] leading-tight text-white md:col-span-4">
                {val.title}
              </h3>
              <p className="t-body text-white/70 md:col-span-5 md:col-start-8">
                {val.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Light Theme Closing Statement with Monumental ©26 */}
      <ClosingStatementBlock
        theme="light"
        eyebrow={STUDIO_CONTENT.closing.eyebrow}
        text={STUDIO_CONTENT.closing.text}
        ctaLabel={STUDIO_CONTENT.closing.ctaLabel}
        word={STUDIO_CONTENT.closing.word}
        image={STUDIO_CONTENT.closing.image}
        onCtaClick={() => onNavigate('projetos')}
      />
    </div>
  )
}
