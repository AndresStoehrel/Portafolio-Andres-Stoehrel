import React from 'react';
import { ProjectCaseStudy } from '../data/projects';
import { EmptyState } from './EmptyState';
import { ProjectGridRow } from './ProjectGridRow';
import { HeroCircleGrid } from './HeroCircleGrid';
import { WorkMethodSection } from './WorkMethodSection';
import remitlyHero from '../assets/images/remitly_hero_screen_1791825528481.jpg';
import telepianxosHero from '../assets/images/telepianxos_hero_screen_1791825545434.jpg';
import pedidosyaHero from '../assets/images/pedidosya_hero_screen_1791825561779.jpg';
import heroTexture from '../assets/images/hero-texture.jpg';

interface HomeViewProps {
  projects: ProjectCaseStudy[];
  isEmpty: boolean;
  onSelectProject: (projectId: string) => void;
  onResetData: () => void;
  onNavigateContact?: () => void;
}

const getProjectHeroSrc = (projectId: string) => {
  if (projectId === 'telepianxos') return telepianxosHero;
  if (projectId === 'pedidos-ya') return pedidosyaHero;
  return remitlyHero;
};

export const HomeView: React.FC<HomeViewProps> = ({
  projects,
  isEmpty,
  onSelectProject,
  onResetData,
}) => {
  return (
    <div className="w-full bg-canvas">
      {/* Hero — bloques de color flush (sin bordes divisorios) */}
      <section className="bg-canvas">
        <div className="flex flex-col md:flex-row md:items-stretch md:pl-[max(var(--space-section-x),calc((100%-var(--max-content))/2+var(--space-section-x)))]">
          <div className="flex min-h-[50vh] flex-1 flex-col justify-between px-[var(--space-section-x)] py-[var(--space-section-y)] md:min-h-[60vh] md:pl-0 md:pr-[var(--space-section-x)]">
            <div>
              <h1 className="type-hero-name text-balance max-w-4xl m-0">
                Andres Stoehrel
              </h1>
              <p className="type-kicker text-ink-muted mt-3 md:mt-4 mb-0 max-w-max">
                Diseñador de producto - Flujos de trabajo con agentes IA
              </p>
              <p className="type-hero-lead text-ink mt-4 md:mt-5 mb-0 max-w-2xl text-balance">
                Creo experiencias digitales significativas que marcan la diferencia.
              </p>
            </div>

            <div className="pt-8 md:pt-12">
              <span className="about-tag-on-sage type-kicker font-normal inline-block">
                Craft humana x apalancamiento agente
              </span>
            </div>
          </div>

          <div
            className="relative w-full shrink-0 overflow-hidden bg-orange min-h-[14rem] md:min-h-[60vh] md:w-[min(28rem,38%)]"
            aria-hidden="true"
          >
            <img
              src={heroTexture}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <HeroCircleGrid />
          </div>
        </div>
      </section>

      <section className="w-full bg-orange text-ink" aria-label="Craft">
        <div
          className="mx-auto text-balance max-w-5xl"
          style={{
            maxWidth: 'var(--max-content)',
            paddingBlock: 'var(--space-craft-banner-y)',
            paddingInline: 'var(--space-craft-banner-x)',
          }}
        >
          <p className="type-craft-banner m-0">
            La IA facilita el proceso, pero el criterio es lo que genera el CRAFT.
          </p>
        </div>
      </section>

      {/* Case studies — grid 2 cols, fondo blanco */}
      <section
        id="work"
        className="w-full bg-canvas border-t border-ink"
        style={{ paddingBottom: 'var(--space-section-y)' }}
      >
        <div
          className="mx-auto flex items-end justify-between gap-6"
          style={{
            maxWidth: 'var(--max-content)',
            padding:
              'var(--space-section-y) var(--space-section-x) clamp(1rem, 2vw, 1.5rem)',
          }}
        >
          <h2 className="type-kicker text-ink m-0 normal-case tracking-normal text-sm md:text-base">
            Case studies
          </h2>
          <span className="type-kicker text-ink-muted shrink-0">
            {isEmpty ? '0 proyectos' : `${projects.length} casos`}
          </span>
        </div>

        {isEmpty || projects.length === 0 ? (
          <EmptyState
            title="NO HAY PROYECTOS EN EL LISTADO"
            description="Has activado la vista de prueba de estado vacío. Puedes restaurar los 3 proyectos interactivos haciendo clic a continuación."
            onReset={onResetData}
          />
        ) : (
          <div className="grid grid-cols-1 w-full">
            {projects.map((project) => (
              <ProjectGridRow
                key={project.id}
                title={project.title}
                index={project.number}
                imageSrc={getProjectHeroSrc(project.id)}
                imageAlt={`Miniatura ${project.title}`}
                onClick={() => onSelectProject(project.id)}
              />
            ))}
            <ProjectGridRow
              title="Otros proyectos"
              onClick={() => onSelectProject(projects[0].id)}
              disabled={projects.length === 0}
            />
          </div>
        )}
      </section>

      {/* About — Fase 4 DS (paneles fijos + type-kicker / type-body) */}
      <section id="about" className="w-full border-t border-ink">
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-stretch">
          <div className="relative flex flex-col min-h-full about-panel-charcoal">
            <div className="flex w-full flex-1 items-start about-charcoal-inset">
              <p
                className="about-quote-mark select-none m-0 shrink-0 font-sans font-normal"
                aria-hidden="true"
              >
                “
              </p>

              <div className="flex flex-1 justify-center">
                <div className="flex flex-col items-start">
                  <div className="about-portrait overflow-hidden shrink-0">
                    <img
                      src=""
                      alt=""
                      className="hidden w-full h-full object-cover object-center"
                      data-about-portrait
                    />
                  </div>
                  <p className="about-name-on-charcoal mb-0 mt-[44px] font-sans">Andrés Stoehrel</p>
                  <p className="about-role-on-charcoal m-0 font-mono uppercase font-normal">
                    UX/UI &amp; Product Designer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-panel-sage flex flex-col items-start text-left min-h-full md:max-w-none">
            <p className="type-kicker about-kicker-on-sage mt-0 font-normal">01 // Sobre mí</p>

            <div className="about-body-on-sage max-w-none">
              <h2 className="about-section-title-sage m-0 mb-4">Cómo empezó todo</h2>
              <p className="m-0">
                Desde niño me interesaba mucho lo relacionado con el diseño…aunque aún no lo sabía. Dibujaba
                carátulas de discos, pintaba y armaba tanques a escala y hacía maquetas para presentarlos.
              </p>
              <p className="m-0 mt-5">
                Pasé por arquitectura y publicidad, lo que me permitió entender la espacialidad y poner al usuario
                como centro del proceso creativo. Siempre me llamó la atención el minimalismo de Mies van der Rohe,
                gran influencia de cómo veo las interfaces actualmente, &ldquo;menos es más&rdquo;.
              </p>

              <h2 className="about-section-title-sage m-0 mt-8 md:mt-10 mb-4">Cómo siguió</h2>
              <p className="m-0">
                Luego todo esto encajó. En la actualidad creo en diseñar productos con intención. A menudo
                confundimos lo que simplemente se ve bien con lo que realmente resulta útil al usuario. Me enfoco en
                crear productos centrados en el usuario, que resuelvan problemas reales y que impulsen el crecimiento
                de los negocios.
              </p>
              <p className="m-0 mt-5">
                A partir de investigación basada en datos y principios de diseño enfocados en las personas, busco
                diseñar productos que no sólo sean bonitos, sino accesibles y funcionales.
              </p>
            </div>

            <div className="about-tags flex flex-wrap gap-2 md:gap-3">
              {['UX Research', 'UI & Prototipado', 'Sistemas de Diseño', 'Agile / Scrum'].map(
                (tag) => (
                  <span key={tag} className="about-tag-on-sage type-kicker font-normal inline-block">
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <WorkMethodSection />

      {/* ========================================================
          FOOTER / CONTACT SECTION (Black Impact Block)
         ======================================================== */}
      <footer
        id="contact"
        className="bg-black text-white"
        style={{ padding: 'var(--space-section-y) var(--space-section-x)' }}
      >
        <div className="mx-auto" style={{ maxWidth: 'var(--max-content)' }}>
          <h2 className="type-display text-white mb-12 md:mb-16 text-balance max-w-5xl">
            Creemos experiencias de alto impacto
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-16 md:mb-24">
            <div className="lg:col-span-8">
              <p className="type-kicker text-white/70 mb-4">Contacto directo · Santiago de Chile</p>
              <a
                href="mailto:andres.stoehrel@gmail.com"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium hover:text-accent transition-colors inline-block max-w-max break-all"
              >
                andres.stoehrel@gmail.com
              </a>
              <p className="type-kicker text-white/70 mt-4 normal-case">Teléfono: +56 9 2390 953</p>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-3 md:gap-4">
              {[
                { value: '8+', label: 'Años experiencia' },
                { value: '100%', label: 'User-centered' },
                { value: 'USACH', label: 'Diplomado UX/UI' },
                { value: 'FIGMA', label: 'Prototipado hi-fi', invert: true },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`p-4 ${stat.invert ? 'bg-white text-ink' : 'border border-white/35'}`}
                >
                  <div className="font-mono text-xl md:text-2xl font-medium tabular-nums">{stat.value}</div>
                  <div className="type-kicker text-[10px] mt-1 opacity-75">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-white/20 gap-4">
            <p className="type-kicker text-white/70 normal-case">
              © 2026 Andrés Stoehrel Fuchslocher · UX/UI &amp; Product Designer.
            </p>
            <div className="flex flex-wrap gap-6 type-kicker text-white/70">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                LinkedIn ↗
              </a>
              <a href="https://behance.net/andres-stoehrel" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                Behance ↗
              </a>
              <a href="mailto:andres.stoehrel@gmail.com" className="hover:text-accent transition-colors">
                Email directo ↗
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
