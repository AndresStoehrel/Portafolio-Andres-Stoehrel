# AGENTS.md — Portafolio Andrés Stoehrel

Estudiante: Andres. Sitio UX personal (React 19 + Vite 8 + Tailwind 4).
Dev: `npm run dev` → `localhost:3000`. No hay URLs de caso: la vista es `selectedProjectId` en `src/App.tsx`.

El context window es caro y volátil. La memoria real vive en archivos. Este archivo es el índice, no el archivo.

## Lectura mínima por sesión

1. Este archivo (siempre).
2. `state/NOW.md` (siempre).
3. Solo lo que la tarea pida, según routing abajo.
4. Nunca: `node_modules/`, `dist/`, transcripts completos, ni todo `src/`.

## Routing

| Tarea | Cargar |
|---|---|
| Home / hero círculos | `skills/hero-circles.md` + `gotchas/ui.md` §hero + `src/components/HeroCircleGrid.tsx` + `src/index.css` (hero) |
| Case TLPianxos | `skills/case-study-edit.md` + `contexto/design.md` + `src/data/telepianxosCase.ts` + `TelepianxosCaseStudyView.tsx` |
| Case Remitly | `skills/case-study-edit.md` + `contexto/design.md` + `src/data/remitlyCase.ts` + `RemitlyCaseStudyView.tsx` |
| Case Pedidos Ya | `skills/case-study-edit.md` + `src/components/CaseStudyView.tsx` + `src/data/projects.ts` (entrada Pedidos Ya) |
| Tokens / tipografía / color | `contexto/design.md` + `src/styles/tokens.css` |
| Por qué se hizo X | `contexto/decisiones.md` → archivo en `decisions/` |
| Bug de layout / animación | `gotchas/ui.md` + `skills/verify-ui.md` |
| Cierre de sesión | `skills/session-close.md` |

## Invariantes (no negociar salvo pedido explícito)

- No inventar copy de case studies. Fuente: `src/data/remitlyCase.ts`, `telepianxosCase.ts`. Home cards: `src/data/projects.ts`.
- No reestilizar Home u otros casos si la tarea es de un caso. Alcance = lo pedido.
- No commitear ni pushear a menos que Andres lo pida.
- Verificar UI en browser (flujo, no solo screenshot). Si no hay browser: decirlo.
- Responder al usuario en español. Código/nombres de archivo en el idioma del repo.
- `id` interno `telepianxos`. Nombre visible **TLPianxos**. No “Telepianxos” en UI.
- No reescribir el `oneLiner`/metrics de TLPianxos en `projects.ts` (sigue placeholder de telemedicina a propósito).
- Portada “flujo actual” de Remitly = `MutePlaceholder`. No inventar imagen.
- `HeroRadialField` existe y no se monta. No mostrarlo.
- Pause/play del hero: eliminado. No reintroducirlo.
- Hero: un solo pase, sin loop. Al final: círculo lavender + “Ver / PORTAFOLIO” + `(↓)`.
- `border-radius: 0 !important` global. Círculos: `.hero-circle` y `.case-quote-photo` con `9999px !important`.
- Motto del hero: color fijo `#141414` (dark mode no lo puede poner blanco sobre lavender).
- Breakpoint `md` = 48rem. Desktop del hero: 2×2, grid `md:w-[68%]`. Mobile: una fila, círculos más chicos.

## Mapa de código (punteros, no copiar)

```
src/App.tsx                         routing por estado
src/components/HomeView.tsx         home + hero foto
src/components/HeroCircleGrid.tsx   animación círculos
src/components/HeroRadialField.tsx  NO montado
src/components/Header.tsx           sticky h-12 / md:h-14
src/components/RemitlyCaseStudyView.tsx
src/components/TelepianxosCaseStudyView.tsx
src/components/CaseStudyView.tsx    Pedidos Ya (genérico)
src/components/CaseQuote.tsx
src/data/{projects,remitlyCase,telepianxosCase}.ts
src/styles/tokens.css               tokens
src/index.css                       radius, hero CSS, dark
src/assets/images/hero-frames/      frame-1..12
src/assets/tlpianxos/               assets del caso
src/assets/remitly/
contexto/                           brief + design system
```

Tokens: orange `#ff7043`, lavender `#d1c4e9`, sage `#d9e3d8`. Sans: Manrope. Mono: Geist Mono.
Home hover de cards: `bg-lavender`.
Hero frames: 0 orange, 1 lavender, 2 sage, 3–11 fotos. SEQUENCE y timings: ver `skills/hero-circles.md`.

## Portadas de caso (estado 2026-11-24)

Ambos casos editorial (Remitly, TLPianxos):

1. Barra `← Volver a case studies` + kicker (en `caseShell`, no full-bleed).
2. Bloque título full-bleed: kicker + h1 + nombre del caso a la derecha.
3. Foto full-bleed, en desktop el bloque (barra+título+foto) = `lg:h-[calc(100svh-3.5rem-1px)]`.
4. Debajo: ficha Rol / Duración / Equipo / Estado. No tocar ficha ni el resto al editar la portada.

Fotos: `src/assets/tlpianxos/portada-foto.jpg`, `src/assets/remitly/portada-foto.jpg` (ambas 1024×682; en Retina pueden verse suaves).
Mockup lilá TLPianxos (`portada-layout.png`) está en assets pero **no se usa** en el layout actual.

## Definition of Done

- Cambió solo lo pedido.
- Copy de casos = archivos de data, no texto inventado.
- Desktop y, si el cambio toca layout, mobile.
- Browser: interacción real del flujo tocado + no romper páginas hermanas.
- Si el cambio es de UI visible: verificar, no asumir.
- Si la sesión fue material: actualizar `state/NOW.md`, `decisions/` si hubo decisión, `logs/` comprimido.

## Comportamiento de contexto

- Preferir paths y 5–15 líneas citadas, no dumps.
- No pegar transcripciones. Resumir y apuntar al archivo.
- Procedimientos repetidos → `skills/`.
- “Por qué” → `decisions/` + fecha + razón.
- Al dudar entre dos archivos, abrir el más específico, no ambos “por si acaso”.
- Transcripts de agente: solo si `state/` y `logs/` no alcanzan.

## Punteros

| Carpeta | Qué hay |
|---|---|
| `contexto/design.md` | tokens, tipografía, layout editorial, radius |
| `contexto/decisiones.md` | índice de decisiones de diseño |
| `contexto/s03-ficha_4d-*.md` | brief curso (no-delegate: tono y copy son de Andres) |
| `decisions/` | decisiones fechadas |
| `state/NOW.md` | hecho / pendiente / blockers |
| `skills/` | cómo hacer X |
| `gotchas/ui.md` | trampas ya pagadas |
| `logs/` | sesiones comprimidas |

## Cierre de sesión importante

Seguir `skills/session-close.md`. Mínimo: actualizar `state/NOW.md`.
