# 2026-11 — Sistema editorial de cases

**Decisión:** Remitly y TLPianxos no usan el `CaseStudyView` genérico. Layout propio (rail, kicker mono, cuerpo 16/1.48, imágenes max-w 48rem). Pedidos Ya sigue genérico.

**Por qué:** Andres pidió un sistema editorial distinto, alineado a una referencia de reporte, sin redondeos, con sticky titles.

**Consecuencias:** No copiar estilos de Pedidos Ya hacia estos dos. No “unificar” sin pedido. Tokens en `tokens.css`; utilidades de caso en cada view (hoy duplicadas a propósito, no extraer hasta que Andres pida).
