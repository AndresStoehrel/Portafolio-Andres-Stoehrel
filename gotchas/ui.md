# Gotchas UI

## Radius
`border-radius: 0 !important` gana a Tailwind. Círculos necesitan `.hero-circle` / `.case-quote-photo` + `!important`.

## Hero no remonta
Misma URL no reinicia timeouts. Usar `/?circles=N`.

## Tab oculta
`rAF`/CSS pueden quedar en currentTime 0. Medir con tab visible.

## Flecha bounce vs métricas
`getBoundingClientRect` incluye `translateY` del bounce. Pausar + `transform:none`, medir, `play()`.

## Mobile screenshot vs layout
Canvas del screenshot puede ser más ancho que el viewport emulado. Confiar en rects (390), no en el PNG.

## Motto dark mode
Sin color fijo, “Ver/PORTAFOLIO” se vuelve blanco sobre lavender. Usar `#141414`.

## Extra `</div>`
Al envolver mobile vs finale, ya se coló un extra close. Contar el árbol.

## MutePlaceholder
Remitly aún lo usa en “flujo actual”. No borrar el componente al quitarlo de la portada.

## HMR / click a caso
A veces el root queda vacío si un símbolo falta (ej. `MutePlaceholder` borrado). Compilar o recargar.

## Foto portada 1024
Full-bleed desktop ~1920 CSS px. Se ve suave en Retina; no upscale con CSS pensando que “arregla” píxeles.
