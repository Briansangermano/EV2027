/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENIDO EDITABLE
 *  Todo el texto, fechas, precios y contactos del evento.
 *  Para actualizar la página, modificá únicamente este archivo.
 *
 *  - `comun`: datos que no dependen del idioma (fechas ISO, precios,
 *    contactos, enlaces). Se editan una sola vez.
 *  - `es` / `en`: textos en español (por defecto) e inglés.
 *    Ambos deben tener la misma estructura.
 *  Los textos de botones y títulos de sección están en src/i18n/ui.ts.
 * ─────────────────────────────────────────────────────────────
 */
import type { Lang } from '../i18n';

/* ───────────── Datos comunes a todos los idiomas ───────────── */

const comun = {
  /** Año del evento (se usa para el countdown y el pie) */
  anio: 2027,
  referencia: '2027',

  /** Fecha y hora de inicio en formato ISO (zona horaria de Argentina) */
  inicioISO: '2027-01-11T10:00:00-03:00',
  finalizacionInscripcionISO: '2027-01-03T23:59:59-03:00',
  /** Fecha y hora de cierre (solo informativa) */
  finISO: '2027-01-15T15:00:00-03:00',

  /** Búsqueda usada por el mapa embebido */
  mapaQuery: 'Don Bosco, Av. de Mayo 1902, B1704 Ramos Mejía, La Matanza, Buenos Aires, Argentina',

  precio: 260000,
  recargo: 10000,
  libroPrecio: 7000,

  contacto: {
    whatsapp: '5491168884108',
    whatsappVisible: '+54 9 11 6888-4108',
    email: 'compenetracion.argentina@gmail.com',
  },

  localidades: [
    'Arroyo Seco',
    'CABA',
    'Córdoba',
    'Mar del Plata',
    'Marcos Paz',
    'Merlo',
    'Rosario',
    'San Justo',
    'San Miguel',
    'Santa Fe',
  ],
};

const lugarBase = {
  nombre: 'Don Bosco',
  direccion: 'Av. de Mayo 1902',
  ciudad: 'Ramos Mejía',
  provincia: 'Buenos Aires',
  textoCompleto: 'Av. de Mayo 1902, Ramos Mejía, La Matanza, Buenos Aires',
};

/* ───────────────────────── Español ───────────────────────── */

/** Fecha límite de inscripción (se usa en pago e inscripción) */
const LIMITE_ES = 'Domingo 3 de enero';
const LIMITE_CORTO_ES = '3 de enero';

const es = {
  ...comun,

  /** Tema principal de la conferencia */
  titulo: 'Los dos espíritus: el Espíritu divino y el espíritu humano',

  /** Antetítulo / eje temático (opcional) */
  antetitulo: '',

  /** Etiqueta corta que aparece en el hero y el menú */
  etiqueta: 'Escuela de la verdad',

  fechas: {
    inicio: { dia: 'lunes', numero: '11', mes: 'enero', corto: 'Lunes 11' },
    fin: { dia: 'viernes', numero: '15', mes: 'enero', corto: 'Viernes 15' },
    texto: '11 al 15 de enero',
    textoAnio: '11 al 15 de enero de 2027',
    /** Usados en los datos rápidos debajo del hero */
    rango: '11 — 15 de enero',
    rangoDias: 'lunes a viernes',
  },

  /** Horario de cada jornada */
  horario: [
    { dia: 'Lunes 11', detalle: 'Apertura · 10:00' },
    { dia: 'Martes 12', detalle: 'Jornada completa' },
    { dia: 'Miércoles 13', detalle: 'Jornada completa' },
    { dia: 'Jueves 14', detalle: 'Jornada completa' },
    { dia: 'Viernes 15', detalle: 'Cierre · 14:00' },
  ],
  horarioNota: 'El horario detallado se comunicará a los inscriptos.',

  lugar: lugarBase,

  pago: {
    descripcion: 'La tasa incluye alojamiento, comidas, remera y bosquejos.',
    precioTexto: '$ 260.000',
    incluye: '',
    recargoTexto: '+ $ 10.000',
    recargoDetalle: `Por inscribirse después del ${LIMITE_CORTO_ES}`,
    libroTexto: '+ $ 7.000',
    libroDetalle: 'Libro de lecciones',
    nota: 'El pago se entrega al hermano designado para recibir el dinero en tu localidad.',
  },

  inscripcion: {
    limite: LIMITE_ES,
    nota: 'Se requiere que todos los participantes se inscriban previamente, incluyendo quienes participen solo un día.',
    localidades: [...comun.localidades, 'Uruguay', 'Nueva Zelanda'],
    localidadesNota: 'Comunicate con el encargado de las inscripciones de tu localidad.',
    otrasNota: 'Si sos de otra localidad, escribinos y te damos las instrucciones.',
  },

  regulaciones: {
    nota: 'Cada jóven debe leer las regulaciones de la Escuela de la Verdad y firmarlas a través del formulario.',
    pasos: [
      {
        titulo: 'Leé las regulaciones',
        texto: 'Descargá el PDF y leelo completo.',
      },
      {
        titulo: 'Firmá el formulario',
        texto: 'Completá el formulario confirmando que leíste y aceptás las regulaciones.',
      },
    ],
  },

  contacto: {
    ...comun.contacto,
    mensajeWhatsapp:
      'Hola, quiero inscribirme a la Escuela de la Verdad de enero. ¿Me pasan los datos?',
    asuntoEmail: 'Inscripción Escuela de la Verdad',
  },

  participantes: {
    aviso: 'Este es un evento enfocado en los jóvenes, por lo que recomendamos asistir sin niños.',
    jovenes: {
      titulo: 'Jóvenes',
      edad: '11 a 22 años',
      requisito: 'Deberán tener entre 11 y 22 años.',
      nota: 'Traé ganas de escuchar, servir y compartir con otros jóvenes.',
    },
    resumen: 'Jóvenes · servidores 23+',
    noEnviar: [
      'Tengan menos de 11 años.',
      'Tengan problemas de comportamiento.',
      'Tengan una condición de salud que requiera cuidado especial.',
    ],
    servidores: {
      titulo: 'Servidores',
      edad: '23 años o más',
      texto:
        'Animamos la participación de jóvenes de 23 años o más, como también aquellos que han participado en las conferencias o escuelas de la verdad pasadas, los cuales colaborarán como servidores o ayudantes en el servicio para con los jóvenes.',
    },
  },

  materiales: [
    { icono: 'biblia', nombre: 'Santa Biblia', detalle: 'Versión Recobro' },
    { icono: 'himno', nombre: 'Libro de himnos', detalle: '2.ª edición' },
    { icono: 'bosquejo', nombre: 'Bosquejos', detalle: 'Los recibís al llegar' },
    { icono: 'cuaderno', nombre: 'Cuaderno y lapicera', detalle: 'Y resaltador' },
    { icono: 'agua', nombre: 'Botella de agua', detalle: 'Para todo el día' },
  ],

  alojamiento: {
    provee: ['Cama', 'Almohada'],
    traer: [
      'Frazada',
      'Juego de sábanas',
      'Funda de almohada',
      'Toalla de baño',
      'Objetos de higiene personal',
      'Protector solar',
      'Repelente de mosquitos',
    ],
  },

  comidas: {
    texto:
      'Se dará un menú equilibrado de carnes y verduras para el adecuado nutrimento, repartido en las cuatro comidas diarias.',
    /** En orden: desayuno, almuerzo, merienda, cena (cada una tiene su ícono) */
    comidas: ['Desayuno', 'Almuerzo', 'Merienda', 'Cena'],
    inicio: 'Almuerzo del lunes',
    fin: 'Almuerzo del viernes',
    avisos: [
      {
        titulo: 'Si llegás antes o te quedás después',
        texto:
          'Avisá con anticipación: no habrá servicio de cocina fuera del horario de la conferencia.',
      },
      {
        titulo: 'Necesidades específicas',
        texto:
          'Si sos hipertenso, celíaco o tenés alguna necesidad alimentaria, avisá al inscribirte y se te proveerá de alimentos apropiados.',
      },
    ],
  },

  compartir: {
    texto:
      'Les solicitamos que compartan esta invitación, conforme a la guía del Señor, en todo Su Cuerpo.',
    firma: '',
    firmaDetalle: '',
  },
};

export type Evento = typeof es;

/* ───────────────────────── English ───────────────────────── */

const LIMITE_EN = 'Sunday, January 3';
const LIMITE_CORTO_EN = 'January 3';

const en: Evento = {
  ...comun,

  titulo: 'The two spirits: the divine Spirit and the human spirit',
  antetitulo: '',
  etiqueta: 'School of truth',

  fechas: {
    inicio: { dia: 'Monday', numero: '11', mes: 'January', corto: 'Monday 11' },
    fin: { dia: 'Friday', numero: '15', mes: 'January', corto: 'Friday 15' },
    texto: 'January 11–15',
    textoAnio: 'January 11–15, 2027',
    rango: 'January 11 — 15',
    rangoDias: 'Monday to Friday',
  },

  horario: [
    { dia: 'Monday 11', detalle: 'Opening · 10:00' },
    { dia: 'Tuesday 12', detalle: 'Full day' },
    { dia: 'Wednesday 13', detalle: 'Full day' },
    { dia: 'Thursday 14', detalle: 'Full day' },
    { dia: 'Friday 15', detalle: 'Closing · 14:00' },
  ],
  horarioNota: 'The detailed schedule will be sent to registered participants.',

  lugar: lugarBase,

  pago: {
    descripcion: 'The payment includes lodging, meals, a T-shirt and outlines.',
    precioTexto: 'ARS $260,000',
    incluye: '',
    recargoTexto: '+ ARS $10,000',
    recargoDetalle: `For registering after ${LIMITE_CORTO_EN}`,
    libroTexto: '+ ARS $7,000',
    libroDetalle: 'Lesson book',
    nota: 'Payment is handed to the brother designated to receive it in your locality.',
  },

  inscripcion: {
    limite: LIMITE_EN,
    nota: 'All participants must register in advance, including those attending for only one day.',
    localidades: [...comun.localidades, 'Uruguay', 'New Zealand'],
    localidadesNota: 'Contact the person in charge of registrations in your locality.',
    otrasNota: "If you're from another locality, message us and we'll send you the instructions.",
  },

  regulaciones: {
    nota: 'Every young person must read the School of Truth regulations and sign them through the form.',
    pasos: [
      {
        titulo: 'Read the regulations',
        texto: 'Download the PDF (in Spanish) and read it in full.',
      },
      {
        titulo: 'Sign the form',
        texto: 'Fill out the form confirming that you have read and accept the regulations.',
      },
    ],
  },

  contacto: {
    ...comun.contacto,
    mensajeWhatsapp:
      "Hi, I'd like to register for the January School of Truth. Could you send me the details?",
    asuntoEmail: "School of Truth registration",
  },

  participantes: {
    aviso: 'This event is focused on young people, so we recommend attending without children.',
    jovenes: {
      titulo: 'Young people',
      edad: 'Ages 11 to 22',
      requisito: 'Must be between 11 and 22 years old.',
      nota: 'Come ready to listen, serve and fellowship with other young people.',
    },
    resumen: 'Young people · serving ones 23+',
    noEnviar: [
      'Are under 11 years old.',
      'Have behavioral problems.',
      'Have a health condition that requires special care.',
    ],
    servidores: {
      titulo: 'Serving ones',
      edad: '23 or older',
      texto:
        'We encourage young people aged 23 or older, as well as those who have attended past conferences or schools of truth, to take part as serving ones or helpers in the service to the young people.',
    },
  },

  materiales: [
    { icono: 'biblia', nombre: 'Holy Bible', detalle: 'Recovery Version' },
    { icono: 'himno', nombre: 'Hymnal', detalle: '2nd edition' },
    { icono: 'bosquejo', nombre: 'Outlines', detalle: 'Handed out on arrival' },
    { icono: 'cuaderno', nombre: 'Notebook and pen', detalle: 'And a highlighter' },
    { icono: 'agua', nombre: 'Water bottle', detalle: 'For the whole day' },
  ],

  alojamiento: {
    provee: ['Bed', 'Pillow'],
    traer: [
      'Blanket',
      'Bed sheets',
      'Pillowcase',
      'Bath towel',
      'Personal hygiene items',
      'Sunscreen',
      'Mosquito repellent',
    ],
  },

  comidas: {
    texto:
      'A balanced menu of meat and vegetables will be served for proper nourishment, spread across four daily meals.',
    comidas: ['Breakfast', 'Lunch', 'Afternoon tea', 'Dinner'],
    inicio: 'Monday lunch',
    fin: 'Friday lunch',
    avisos: [
      {
        titulo: 'Arriving early or staying later',
        texto: 'Let us know in advance: there will be no kitchen service outside conference hours.',
      },
      {
        titulo: 'Special dietary needs',
        texto:
          'If you have high blood pressure, celiac disease or any other dietary need, let us know when you register and suitable food will be provided.',
      },
    ],
  },

  compartir: {
    texto:
      'We ask that you share this invitation, according to the Lord’s leading, throughout His Body.',
    firma: '',
    firmaDetalle: '',
  },
};

/* ───────────────────────── Enlaces ───────────────────────── */

function crearEnlaces(evento: Evento) {
  return {
    whatsapp: `https://wa.me/${evento.contacto.whatsapp}?text=${encodeURIComponent(
      evento.contacto.mensajeWhatsapp,
    )}`,
    email: `mailto:${evento.contacto.email}?subject=${encodeURIComponent(evento.contacto.asuntoEmail)}`,
    regulacionesPdf: '/regulaciones.pdf',
    regulacionesForm:
      'https://inscripcion-conferencias.getgrist.com/forms/34RXjSEFxoVNSieY1EVFMD/205',
    mapa: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Casa De Retiro Domingo Savio, Av. de Mayo 1902, Ramos Mejía')}`,
    mapaEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.721920587829!2d-58.5573180101768!3d-34.66172508916139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7d68b1b28d9%3A0xc6f12bc83a571f0!2sCasa%20De%20Retiro%20Domingo%20Savio!5e0!3m2!1ses-419!2sar!4v1794489946107!5m2!1ses-419!2sar',
  };
}

const contenidos = { es, en };

export function getContenido(lang: Lang) {
  const evento = contenidos[lang];
  return { evento, enlaces: crearEnlaces(evento) };
}

/** Compatibilidad: contenido en el idioma por defecto. */
export const evento = es;
export const enlaces = crearEnlaces(es);
