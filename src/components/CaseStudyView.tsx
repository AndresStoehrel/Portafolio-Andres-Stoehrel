import React, { useState } from 'react';
import { ProjectCaseStudy } from '../data/projects';
import { DeviceMockup } from './DeviceMockup';

interface CaseStudyViewProps {
  project: ProjectCaseStudy;
  onGoBack: () => void;
  onNavigatePrev?: () => void;
  onNavigateNext?: () => void;
  prevProjectTitle?: string;
  nextProjectTitle?: string;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  project,
  onGoBack,
  onNavigatePrev,
  onNavigateNext,
  prevProjectTitle,
  nextProjectTitle,
}) => {
  const [comparisonMode, setComparisonMode] = useState<'after' | 'before' | 'side-by-side'>('side-by-side');

  return (
    <article className="w-full bg-canvas text-ink min-h-screen font-sans">
      <div className="border-b border-ink bg-canvas">
        <div className="layout-content flex items-center justify-between gap-4 py-4">
          <button
            type="button"
            onClick={onGoBack}
            className="type-kicker text-ink/80 hover:text-ink transition-colors duration-150 cursor-pointer"
          >
            ← Volver a case studies
          </button>

          <div className="hidden sm:flex items-center gap-6 type-kicker text-ink-muted">
            <span className="text-ink">Caso {project.number}</span>
            <span>Lectura ~2 min</span>
          </div>
        </div>
      </div>

      {/* ========================================================
          SECCIÓN 1: CABECERA & RESUMEN DE ALTO NIVEL
          Diseño abierto, tipografía que respira y ficha en tira limpia.
         ======================================================== */}
      <header className="border-b border-ink bg-canvas">
        <div className="layout-content layout-section-y">
          <div className="flex items-center gap-4 mb-6 type-kicker text-ink-muted">
            <span className="text-ink font-medium">Proyecto {project.number}</span>
            <span>//</span>
            <span>Resumen ejecutivo</span>
          </div>

          <h1 className="type-display font-bold uppercase max-w-5xl mb-8">
            {project.title}
          </h1>

          <p className="type-headline font-medium max-w-4xl mb-16 text-ink/90">
            {project.oneLiner}
          </p>

          <div className="border-y border-ink py-6 my-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-black/60 block mb-1 font-bold">
                  MI ROL
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-black block leading-snug">
                  {project.metadata.role}
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-black/60 block mb-1 font-bold">
                  DURACIÓN
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-black block leading-snug">
                  {project.metadata.duration}
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-black/60 block mb-1 font-bold">
                  PLATAFORMA
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-black block leading-snug">
                  {project.metadata.platform}
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-black/60 block mb-1 font-bold">
                  EQUIPO
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-black block leading-snug">
                  {project.metadata.team}
                </span>
              </div>
            </div>
          </div>

          {/* Mockup Visual Principal */}
          <div className="pt-6">
            <div className="font-mono text-xs uppercase tracking-wider mb-3 flex items-center justify-between text-black/60">
              <span className="font-bold text-black">MOCKUP PRINCIPAL // PROTOTIPO FINAL</span>
              <span>FIGMA HI-FI</span>
            </div>
            <DeviceMockup type="hero" title={project.title} projectId={project.id} />
          </div>
        </div>
      </header>

      {/* ========================================================
          SECCIÓN 2: EL DESAFÍO Y EL IMPACTO (THE PROBLEM & IMPACT)
          Métricas masivas libres de cajas pesadas.
         ======================================================== */}
      <section className="border-b border-ink bg-white">
        <div className="max-w-[1440px] mx-auto px-6 py-16 md:px-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Problema (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-black/60 block mb-3 font-bold">
                  02 // EL DESAFÍO
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-tight mb-6">
                  Punto de Dolor
                </h2>
                <p className="text-base sm:text-lg leading-relaxed text-black/90 font-normal">
                  {project.problemStatement}
                </p>
              </div>
            </div>

            {/* Métricas / Impacto: Números masivos que respiran (7 cols) */}
            <div className="lg:col-span-7">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-black/60 block mb-6 font-bold">
                MÉTRICAS // RESULTADOS CLAVE
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="border-t border-ink pt-4">
                    <div className="font-mono text-4xl sm:text-5xl lg:text-6xl font-black tabular-nums tracking-tighter mb-2">
                      {metric.value}
                    </div>
                    <div className="font-mono text-xs font-bold uppercase tracking-wider mb-2">
                      {metric.label}
                    </div>
                    {metric.description && (
                      <p className="font-mono text-[11px] leading-relaxed text-black/70">
                        {metric.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECCIÓN 3: DESCUBRIMIENTO & INSIGHTS CLAVE
          Lista editorial fluida y abierta (Sin 4 cards encerradas).
         ======================================================== */}
      <section className="border-b border-ink bg-white">
        <div className="max-w-[1440px] mx-auto px-6 py-16 md:px-16 md:py-24">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-black/60 block mb-2 font-bold">
              03 // RESEARCH &amp; INSIGHTS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">
              Hallazgos Clave de Investigación
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* 3 Insights Principales (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {project.insights.map((insight, idx) => (
                <div key={idx} className="border-t border-ink/20 pt-4 flex items-start gap-4">
                  <span className="font-mono text-xl font-bold text-black/50 shrink-0">
                    0{idx + 1}
                  </span>
                  <p className="text-base sm:text-lg leading-relaxed text-black/90 font-medium">
                    {insight}
                  </p>
                </div>
              ))}
            </div>

            {/* El Objetivo de Diseño (5 cols, limpio con aire) */}
            <div className="lg:col-span-5 border-l-2 border-black pl-6 md:pl-10 py-2">
              <span className="font-mono text-xs uppercase tracking-widest text-orange font-bold block mb-3">
                OBJETIVO DE DISEÑO
              </span>
              <h3 className="text-xl md:text-2xl font-bold leading-tight uppercase mb-4">
                Hipótesis Rectora
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-black/90">
                {project.designGoal}
              </p>
              <div className="mt-8 font-mono text-[11px] text-black/50 uppercase">
                Metodología: Design Thinking · Validación con usuarios
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECCIÓN 4: LA SOLUCIÓN VISUAL (BEFORE VS. AFTER & FEATURES)
          Layout editorial abierto: Mockup a la izq, texto a la der.
         ======================================================== */}
      <section className="border-b border-ink bg-white">
        <div className="max-w-[1440px] mx-auto px-6 py-16 md:px-16 md:py-24">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-black/60 block mb-2 font-bold">
              04 // LA SOLUCIÓN VISUAL
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Flujos &amp; Componentes Clave
            </h2>
          </div>

          {/* 4.1 COMPARATIVA ANTES / DESPUÉS (Limpia a 2 columnas) */}
          <div className="border-y border-ink py-8 mb-20">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <span className="font-mono text-xs uppercase font-bold tracking-wider">
                COMPARATIVA ESTRUCTURAL: ANTES VS. DESPUÉS
              </span>
              <div className="flex items-center gap-2 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setComparisonMode('before')}
                  className={`px-3 py-1 uppercase font-bold border transition-colors cursor-pointer ${
                    comparisonMode === 'before'
                      ? 'bg-black text-white border-black'
                      : 'border-black/30 hover:border-black'
                  }`}
                >
                  Antes
                </button>
                <button
                  type="button"
                  onClick={() => setComparisonMode('after')}
                  className={`px-3 py-1 uppercase font-bold border transition-colors cursor-pointer ${
                    comparisonMode === 'after'
                      ? 'bg-black text-white border-black'
                      : 'border-black/30 hover:border-black'
                  }`}
                >
                  Después
                </button>
                <button
                  type="button"
                  onClick={() => setComparisonMode('side-by-side')}
                  className={`px-3 py-1 uppercase font-bold border transition-colors cursor-pointer ${
                    comparisonMode === 'side-by-side'
                      ? 'bg-black text-white border-black'
                      : 'border-black/30 hover:border-black'
                  }`}
                >
                  Vista Dividida
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* BEFORE */}
              {(comparisonMode === 'before' || comparisonMode === 'side-by-side') && (
                <div className={`${comparisonMode === 'before' ? 'md:col-span-2' : ''}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[10px] uppercase bg-black text-white px-2 py-0.5 font-bold">
                      FLUJO ANTERIOR
                    </span>
                    <span className="font-mono text-[11px] text-black/50">OBSOLETO</span>
                  </div>
                  <h4 className="text-xl font-bold uppercase mb-2">
                    {project.comparison.beforeTitle}
                  </h4>
                  <p className="text-sm sm:text-base text-black/80 mb-4 leading-relaxed">
                    {project.comparison.beforeDescription}
                  </p>
                  <ul className="space-y-1.5 font-mono text-xs text-black/70">
                    {project.comparison.beforePainPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">✕</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* AFTER */}
              {(comparisonMode === 'after' || comparisonMode === 'side-by-side') && (
                <div className={`border-t-2 md:border-t-0 md:border-l-2 border-black/20 md:pl-8 pt-6 md:pt-0 ${comparisonMode === 'after' ? 'md:col-span-2' : ''}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[10px] uppercase bg-orange text-black px-2 py-0.5 font-bold">
                      FLUJO REDISEÑADO
                    </span>
                    <span className="font-mono text-[11px] font-bold text-orange">VALIDADO</span>
                  </div>
                  <h4 className="text-xl font-bold uppercase mb-2">
                    {project.comparison.afterTitle}
                  </h4>
                  <p className="text-sm sm:text-base text-black/90 mb-4 leading-relaxed">
                    {project.comparison.afterDescription}
                  </p>
                  <ul className="space-y-1.5 font-mono text-xs text-black/90 font-medium">
                    {project.comparison.afterWins.map((win, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-700 font-bold">✓</span>
                        <span>{win}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* 4.2 FEATURES PRINCIPALES: Layout abierto (Mockup izq, texto der) */}
          <div className="space-y-20">
            {project.featureHighlights.map((feature, idx) => (
              <div
                key={feature.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Mockup Frame Abierto (7 cols) */}
                <div className="lg:col-span-7">
                  <DeviceMockup
                    type={feature.mockupType}
                    title={feature.title}
                    projectId={project.id}
                  />
                </div>

                {/* Explicación UX con aire (5 cols) */}
                <div className="lg:col-span-5">
                  <span className="font-mono text-xs uppercase tracking-wider text-black/50 block mb-2 font-bold">
                    PANTALLA 0{idx + 1} // {feature.badge}
                  </span>
                  <h3 className="text-2xl font-bold uppercase mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-bold text-base sm:text-lg leading-snug mb-3 text-black">
                    {feature.captionBold}
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-black/80 font-normal">
                    {feature.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECCIÓN 5: APRENDIZAJES Y PRÓXIMOS PASOS (TAKEAWAYS)
          Bloque limpio a 2 columnas sin cajas recargadas.
         ======================================================== */}
      <section className="border-b border-ink bg-white">
        <div className="max-w-[1440px] mx-auto px-6 py-16 md:px-16 md:py-24">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-black/60 block mb-2 font-bold">
              05 // RETROSPECTIVA
            </span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
              Aprendizajes &amp; Próximos Pasos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* ¿Qué aprendí? */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold uppercase mb-6 pb-2 border-b border-ink">
                ¿Qué Aprendí en Este Proyecto?
              </h3>
              <div className="space-y-6">
                {project.learnings.map((learning, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="font-mono font-bold text-sm text-black/50 shrink-0">
                      0{idx + 1}
                    </span>
                    <p className="text-sm sm:text-base leading-relaxed text-black/90 font-medium">
                      {learning}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ¿Qué haría distinto? */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold uppercase mb-6 pb-2 border-b border-ink">
                ¿Qué Haría Distinto?
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-black/90 font-medium">
                {project.whatToDoDifferently}
              </p>
              <div className="mt-8 font-mono text-[11px] text-black/50 uppercase">
                Enfoque de iteración continua y autocrítica constructiva
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECCIÓN 6: CIERRE & NAVEGACIÓN (FOOTER DE CONVERSIÓN)
          Limpio, con CTA a Behance y navegación entre proyectos.
         ======================================================== */}
      <footer className="bg-black text-white p-6 md:p-16 lg:p-20">
        <div className="max-w-[1440px] mx-auto">
          {/* CTA Behance */}
          <div className="border-b-2 border-white/20 pb-12 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-orange block mb-2 font-bold">
                DOCUMENTACIÓN COMPLETA
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
                ¿Deseas explorar los prototipos interactivos en Figma?
              </h3>
            </div>

            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-orange text-black px-8 py-4 font-mono text-xs sm:text-sm font-bold uppercase hover:bg-white transition-colors duration-150 inline-flex items-center gap-2 shrink-0"
            >
              <span>Ver Caso Completo en Behance</span>
              <span className="text-base">↗</span>
            </a>
          </div>

          {/* Navegación Bidireccional entre Proyectos */}
          {(prevProjectTitle || nextProjectTitle) && (
          <div className={`grid grid-cols-1 gap-6 pt-4${prevProjectTitle && nextProjectTitle ? ' md:grid-cols-2' : ''}`}>
            {prevProjectTitle && onNavigatePrev ? (
            <button
              type="button"
              onClick={onNavigatePrev}
              className="border-2 border-white/40 p-6 text-left hover:border-white hover:bg-white hover:text-black transition-colors duration-150 group cursor-pointer"
            >
              <div className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2 group-hover:opacity-100 flex items-center gap-2">
                <span>&lt;-</span>
                <span>PROYECTO ANTERIOR</span>
              </div>
              <div className="text-xl md:text-2xl font-bold uppercase">
                {prevProjectTitle}
              </div>
            </button>
            ) : null}

            {nextProjectTitle && onNavigateNext ? (
            <button
              type="button"
              onClick={onNavigateNext}
              className="border-2 border-white/40 p-6 text-right hover:border-orange hover:bg-orange hover:text-black transition-colors duration-150 group cursor-pointer"
            >
              <div className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2 group-hover:opacity-100 flex items-center justify-end gap-2">
                <span>SIGUIENTE PROYECTO</span>
                <span>-&gt;</span>
              </div>
              <div className="text-xl md:text-2xl font-bold uppercase">
                {nextProjectTitle}
              </div>
            </button>
            ) : null}
          </div>
          )}

          {/* Retorno al Listado */}
          <div className="text-center mt-12 pt-8 border-t-2 border-white/10">
            <button
              type="button"
              onClick={onGoBack}
              className="font-mono text-xs uppercase underline tracking-widest hover:text-orange transition-colors cursor-pointer"
            >
              ↑ Volver al Listado Principal de Proyectos
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
};
