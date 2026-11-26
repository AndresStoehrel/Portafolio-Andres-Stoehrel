import React from 'react';

interface ProjectGridRowProps {
  title: string;
  index?: string;
  imageSrc?: string;
  imageAlt?: string;
  onClick: () => void;
  disabled?: boolean;
}

export const ProjectGridRow: React.FC<ProjectGridRowProps> = ({
  title,
  index,
  imageSrc,
  imageAlt = '',
  onClick,
  disabled = false,
}) => {
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
      className={`w-full text-left transition-colors duration-150 ${
        disabled
          ? 'cursor-default opacity-50'
          : 'cursor-pointer hover:bg-lavender focus-visible:outline-none focus-visible:bg-lavender'
      }`}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: 'var(--max-content)',
          padding: '1.25rem var(--space-section-x) 0',
        }}
      >
        <div className="flex items-center justify-between gap-6 min-h-[5.5rem] md:min-h-[6.5rem] pb-5 md:pb-6">
          <h3 className="relative inline-block tracking-tight leading-none m-0 font-sans">
            <span className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold">{title}</span>
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
            {index ? <span className="sr-only"> — proyecto {index}</span> : null}
          </h3>

          {imageSrc ? (
            <div className="shrink-0 w-[7.5rem] h-[5rem] md:w-[8.5rem] md:h-[5.5rem] overflow-hidden bg-ink/[0.06]">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          ) : null}
        </div>

        <div className="border-b border-ink" aria-hidden="true" />
      </div>
    </div>
  );
};
