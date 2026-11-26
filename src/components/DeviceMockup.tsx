import React from 'react';
import remitlyHero from '../assets/images/remitly_hero_screen_1791825528481.jpg';
import telepianxosHero from '../assets/images/telepianxos_hero_screen_1791825545434.jpg';
import pedidosyaHero from '../assets/images/pedidosya_hero_screen_1791825561779.jpg';
import remitlyTimeline from '../assets/images/remitly_timeline_screen_1791825578434.jpg';
import remitlyHistory from '../assets/images/remitly_history_screen_1791825594933.jpg';
import remitlyConfirm from '../assets/images/remitly_confirm_modal_1791825615590.jpg';

interface DeviceMockupProps {
  type: 'hero' | 'workflow' | 'inspector' | 'analytics' | 'checkout';
  title?: string;
  projectId?: string;
  variant?: 'boxed' | 'editorial';
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({
  type,
  title = 'Interfaz UX/UI',
  projectId = 'remitly',
  variant = 'boxed',
}) => {
  // Hero Image selection based on project ID
  const getHeroImage = () => {
    if (projectId === 'telepianxos') return telepianxosHero;
    if (projectId === 'pedidos-ya') return pedidosyaHero;
    return remitlyHero;
  };

  // Feature Image selection based on type
  const getFeatureImage = () => {
    if (type === 'workflow') return remitlyTimeline;
    if (type === 'inspector') return remitlyConfirm;
    if (type === 'analytics') return remitlyHistory;
    return remitlyHero;
  };

  if (type === 'hero') {
    const heroSrc = getHeroImage();
    if (variant === 'editorial') {
      return (
        <div className="w-full overflow-hidden bg-ink/[0.04]">
          <img
            src={heroSrc}
            alt={`Pantalla real de la aplicación ${projectId}`}
            className="w-full max-h-[min(72vh,40rem)] object-cover object-top"
            loading="eager"
          />
        </div>
      );
    }
    return (
      <div className="w-full bg-white border-2 border-black p-4 sm:p-8 md:p-12 flex items-center justify-center">
        <div className="max-w-md w-full border-2 border-black bg-white overflow-hidden shadow-none">
          {/* Subtle top device bar */}
          <div className="h-8 bg-black text-white px-4 flex items-center justify-between font-mono text-[11px]">
            <span className="uppercase tracking-wider font-bold">
              {projectId === 'telepianxos'
                ? 'TELEPIANXOS // APP MÓVIL'
                : projectId === 'pedidos-ya'
                ? 'PEDIDOS YA // APP MÓVIL'
                : 'REMITLY // APP MÓVIL'}
            </span>
            <span className="text-orange font-bold">[ PROTOTIPO REAL ]</span>
          </div>
          {/* Real Screen Image */}
          <div className="relative bg-neutral-100 flex items-center justify-center">
            <img
              src={heroSrc}
              alt={`Pantalla real de la aplicación ${projectId}`}
              className="w-full max-h-[580px] object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    );
  }

  // Feature Highlights: Real High-Fidelity UI Screen Images
  const featureSrc = getFeatureImage();
  if (variant === 'editorial') {
    return (
      <div className="w-full overflow-hidden bg-ink/[0.04]">
        <img
          src={featureSrc}
          alt={title}
          className="w-full max-h-[28rem] object-cover object-top"
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div className="w-full bg-white border-2 border-black p-3 sm:p-5 flex items-center justify-center overflow-hidden">
      <div className="w-full border-2 border-black bg-white overflow-hidden shadow-none">
        <div className="h-7 bg-black text-white px-3 flex items-center justify-between font-mono text-[10px]">
          <span className="uppercase tracking-wider font-bold truncate max-w-[70%]">
            {title}
          </span>
          <span className="text-orange font-bold">[ FIGMA UI ]</span>
        </div>
        <div className="relative bg-neutral-50 flex items-center justify-center">
          <img
            src={featureSrc}
            alt={title}
            className="w-full max-h-[380px] object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
