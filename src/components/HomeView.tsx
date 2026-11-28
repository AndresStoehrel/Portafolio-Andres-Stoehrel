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
import heroCraftBlur from '../assets/images/hero-craft-blur.jpg';
import craftFilosofia from '../assets/images/craft-filosofia.jpg';

interface HomeViewProps {
  projects: ProjectCaseStudy[];
  isEmpty: boolean;
  onSelectProject: (projectId: string) => void;
  onResetData: () => void;
  onNavigateWork?: () => void;
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
  onNavigateWork,
}) => {
  return (
    <div className="w-full bg-canvas">
      {/* Hero — bloques de color flush (sin bordes divisorios) */}
      <section className="bg-canvas">
        <div className="flex flex-col md:flex-row md:items-stretch md:pl-[var(--content-inset)]">
          <div className="flex min-h-[50vh] flex-1 flex-col px-[var(--space-section-x)] py-[var(--space-section-y)] md:min-h-[60vh] md:pl-0 md:pr-[var(--space-section-x)]">
            <div>
              <h1 className="type-hero-name m-0 max-w-4xl">Andres Stoehrel</h1>
              <p className="type-kicker text-ink-muted mt-3 md:mt-4 mb-0 max-w-max">
                Diseñador de producto - Flujos de trabajo con agentes IA
              </p>
              <p className="type-hero-lead text-ink mt-4 md:mt-5 mb-0 max-w-2xl text-balance">
                Creo experiencias digitales significativas que marcan la diferencia.
              </p>
            </div>

            <div className="hero-craft-row mt-[var(--space-section-y)] flex w-max max-w-full items-stretch">
              <span className="about-tag-on-sage type-kicker font-normal inline-block">
                Craft humana x apalancamiento agente
              </span>
              <span className="hero-craft-texture" aria-hidden="true">
                <img src={heroCraftBlur} alt="" />
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
            <HeroCircleGrid onNavigateWork={onNavigateWork} />
          </div>
        </div>
      </section>

      <section className="craft-banner w-full bg-orange text-ink" aria-label="Craft">
        <div className="craft-banner-layout">
          <h2 className="craft-banner-title">Filosofía</h2>
          <div className="craft-banner-right min-w-0">
            <div className="craft-banner-media">
              <img src={craftFilosofia} alt="" />
            </div>
            <div className="craft-banner-copy min-w-0 text-balance">
              <div className="craft-banner-copy-block">
                <p className="type-craft-banner m-0">
                  La IA facilita el proceso, pero el criterio es lo que genera el CRAFT.
                </p>
                <p className="craft-banner-note">
                  La IA sin criterio no genera nada bueno, el conocimiento es lo que diferencia una buena
                  solución de un resultado genérico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies — grid 2 cols, fondo blanco */}
      <section
        id="work"
        className="w-full bg-canvas border-t border-ink/20"
        style={{ paddingBottom: 'var(--space-section-y)' }}
      >
        <div className="work-section-head mx-auto flex items-end justify-between gap-6">
          <h2 className="section-index section-index-loose min-w-0 text-ink">
            <span className="section-index-num">01</span>
            <span className="section-title-display">Casos de estudio</span>
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
            {projects.map((project, index) => (
              <ProjectGridRow
                key={project.id}
                title={project.title}
                index={project.number}
                imageSrc={getProjectHeroSrc(project.id)}
                imageAlt={`Miniatura ${project.title}`}
                onClick={() => onSelectProject(project.id)}
                disabled={project.id === 'pedidos-ya'}
                note={project.id === 'pedidos-ya' ? 'coming soon' : undefined}
                showTopRule={index === 0}
              />
            ))}
            <ProjectGridRow
              title="Otros proyectos"
              index="04"
              showThumbnail
              onClick={() => {}}
              disabled
              note="coming soon"
            />
          </div>
        )}
      </section>

      {/* About — Fase 4 DS (paneles fijos + type-kicker / type-body) */}
      <section id="about" className="w-full border-t border-ink">
        <div className="split-40-60 md:items-stretch">
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
            <h2 className="section-index section-index-loose about-section-index min-w-0 m-0">
              <span className="section-index-num">02</span>
              <span className="section-title-display">Sobre mí</span>
            </h2>

            <div className="about-body-on-sage max-w-none">
              <h2 className="about-section-title-sage m-0 mb-4">Cómo empezó todo</h2>
              <div className="about-copy-cols">
                <p className="m-0">
                  Desde niño me interesaba mucho lo relacionado con el diseño…aunque aún no lo sabía. Dibujaba
                  carátulas de discos, pintaba y armaba tanques a escala y hacía maquetas para presentarlos.
                </p>
                <p className="m-0">
                  Pasé por arquitectura y publicidad, lo que me permitió entender la espacialidad y poner al usuario
                  como centro del proceso creativo. Siempre me llamó la atención el minimalismo de Mies van der Rohe,
                  gran influencia de cómo veo las interfaces actualmente, &ldquo;menos es más&rdquo;.
                </p>
              </div>

              <h2 className="about-section-title-sage m-0 mt-8 md:mt-10 mb-4">Cómo siguió</h2>
              <div className="about-copy-cols">
                <p className="m-0">
                  Luego todo esto encajó. En la actualidad creo en diseñar productos con intención. A menudo
                  confundimos lo que simplemente se ve bien con lo que realmente resulta útil al usuario. Me enfoco en
                  crear productos centrados en el usuario, que resuelvan problemas reales y que impulsen el crecimiento
                  de los negocios.
                </p>
                <p className="m-0">
                  A partir de investigación basada en datos y principios de diseño enfocados en las personas, busco
                  diseñar productos que no sólo sean bonitos, sino accesibles y funcionales.
                </p>
              </div>
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
        style={{
          marginTop: 'clamp(2.5rem, 5vw, 4rem)',
          paddingBlock: 'var(--space-section-y)',
          paddingInline: 'var(--content-inset)',
        }}
      >
        <div>
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
              <a
                href="https://www.linkedin.com/in/andres-stoehrel"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
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
