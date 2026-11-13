/**
 * ─────────────────────────────────────────────────────────────
 *  TEXTOS DE LA INTERFAZ
 *  Títulos de sección, botones, etiquetas y textos de accesibilidad.
 *  El contenido del evento (fechas, precios, listas) está en
 *  src/data/contenido.ts.
 * ─────────────────────────────────────────────────────────────
 */

const es = {
  meta: {
    ogLocale: 'es_AR',
    saltar: 'Saltar al contenido',
    descripcion: (titulo: string, fechas: string, lugar: string, ciudad: string, limite: string) =>
      `${titulo}. ${fechas} en ${lugar}, ${ciudad}. Inscripción hasta el ${limite}.`,
  },
  nav: {
    irInicio: 'Ir al inicio',
    marcaFuerte: 'Escuela',
    marcaSub: 'de la verdad',
    secciones: 'Secciones principales',
    menuMovil: 'Menú móvil',
    abrirMenu: 'Abrir menú',
    cerrarMenu: 'Cerrar menú',
    cambiarIdioma: 'Cambiar idioma',
    inicio: 'Inicio',
    lugar: 'Lugar',
    pago: 'Pago',
    inscripcion: 'Inscripción',
    regulaciones: 'Regulaciones',
    preparativos: 'Preparativos',
    participantes: 'Participantes',
    materiales: 'Materiales',
    comidas: 'Comidas',
  },
  hero: {
    region: 'Argentina - Uruguay',
    countdownTitulo: 'La inscripción finaliza en',
    dias: 'días',
    horas: 'horas',
    min: 'min',
    seg: 'seg',
    countdownFin: 'La conferencia ya comenzó',
    inscribirme: 'Quiero inscribirme',
    ubicacion: 'Ver ubicación',
    bajar: 'Bajar a fechas y lugar',
    deslizar: 'Deslizá',
  },
  datos: {
    aria: 'Datos rápidos del evento',
    fechas: 'Fechas',
    lugar: 'Lugar',
    edades: 'Edades',
    tasa: 'Tasa',
  },
  fechas: {
    titulo: 'Lugar',
    lead: 'Anotá las fechas y coordiná el viaje con los hermanos de tu localidad.',
    mapaTitulo: (lugar: string, ciudad: string) => `Mapa de ${lugar} en ${ciudad}`,
    abrirMaps: 'Abrir en Maps',
  },
  pago: {
    titulo: 'Pago',
    comoTitulo: '¿Cómo se paga?',
    tasaLabel: 'Tasa por participante',
    opcional: 'Opcional',
    recargo: 'Recargo',
    irInscripcion: 'Ir a la inscripción',
  },
  inscripcion: {
    titulo: 'Inscripción',
    ultimoDia: 'Último día de inscripción',
    paraInscribirte: 'Para realizar la inscripción:',
    otras: 'Otras localidades',
    noVes: '¿No ves tu ciudad?',
    whatsapp: 'Escribinos por WhatsApp',
    o: 'o',
    emailCopiado: 'Email copiado',
    copiarEmail: 'Copiar el email de contacto',
  },
  regulaciones: {
    titulo: 'Regulaciones',
    paso: 'Paso',
    verPdf: 'Ver PDF',
    descargar: 'Descargar',
    nombreArchivo: 'Regulaciones - Escuela de la verdad.pdf',
    firmar: 'Firmar regulaciones',
  },
  participantes: {
    titulo: 'Participantes',
    estudiantes: 'Estudiantes',
    servidores: 'Servidores',
    noEnviar: 'Por favor, no enviar jóvenes que:',
  },
  materiales: {
    titulo: 'Materiales para',
    tituloEm: 'las reuniones',
    lead: 'Prepará tu mochila con estos elementos. Los bosquejos se entregan al llegar al predio.',
    checklist: 'Checklist',
  },
  alojamiento: {
    titulo: 'Alojamiento',
    lead: 'El predio les proveerá cama y almohada. El resto del equipaje corre por tu cuenta, así que armá la valija con tiempo.',
    traer: 'Traé en tu valija',
    items: 'ítems',
    dudas: '¿Dudas con el equipaje? Contactate con los servidores de tu localidad.',
  },
  comidas: {
    titulo: 'Comidas',
    comienza: 'Comienza',
    finaliza: 'Finaliza',
  },
  cierre: {
    eyebrow: 'Compartí la invitación',
    compartir: 'Compartir la invitación',
  },
  footer: {
    marca: 'Escuela de la verdad',
    enlaces: 'Enlaces del pie',
  },
  /** Textos usados por los scripts del navegador (src/scripts/main.ts) */
  js: {
    numberLocale: 'es-AR',
    abrirMenu: 'Abrir menú',
    cerrarMenu: 'Cerrar menú',
    copiado: 'Copiado',
    noCopiar: 'No se pudo copiar',
    enlaceCopiado: 'Enlace copiado',
  },
};

export type UI = typeof es;

const en: UI = {
  meta: {
    ogLocale: 'en_US',
    saltar: 'Skip to content',
    descripcion: (titulo, fechas, lugar, ciudad, limite) =>
      `${titulo}. ${fechas} at ${lugar}, ${ciudad}. Registration open until ${limite}.`,
  },
  nav: {
    irInicio: 'Go to top',
    marcaFuerte: 'School',
    marcaSub: 'of truth',
    secciones: 'Main sections',
    menuMovil: 'Mobile menu',
    abrirMenu: 'Open menu',
    cerrarMenu: 'Close menu',
    cambiarIdioma: 'Change language',
    inicio: 'Home',
    lugar: 'Venue',
    pago: 'Payment',
    inscripcion: 'Registration',
    regulaciones: 'Regulations',
    preparativos: 'What to bring',
    participantes: 'Participants',
    materiales: 'Materials',
    comidas: 'Meals',
  },
  hero: {
    region: 'Argentina - Uruguay',
    countdownTitulo: 'Registration closes in',
    dias: 'days',
    horas: 'hours',
    min: 'min',
    seg: 'sec',
    countdownFin: 'The conference has started',
    inscribirme: 'Register now',
    ubicacion: 'See location',
    bajar: 'Scroll to dates and venue',
    deslizar: 'Scroll',
  },
  datos: {
    aria: 'Event quick facts',
    fechas: 'Dates',
    lugar: 'Venue',
    edades: 'Ages',
    tasa: 'Fee',
  },
  fechas: {
    titulo: 'Venue',
    lead: 'Save the dates and coordinate your trip with the brothers in your locality.',
    mapaTitulo: (lugar, ciudad) => `Map of ${lugar} in ${ciudad}`,
    abrirMaps: 'Open in Maps',
  },
  pago: {
    titulo: 'Payment',
    comoTitulo: 'How do I pay?',
    tasaLabel: 'Fee per participant',
    opcional: 'Optional',
    recargo: 'Late fee',
    irInscripcion: 'Go to registration',
  },
  inscripcion: {
    titulo: 'Registration',
    ultimoDia: 'Last day to register',
    paraInscribirte: 'To register:',
    otras: 'Other localities',
    noVes: "Don't see your city?",
    whatsapp: 'Message us on WhatsApp',
    o: 'or',
    emailCopiado: 'Email copied',
    copiarEmail: 'Copy the contact email',
  },
  regulaciones: {
    titulo: 'Regulations',
    paso: 'Step',
    verPdf: 'View PDF',
    descargar: 'Download',
    nombreArchivo: 'Regulations - School of truth.pdf',
    firmar: 'Sign the regulations',
  },
  participantes: {
    titulo: 'Participants',
    estudiantes: 'Students',
    servidores: 'Serving ones',
    noEnviar: 'Please do not send young people who:',
  },
  materiales: {
    titulo: 'Materials for',
    tituloEm: 'the meetings',
    lead: 'Pack your bag with these items. Outlines are handed out when you arrive.',
    checklist: 'Checklist',
  },
  alojamiento: {
    titulo: 'Lodging',
    lead: 'The venue provides a bed and a pillow. Everything else is up to you, so pack your suitcase ahead of time.',
    traer: 'Pack in your suitcase',
    items: 'items',
    dudas: 'Questions about what to pack? Contact the serving ones in your locality.',
  },
  comidas: {
    titulo: 'Meals',
    comienza: 'Starts',
    finaliza: 'Ends',
  },
  cierre: {
    eyebrow: 'Share the invitation',
    compartir: 'Share the invitation',
  },
  footer: {
    marca: 'School of truth',
    enlaces: 'Footer links',
  },
  js: {
    numberLocale: 'en-US',
    abrirMenu: 'Open menu',
    cerrarMenu: 'Close menu',
    copiado: 'Copied',
    noCopiar: 'Could not copy',
    enlaceCopiado: 'Link copied',
  },
};

export const ui = { es, en } as const;
