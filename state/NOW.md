# NOW — 2026-11-28

## Hecho

- Home editorial: header sticky, hero (nombre + foto + círculos), Craft, Work, About (debajo de proyectos), Método (fondo canvas, timeline con círculo, kickers Ahora en stroke lavender), Contact.
- Hero círculos: 1 pase, merge → lavender grande, texto **Ver / PORTAFOLIO**, flecha `(↓)` 3ª línea, centrado, sin loop, sin pause/play.
- Cases editoriales: Remitly (`RemitlyCaseStudyView` + `remitlyCase.ts`), TLPianxos (`TelepianxosCaseStudyView` + `telepianxosCase.ts`). Pedidos Ya = `CaseStudyView` genérico.
- Portadas Remitly y TLPianxos: volver + título + foto full-bleed; ficha debajo intacta.
- Quotes TLPianxos con `CaseQuote` + fotos.
- Tokens en `src/styles/tokens.css`. Radius 0 global; círculos override.
- Dark mode: invierte ink/canvas; motto hero queda `#141414`.
- Git: https://github.com/AndresStoehrel/Portafolio-Andres-Stoehrel (`main`, público). Último push home: `cf418d8`.
- Deploy Vercel (producción).
- `projects.ts` TLPianxos alineado con `telepianxosCase.ts` (eliminado copy de telemedicina del scaffold).
- Home refinado (`cf418d8`): inset compartido (`--content-inset`), títulos de sección al estilo Filosofía (01–03), banner Craft (nota + menor gap a imagen), Work con más aire bajo título, About en dos columnas (md+), Método con foto columna izquierda + intro tipográfica (lead ancho ~36rem, swap tamaños lead / «Como trabajo actualmente»), Aprendizajes alineado a timeline Antes/Ahora. Imágenes: `craft-filosofia.jpg`, `hero-craft-blur.jpg`, `method-foto.jpg`.
- Git `user.name` / `user.email` global: `andres.stoehrel@gmail.com` (para commits futuros).

## Pendiente (no bloquea, no iniciar solo)

- Remitly “flujo actual”: `MutePlaceholder`.
- `HeroRadialField.tsx` no montado.
- Foto portada 1024 px de ancho: suave en Retina; reemplazar si Andres trae ≥1600 px.
- `portada-layout.png` (mockup lilá) en assets, no usada.
- Pedidos Ya sin portada full-bleed tipo Remitly/TLPianxos.
- `src/assets/images/hero-name-leaves.jpg` en disco, sin uso en código (decidir: enlazar, commitear o borrar).

## Blockers

- Ninguno técnico. Copy y alcance los cierra Andres.

## Foco reciente

Aprendizajes en móvil ya no ensancha el Home: bajo 48rem cada ítem va en una columna; el subgrid de dos columnas queda en desktop. Antes el `max-content` dejaba el documento en ~600px sobre un viewport de 390px.