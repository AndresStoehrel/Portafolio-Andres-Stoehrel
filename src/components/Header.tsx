import React from 'react';

interface HeaderProps {
  onGoHome: () => void;
  onNavigateSection: (sectionId: string) => void;
  currentView: 'home' | 'case-study';
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const navLinkClass =
  'type-kicker text-ink/80 hover:text-ink transition-colors duration-150 focus-visible:outline-none focus-visible:text-ink cursor-pointer';

export const Header: React.FC<HeaderProps> = ({
  onGoHome,
  onNavigateSection,
  currentView,
  theme,
  onToggleTheme,
}) => {
  const isDark = theme === 'dark';

  return (
    <header className="sticky top-0 z-50 bg-canvas text-ink">
      <div
        className="mx-auto"
        style={{ maxWidth: 'var(--max-content)', paddingInline: 'var(--space-section-x)' }}
      >
        <div className="h-12 md:h-14 flex items-center justify-between gap-6">
          <button
          type="button"
          onClick={onGoHome}
          className="font-medium text-base md:text-lg tracking-tight whitespace-nowrap shrink-0 hover:opacity-70 transition-opacity duration-150 cursor-pointer"
          title="Ir al inicio"
        >
            AiiD / Andrés Stoehrel
          </button>

          <nav className="flex items-center gap-4 md:gap-8 shrink-0">
            <button
            type="button"
            onClick={onToggleTheme}
            aria-pressed={isDark}
            aria-label={isDark ? 'Activar light mode' : 'Activar dark mode'}
            className={`${navLinkClass} flex items-center gap-2`}
          >
            <span className="hidden sm:inline">{isDark ? 'Dark' : 'Light'}</span>
            <span
              className="flex w-7 h-3.5 border border-current p-px"
              aria-hidden="true"
            >
              <span
                className={`block w-2.5 h-full bg-current ${isDark ? 'ml-auto' : ''}`}
              />
            </span>
          </button>

          <button type="button" onClick={() => onNavigateSection('about')} className={navLinkClass}>
            About
          </button>

          <button
            type="button"
            onClick={() => onNavigateSection('work')}
            className={`${navLinkClass} ${currentView === 'home' ? 'text-ink font-medium' : ''}`}
          >
            Work
          </button>

          <button
            type="button"
            onClick={() => onNavigateSection('contact')}
            className="type-kicker text-ink font-medium hover:text-accent transition-colors duration-150 focus-visible:outline-none cursor-pointer"
          >
            Contact
            </button>
          </nav>
        </div>
        <div className="border-b border-ink" aria-hidden="true" />
      </div>
    </header>
  );
};
