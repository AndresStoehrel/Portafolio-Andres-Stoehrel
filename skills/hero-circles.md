# Skill: hero círculos

Archivos: `HeroCircleGrid.tsx`, `index.css` (clases `.hero-*`), `HomeView.tsx` (solo si hay que montar/desmontar).

Constantes vigentes:
- `SEQUENCE = [0, 3, 4, 11, 10, 9, 8, 7, 6, 5, 2, 10, 1, 11, 9, 8, 7, 6, 1, 5, 4, 2, 3, 0]`
- `SLOT_ORDER = [0, 2, 1, 3]`
- `STEP_MS=200` `FADE_MS=280` `START_MS=200`
- Cue: `mergeAt + 160 + 1470`
- Motto: Ver / PORTAFOLIO; line 7.3cqi; more+cue 10cqi; stack cued `translateY(-7.1cqi)`

Para ver el ciclo de cero: query nueva `/?circles=N` (mismo URL no remonta).

No: loop, pause, montar `HeroRadialField`, cambiar desktop 68% si el pedido es solo mobile.
Reduced-motion: grilla estática, sin finale.

Ver `gotchas/ui.md` §hero antes de medir animaciones.
