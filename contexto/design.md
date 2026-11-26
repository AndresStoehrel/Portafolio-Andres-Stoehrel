# Design system (vivo)

Fuente de tokens: `src/styles/tokens.css`. No duplicar valores en componentes si ya hay token.

## Color

| Token | Hex | Uso |
|---|---|---|
| orange | `#ff7043` | acento, craft banner, frame-1 |
| lavender | `#d1c4e9` | hover Work, frame-2, finales hero, quotes mood |
| sage | `#d9e3d8` | About panel, frame-3 |
| canvas / ink | white / black | se invierten en `.dark` |

About charcoal/sage **no** siguen el swap dark (colores fijos).

Home cards hover: `bg-lavender`.

## Tipo

- Sans: Manrope (400–700, `index.html`).
- Mono kickers: Geist Mono.
- Kickers: `font-mono uppercase text-[0.625rem] tracking-[0.1em]` (cases) / `--text-kicker` en home.
- Body cases: 16px / 1.48 / max-w 36rem.
- H1 cases: `clamp(1.75rem, 3.2vw, 2.65rem)`, medium, tracking tight.

## Layout editorial (Remitly + TLPianxos)

- Shell: `max-w-[90rem] mx-auto pl-3 pr-4 md:pl-4 lg:pl-4 lg:pr-6`.
- Rail: `lg:-ml-10 xl:-ml-16`.
- `EditorialRow`: kicker col 5, título sticky, cuerpo col 7.
- Ficha 4 cols: Rol, Duración, Equipo, Estado. **No rediseñar** al tocar portada.
- Portada: full-bleed título + foto; barra volver **dentro** del shell, no bleed.

## Radius

Global `0 !important`. Excepciones: `.hero-circle`, `.case-quote-photo` → píldora.

## Hero home (círculos)

Desktop: grid 2×2 `md:w-[68%]` sobre columna foto `md:w-[min(28rem,38%)]`, foto flush al borde derecho.
Mobile: 1 fila 4 cols, círculos más chicos, merge horizontal.
Finale: círculo lavender centrado; motto Manrope 7.3cqi / 10cqi; flecha 10cqi debajo.
No loop. Cue ~1470 ms tras lavender. Transición cue 0.9s `cubic-bezier(0.16, 1, 0.3, 1)`.
