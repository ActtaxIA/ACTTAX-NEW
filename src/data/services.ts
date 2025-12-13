export interface SubService {
  title: string
  description: string
}

export interface UseCase {
  title: string
  description: string
  icon: string
}

export interface Benefit {
  title: string
  description: string
  icon: string
}

export interface WorkflowStep {
  title: string
  description: string
  duration: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Service {
  id: string
  title: string
  slug: string
  description: string
  icon: string
  features: string[]
  subservices: SubService[]
  useCases: UseCase[]
  benefits: Benefit[]
  workflow: WorkflowStep[]
  faqs: FAQ[]
}

export const services: Service[] = [
  {
    id: 'operaciones-vinculadas',
    title: 'Operaciones Vinculadas y Precios de Transferencia',
    slug: 'operaciones-vinculadas',
    description: 'Consultoría en precios de transferencia y operaciones vinculadas. Documentación, defensa fiscal y optimización tributaria. Murcia.',
    icon: 'FileText',
    features: [
      'Valoración de operaciones vinculadas',
      'Declaraciones informativas (Modelo 232)',
      'Acuerdos Previos de Valoración (APAs)',
      'Documentación de precios de transferencia',
      'Defensa ante inspecciones',
      'Estudios de comparabilidad',
    ],
    useCases: [
      {
        title: 'Apertura de filial internacional',
        description: 'Vas a abrir una filial en otro país y necesitas establecer políticas de precios de transferencia desde el inicio.',
        icon: 'Globe',
      },
      {
        title: 'Requerimiento Modelo 232',
        description: 'Has recibido un requerimiento de Hacienda para presentar el Modelo 232 de operaciones vinculadas.',
        icon: 'FileWarning',
      },
      {
        title: 'Inspección fiscal',
        description: 'Tienes una inspección de Hacienda que está revisando tus operaciones con partes vinculadas.',
        icon: 'Shield',
      },
      {
        title: 'Volumen superior a 250k€',
        description: 'Has facturado más de 250.000€ con empresas vinculadas y necesitas cumplir con la normativa.',
        icon: 'TrendingUp',
      },
      {
        title: 'Servicios intragrupo',
        description: 'Prestas servicios intragrupo (IT, management fees, royalties) y necesitas justificar su valor.',
        icon: 'Network',
      },
      {
        title: 'Reestructuración empresarial',
        description: 'Estás realizando una reestructuración de grupo y necesitas documentar las transferencias de activos.',
        icon: 'RefreshCw',
      },
    ],
    benefits: [
      {
        title: 'Reducción de riesgo fiscal',
        description: 'Evita sanciones de hasta 150.000€ por incumplimiento de las obligaciones de precios de transferencia.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Optimización tributaria',
        description: 'Estructura eficiente de precios de transferencia que minimiza la carga fiscal global del grupo.',
        icon: 'Target',
      },
      {
        title: 'Defensa ante inspecciones',
        description: 'Documentación robusta que respalda tus operaciones frente a la Administración Tributaria.',
        icon: 'Award',
      },
      {
        title: 'Tranquilidad y cumplimiento',
        description: 'Duerme tranquilo sabiendo que cumples con todas las obligaciones fiscales internacionales.',
        icon: 'Heart',
      },
    ],
    workflow: [
      {
        title: 'Diagnóstico inicial',
        description: 'Reunión para analizar tu estructura de grupo, operaciones vinculadas actuales y obligaciones fiscales.',
        duration: '1-2 días',
      },
      {
        title: 'Análisis y propuesta',
        description: 'Revisión detallada de tus operaciones y elaboración de propuesta personalizada con alcance, metodología y presupuesto.',
        duration: '3-5 días',
      },
      {
        title: 'Ejecución del proyecto',
        description: 'Desarrollo de la documentación, estudios de comparabilidad, análisis funcional y preparación de informes.',
        duration: '15-45 días',
      },
      {
        title: 'Entrega y seguimiento',
        description: 'Presentación del informe final, capacitación de tu equipo y soporte continuo para futuras consultas.',
        duration: 'Soporte continuo',
      },
    ],
    faqs: [
      {
        question: '¿Desde qué volumen de facturación es obligatorio el Modelo 232?',
        answer: 'El Modelo 232 es obligatorio si el importe de las operaciones con una misma persona o entidad vinculada supera los 250.000€ anuales. También existen umbrales específicos para operaciones realizadas en paraísos fiscales (100.000€) y para determinadas operaciones específicas.',
      },
      {
        question: '¿Qué pasa si no presento la documentación de precios de transferencia?',
        answer: 'La falta de presentación o presentación incorrecta del Modelo 232 puede conllevar sanciones de 1.000€ a 150.000€, dependiendo de la gravedad del incumplimiento. Además, la ausencia de documentación adecuada puede resultar en ajustes fiscales y recargos en caso de inspección.',
      },
      {
        question: '¿Cuánto tiempo tarda elaborar la documentación de PT?',
        answer: 'Depende de la complejidad de las operaciones. Un proyecto estándar de documentación de precios de transferencia suele tomar entre 3 y 6 semanas. Para estructuras más complejas o grupos multinacionales, puede extenderse hasta 2-3 meses.',
      },
      {
        question: '¿Qué es un APA y cuándo lo necesito?',
        answer: 'Un Acuerdo Previo de Valoración (APA) es un acuerdo vinculante con la Administración Tributaria sobre la metodología de precios de transferencia. Es recomendable para operaciones recurrentes de alto valor, reestructuraciones empresariales o cuando se quiere certeza fiscal a largo plazo.',
      },
      {
        question: '¿Necesito actualizar la documentación cada año?',
        answer: 'Sí, la documentación de precios de transferencia debe actualizarse anualmente para reflejar las operaciones del ejercicio fiscal correspondiente. Sin embargo, si la estructura y metodología no cambian, las actualizaciones suelen ser más ágiles que la documentación inicial.',
      },
    ],
    subservices: [
      {
        title: 'Valoración de Operaciones Vinculadas',
        description: 'Análisis exhaustivo para determinar el valor de mercado en transacciones entre partes vinculadas, asegurando el cumplimiento con las normativas fiscales.',
      },
      {
        title: 'Declaraciones Informativas (Modelo 232)',
        description: 'Preparación y presentación de las declaraciones informativas de operaciones vinculadas, asegurando el cumplimiento fiscal.',
      },
      {
        title: 'Análisis de Servicios Intragrupo',
        description: 'Análisis detallado de los servicios intragrupo para justificar su valor y necesidad, asegurando una correcta asignación de costes.',
      },
      {
        title: 'Consultoría y Planificación Estratégica',
        description: 'Diseño de estrategias de precios de transferencia personalizadas para optimizar la eficiencia fiscal.',
      },
      {
        title: 'Acuerdos Previos de Valoración (APAs)',
        description: 'Asistencia en la negociación y obtención de APAs con las autoridades fiscales.',
      },
      {
        title: 'Documentación de Precios de Transferencia',
        description: 'Desarrollo de la documentación requerida por la OCDE, incluyendo informes maestro y local.',
      },
      {
        title: 'Redacción y Revisión de Contratos',
        description: 'Elaboración y revisión de contratos entre partes vinculadas para garantizar condiciones de mercado.',
      },
      {
        title: 'Defensa ante Inspecciones',
        description: 'Apoyo integral en la defensa frente a inspecciones fiscales relacionadas con operaciones vinculadas.',
      },
      {
        title: 'Estudios de Comparabilidad',
        description: 'Realización de estudios de comparabilidad para respaldar las políticas de precios de transferencia.',
      },
      {
        title: 'Formación y Capacitación',
        description: 'Programas de formación para capacitar a tu equipo en las mejores prácticas de precios de transferencia.',
      },
    ],
  },
  {
    id: 'valoracion-empresas',
    title: 'Valoración Financiera y de Empresas',
    slug: 'valoracion-empresas',
    description: 'Valoración profesional de empresas, startups, activos e intangibles. Informes técnicos para M&A, inversión y cumplimiento fiscal.',
    icon: 'TrendingUp',
    features: [
      'Valoración de empresas',
      'Valoración inmobiliaria',
      'Fusiones y adquisiciones',
      'Startups y empresas tecnológicas',
      'Activos financieros',
      'Intangibles y fondos de comercio',
    ],
    useCases: [
      {
        title: 'Venta de empresa',
        description: 'Quieres vender tu empresa y necesitas conocer su valor de mercado para negociar con compradores potenciales.',
        icon: 'DollarSign',
      },
      {
        title: 'Captación de inversión',
        description: 'Buscas inversores o estás en proceso de ronda de financiación y necesitas una valoración profesional.',
        icon: 'TrendingUp',
      },
      {
        title: 'Entrada o salida de socios',
        description: 'Un socio quiere entrar o salir de la empresa y necesitas determinar el valor de las participaciones.',
        icon: 'Users',
      },
      {
        title: 'Herencia empresarial',
        description: 'Proceso de sucesión generacional o herencia que requiere valorar la empresa para reparto entre herederos.',
        icon: 'Home',
      },
      {
        title: 'Divorcio con activos empresariales',
        description: 'Proceso de divorcio donde uno o ambos cónyuges tienen participaciones en empresas que deben valorarse.',
        icon: 'Scale',
      },
      {
        title: 'Fusión o adquisición',
        description: 'Estás considerando comprar otra empresa o fusionarte y necesitas una valoración independiente.',
        icon: 'Merge',
      },
    ],
    benefits: [
      {
        title: 'Valoración objetiva y defendible',
        description: 'Informes técnicamente robustos basados en metodologías reconocidas (DCF, múltiplos, activos) que resisten escrutinio fiscal y legal.',
        icon: 'FileCheck',
      },
      {
        title: 'Maximiza el valor en negociaciones',
        description: 'Una valoración profesional aumenta tu poder de negociación frente a inversores, compradores o socios en un 15-30%.',
        icon: 'ArrowUpCircle',
      },
      {
        title: 'Cumplimiento fiscal',
        description: 'Evita ajustes fiscales por operaciones valoradas incorrectamente. Nuestras valoraciones son aceptadas por Hacienda.',
        icon: 'CheckCircle',
      },
      {
        title: 'Claridad y transparencia',
        description: 'Comprende el valor real de tu empresa, sus drivers de valor y áreas de mejora para incrementar su valuación.',
        icon: 'Eye',
      },
    ],
    workflow: [
      {
        title: 'Reunión exploratoria',
        description: 'Entendemos tu situación, el propósito de la valoración y las características de tu empresa o activo.',
        duration: '1 día',
      },
      {
        title: 'Due diligence y recopilación',
        description: 'Solicitamos información financiera, contratos clave, proyecciones y otros datos relevantes para la valoración.',
        duration: '5-7 días',
      },
      {
        title: 'Análisis y modelización',
        description: 'Aplicamos metodologías de valoración, construimos modelos financieros y realizamos análisis de comparables.',
        duration: '10-15 días',
      },
      {
        title: 'Informe y presentación',
        description: 'Entregamos informe detallado con la valoración y sus fundamentos, seguido de presentación ejecutiva.',
        duration: '2-3 días',
      },
    ],
    faqs: [
      {
        question: '¿Cuánto tarda una valoración de empresa?',
        answer: 'Una valoración estándar de una PYME suele tomar entre 2 y 4 semanas desde la firma del encargo hasta la entrega del informe. Para empresas más complejas, startups tecnológicas o valoraciones especializadas, el plazo puede extenderse a 4-8 semanas.',
      },
      {
        question: '¿Qué métodos de valoración utilizáis?',
        answer: 'Utilizamos múltiples metodologías según el caso: Descuento de Flujos de Caja (DCF), Múltiplos de Mercado, Valor Patrimonial, y métodos específicos para startups (Venture Capital Method, Berkus). Siempre aplicamos al menos dos métodos para contrastar resultados.',
      },
      {
        question: '¿La valoración es vinculante para Hacienda?',
        answer: 'Nuestra valoración no es vinculante per se, pero si está técnicamente bien fundamentada y utiliza metodologías reconocidas, Hacienda normalmente la acepta. Tenemos un historial del 95% de aceptación en inspecciones fiscales.',
      },
      {
        question: '¿Cuánto cuesta valorar una empresa?',
        answer: 'El coste varía según la complejidad: desde 2.500€ para valoraciones simples de PYMEs, hasta 15.000€+ para grandes empresas o valoraciones complejas. Ofrecemos presupuesto detallado tras la reunión inicial sin compromiso.',
      },
      {
        question: '¿Qué información necesitáis para valorar mi empresa?',
        answer: 'Necesitamos: estados financieros de los últimos 3-5 años, proyecciones financieras, descripción del negocio y mercado, contratos relevantes, estructura accionarial, y cualquier información sobre activos o pasivos significativos.',
      },
    ],
    subservices: [
      {
        title: 'Valoración de Empresas',
        description: 'Valoraciones precisas utilizando métodos reconocidos para fusiones, adquisiciones o reestructuraciones.',
      },
      {
        title: 'Valoración Inmobiliaria',
        description: 'Valoraciones rigurosas de activos inmobiliarios comerciales y residenciales.',
      },
      {
        title: 'Valoración para Fusiones y Adquisiciones',
        description: 'Asesoramiento en procesos de M&A con valoraciones detalladas.',
      },
      {
        title: 'Valoración de Startups y Empresas Tecnológicas',
        description: 'Especialización en valorar startups considerando factores intangibles y potencial de crecimiento.',
      },
      {
        title: 'Valoración de Activos Financieros',
        description: 'Servicios de valoración de carteras de inversión e instrumentos financieros complejos.',
      },
      {
        title: 'Valoración de Intangibles',
        description: 'Evaluación de activos intangibles como marcas, patentes o fondos de comercio.',
      },
      {
        title: 'Valoración para Reestructuraciones',
        description: 'Valoraciones para reestructuraciones corporativas y optimización de estructura de capital.',
      },
    ],
  },
  {
    id: 'inteligencia-artificial',
    title: 'Inteligencia Artificial Aplicada',
    slug: 'inteligencia-artificial',
    description: 'IA aplicada a fiscalidad y finanzas. Automatiza facturas, análisis de riesgos, predicción de flujos y reporting en tiempo real.',
    icon: 'Brain',
    features: [
      'Automatización documental',
      'Reporting fiscal inteligente',
      'Análisis predictivo financiero',
      'Cumplimiento automatizado',
      'OCR avanzado',
      'Integración con ERPs',
    ],
    useCases: [
      {
        title: 'Alto volumen de facturas',
        description: 'Procesas más de 100 facturas al mes manualmente y necesitas automatizar la captura y clasificación.',
        icon: 'FileStack',
      },
      {
        title: 'Consolidación multi-filial',
        description: 'Necesitas consolidar datos financieros de múltiples filiales o sistemas contables diferentes.',
        icon: 'Database',
      },
      {
        title: 'Predicción de flujos de caja',
        description: 'Quieres anticipar problemas de liquidez y optimizar la gestión de tesorería con modelos predictivos.',
        icon: 'LineChart',
      },
      {
        title: 'Cumplimiento normativo',
        description: 'Necesitas automatizar la validación de operaciones frente a normativas fiscales complejas y cambiantes.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Análisis de grandes volúmenes',
        description: 'Tienes miles de transacciones y necesitas identificar patrones, anomalías o riesgos fiscales.',
        icon: 'ScanSearch',
      },
      {
        title: 'Reporting ejecutivo automatizado',
        description: 'Quieres dashboards en tiempo real con métricas financieras y fiscales sin intervención manual.',
        icon: 'BarChart',
      },
    ],
    benefits: [
      {
        title: 'Ahorro de tiempo significativo',
        description: 'Reduce hasta un 80% el tiempo dedicado a tareas administrativas y de procesamiento documental (200+ horas al año).',
        icon: 'Clock',
      },
      {
        title: 'Reducción de errores',
        description: 'La automatización elimina errores humanos en la transcripción y clasificación de datos financieros (precisión >99%).',
        icon: 'Target',
      },
      {
        title: 'Decisiones basadas en datos',
        description: 'Acceso a insights y análisis predictivos que mejoran la toma de decisiones estratégicas y financieras.',
        icon: 'Brain',
      },
      {
        title: 'Escalabilidad sin costes',
        description: 'Crece tu volumen de operaciones sin necesidad de contratar más personal administrativo.',
        icon: 'Rocket',
      },
    ],
    workflow: [
      {
        title: 'Diagnóstico tecnológico',
        description: 'Analizamos tus procesos actuales, sistemas existentes, volumen de operaciones y puntos de dolor específicos.',
        duration: '2-3 días',
      },
      {
        title: 'Diseño de solución',
        description: 'Proponemos arquitectura de IA personalizada, integraciones necesarias y roadmap de implementación por fases.',
        duration: '1 semana',
      },
      {
        title: 'Desarrollo e integración',
        description: 'Implementamos modelos de IA, conectamos con tus sistemas (ERP, contabilidad) y realizamos pruebas exhaustivas.',
        duration: '4-8 semanas',
      },
      {
        title: 'Formación y optimización',
        description: 'Capacitamos a tu equipo, monitorizamos rendimiento y optimizamos continuamente los modelos de IA.',
        duration: 'Soporte continuo',
      },
    ],
    faqs: [
      {
        question: '¿Necesito tener conocimientos técnicos de IA?',
        answer: 'No, nos encargamos de toda la parte técnica. Tú solo necesitas conocer tus procesos de negocio. Diseñamos interfaces intuitivas y proporcionamos formación completa a tu equipo.',
      },
      {
        question: '¿Cuánto tiempo tarda implementar una solución de IA?',
        answer: 'Proyectos simples (OCR, clasificación) pueden estar operativos en 2-4 semanas. Proyectos complejos (análisis predictivo, múltiples integraciones) requieren 2-3 meses. Trabajamos por fases para entregar valor incremental.',
      },
      {
        question: '¿La IA puede integrarse con mi software contable actual?',
        answer: 'Sí, tenemos experiencia integrando con los principales ERPs y software contable: SAP, Oracle, A3, Sage, ContaPlus, y otros. Si usas un sistema específico, podemos crear conectores personalizados.',
      },
      {
        question: '¿Qué ROI puedo esperar de una solución de IA?',
        answer: 'Nuestros clientes típicamente recuperan la inversión en 6-12 meses gracias al ahorro de tiempo, reducción de errores y mejor toma de decisiones. Algunas automatizaciones documentales tienen ROI en menos de 6 meses.',
      },
      {
        question: '¿Mis datos están seguros?',
        answer: 'Absolutamente. Trabajamos con infraestructura cloud certificada (AWS, Azure), encriptación end-to-end, y cumplimiento RGPD. Podemos implementar soluciones on-premise si lo requieres. Firmamos NDAs y acuerdos de confidencialidad.',
      },
    ],
    subservices: [
      {
        title: 'Automatización Documental',
        description: 'Soluciones de IA para procesar y clasificar documentos financieros y fiscales.',
      },
      {
        title: 'Reporting Fiscal Inteligente',
        description: 'Automatización de la generación de informes regulatorios y fiscales.',
      },
      {
        title: 'Análisis Predictivo Financiero',
        description: 'Modelos de machine learning para proyectar escenarios de negocio.',
      },
      {
        title: 'Cumplimiento Automatizado',
        description: 'Herramientas que validan la consistencia de operaciones frente a normativa fiscal.',
      },
      {
        title: 'Extracción de Datos y OCR Avanzado',
        description: 'Tecnologías de reconocimiento óptico para digitalizar documentos financieros.',
      },
      {
        title: 'Agentes de IA para Contabilidad',
        description: 'Agentes especializados que analizan datos contables en tiempo real.',
      },
      {
        title: 'Integración con ERPs y Sistemas',
        description: 'Conexión de soluciones de IA con software contable y ERPs.',
      },
      {
        title: 'Formación en IA Financiera',
        description: 'Capacitación en el uso de herramientas de IA para gestión fiscal y financiera.',
      },
    ],
  },
]

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug)
}

export const getAllServiceSlugs = (): string[] => {
  return services.map((service) => service.slug)
}
