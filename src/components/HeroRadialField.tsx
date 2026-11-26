import React, { useEffect, useRef } from 'react';

const LINE_COUNT = 100;
const STEP_MS = 120;
const HALF_MS = 2000;
const PERIOD_MS = 4000;
const MIN_SCALE = 0.4;

function readToken(name: string, fallback: string) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

function ease(u: number) {
  let lo = 0;
  let hi = 1;
  for (let i = 0; i < 14; i += 1) {
    const mid = (lo + hi) / 2;
    const mt = 1 - mid;
    const x = 1.5 * mt * mt * mid + 1.5 * mt * mid * mid + mid * mid * mid;
    if (x < u) lo = mid;
    else hi = mid;
  }
  const t = (lo + hi) / 2;
  const mt = 1 - t;
  return 3 * mt * t * t + t * t * t;
}

function lineScale(now: number, index: number) {
  const delay = -LINE_COUNT * STEP_MS + index * STEP_MS;
  let elapsed = (now - delay) % PERIOD_MS;
  if (elapsed < 0) elapsed += PERIOD_MS;
  const u = elapsed <= HALF_MS ? elapsed / HALF_MS : (PERIOD_MS - elapsed) / HALF_MS;
  return MIN_SCALE + (1 - MIN_SCALE) * ease(u);
}

export const HeroRadialField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;

    const draw = (now: number) => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      if (width < 2 || height < 2) {
        if (!reduced) raf = requestAnimationFrame(draw);
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const pixelW = Math.floor(width * dpr);
      const pixelH = Math.floor(height * dpr);
      if (canvas.width !== pixelW || canvas.height !== pixelH) {
        canvas.width = pixelW;
        canvas.height = pixelH;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = readToken('--color-ink', '#000');
      ctx.lineCap = 'butt';

      const unit = Math.min(width, height) / 100;
      const inner = 20 * unit;
      const length = 20 * unit;
      ctx.lineWidth = 0.3 * unit;
      const cx = width / 2;
      const cy = height / 2;
      const frozenAt = 800;

      for (let i = 0; i < LINE_COUNT; i += 1) {
        const angle = ((-90 + i * 3.6) * Math.PI) / 180;
        const scale = lineScale(reduced ? frozenAt : now, i);
        const outer = inner + length * scale;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        ctx.beginPath();
        ctx.moveTo(cx + cos * inner, cy + sin * inner);
        ctx.lineTo(cx + cos * outer, cy + sin * outer);
        ctx.stroke();
      }

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <canvas ref={canvasRef} className="block h-full w-full" />;
};
