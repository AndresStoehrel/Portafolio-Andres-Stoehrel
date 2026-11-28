import React from 'react';

interface ProjectGridRowProps {
  title: string;
  index?: string;
  imageSrc?: string;
  imageAlt?: string;
  showThumbnail?: boolean;
  showTopRule?: boolean;
  onClick: () => void;
  disabled?: boolean;
  note?: string;
}

export const ProjectGridRow: React.FC<ProjectGridRowProps> = ({
  title,
  index,
  imageSrc,
  imageAlt = '',
  showThumbnail = false,
  showTopRule = false,
  onClick,
  disabled = false,
  note,
}) => {
  const hasThumbnail = Boolean(imageSrc) || showThumbnail;
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      onClick={() => {
        if (!disabled) onClick();
      }}
      onKeyDown={handleKeyDown}
      title={disabled ? undefined : `Ver ${title}`}
      className={`w-full text-left transition-colors duration-150 hover:bg-lavender focus-visible:outline-none focus-visible:bg-lavender ${
        disabled ? 'cursor-default' : 'cursor-pointer'
      }`}
    >
      <div
        style={{ paddingInline: 'var(--content-inset)' }}
      >
        {showTopRule ? <div className="project-grid-row-rule-top" aria-hidden="true" /> : null}
        <div className="flex items-center justify-between gap-6 min-h-[5.5rem] md:min-h-[6.5rem] pt-5 pb-5 md:pb-6">
          <h3 className="inline-flex items-baseline tracking-tight leading-none m-0 font-sans">
            <span className="relative inline-block">
              <span className="text-[clamp(1.375rem,2.85vw,2rem)] font-bold">{title}</span>
              {index ? (
                <span
                  className="absolute font-sans font-semibold tabular-nums text-ink leading-none"
                  style={{
                    fontSize: 'clamp(0.65rem, 1.1vw, 0.875rem)',
                    top: '0.15em',
                    left: '100%',
                    marginLeft: '0.65em',
                  }}
                  aria-hidden="true"
                >
                  {index}
                </span>
              ) : null}
            </span>
            {note ? (
              <span className="font-mono font-normal text-[clamp(0.75rem,1vw,0.875rem)] text-ink-muted ml-[2.35rem]">
                {note}
              </span>
            ) : null}
            {index ? <span className="sr-only"> — proyecto {index}</span> : null}
          </h3>

          {hasThumbnail ? (
            <div className="shrink-0 w-[7.5rem] h-[5rem] md:w-[8.5rem] md:h-[5.5rem] overflow-hidden bg-ink/[0.06]">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="project-grid-row-rule" aria-hidden="true" />
      </div>
    </div>
  );
};
