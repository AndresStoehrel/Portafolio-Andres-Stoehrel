import React from 'react';
import { REMITLY_CASE as copy } from '../data/remitlyCase';
import fases from '../assets/remitly/mi-fase-proyecto.png';
import citasMovil from '../assets/remitly/citas-movil.png';
import citasDesktop from '../assets/remitly/citas-desktop.png';
import pareto from '../assets/remitly/ley-pareto.png';
import journey from '../assets/remitly/journey-map.png';
import prototipo1 from '../assets/remitly/prototipo-1.png';
import prototipo2 from '../assets/remitly/prototipo-2.png';
import prototipo3 from '../assets/remitly/prototipo-3.png';
import prototipo4 from '../assets/remitly/prototipo-4.png';
import metricasTesteo from '../assets/remitly/metricas-testeo.png';
import nps from '../assets/remitly/cuestionario-nps.png';
import portadaFoto from '../assets/remitly/portada-foto.jpg';

interface RemitlyCaseStudyViewProps {
  onGoBack: () => void;
  onNavigatePrev?: () => void;
  onNavigateNext?: () => void;
  prevProjectTitle?: string;
  nextProjectTitle?: string;
}

const caseShell = 'w-full max-w-[90rem] mx-auto pl-3 pr-4 md:pl-4 lg:pl-4 lg:pr-6';
const caseKicker = 'font-mono font-normal uppercase text-[0.625rem] tracking-[0.1em]';
const railShift = 'lg:-ml-10 xl:-ml-16';
const ruleShift = 'lg:-ml-10 xl:-ml-16 lg:w-[calc(100%+2.5rem)] xl:w-[calc(100%+4rem)]';

const EditorialRow: React.FC<{
  kicker: string;
  title?: string;
  showKicker?: boolean;
  children: React.ReactNode;
}> = ({ kicker, title, showKicker = true, children }) => (
  <section className={caseShell}>
    <div className={`${ruleShift} border-t border-ink`} />
    <div className="layout-section-y grid grid-cols-1 lg:grid-cols-12 gap-x-8 lg:gap-x-24 gap-y-3 items-start">
      {showKicker ? (
        <p className={`${caseKicker} ${railShift} text-ink-muted m-0 lg:col-span-5`}>{kicker}</p>
      ) : (
        <div className="hidden lg:block lg:col-span-5" aria-hidden="true" />
      )}
      {title ? (
        <>
          <div className="hidden lg:block lg:col-span-7" aria-hidden="true" />
          <h2 className={`${railShift} font-sans font-medium m-0 max-w-xl leading-[1.15] tracking-tight text-[clamp(1.35rem,2.1vw,1.75rem)] lg:col-span-5 lg:sticky lg:top-20`}>
            {title}
          </h2>
          <div className="lg:col-span-7">{children}</div>
        </>
      ) : (
        <div className="lg:col-span-7">{children}</div>
      )}
    </div>
  </section>
);

const Body: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <p className={`font-sans font-normal text-[16px] leading-[1.48] text-ink max-w-[36rem] m-0 ${className}`}>
    {children}
  </p>
);

const Subtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="font-sans font-medium text-ink m-0 mt-10 mb-3 first:mt-0 max-w-[36rem] text-[1.15rem] leading-snug">
    {children}
  </h3>
);

const IdeacionRightTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <h3
    className={`font-sans font-medium text-ink-muted m-0 max-w-[36rem] leading-[1.15] tracking-tight text-[clamp(1.25rem,1.8vw,1.5rem)] ${className}`}
  >
    {children}
  </h3>
);

const CaseImage: React.FC<{ src: string; alt?: string; className?: string }> = ({
  src,
  alt = '',
  className = '',
}) => (
  <img src={src} alt={alt} className={`mt-14 w-full h-auto block ${className || 'max-w-[48rem]'}`} />
);

const MutePlaceholder: React.FC = () => (
  <div
    className="mt-14 w-full max-w-[48rem] min-h-[10rem] md:min-h-[12rem] bg-ink/[0.06] border border-ink/20"
    aria-hidden="true"
  />
);

const NumberedList: React.FC<{ items: readonly string[] }> = ({ items }) => (
  <div className="max-w-[36rem]">
    {items.map((item, idx) => (
      <div
        key={item}
        className={`grid grid-cols-[2.5rem_1fr] gap-3 items-start py-4 ${
          idx === 0 ? 'border-t border-ink/20' : ''
        } border-b border-ink/20`}
      >
        <span className={`${caseKicker} text-ink-muted pt-1`}>{String(idx + 1).padStart(2, '0')}</span>
        <p className="font-sans font-normal text-[20px] leading-[1.48] text-ink-muted m-0">{item}</p>
      </div>
    ))}
  </div>
);

export const RemitlyCaseStudyView: React.FC<RemitlyCaseStudyViewProps> = ({
  onGoBack,
  onNavigatePrev,
  onNavigateNext,
  prevProjectTitle,
  nextProjectTitle,
}) => {
  return (
    <article className="w-full bg-canvas text-ink min-h-screen font-sans">
      <div className="flex w-full flex-col lg:h-[calc(100svh-3.5rem-1px)]">
        <div className="bg-canvas shrink-0">
          <div className={`${caseShell} flex items-center justify-between gap-4 py-4`}>
            <button
              type="button"
              onClick={onGoBack}
              className={`${caseKicker} text-ink/80 hover:text-ink transition-colors duration-150 cursor-pointer`}
            >
              ← Volver a case studies
            </button>
            <span className={`hidden sm:inline ${caseKicker} text-ink-muted`}>{copy.kicker}</span>
          </div>
        </div>
        <div className="bg-canvas shrink-0 px-5 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10">
          <p className={`${caseKicker} text-ink-muted m-0 mb-5 md:mb-6`}>{copy.kicker}</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <h1 className="font-sans font-medium text-balance m-0 max-w-3xl leading-[1.12] tracking-tight text-[clamp(1.75rem,3.2vw,2.65rem)]">
              {copy.heroTitle}
            </h1>
            <p className={`${caseKicker} text-ink m-0 shrink-0 sm:pt-1`}>Remitly</p>
          </div>
        </div>
        <div className="relative min-h-[min(56vw,18rem)] flex-1 lg:min-h-0">
          <img
            src={portadaFoto}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
          />
        </div>
      </div>

      <header className={`${caseShell} layout-section-y`}>
        <div className={`${ruleShift} border-y border-ink py-6 md:py-8`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {copy.ficha.map((item) => (
              <div key={item.label}>
                <span className={`${caseKicker} text-ink-muted block mb-2`}>{item.label}</span>
                <span className="type-body text-ink block leading-snug">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <EditorialRow kicker={copy.resumen.kicker} title={copy.resumen.title}>
        {copy.resumen.paragraphs.map((paragraph, idx) => (
          <Body key={paragraph.slice(0, 48)} className={idx === 0 ? 'mb-5' : ''}>
            {paragraph}
          </Body>
        ))}
      </EditorialRow>

      <EditorialRow kicker={copy.problema.kicker} title={copy.problema.title}>
        <Body>{copy.problema.body}</Body>
        <MutePlaceholder />
      </EditorialRow>

      <EditorialRow kicker={copy.contexto.kicker} title={copy.contexto.title}>
        <Body>{copy.contexto.body}</Body>
        <CaseImage src={fases} />
      </EditorialRow>

      <EditorialRow kicker={copy.investigacion.kicker} title={copy.investigacion.title}>
        <Body>{copy.investigacion.intro}</Body>
        <img
          src={citasMovil}
          alt=""
          className="mt-14 w-full max-w-[48rem] h-auto block md:hidden"
        />
        <img
          src={citasDesktop}
          alt=""
          className="mt-14 w-full max-w-[48rem] h-auto hidden md:block"
        />
        <p className={`${caseKicker} text-ink-muted m-0 mt-16 mb-3`}>{copy.investigacion.insightsLabel}</p>
        <NumberedList items={copy.investigacion.insights} />
        <IdeacionRightTitle className="mt-10 mb-5">{copy.investigacion.hallazgoTitle}</IdeacionRightTitle>
        <Body>{copy.investigacion.hallazgo}</Body>
        <CaseImage src={pareto} className="max-w-[26rem]" />
      </EditorialRow>

      <EditorialRow kicker={copy.investigacion.definicion.kicker} title={copy.investigacion.seguimientoTitle}>
        <Body>{copy.investigacion.seguimientoBody}</Body>
        <CaseImage src={journey} />
        <Body className="mt-8">{copy.investigacion.definicion.body}</Body>
      </EditorialRow>

      <EditorialRow kicker={copy.investigacion.ideacion.kicker} title={copy.investigacion.ideacion.title}>
        <IdeacionRightTitle className="mb-7">{copy.investigacion.hmwQuestion}</IdeacionRightTitle>
        <Body>{copy.investigacion.hmwBody}</Body>
        <IdeacionRightTitle className="mt-10 mb-8">{copy.investigacion.ideacion.funcionalidadesTitle}</IdeacionRightTitle>
        <div className="w-full max-w-[48rem]">
          <img src={prototipo1} alt="" className="w-full h-auto block" />
          <img src={prototipo2} alt="" className="w-full h-auto block" />
          <img src={prototipo3} alt="" className="w-full h-auto block" />
          <img src={prototipo4} alt="" className="w-full h-auto block" />
        </div>
      </EditorialRow>

      <EditorialRow kicker={copy.testeo.kicker} title={copy.testeo.title}>
        <Body>{copy.testeo.intro}</Body>
        <CaseImage src={metricasTesteo} />
        <p className={`${caseKicker} text-ink-muted m-0 mt-8 max-w-[36rem]`}>{copy.testeo.participantes}</p>
        <CaseImage src={nps} />
      </EditorialRow>

      <EditorialRow kicker={copy.hallazgos.kicker} title={copy.hallazgos.title}>
        <NumberedList items={copy.hallazgos.items} />
        <Subtitle>{copy.hallazgos.recomendacionesTitle}</Subtitle>
        <Body>{copy.hallazgos.recomendaciones}</Body>
        <Subtitle>{copy.hallazgos.closeTitle}</Subtitle>
        <Body>{copy.hallazgos.close}</Body>
      </EditorialRow>

      <footer className="about-panel-charcoal">
        <div className={`${caseShell} layout-section-y`}>
          {(prevProjectTitle || nextProjectTitle) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-white/20">
            {prevProjectTitle && onNavigatePrev ? (
            <button
              type="button"
              onClick={onNavigatePrev}
              className={`text-left py-8 cursor-pointer hover:opacity-70 transition-opacity duration-150${
                nextProjectTitle ? ' md:pr-8 border-b md:border-b-0 md:border-r border-white/20' : ''
              }`}
            >
              <div
                className="type-kicker mb-2"
                style={{ color: 'var(--color-about-muted-on-charcoal)' }}
              >
                ← Proyecto anterior
              </div>
              <div className="type-headline font-medium">{prevProjectTitle}</div>
            </button>
            ) : null}
            {nextProjectTitle && onNavigateNext ? (
            <button
              type="button"
              onClick={onNavigateNext}
              className="text-left md:text-right py-8 md:pl-8 md:col-start-2 cursor-pointer hover:opacity-70 transition-opacity duration-150"
            >
              <div
                className="type-kicker mb-2"
                style={{ color: 'var(--color-about-muted-on-charcoal)' }}
              >
                Siguiente proyecto →
              </div>
              <div className="type-headline font-medium">{nextProjectTitle}</div>
            </button>
            ) : null}
          </div>
          )}
          <div className="text-center mt-12 pt-8 border-t border-white/15">
            <button
              type="button"
              onClick={onGoBack}
              className="type-kicker cursor-pointer hover:text-accent transition-colors duration-150"
              style={{ color: 'var(--color-about-muted-on-charcoal)' }}
            >
              ↑ Volver al listado de proyectos
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
};
