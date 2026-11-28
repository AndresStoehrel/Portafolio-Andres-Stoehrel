# Portafolio Andrés Stoehrel

Sitio personal de UX: home editorial y tres case studies (Remitly, TLPianxos, Pedidos Ya). Es una SPA en React. La vista de un caso no tiene URL propia: `selectedProjectId` en `src/App.tsx` decide si se muestra el home o un caso.

Proyecto del curso *AI para UXers* (Interface School). El scaffold salió de [Google AI Studio](https://ai.studio/apps/4545bbf9-6367-4ba6-a158-e2b49bbe5755). Corre en local; todavía no hay deploy público.

## Stack

| Pieza | Uso |
| --- | --- |
| React 19 | UI |
| Vite 8 | Dev server y build |
| TypeScript | Tipado (`npm run lint` = `tsc --noEmit`) |
| Tailwind CSS 4 | Estilos, vía `@tailwindcss/vite` |
| Motion | Animación del hero |
| Manrope + Geist Mono | Sans y kickers mono |

Tokens de color: naranja `#ff7043`, lavanda `#d1c4e9`, sage `#d9e3d8`. Fuente: `src/styles/tokens.css`.

## Requisitos

- Node.js **22.x** (`.nvmrc` y `engines` en `package.json`; Vite 8 pide ≥ 20.19 o ≥ 22.12)
- npm

## Arranque

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). El server escucha en `0.0.0.0:3000`.

El sitio arranca sin variables de entorno. `.env.example` (`GEMINI_API_KEY`, `APP_URL`) quedó del scaffold de AI Studio. El código en `src/` no llama a Gemini.

## Scripts

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo en el puerto 3000 |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Sirve el build localmente |
| `npm run lint` | Chequeo de tipos, sin emitir archivos |
| `npm run clean` | Borra `dist/` y `server.js` |

Para ver el build:

```bash
npm run build
npm run preview
```

## Qué muestra el sitio

- **Home:** header sticky, hero (nombre, foto, círculos), Craft, Work, About, Método y Contact.
- **Remitly** y **TLPianxos:** casos editoriales con portada full-bleed. El id interno de TLPianxos es `telepianxos`; el nombre visible es **TLPianxos**.
- **Pedidos Ya:** caso genérico (`CaseStudyView`).
- Tema claro y oscuro desde el header.

Un click en un proyecto pone `selectedProjectId`. Volver al home lo deja en `null`.

## Dónde editar

El copy de los casos vive en los archivos de data. Los componentes lo leen; no lo duplican.

| Qué cambiar | Archivo |
| --- | --- |
| Cards del home | `src/data/projects.ts` |
| Caso Remitly | `src/data/remitlyCase.ts` y `src/components/RemitlyCaseStudyView.tsx` |
| Caso TLPianxos | `src/data/telepianxosCase.ts` y `src/components/TelepianxosCaseStudyView.tsx` |
| Caso Pedidos Ya | entrada en `src/data/projects.ts` y `src/components/CaseStudyView.tsx` |
| Color y tipo | `src/styles/tokens.css` |
| Radio, dark mode, CSS del hero | `src/index.css` |

Copy de TLPianxos en `projects.ts` debe coincidir con `telepianxosCase.ts` (la home solo muestra título e imagen; el resto alimenta rutas genéricas).

## Estructura

```
src/
  App.tsx                 vista activa (home o caso)
  main.tsx
  index.css
  components/             Home, header, hero, vistas de caso
  data/                   copy de home y de casos
  styles/tokens.css
  assets/                 fotos del hero, Remitly y TLPianxos
contexto/                 brief del curso y sistema visual
AGENTS.md                 índice para quien edita el repo con un agente
```

`node_modules/`, `dist/` y `*.local` están en `.gitignore`.

## Convenciones ya cerradas

- `border-radius: 0` en todo el sitio. Los círculos del hero (`.hero-circle`) y las fotos de cita (`.case-quote-photo`) son la excepción.
- El motto del hero queda en `#141414` también en dark mode.
- El breakpoint `md` es `48rem`. En desktop el hero es una grilla 2×2; en mobile, una fila.
- El hero de círculos hace un solo pase y termina en el círculo lavanda con “Ver / PORTAFOLIO”.

Detalle visual: `contexto/design.md`. Mapa para agentes: `AGENTS.md`.

## Alcance

Andrés cierra copy, tono y alcance. El deploy a una URL pública (ficha 4D) todavía no está en este repo.
