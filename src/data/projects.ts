export interface ProjectMetric {
  value: string;
  label: string;
  description?: string;
}

export interface FeatureHighlight {
  id: string;
  title: string;
  captionBold: string;
  explanation: string;
  mockupType: 'workflow' | 'analytics' | 'checkout' | 'inspector';
  badge: string;
}

export interface BeforeAfterComparison {
  beforeTitle: string;
  beforeDescription: string;
  beforePainPoints: string[];
  afterTitle: string;
  afterDescription: string;
  afterWins: string[];
}

export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  oneLiner: string;
  behanceUrl: string;
  // Sección 1: Cabecera & Metadatos
  metadata: {
    role: string;
    duration: string;
    platform: string;
    team: string;
  };
  heroTheme: 'lavender' | 'orange' | 'sage';
  // Sección 2: El Desafío e Impacto
  problemStatement: string;
  metrics: ProjectMetric[];
  // Sección 3: Insights & Objetivo de Diseño
  insights: string[];
  designGoal: string;
  // Sección 4: Solución Visual & Features
  comparison: BeforeAfterComparison;
  featureHighlights: FeatureHighlight[];
  // Sección 5: Aprendizajes y Próximos Pasos
  learnings: string[];
  whatToDoDifferently: string;
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'remitly',
    number: '01',
    title: 'Remitly',
    oneLiner: 'Mejorando la transparencia y la trazabilidad posterior al envío de dinero en Latinoamérica.',
    behanceUrl: 'https://behance.net/andres-stoehrel/remitly',
    heroTheme: 'orange',
    metadata: {
      role: 'UX/UI Designer (Investigación, Ideación y Prototipado)',
      duration: '8 semanas (Design Thinking & Testeo de Usabilidad)',
      platform: 'App Móvil iOS & Android (Figma Prototyping)',
      team: 'Equipo Multidisciplinario (6 Diseñadores e Investigadores UX)',
    },
    problemStatement:
      'La falta de claridad y retroalimentación tras un envío hacía que los usuarios repitieran transacciones o contactaran soporte innecesariamente, generando errores, desconfianza y sobrecarga en la atención con riesgo de perder usuarios frecuentes.',
    metrics: [
      {
        value: '100%',
        label: 'Tasa de Envío Exitoso',
        description: 'Todos los participantes completaron el flujo de transferencia por el camino previsto en pruebas de usabilidad.',
      },
      {
        value: '91%',
        label: 'Revisión de Estado',
        description: 'Comprensión inmediata de fechas y horarios de entrega, tipo de cambio y comisión transparente.',
      },
      {
        value: '62.5%',
        label: 'NPS de Usabilidad',
        description: 'Promotores en la lectura del historial de transacciones y claridad de comprobantes bancarios.',
      },
    ],
    insights: [
      'Desconfianza por falta de visibilidad: Los usuarios experimentaban angustia severa al ver el saldo debitado de su cuenta sin un estado visual claro del progreso del dinero.',
      'Sobrecarga prevenible en soporte: Gran parte de los reclamos y cancelaciones ocurrían simplemente por la ausencia de un tiempo estimado de entrega visible y garantizado.',
      'Necesidad de confirmación preventiva: Los usuarios demandaban una pantalla de confirmación explícita con el resumen de destinatario y montos antes de comprometer fondos irreversibles.',
    ],
    designGoal:
      'Diseñar una nueva funcionalidad de transparencia tras el envío, brindando trazabilidad en tiempo real sobre el estado de cada transacción para generar confianza y tranquilidad inmediata.',
    comparison: {
      beforeTitle: 'Flujo Antiguo: Falta de Retroalimentación Post-Envío',
      beforeDescription: 'Pantalla estática sin feedback inmediato tras el débito, con tiempos de espera inciertos y sin detalles del destinatario accesibles.',
      beforePainPoints: [
        'Desconfianza sobre el paradero y destino final del dinero.',
        'Contactos reiterados a atención al cliente por falta de aviso de demoras.',
        'Ausencia de un comprobante de ingreso bancario descargable en 1 clic.',
      ],
      afterTitle: 'Flujo Rediseñado: Transparencia en Cada Transferencia',
      afterDescription: 'Línea de tiempo de estados en vivo, resumen de conversión garantizada y comprobante oficial disponible de inmediato.',
      afterWins: [
        'Seguimiento en tiempo real con hitos claros (Enviado, En proceso bancario, Entregado).',
        'Alertas preventivas y confirmación con doble verificación antes del envío.',
        'Historial unificado con badges semánticos de estado (En progreso, Completada).',
      ],
    },
    featureHighlights: [
      {
        id: 'rem-feat-1',
        title: 'Seguimiento de Estado en Tiempo Real',
        captionBold: 'Línea de tiempo transparente con hitos de avance para erradicar la incertidumbre del usuario.',
        explanation:
          'Implementamos un indicador progresivo que informa cuándo el dinero fue enviado, cuándo se encuentra en validación bancaria y la hora estimada de acreditación en la cuenta de destino.',
        mockupType: 'workflow',
        badge: 'FEATURE 01 // SEGUIMIENTO EN VIVO',
      },
      {
        id: 'rem-feat-2',
        title: 'Lista de Transacciones con Badges Semánticos',
        captionBold: 'Historial estructurado con identificación visual inmediata del estado de cada envío.',
        explanation:
          'Diseñamos tarjetas limpias con metadatos de moneda, destinatario y etiquetas de estado de alto contraste que reducen el tiempo de lectura a menos de 3 segundos.',
        mockupType: 'analytics',
        badge: 'FEATURE 02 // HISTORIAL CLARO',
      },
      {
        id: 'rem-feat-3',
        title: 'Alertas Preventivas y Modal de Confirmación',
        captionBold: 'Paso de verificación previa que resume destinatario, comisión y monto antes de procesar el pago.',
        explanation:
          'Incorporamos un modal de confirmación con doble chequeo de cuenta bancaria para evitar transferencias duplicadas o errores humanos irreversibles.',
        mockupType: 'inspector',
        badge: 'FEATURE 03 // CONFIRMACIÓN PREVIA',
      },
    ],
    learnings: [
      'Colaboración que impulsa el diseño: Adaptarnos a los procesos del equipo multidisciplinario e iterar sobre hallazgos existentes aceleró la entrega de soluciones centradas en el usuario.',
      'La claridad en el feedback visual inmediato es el factor más determinante para construir confianza en productos financieros digitales.',
    ],
    whatToDoDifferently:
      'Habría incorporado pruebas de usabilidad con usuarios en horarios no bancarios (fines de semana y noches) para afinar las notificaciones push cuando los bancos receptores tardan en responder.',
  },
  {
    id: 'telepianxos',
    number: '02',
    title: 'TLPianxos',
    oneLiner: 'Pedir ayuda no debería ser otra tarea del formulario',
    behanceUrl: 'https://behance.net/andres-stoehrel/telepianxos',
    heroTheme: 'lavender',
    metadata: {
      role: 'UX/UI designer, en la fase de testeo e iteración',
      duration: '1 semana, dentro de CO-UX (programa de 8)',
      platform: 'Web responsiva (prototipo Figma)',
      team: '5 diseñadores UX/UI',
    },
    problemStatement:
      'Los usuarios nuevos con TLP +18 llegan a la comunidad TLPianxos buscando apoyo, a veces en plena crisis, pero pueden pasar hasta 3 semanas sin respuesta luego de llenar un formulario de registro percibido como frío y poco claro.',
    metrics: [
      {
        value: '4/4',
        label: 'Registro en test',
        description: 'Participantes que completaron el registro en las pruebas de usabilidad.',
      },
      {
        value: '50%',
        label: 'Ayuda completada',
        description: 'Solo la mitad logró pedir ayuda en el flujo probado.',
      },
      {
        value: '3/4',
        label: 'Botón no visible',
        description: 'No vieron el botón de ayuda de inmediato durante el test.',
      },
    ],
    insights: [
      'La web se percibe como segura pero carece de contexto.',
      'Todas las personas encuestadas sintieron ansiedad por la espera y por no saber el estado de su registro.',
      'El formulario se percibe como frío y poco claro.',
    ],
    designGoal:
      'Diseñar un proceso de registro más claro y una opción de ayuda inmediata para quien llega en crisis.',
    comparison: {
      beforeTitle: 'Una espera sin respuesta',
      beforeDescription:
        'Formulario frío, sin visibilidad del estado del registro y ayuda inmediata enterrada al final del flujo.',
      beforePainPoints: [
        'Hasta 3 semanas sin respuesta tras el registro.',
        'El teléfono de emergencia en el formulario genera sensación de exponerse.',
        'La ayuda no se ve cuando el usuario más la necesita.',
      ],
      afterTitle: 'Registro claro y ayuda al primer toque',
      afterDescription:
        'Onboarding en pasos, estado de ánimo que guía el flujo e ingreso prioritario con llamada visible en crisis.',
      afterWins: [
        'Modal de llamada al elegir “Estoy en crisis”.',
        'Barra de progreso y estados “crisis / estable”.',
        'Contexto en grupos y jerarquía visual en el home.',
      ],
    },
    featureHighlights: [
      {
        id: 'tele-feat-1',
        title: 'Onboarding en tres pasos',
        captionBold: 'Explica cómo funciona la comunidad antes del registro.',
        explanation:
          'Un recorrido inicial que da contexto y reduce la sensación de formulario frío e incomprensible.',
        mockupType: 'workflow',
        badge: 'FEATURE 01 // ONBOARDING',
      },
      {
        id: 'tele-feat-2',
        title: 'Estado de ánimo: crisis o estable',
        captionBold: 'El flujo se adapta si la persona llega en crisis.',
        explanation:
          'Dos caminos con ingreso prioritario y ayuda visible para quien elige estar en crisis.',
        mockupType: 'checkout',
        badge: 'FEATURE 02 // ESTADO DE ÁNIMO',
      },
      {
        id: 'tele-feat-3',
        title: 'Llamada de ayuda inmediata',
        captionBold: '“Llamar” con confirmación antes de marcar.',
        explanation:
          'Tras iteración, la llamada aparece de inmediato al elegir crisis, no al final del registro.',
        mockupType: 'inspector',
        badge: 'FEATURE 03 // AYUDA',
      },
    ],
    learnings: [
      'Desconfiar de la métrica que sale bien. El 100% del registro escondía el 50% de la ayuda. Ahora empiezo por la tarea de mayor riesgo, no por la de mayor éxito.',
      'La ayuda no puede depender de un trámite. Quien está en crisis necesita verla antes de comprometerse con cualquier paso.',
      'Una función de ayuda es una promesa operativa. Antes de prometérla, hay que saber quién la sostiene.',
    ],
    whatToDoDifferently:
      'Con más tiempo, pondría la ayuda en el Home, antes de cualquier trámite, no solo dentro del registro.',
  },
  {
    id: 'pedidos-ya',
    number: '03',
    title: 'Pedidos Ya',
    oneLiner: 'Rediseño del flujo de seguimiento de órdenes y comunicación en delivery on-demand.',
    behanceUrl: 'https://behance.net/andres-stoehrel/pedidos-ya',
    heroTheme: 'sage',
    metadata: {
      role: 'Senior UX/UI Designer (Investigación, Flujos y Prototipado)',
      duration: '8 semanas (Double Diamond & Sprints Ágiles)',
      platform: 'App Móvil iOS & Android (Atomic Design en Figma)',
      team: '1 Product Manager, 1 UX Writer, 4 Ingenieros Mobile',
    },
    problemStatement:
      'La falta de granularidad en las etapas de preparación del local y trayecto del repartidor saturaba el soporte con consultas preventivas y elevaba cancelaciones de último minuto por incertidumbre en la entrega.',
    metrics: [
      {
        value: '-48%',
        label: 'Consultas a Soporte',
        description: 'Reducción drástica en tickets motivados por dudas sobre el estado de la orden.',
      },
      {
        value: '96%',
        label: 'Precisión Percibida de ETA',
        description: 'Usuarios que reportaron que el tiempo estimado de llegada fue claro y confiable.',
      },
      {
        value: '+22%',
        label: 'Satisfacción Post-Entrega',
        description: 'Mejora en la calificación final de la experiencia de compra en el aplicativo.',
      },
    ],
    insights: [
      'Ambigüedad en "En preparación": Usuarios se impacientaban porque no sabían si el restaurante había aceptado la orden o si ya estaba cocinándose.',
      'Geolocalización imprecisa: Ver al repartidor detenerse sin explicación generaba desconfianza; los usuarios necesitaban contexto de tráfico o paradas intermedias.',
      'Canal de comunicación contextual: Los usuarios demandaban botones rápidos para dar instrucciones específicas (timbre, conserjería) sin tener que llamar por teléfono.',
    ],
    designGoal:
      'Transformar la pantalla de seguimiento en un centro de control intuitivo que comunique con exactitud cada fase de la orden y facilite el contacto con el repartidor en momentos clave.',
    comparison: {
      beforeTitle: 'Flujo Antiguo: Seguimiento Genérico con Vacíos de Información',
      beforeDescription: 'Un mapa estático con estados globales que no explicaban demoras ni brindaban canales ágiles de aclaración.',
      beforePainPoints: [
        'Incertidumbre sobre si el restaurante realmente estaba preparando el pedido.',
        'Llamadas innecesarias al repartidor por falta de instrucciones de entrega claras.',
        'Dificultad para modificar detalles de entrega una vez despachada la orden.',
      ],
      afterTitle: 'Flujo Rediseñado: Trazabilidad Activa y Comunicación Contextual',
      afterDescription: 'Seguimiento por etapas granulares con estimación horaria dinámica y atajos para indicaciones al repartidor.',
      afterWins: [
        'Desglose transparente del tiempo de cocina versus tiempo de viaje.',
        'Atajos predefinidos de contacto rápido (dejar en conserjería, tocar timbre).',
        'Notificación proactiva cuando el repartidor está a menos de 2 minutos del domicilio.',
      ],
    },
    featureHighlights: [
      {
        id: 'pya-feat-1',
        title: 'Desglose Granular de Etapas de Preparación',
        captionBold: 'Separación clara entre aceptación del restaurante, cocción y entrega al repartidor.',
        explanation:
          'Diseñamos una barra de progreso modular que aclara exactamente en qué manos está el pedido, reduciendo la ansiedad en horarios de alta demanda.',
        mockupType: 'workflow',
        badge: 'FEATURE 01 // ETAPAS CLARAS',
      },
      {
        id: 'pya-feat-2',
        title: 'Geolocalización Dinámica con Tiempo Real (ETA)',
        captionBold: 'Mapa de alta legibilidad con actualización precisa del trayecto y avisos de proximidad.',
        explanation:
          'Optimizamos la interfaz del mapa para priorizar la ruta activa y el vehículo del repartidor con iconografía nítida y sin elementos decorativos que distraigan.',
        mockupType: 'analytics',
        badge: 'FEATURE 02 // MAPA Y ETA',
      },
      {
        id: 'pya-feat-3',
        title: 'Atajos de Indicaciones Directas al Repartidor',
        captionBold: 'Chips de mensajes predefinidos para instrucciones de entrega sin necesidad de llamadas.',
        explanation:
          'Incorporamos opciones de un toque como "Dejar en recepción" o "No tocar timbre" para resolver la entrega final con máxima fluidez.',
        mockupType: 'inspector',
        badge: 'FEATURE 03 // CONTACTO RÁPIDO',
      },
    ],
    learnings: [
      'En experiencias on-demand, la comunicación proactiva de micro-estados elimina casi el 90% de las fricciones de soporte al cliente.',
      'Diseñar pensando en el contexto de uso real (usuarios en movimiento o distraídos) exige tipografía contundente y zonas táctiles de gran tamaño.',
    ],
    whatToDoDifferently:
      'Habría ejecutado pruebas de campo directamente con repartidores para comprender mejor cómo reciben las notas de entrega en sus dispositivos mientras conducen.',
  },
];
