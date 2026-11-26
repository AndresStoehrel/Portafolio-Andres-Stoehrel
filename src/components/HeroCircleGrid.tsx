import React, { useEffect, useState } from 'react';
import frame1 from '../assets/images/hero-frames/frame-1.png';
import frame2 from '../assets/images/hero-frames/frame-2.png';
import frame3 from '../assets/images/hero-frames/frame-3.png';
import frame4 from '../assets/images/hero-frames/frame-4.png';
import frame5 from '../assets/images/hero-frames/frame-5.png';
import frame6 from '../assets/images/hero-frames/frame-6.png';
import frame7 from '../assets/images/hero-frames/frame-7.png';
import frame8 from '../assets/images/hero-frames/frame-8.png';
import frame9 from '../assets/images/hero-frames/frame-9.png';
import frame10 from '../assets/images/hero-frames/frame-10.png';
import frame11 from '../assets/images/hero-frames/frame-11.png';
import frame12 from '../assets/images/hero-frames/frame-12.png';

const FRAMES = [
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
  frame6,
  frame7,
  frame8,
  frame9,
  frame10,
  frame11,
  frame12,
];

// Each frame twice. Opening is orange + two photos. A circle never
// changes on the next beat, never dissolves into the same photo, and
// never receives the same photo twice.
const SEQUENCE = [0, 3, 4, 11, 10, 9, 8, 7, 6, 5, 2, 10, 1, 11, 9, 8, 7, 6, 1, 5, 4, 2, 3, 0];

const SLOT_ORDER = [0, 2, 1, 3];

const EASE = 'cubic-bezier(0.4, 0, 0.2, 1)';
const STEP_MS = 200;
const FADE_MS = 280;
const START_MS = 200;

type Layer = { id: string; frame: number };

function slotFor(step: number) {
  return SLOT_ORDER[step % SLOT_ORDER.length];
}

const CircleLayer: React.FC<{ src: string }> = ({ src }) => (
  <img
    src={src}
    alt=""
    className="hero-circle hero-circle-in absolute inset-0 h-full w-full object-cover"
  />
);

export const HeroCircleGrid: React.FC = () => {
  const [slots, setSlots] = useState<Layer[][]>([[], [], [], []]);
  const [merging, setMerging] = useState(false);
  const [showLavender, setShowLavender] = useState(false);
  const [showCue, setShowCue] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setSlots([
        [{ id: 's0', frame: 0 }],
        [{ id: 's1', frame: 4 }],
        [{ id: 's2', frame: 3 }],
        [{ id: 's3', frame: 11 }],
      ]);
      return;
    }

    let alive = true;
    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        if (alive) fn();
      }, ms);
      timers.push(id);
    };

    setMerging(false);
    setShowLavender(false);
    setShowCue(false);
    setSlots([[], [], [], []]);

    SEQUENCE.forEach((frame, step) => {
      const slot = slotFor(step);
      const id = `${step}-${frame}`;
      later(() => {
        setSlots((prev) => {
          const next = prev.map((layers) => [...layers]);
          next[slot] = [...next[slot].slice(-1), { id, frame }];
          return next;
        });
      }, START_MS + step * STEP_MS);
      later(() => {
        setSlots((prev) => {
          const next = prev.map((layers) => [...layers]);
          const top = next[slot][next[slot].length - 1];
          if (top?.id === id) next[slot] = [top];
          return next;
        });
      }, START_MS + step * STEP_MS + FADE_MS + 80);
    });

    const mergeAt = START_MS + (SEQUENCE.length - 1) * STEP_MS + FADE_MS + 280;
    later(() => setMerging(true), mergeAt);
    later(() => setShowLavender(true), mergeAt + 160);
    // Motto zoom finishes at 0.55s + 0.64s. The arrow follows shortly after.
    later(() => setShowCue(true), mergeAt + 160 + 1470);

    return () => {
      alive = false;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="grid w-[90%] grid-cols-4 gap-2 md:aspect-square md:w-[68%] md:grid-cols-2 md:gap-3">
        {slots.map((layers, index) => (
          <div
            key={index}
            className={`hero-circle relative aspect-square overflow-hidden${merging ? ` hero-slot-merge-${index}` : ''}`}
            style={{
              opacity: merging ? 0 : 1,
              transition: `opacity 700ms ${EASE}, transform 700ms ${EASE}`,
            }}
          >
            {layers.map((layer) => (
              <CircleLayer key={layer.id} src={FRAMES[layer.frame]} />
            ))}
          </div>
        ))}
      </div>
      <div
        className="hero-circle absolute left-1/2 top-1/2 aspect-square h-[70%] w-auto overflow-hidden md:h-auto md:w-[68%]"
        style={{
          opacity: showLavender ? 1 : 0,
          transform: showLavender
            ? 'translate(-50%, -50%) scale(1)'
            : 'translate(-50%, -50%) scale(0.55)',
          transition: `opacity 700ms ${EASE}, transform 700ms ${EASE}`,
          containerType: 'inline-size',
        }}
      >
        <img src={frame2} alt="" className="hero-circle absolute inset-0 h-full w-full object-cover" />
        {showLavender && (
          <div className="hero-motto pointer-events-none absolute inset-0 flex items-center justify-center text-center">
            <span className={`hero-motto-stack${showCue ? ' is-cued' : ''}`}>
              <span className="hero-motto-line">Ver</span>
              <span className="hero-motto-more">PORTAFOLIO</span>
              <span className={`hero-motto-cue${showCue ? ' is-on' : ''}`}>
                (<span className="hero-motto-arrow">↓</span>)
              </span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
