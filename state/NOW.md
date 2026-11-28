# NOW — 2026-11-26

## Hecho

- Home editorial: header sticky, hero (nombre + foto + círculos), Craft, Work, About (debajo de proyectos), Método (fondo canvas, timeline con círculo, kickers Ahora en stroke lavender), Contact.
- Hero círculos: 1 pase, merge → lavender grande, texto **Ver / PORTAFOLIO**, flecha `(↓)` 3ª línea, centrado, sin loop, sin pause/play.
- Cases editoriales: Remitly (`RemitlyCaseStudyView` + `remitlyCase.ts`), TLPianxos (`TelepianxosCaseStudyView` + `telepianxosCase.ts`). Pedidos Ya = `CaseStudyView` genérico.
- Portadas Remitly y TLPianxos: volver + título + foto full-bleed; ficha debajo intacta.
- Quotes TLPianxos con `CaseQuote` + fotos.
- Tokens en `src/styles/tokens.css`. Radius 0 global; círculos override.
- Dark mode: invierte ink/canvas; motto hero queda `#141414`.
- Git: https://github.com/AndresStoehrel/Portafolio-Andres-Stoehrel (`main`, público).
- Deploy Vercel (producción).
- `projects.ts` TLPianxos alineado con `telepianxosCase.ts` (eliminado copy de telemedicina del scaffold).

## Pendiente (no bloquea, no iniciar solo)

- Remitly “flujo actual”: `MutePlaceholder`.
- `HeroRadialField.tsx` no montado.
- Foto portada 1024 px de ancho: suave en Retina; reemplazar si Andres trae ≥1600 px.
- `portada-layout.png` (mockup lilá) en assets, no usada.
- Pedidos Ya sin portada full-bleed tipo Remitly/TLPianxos.

## Blockers

- Ninguno técnico. Copy y alcance los cierra Andres.

## Foco reciente

Navegación: hero PORTAFOLIO → `#work`, header anclas con offset, volver a case studies → grid, LinkedIn confirmado, «Otros proyectos» disabled.
Header: texto simple `AS / Portafolio` (sin bloques de color).