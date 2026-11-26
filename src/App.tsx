import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { CaseStudyView } from './components/CaseStudyView';
import { RemitlyCaseStudyView } from './components/RemitlyCaseStudyView';
import { TelepianxosCaseStudyView } from './components/TelepianxosCaseStudyView';
import { EmptyState } from './components/EmptyState';
import { PROJECTS, ProjectCaseStudy } from './data/projects';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isEmptyState, setIsEmptyState] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Active projects list based on mock empty state toggle
  const activeProjects: ProjectCaseStudy[] = isEmptyState ? [] : PROJECTS;

  // Find currently active project if on case study view
  const currentProject = selectedProjectId
    ? PROJECTS.find((p) => p.id === selectedProjectId) || null
    : null;

  // Next and Prev project indices for continuous navigation
  const currentIndex = currentProject
    ? PROJECTS.findIndex((p) => p.id === currentProject.id)
    : -1;
  const prevProject =
    currentIndex > 0
      ? PROJECTS[currentIndex - 1]
      : PROJECTS[PROJECTS.length - 1];
  const nextProject =
    currentIndex < PROJECTS.length - 1
      ? PROJECTS[currentIndex + 1]
      : PROJECTS[0];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Auto scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [selectedProjectId]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
  };

  const handleGoHome = () => {
    setSelectedProjectId(null);
  };

  const handleNavigateSection = (sectionId: string) => {
    if (selectedProjectId !== null) {
      setSelectedProjectId(null);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleToggleEmptyState = () => {
    setIsEmptyState((prev) => !prev);
  };

  const handleResetData = () => {
    setIsEmptyState(false);
  };

  return (
    <div className="min-h-screen bg-canvas text-ink font-sans selection:bg-accent selection:text-white flex flex-col">
      {/* 6.1 Top Bar Sticky Header */}
      <Header
        onGoHome={handleGoHome}
        onNavigateSection={handleNavigateSection}
        currentView={selectedProjectId ? 'case-study' : 'home'}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Flow Views */}
      <main className="flex-1">
        {selectedProjectId ? (
          currentProject ? (
            currentProject.id === 'remitly' ? (
              <RemitlyCaseStudyView
                onGoBack={handleGoHome}
                onNavigatePrev={() => setSelectedProjectId(prevProject.id)}
                onNavigateNext={() => setSelectedProjectId(nextProject.id)}
                prevProjectTitle={prevProject.title}
                nextProjectTitle={nextProject.title}
              />
            ) : currentProject.id === 'telepianxos' ? (
              <TelepianxosCaseStudyView
                onGoBack={handleGoHome}
                onNavigatePrev={() => setSelectedProjectId(prevProject.id)}
                onNavigateNext={() => setSelectedProjectId(nextProject.id)}
                prevProjectTitle={prevProject.title}
                nextProjectTitle={nextProject.title}
              />
            ) : (
              <CaseStudyView
                project={currentProject}
                onGoBack={handleGoHome}
                onNavigatePrev={() => setSelectedProjectId(prevProject.id)}
                onNavigateNext={() => setSelectedProjectId(nextProject.id)}
                prevProjectTitle={prevProject.title}
                nextProjectTitle={nextProject.title}
              />
            )
          ) : (
            <EmptyState
              title="CASO DE ESTUDIO NO ENCONTRADO"
              description="El identificador de proyecto especificado no coincide con ningún registro activo."
              onGoHome={handleGoHome}
            />
          )
        ) : (
          <HomeView
            projects={activeProjects}
            isEmpty={isEmptyState}
            onSelectProject={handleSelectProject}
            onResetData={handleResetData}
            onNavigateContact={() => handleNavigateSection('contact')}
          />
        )}
      </main>
    </div>
  );
}
