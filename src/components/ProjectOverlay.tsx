import React, { useEffect } from 'react'
import { ProjectCase } from '../data/avanzaContent'
import { DiagonalArrow, Eyebrow } from './BrandMark'

interface ProjectOverlayProps {
  project: ProjectCase | null
  allProjects: ProjectCase[]
  onClose: () => void
  onSelectProject: (project: ProjectCase) => void
  onOpenContact: () => void
}

export const ProjectOverlay: React.FC<ProjectOverlayProps> = ({
  project,
  allProjects,
  onClose,
  onSelectProject,
  onOpenContact,
}) => {
  useEffect(() => {
    if (!project) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  if (!project) return null

  const currentIdx = allProjects.findIndex((p) => p.slug === project.slug)
  const nextProject = allProjects[(currentIdx + 1) % allProjects.length]

  return (
    <div
      id="project-overlay-anchor"
      className="fixed inset-0 z-[260] overflow-y-auto bg-white text-black"
      role="dialog"
      aria-modal="true"
      aria-label={`Estudo de caso: ${project.name}`}
    >
      {/* Top Sticky Close Bar */}
      <div className="sticky top-0 z-20 flex items-center justify-between border-b border-black/10 bg-white/90 px-[1.625rem] py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="t-small text-[#008DCD]">./ {project.id}</span>
          <span className="t-ui text-black">{project.name}</span>
          <span className="t-small-regular hidden text-black/45 sm:inline">
            — {project.services}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="pressable t-ui inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-1.5 text-black transition-colors hover:bg-black hover:text-white"
        >
          <span>Fechar</span>
          <span aria-hidden="true">×</span>
        </button>
      </div>

      {/* Hero Editorial Visual */}
      <div className="relative h-[62vh] min-h-[24rem] w-full overflow-hidden bg-[#0A1319]">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
        <div className="absolute bottom-8 left-[1.625rem] right-[1.625rem] flex flex-wrap items-end justify-between gap-4 text-white">
          <div>
            <p className="t-small-regular mb-2 text-[#69C9F2]">
              {project.category} · {project.year}
            </p>
            <h2 className="t-title text-white">{project.name}</h2>
          </div>
          <p className="t-body max-w-[28rem] text-white/85">
            {project.tagline}
          </p>
        </div>
      </div>

      {/* Editorial Narrative Grid (SPIN Investigation -> Basic Done Well -> Impact) */}
      <div className="mx-auto max-w-[92rem] px-[1.625rem] py-20 max-[767px]:py-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow label="Contexto & Investigação" tone="dark" />
            <div className="mt-8 border-t border-black/10 pt-6">
              <p className="t-small-regular text-black/45 mb-3">
                Ecossistema entregue
              </p>
              <ul className="space-y-2.5">
                {project.ecosystemDelivered.map((item) => (
                  <li
                    key={item}
                    className="t-text flex items-start gap-2 text-black/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#008DCD]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-12 md:col-span-8">
            <div>
              <h3 className="t-ui mb-3 text-[#005A7A]">01. O cenário encontrado</h3>
              <p className="t-body text-black/80">{project.clientContext}</p>
            </div>
            <div>
              <h3 className="t-ui mb-3 text-[#005A7A]">
                02. A escuta e o diagnóstico real
              </h3>
              <p className="t-body text-black/80">{project.investigation}</p>
            </div>
            <div>
              <h3 className="t-ui mb-3 text-[#005A7A]">
                03. O básico bem feito em prática
              </h3>
              <p className="t-body text-black/80">{project.basicDoneWell}</p>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-1 gap-6 border-y border-black/10 py-10 sm:grid-cols-3">
              {project.impactMetrics.map((m) => (
                <div key={m.label}>
                  <p className="text-[2.75rem] font-normal tracking-[-0.04em] leading-none text-[#005A7A]">
                    {m.value}
                  </p>
                  <p className="t-text mt-2 text-black/60">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Client Quote */}
            <blockquote className="rounded-xl bg-[#F4F8FA] p-8 border border-[#008DCD]/15">
              <p className="text-[1.25rem] leading-relaxed tracking-[-0.015em] text-black">
                “{project.quote.text}”
              </p>
              <footer className="mt-5 flex items-center gap-2">
                <span className="t-ui text-black">{project.quote.author}</span>
                <span className="t-small-regular text-black/50">
                  — {project.quote.role}
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Bottom Action & Next Case Bar */}
      <div className="border-t border-black/10 bg-[#0A1319] px-[1.625rem] py-14 text-white">
        <div className="mx-auto flex max-w-[92rem] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="t-small-regular text-[#69C9F2] mb-1">Próximo caso</p>
            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              className="group inline-flex items-center gap-3 text-left"
            >
              <span className="t-title text-white group-hover:text-[#69C9F2] transition-colors">
                {nextProject.name}
              </span>
              <DiagonalArrow className="h-4 w-4 text-[#00C2FF]" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose()
              onOpenContact()
            }}
            className="pressable t-ui inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black transition-colors hover:bg-[#69C9F2]"
          >
            <span>Construir algo assim na sua empresa</span>
            <DiagonalArrow className="h-[0.5625rem] w-[0.5625rem]" />
          </button>
        </div>
      </div>
    </div>
  )
}
