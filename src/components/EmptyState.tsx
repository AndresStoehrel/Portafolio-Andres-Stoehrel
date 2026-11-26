import React from 'react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  onReset?: () => void;
  onGoHome?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'NO HAY PROYECTOS DISPONIBLES // ARCHIVO VACÍO',
  description = 'Actualmente no se han indexado casos de estudio en este filtro de datos mock. Puedes restaurar los datos de muestra para continuar con la evaluación del flujo.',
  onReset,
  onGoHome,
}) => {
  return (
    <div className="max-w-[1440px] mx-auto p-6 md:p-16">
      <div className="border-2 border-black bg-white p-8 md:p-16">
        <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.15em] bg-black text-white px-2 py-1">
            ESTADO VACÍO // EMPTY STATE
          </span>
          <span className="font-mono text-xs uppercase text-black/60">
            CODE: 404_NO_CONTENT
          </span>
        </div>

        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
          {title}
        </h3>

        <p className="font-mono text-sm md:text-base leading-relaxed text-black/80 max-w-2xl mb-8">
          {description}
        </p>

        <div className="flex flex-wrap gap-4 pt-4 border-t-2 border-black">
          {onReset && (
            <button
              type="button"
              onClick={onReset}
              className="bg-orange text-black border-2 border-black px-6 py-3 font-mono text-xs uppercase font-bold hover:bg-black hover:text-white transition-colors duration-150 cursor-pointer"
            >
              Restaurar Proyectos Mock (3 Casos) -&gt;
            </button>
          )}

          {onGoHome && (
            <button
              type="button"
              onClick={onGoHome}
              className="bg-white text-black border-2 border-black px-6 py-3 font-mono text-xs uppercase font-bold hover:bg-black hover:text-white transition-colors duration-150 cursor-pointer"
            >
              Volver al Home
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
