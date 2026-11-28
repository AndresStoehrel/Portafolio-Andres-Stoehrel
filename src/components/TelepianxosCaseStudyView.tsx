import React from 'react';
import { TELEPIANXOS_CASE as copy } from '../data/telepianxosCase';
import flujoActual from '../assets/tlpianxos/problema_flujo-actual.png';
import etapas from '../assets/tlpianxos/mi_rol_etapas.png';
import journey from '../assets/tlpianxos/journey_map_.png';
import investigacionFinal from '../assets/tlpianxos/Investigación_alfinal.png';
import funcionalidades from '../assets/tlpianxos/5funcionalidades_nuvas.png';
import cardsTesteo from '../assets/tlpianxos/cards_tareas_testeo.png';
import graficosTesteo from '../assets/tlpianxos/graficos_testeo.png';
import antesDespues from '../assets/tlpianxos/4cambios_antes_despues.png';
import citaMujer from '../assets/tlpianxos/cita-mujer.png';
import citaHombre from '../assets/tlpianxos/cita-hombre.jpg';
import portadaFoto from '../assets/tlpianxos/portada-foto.jpg';
import { CaseQuote } from './CaseQuote';

interface TelepianxosCaseStudyViewProps {
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
  children: React.ReactNode;
}> = ({ kicker, title, children }) => (
  <section className={caseShell}>
    <div className={`${ruleShift} border-t border-ink`} />
    <div className="layout-section-y grid grid-cols-1 lg:grid-cols-12 gap-x-8 lg:gap-x-24 gap-y-3 items-start">
      <p className={`${caseKicker} ${railShift} text-ink-muted m-0 lg:col-span-5`}>{kicker}</p>
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

const Subtitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
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

export const TelepianxosCaseStudyView: React.FC<TelepianxosCaseStudyViewProps> = ({
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
            <p className={`${caseKicker} text-ink m-0 shrink-0 sm:pt-1`}>TLPianxos</p>
          </div>
        </div>
        <div className="relative min-h-[min(56vw,18rem)] flex-1 lg:min-h-0">
          <img
            src={portadaFoto}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
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

      <EditorialRow kicker="Resumen">
        {copy.resumen.map((paragraph, idx) => (
          <Body key={paragraph.slice(0, 48)} className={idx === 0 ? 'mb-5' : ''}>
            {paragraph}
          </Body>
        ))}
      </EditorialRow>

      <EditorialRow kicker={copy.problema.kicker} title={copy.problema.title}>
        {copy.problema.paragraphs.map((paragraph, idx) => (
          <Body key={paragraph.slice(0, 48)} className={idx === 0 ? 'mb-5' : ''}>
            {paragraph}
          </Body>
        ))}
        <CaseImage src={flujoActual} />
      </EditorialRow>

      <EditorialRow kicker={copy.contexto.kicker} title={copy.contexto.title}>
        <Body>{copy.contexto.body}</Body>
        <CaseImage src={etapas} />
      </EditorialRow>

      <EditorialRow kicker={copy.investigacion.kicker} title={copy.investigacion.title}>
        <Body className="mb-5">{copy.investigacion.intro}</Body>
        <Body>{copy.investigacion.method}</Body>
        <p className={`${caseKicker} text-ink-muted m-0 mt-10 mb-3`}>{copy.investigacion.insightsLabel}</p>
        <NumberedList items={copy.investigacion.insights} />
        <CaseImage src={investigacionFinal} />
        <Subtitle className="mt-10 mb-5">{copy.investigacion.segmentTitle}</Subtitle>
        {copy.investigacion.segment.map((paragraph, idx) => (
          <Body key={paragraph.slice(0, 48)} className={idx === 0 ? 'mb-5' : ''}>
            {paragraph}
          </Body>
        ))}
        <CaseImage src={journey} />
        <Subtitle className="mt-10 mb-3">{copy.investigacion.featuresLabel}</Subtitle>
        <p className={`${caseKicker} text-ink-muted m-0 mb-3`}>{copy.investigacion.featuresIntro}</p>
        <NumberedList items={copy.investigacion.features} />
        <CaseImage src={funcionalidades} />
      </EditorialRow>

      <EditorialRow kicker={copy.testeo.kicker} title={copy.testeo.title}>
        <Body>{copy.testeo.results}</Body>
        <Subtitle className="mt-10 mb-8">{copy.testeo.metasTitle}</Subtitle>
        <img src={cardsTesteo} alt="" className="w-full max-w-[48rem] h-auto block" />
        <CaseImage src={graficosTesteo} />
        <CaseQuote
          text={copy.testeo.quotes[0].text}
          attribution={copy.testeo.quotes[0].attribution}
          photo={citaMujer}
          photoPosition="center 16%"
        />
        <Body className="mt-8">{copy.testeo.quotesIntro}</Body>
        <CaseQuote
          text={copy.testeo.quotes[1].text}
          attribution={copy.testeo.quotes[1].attribution}
          photo={citaHombre}
          photoPosition="center 28%"
        />
        <Body className="mt-8">{copy.testeo.close}</Body>
      </EditorialRow>

      <EditorialRow kicker={copy.iteraciones.kicker} title={copy.iteraciones.title}>
        <Body>{copy.iteraciones.intro}</Body>
        <div className="max-w-[36rem] mt-8">
          {copy.iteraciones.items.map((item, idx) => (
            <div
              key={item.title}
              className={`grid grid-cols-[2.5rem_1fr] gap-3 items-start py-4 ${
                idx === 0 ? 'border-t border-ink/20' : ''
              } border-b border-ink/20`}
            >
              <span className={`${caseKicker} text-ink-muted pt-1`}>
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-sans font-medium text-[20px] leading-[1.35] text-ink-muted m-0 mb-2">
                  {item.title}
                </h3>
                <p className="font-sans font-normal text-[16px] leading-[1.48] text-ink m-0">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <CaseImage src={antesDespues} />
      </EditorialRow>

      <EditorialRow kicker={copy.limites.kicker} title={copy.limites.title}>
        {copy.limites.paragraphs.map((paragraph, idx) => (
          <Body key={paragraph.slice(0, 48)} className={idx === 0 ? 'mb-5' : ''}>
            {paragraph}
          </Body>
        ))}
      </EditorialRow>

      <EditorialRow kicker={copy.aprendizajes.kicker} title={copy.aprendizajes.title}>
        <NumberedList items={copy.aprendizajes.items} />
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
