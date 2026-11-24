import React, { useEffect, useState } from 'react'
import { HOME_CONTENT, PROJECTS, ProjectCase, RouteKey } from './data/avanzaContent'
import {
  FloatingMenu,
  OverlayFormModal,
  StickyBookingPill,
} from './components/GlobalChrome'
import {
  ClosingStatementBlock,
  HomeHero,
  ProjectListBlock,
  StatementBlock,
} from './components/HomeSections'
import { TheFooter } from './components/TheFooter'
import { ProjectOverlay } from './components/ProjectOverlay'
import { ServicesPage, StudioPage, WorksPage } from './components/SubPages'

export function App() {
  const [route, setRoute] = useState<RouteKey>('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [formModal, setFormModal] = useState<'contact' | 'pitchdeck' | null>(
    null
  )
  const [selectedProject, setSelectedProject] = useState<ProjectCase | null>(
    null
  )

  const isReceded = menuOpen || formModal !== null

  const navigate = (next: RouteKey) => {
    setRoute(next)
    setSelectedProject(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const titles: Record<RouteKey, string> = {
      home: 'avanza — soluções de mercado | Ecossistema de Marketing Natural',
      projetos: 'Projetos | avanza — soluções de mercado',
      servicos: 'Serviços | avanza — soluções de mercado',
      estudio: 'Estúdio | avanza — soluções de mercado',
    }
    document.title = titles[route]
  }, [route])

  return (
    <div className="layout relative min-h-screen bg-black">
      {/* Persistent Top-Right Sticky Booking Pill */}
      <StickyBookingPill
        isReceded={isReceded}
        onOpenContact={() => {
          setMenuOpen(false)
          setFormModal('contact')
        }}
      />

      {/* Receding Page Surface (exact unanim.studio interaction when drawers open) */}
      <div
        className={`layout__page isolate bg-white recede ${
          isReceded ? 'is-receded' : ''
        }`}
      >
        <main>
          {route === 'home' && (
            <div className="grid grid-cols-1">
              <HomeHero
                onOpenPitchdeck={() => {
                  setMenuOpen(false)
                  setFormModal('pitchdeck')
                }}
              />
              <StatementBlock />
              <ProjectListBlock
                projects={PROJECTS}
                onSelectProject={(p) => setSelectedProject(p)}
                onViewAll={() => navigate('projetos')}
              />
              <ClosingStatementBlock
                theme="dark"
                eyebrow={HOME_CONTENT.closing.eyebrow}
                text={HOME_CONTENT.closing.text}
                ctaLabel={HOME_CONTENT.closing.ctaLabel}
                word={HOME_CONTENT.closing.word}
                image={HOME_CONTENT.closing.image}
                onCtaClick={() => navigate(HOME_CONTENT.closing.ctaRoute)}
              />
            </div>
          )}

          {route === 'projetos' && (
            <WorksPage
              onSelectProject={(p) => setSelectedProject(p)}
              onOpenContact={() => setFormModal('contact')}
            />
          )}

          {route === 'servicos' && (
            <ServicesPage
              onSelectProject={(p) => setSelectedProject(p)}
              onOpenContact={() => setFormModal('contact')}
            />
          )}

          {route === 'estudio' && <StudioPage onNavigate={navigate} />}
        </main>

        <TheFooter
          currentRoute={route}
          projects={PROJECTS}
          onNavigate={navigate}
          onSelectProject={(p) => setSelectedProject(p)}
          onOpenContact={() => {
            setMenuOpen(false)
            setFormModal('contact')
          }}
          onOpenPitchdeck={() => {
            setMenuOpen(false)
            setFormModal('pitchdeck')
          }}
        />
      </div>

      {/* Floating Bottom-Center Menu Pill + Expanding Drawer */}
      <FloatingMenu
        currentRoute={route}
        isOpen={menuOpen}
        isModalOpen={formModal !== null}
        onToggle={() => {
          setFormModal(null)
          setMenuOpen((prev) => !prev)
        }}
        onCloseAll={() => {
          setMenuOpen(false)
          setFormModal(null)
        }}
        onNavigate={navigate}
        onOpenContact={() => setFormModal('contact')}
        onOpenPitchdeck={() => setFormModal('pitchdeck')}
      />

      {/* Contact / Pitchdeck Floating Glass Form Modal */}
      <OverlayFormModal
        mode={formModal}
        onClose={() => setFormModal(null)}
      />

      {/* Editorial Case Study Overlay */}
      <ProjectOverlay
        project={selectedProject}
        allProjects={PROJECTS}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        onOpenContact={() => setFormModal('contact')}
      />
    </div>
  )
}

export default App
