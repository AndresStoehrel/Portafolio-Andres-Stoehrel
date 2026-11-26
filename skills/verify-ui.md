# Skill: verificar UI

Browser MCP: navigate → lock → interactuar → snapshot/screenshot → unlock.

- Un screenshot no es verificación. Click, scroll, resize.
- Si el cambio escribe estado, revisar las vistas que lo leen.
- Layout: desktop (≥768) y mobile (390×844) si el CSS tiene `md:` / `max-width: 767px`.
- Hero: esperar el finale (~7–9 s) o `/?circles=N`.
- Medir flecha: pausar animación y `transform:none`, luego `play()` otra vez.
- Tras emular mobile: `Emulation.clearDeviceMetricsOverride`.
- Tab en background congela CSS; medir con `document.visibilityState === 'visible'`.
