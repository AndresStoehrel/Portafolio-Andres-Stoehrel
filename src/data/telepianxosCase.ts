export const TELEPIANXOS_CASE = {
  kicker: '02 // Caso de estudio',
  heroTitle: 'Pedir ayuda no debería ser otra tarea del formulario',
  ficha: [
    { label: 'Rol', value: 'UX/UI designer, en la fase de testeo e iteración' },
    { label: 'Duración', value: '1 semana, dentro de CO-UX (programa de 8)' },
    { label: 'Equipo', value: '5 diseñadores UX/UI' },
    { label: 'Estado', value: 'prototipo; no llegó a producción' },
  ] as const,
  resumen: [
    'Los usuarios de TLPianxos, una comunidad de apoyo para personas con Trastorno Límite de la Personalidad (TLP) no tenían claridad sobre el estado de su postulación a la comunidad hasta por 3 semanas. Diseñamos un proceso de registro más claro y una opción de ayuda inmediata.',
    'Moderé 2 test de usabilidad, bajé la data y rediseñé las iteraciones del prototipo junto a 5 diseñadores UX/UI.',
  ],
  problema: {
    kicker: 'Problema',
    title: 'Una espera sin respuesta',
    paragraphs: [
      'Los usuarios nuevos con TLP +18  llegan a la comunidad TLPianxos buscando apoyo, a veces en plena crisis, pero pueden pasar hasta 3 semanas sin respuesta luego de llenar un formulario de registro percibido como frío y poco claro.',
      'En un contexto de salud, esto va más allá de una fricción en el flujo y puede convertirse en un riesgo para el usuario.',
    ],
  },
  contexto: {
    kicker: 'Contexto y mi rol',
    title: 'Llegué al final del relevo',
    body: 'En CO/UX, 5 equipos trabajamos en 5 productos reales bajo la metodología de Design Thinking, intercambiándonos en cada fase y dejando los avances al equipo siguiente.',
  },
  investigacion: {
    kicker: 'Investigación y punto de partida',
    title: 'El problema fue cambiando',
    intro:
      'Partimos con tres problemáticas tentativas: esperas largas de admisión, plataformas desconectadas (sitio, WhatsApp, TikTok) y un registro desconectado de la verificación.',
    method: 'La investigación (31 encuestas, 4 entrevistas y datos de los creadores) nos dio información importante:',
    insightsLabel: 'Insights claves:',
    insights: [
      'La web se percibe como segura pero carece de contexto',
      'Todas las personas encuestadas sintieron ansiedad por la espera y por no saber el estado de su registro',
      'El teléfono de emergencia pedido en el formulario genera sensación de “exponerse”. Ademas es la principal causa de rechazo en el registro según sus creadores.',
      'El formulario se percibe como frío y poco claro.',
      'Los sub grupos de WhatsApp más específicos se perciben como más seguros.',
    ],
    segmentTitle: 'Segmentar a los usuarios fue clave',
    segment: [
      'A partir de la investigación apareció un usuario más específico, la persona con TLP que llega a la comunidad pero con una necesidad urgente de ayuda. En este caso la incertidumbre tiene mayor costo y se decidió priorizarlo en la ideación.',
      'También se decidió poner el foco en el step de “registro y bienvenida”, que generaba la mayor fricción e impacto.',
    ],
    featuresLabel: 'Los puntos de dolor encontrados guiaron el diseño:',
    featuresIntro: '5 nuevas funcionalidades diseñadas:',
    features: [
      'Un onboarding de tres pasos que explica cómo funciona.',
      'Un estado de ánimo que guía el flujo: “Crisis o estoy bien”',
      'Un registro más cercano, con el teléfono replanteado como "contacto de confianza".',
      'Ingreso prioritario para quien está en crisis.',
      'Un botón para llamar a un servicio de ayuda inmediata.',
    ],
  },
  testeo: {
    kicker: 'Testeo',
    title: 'El test: lo fácil salió bien, lo importante no',
    results:
      'Moderé 2 de las 4 pruebas de usabilidad a usuarios reales conTLP.  Cuatro completaron el registro. Solo la mitad logró pedir ayuda, y 3 de 4 no vieron el botón de inmediato.',
    metasTitle: 'Metas propuestas',
    quotesIntro: 'Otro participante señaló el problema de fondo:',
    quotes: [
      {
        text: 'Si tengo que llenar todo el registro con un ataque de ansiedad me muero. La opción de llamada me pasó desapercibida, tenía tanto texto de registrarme abajo que no lo vi.',
        attribution: 'Mujer, 37 años',
      },
      {
        text: 'En una situación de crisis uno busca la ayuda inmediata en la página de inicio.',
        attribution: 'Hombre, 31 años',
      },
    ],
    close:
      'Ese contraste cambió nuevamente el foco, no se trataba solo de facilitar el registro, sino que también acercar la ayuda al usuario en crisis.',
  },
  iteraciones: {
    kicker: 'Iteraciones',
    title: 'Cuatro cambios',
    intro: 'Trabajé en dupla, en una sesión en vivo, sobre lo que mostró el test.',
    items: [
      {
        title: 'Ayuda al primer toque.',
        body: 'Al elegir "Estoy en crisis" aparece de inmediato un modal con "Llamar" y una confirmación antes de marcar. Antes, la llamada venía después del flujo y no se visualizaba.',
      },
      {
        title: 'Estados de ánimo.',
        body: 'Dos personas pidieron un estado intermedio. Cambiamos "Estoy bien" por "Estoy estable" y la barra de progreso muestra en qué paso se encuentra el usuario.',
      },
      {
        title: 'Grupos con bajada.',
        body: 'Dos personas no entendieron qué eran. Cada grupo ahora tiene un contexto que lo explica.',
      },
      {
        title: 'Íconos y jerarquía.',
        body: 'Los íconos del Home no ilustraban bien sus textos. Los reemplazamos y ajustamos la jerarquía.',
      },
    ],
  },
  limites: {
    kicker: 'Límites y siguientes pasos',
    title: 'Lo que no sé',
    paragraphs: [
      'La llamada es una propuesta de diseño. No se validó que sea viable ni que TLPianxos pueda sostenerla, y los creadores no dieron feedback.',
      'La ayuda sigue dentro del registro. Con más tiempo, la pondría en el Home, antes de cualquier trámite.',
    ],
  },
  aprendizajes: {
    kicker: 'Aprendizajes',
    title: 'Lo que me llevo',
    items: [
      'Desconfiar de la métrica que sale bien. El 100% del registro escondía el 50% de la ayuda. Ahora empiezo por la tarea de mayor riesgo, no por la de mayor éxito.',
      'La ayuda no puede depender de un trámite. Quien está en crisis necesita verla antes de comprometerse con cualquier paso.',
      'Una función de ayuda es una promesa operativa. Antes de prometérla, hay que saber quién la sostiene.',
    ],
  },
} as const;
