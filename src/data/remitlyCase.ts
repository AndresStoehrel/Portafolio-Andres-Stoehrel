export const REMITLY_CASE = {
  kicker: '01 // Caso de estudio',
  heroTitle:
    'Diseñando mayor certeza en la visualización del estado de la transacción post envío de dinero.',
  ficha: [
    { label: 'Rol', value: 'UX/UI designer, en la fase de ideación' },
    { label: 'Duración', value: '1 semana, dentro de CO-UX (programa de 8)' },
    { label: 'Equipo', value: '5 diseñadores UX/UI' },
    { label: 'Estado', value: 'prototipo; no llegó a producción' },
  ] as const,
  resumen: {
    kicker: 'Resumen',
    title: 'El reto',
    paragraphs: [
      'Los usuarios frecuentes de Remitly, una de las apps para envío de remesas más utilizadas actualmente, no visualizaban el estado de su transacción luego de enviar dinero, generando incidencias y errores posteriores. Diseñamos una opción que permite al usuario tener mayor seguimiento de sus transacciones realizadas.',
      'Trabajé en la formulación de la hipótesis (How might we?) que dirigió la ideación, bajando posteriormente las ideas de nuevas funcionalidades a partir de los insights recolectados.',
    ],
  },
  problema: {
    kicker: 'Problema',
    title: 'Enviar dinero sin saber que pasa después',
    body: 'La falta de claridad y retroalimentación tras un envío, hacía que los usuarios recurrentes de Remitly, repitieran transacciones o contactaran a soporte innecesariamente, generando errores, cancelaciones y sobrecarga en la atención, con riesgo de perder usuarios frecuentes.',
  },
  contexto: {
    kicker: 'Contexto y mi rol',
    title: 'Un desafío compartido de 5 etapas y 5 equipos.',
    body: 'En CO/UX, 5 equipos trabajamos en 5 productos reales bajo la metodología de Design Thinking, intercambiándonos en cada fase y dejando los avances al equipo siguiente.',
  },
  investigacion: {
    kicker: 'Investigación y punto de partida',
    title: 'La investigación reveló el verdadero problema',
    intro:
      'El centro de partida fue la falta de automatizaciones en los envíos recurrentes de dinero, como problemática inicial hipotética. Sin embargo la investigación cambió el foco del problema:',
    insightsLabel: 'Insights claves según las reseñas y comentarios:',
    insights: [
      'Introducir datos recurrentes ya registrados en cada transacción.',
      'Mucho tiempo para verificar la información.',
      'Usuarios tienen problemas para cancelar la transferencia.',
      'Necesidad de contactar a soporte, percibido como deficiente.',
      'Largos tiempo de espera en envío de transferencia.',
      'Configuración complicada de la app.',
    ],
    hallazgoTitle: 'Principales problemas de usuarios según las reseñas.',
    hallazgo:
      'Hallazgo: Si bien las peores métricas señalan la atención al cliente, la documentación y las cancelaciones, estas instancias disfuncionales son, en la mayoría de los casos, consecuencias de incidencias en el envío y del mal uso de la interfaz de usuario (UI). Por lo tanto, si dividimos estas métricas en dos grupos, obtenemos un resultado donde se aplica la ley de Pareto, pudiendo deducir que las causas (el 20%) provocan las consecuencias (el 80%).',
    seguimientoTitle: 'La falta de seguimiento estaba detrás de muchas incidencias',
    seguimientoBody:
      'Definimos al usuario y sus principales obstáculos al usar Remitly. Detectamos un problema crítico: la falta de confirmación clara al finalizar una transferencia, lo que generaba desconfianza y envíos duplicados.',
    definicion: {
      kicker: 'Definición',
      body: 'El punto de intervención es el flujo de confirmación y seguimiento de transferencias. Rediseñarlo permitiría informar con claridad el estado del envío, orientar al usuario en tiempo real y evitar repeticiones innecesarias por falta de feedback o actualizaciones visibles.',
    },
    ideacion: {
      kicker: 'Ideación y prototipado',
      title: 'Hacer visible lo que ocurre después de enviar dinero',
      funcionalidadesTitle: 'Tres funcionalidades que recuperan el control de cada envío',
    },
    hmwQuestion:
      '¿Cómo podríamos mostrarle al usuario en qué estado se encuentra su transacción en tiempo real?',
    hmwBody:
      'A partir de la investigación, generamos múltiples ideas con técnicas colaborativas, agrupándolas según impacto y factibilidad. Luego conceptualizamos las mejores propuestas, seleccionando las soluciones más sólidas para prototipar.',
  },
  testeo: {
    kicker: 'Testeo',
    title: 'Pusimos a prueba una experiencia más transparente',
    intro:
      'Probamos las nuevas funcionalidades con usuarios reales utilizando la herramienta Maze. Nos propusimos testear tres tareas para validar las mejoras diseñadas:',
    participantes:
      'Participantes: 12 personas hicieron las tareas 1 y 2, 9 llegaron a la tarea 3 y a las escalas de opinión.',
  },
  hallazgos: {
    kicker: 'Hallazgos',
    title: 'Lo que aún generaba dudas en la experiencia',
    items: [
      'Recientes e historial muestran información muy parecida para quien busca el estado.',
      'Hay mucha información y poca concordancia de textos al enviar y en el historial.',
      'Los usuarios valoran el historial porque a veces las transferencias se retrasan, y lo relacionan con otras apps que ya usan.',
      'Quien abre el detalle con el ícono del ojo lo relaciona con ocultar o aclarar; esperan abrirlo desde la tarjeta.',
    ],
    recomendacionesTitle: 'Recomendaciones del análisis',
    recomendaciones:
      'Hacer evidente que al enviar hay scroll (por ejemplo con pasos), mantener textos consistentes durante el flujo, usar textos más grandes y con jerarquía en el historial, aclarar "recibido" (¿origen o destinatario?), agregar un mensaje que confirme que el dinero se envió (algunos creyeron que el flujo terminaba antes), y ofrecer ayuda visible si el dinero no llega.',
    closeTitle: 'Una experiencia más simple, con oportunidades por resolver',
    close:
      'La experiencia es más simple y directa que la versión anterior, sin embargo, la falta de coherencia en los textos y la presencia de botones sin función (por ser prototipo) generan dudas. Pequeños ajustes podrían mejorar la intuición del flujo, aunque no impiden cumplir con el objetivo.',
  },
} as const;
