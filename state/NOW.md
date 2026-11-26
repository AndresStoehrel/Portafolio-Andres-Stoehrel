# NOW — 2026-11-26

## Hecho

- Home editorial: header sticky, hero (nombre + foto + círculos), Craft, Work, About (debajo de proyectos), Método (fondo canvas, timeline con círculo, kickers Ahora en stroke lavender), Contact.
- Hero círculos: 1 pase, merge → lavender grande, texto **Ver / PORTAFOLIO**, flecha `(↓)` 3ª línea, centrado, sin loop, sin pause/play.
- Cases editoriales: Remitly (`RemitlyCaseStudyView` + `remitlyCase.ts`), TLPianxos (`TelepianxosCaseStudyView` + `telepianxosCase.ts`). Pedidos Ya = `CaseStudyView` genérico.
- Portadas Remitly y TLPianxos: volver + título + foto full-bleed; ficha debajo intacta.
- Quotes TLPianxos con `CaseQuote` + fotos.
- Tokens en `src/styles/tokens.css`. Radius 0 global; círculos override.
- Dark mode: invierte ink/canvas; motto hero queda `#141414`.

## Pendiente (no bloquea, no iniciar solo)

- `projects.ts` TLPianxos `oneLiner`/metrics siguen de telemedicina (a propósito hasta que Andres pida copy de home).
- Remitly “flujo actual”: `MutePlaceholder`.
- `HeroRadialField.tsx` no montado.
- Foto portada 1024 px de ancho: suave en Retina; reemplazar si Andres trae ≥1600 px.
- `portada-layout.png` (mockup lilá) en assets, no usada.
- Pedidos Ya sin portada full-bleed tipo Remitly/TLPianxos.
- Deploy URL pública (ficha 4D D4) no hecho en este repo.
- Git publicado: https://github.com/AndresStoehrel/Portafolio-Andres-Stoehrel (`main`, público). Primer commit `45d4f24`. Esta nota de NOW queda solo en local hasta el próximo commit.

## Blockers

- Ninguno técnico. Copy y alcance los cierra Andres.

## Foco reciente

Portadas de caso + hero home. Último cambio de producto: hero Remitly con foto del hombre (Pexels), mismo layout que TLPianxos.
