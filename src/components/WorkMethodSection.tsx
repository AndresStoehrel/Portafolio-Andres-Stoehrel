import React from 'react';
import methodFoto from '../assets/images/method-foto.jpg';

type MethodTag = { label: string; notes?: string[] };

const ANTES_TAGS: MethodTag[] = [
  { label: 'Manejo de Figma' },
  { label: 'Sistemas de diseño' },
  { label: 'Handoff' },
];

const APRENDIZAJES: { name: string; detail: string; year: string }[] = [
  { name: 'AI para UXers', detail: 'Johan Villalba', year: '2026' },
  { name: 'CO - UX', detail: 'Programa colaborativo de diseño UX/UI', year: '2025' },
  { name: 'UX UI Designer pack', detail: 'UX Cristopher', year: '2024' },
  { name: 'Diplomado UX/UI Agile', detail: 'USACH', year: '2023' },
];

const AHORA_TAGS: MethodTag[] = [
  { label: 'Framework 4D' },
  { label: 'Prompt a UI' },
  { label: 'Prompt a MVP' },
  { label: 'Prompt a producto' },
  { label: 'Orquestación de agentes' },
  { label: 'URL funcional' },
];

const MethodTagGroup: React.FC<{
  tags: MethodTag[];
  variant: 'neutral' | 'lavender';
}> = ({ tags, variant }) => (
  <div className="method-tags">
    {tags.map((tag) => (
      <div key={tag.label} className="method-tag-item">
        <span
          className={variant === 'lavender' ? 'method-tag method-tag-lavender' : 'method-tag'}
        >
          {tag.label}
        </span>
        {tag.notes?.length ? (
          <ul className="method-tag-notes">
            {tag.notes.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        ) : null}
      </div>
    ))}
  </div>
);

export const WorkMethodSection: React.FC = () => {
  return (
    <section className="method-panel w-full border-t border-ink" aria-labelledby="method-heading">
      <div className="split-40-60 md:items-start">
        <p className="method-kicker section-index section-index-loose min-w-0 text-ink">
          <span className="section-index-num">03</span>
          <span className="section-title-display">Método</span>
        </p>
        <div className="method-photo">
          <img src={methodFoto} alt="" />
        </div>
        <div className="split-col-right">
        <div className="method-intro">
          <p className="method-intro-lead m-0">
            Mi enfoque está en transformar las necesidades de los usuarios y los objetivos del negocio en
            soluciones concretas y funcionales.
          </p>
          <p className="method-intro-muted m-0">
            Me he perfeccionado para adaptar los flujos de trabajo a lo que realmente potencia el diseño de
            producto actualmente.
          </p>
        </div>
        <h2 id="method-heading" className="method-heading text-ink">
          Como trabajo actualmente
        </h2>
        <hr className="method-rule" />

        <ol className="method-timeline p-0 list-none">
          <li className="method-phase">
            <span className="method-phase-mark" aria-hidden="true">
              <svg className="method-phase-dot" viewBox="0 0 8 8" width="8" height="8">
                <circle cx="4" cy="4" r="3.25" fill="var(--color-canvas)" stroke="var(--color-ink)" strokeWidth="1.25" />
              </svg>
            </span>
            <div className="method-phase-body">
              <h3 className="method-phase-title m-0">Antes</h3>
              <MethodTagGroup tags={ANTES_TAGS} variant="neutral" />
            </div>
          </li>

          <li className="method-phase">
            <span className="method-phase-mark" aria-hidden="true">
              <svg className="method-phase-dot" viewBox="0 0 8 8" width="8" height="8">
                <circle cx="4" cy="4" r="3.25" fill="var(--color-canvas)" stroke="var(--color-ink)" strokeWidth="1.25" />
              </svg>
            </span>
            <div className="method-phase-body">
              <h3 className="method-phase-title m-0">
                Ahora <span className="method-phase-aside">Mentalidad AI first</span>
              </h3>
              <MethodTagGroup tags={AHORA_TAGS} variant="lavender" />
            </div>
          </li>
        </ol>

        <div className="method-learn">
          <h3 className="method-learn-title m-0">Aprendizajes</h3>
          <div className="method-learn-band">
            <hr className="method-learn-rule" />
            <ul className="method-learn-list">
              {APRENDIZAJES.map((item) => (
                <li key={item.name} className="method-learn-item">
                  <span className="method-learn-name">{item.name}</span>
                  <span className="method-learn-meta">
                    <span className="method-learn-detail">{item.detail}</span>
                    <span className="method-learn-year">
                      <span className="method-learn-dot" aria-hidden="true" />
                      {item.year}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};