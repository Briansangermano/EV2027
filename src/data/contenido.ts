/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENIDO EDITABLE
 *  Todo el texto, fechas, precios y contactos del evento.
 *  Para actualizar la página, modificá únicamente este archivo.
 * ─────────────────────────────────────────────────────────────
 */

/** Fecha límite de inscripción (se usa en pago e inscripción) */
const LIMITE = 'domingo 3 de enero';
const LIMITE_CORTO = '3 de enero';

export const evento = {
  /** Tema principal de la conferencia */
  titulo: 'El testimonio de Dios lo revela a Él ante Su pueblo',

  /** Antetítulo / eje temático */
  antetitulo: 'Aspectos cruciales de la economía de Dios presentados en Éxodo (3)',

  /** Etiqueta corta que aparece en el hero y el menú */
  etiqueta: 'Conferencia de jóvenes',
  referencia: 'Éxodo (3)',

  /** Año del evento (se usa para el countdown y el pie) */
  anio: 2027,

  /** Fecha y hora de inicio en formato ISO (zona horaria de Argentina) */
  inicioISO: '2027-01-11T10:00:00-03:00',

  /** Fecha y hora de cierre (solo informativa) */
  finISO: '2027-01-16T15:00:00-03:00',

  fechas: {
    inicio: { dia: 'lunes', numero: '11', mes: 'enero', corto: 'Lunes 11' },
    fin: { dia: 'sábado', numero: '16', mes: 'enero', corto: 'Sábado 16' },
    texto: '11 al 16 de enero',
    textoAnio: '11 al 16 de enero de 2027',
  },

  /** Horario de cada jornada */
  horario: [
    { dia: 'Lunes 11', detalle: 'Apertura · 10:00' },
    { dia: 'Martes 12', detalle: 'Jornada completa' },
    { dia: 'Miércoles 13', detalle: 'Jornada completa' },
    { dia: 'Jueves 14', detalle: 'Jornada completa' },
    { dia: 'Viernes 15', detalle: 'Jornada completa' },
    { dia: 'Sábado 16', detalle: 'Cierre · 15:00' },
  ],
  horarioNota: 'El horario detallado se comunicará a los inscriptos.',

  lugar: {
    nombre: 'Quinta CFC',
    direccion: 'Av. Otero 3400',
    ciudad: 'Pontevedra',
    provincia: 'Buenos Aires',
    textoCompleto: 'Av. Otero 3400, Pontevedra, Buenos Aires',
  },

  /** Búsqueda usada por el mapa embebido */
  mapaQuery: 'Quinta CFC, Av. Otero 3400, Pontevedra, Buenos Aires, Argentina',

  pago: {
    precio: 110000,
    precioTexto: '$ 110.000',
    incluye: 'Alojamiento, comidas y bosquejos',
    recargo: 5000,
    recargoTexto: '+ $ 5.000',
    recargoDetalle: `Recargo por inscribirse después del ${LIMITE_CORTO}`,
    nota: 'El pago se entrega al hermano designado para recibir el dinero en tu localidad.',
  },

  inscripcion: {
    limite: LIMITE,
    nota: 'Se requiere que todos los participantes se inscriban previamente, incluyendo quienes participen solo un día.',
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
      'Uruguay',
    ],
    localidadesNota: 'Comunicate con el encargado de las inscripciones de tu localidad.',
    otrasNota: 'Si sos de otra localidad, escribinos y te damos las instrucciones.',
  },

  contacto: {
    whatsapp: '5491168884108',
    whatsappVisible: '+54 9 11 6888-4108',
    email: 'compenetracion.argentina@gmail.com',
    mensajeWhatsapp:
      'Hola, quiero inscribirme a la conferencia de jóvenes de enero. ¿Me pasan los datos?',
  },

  participantes: {
    aviso: 'Este es un evento enfocado en los jóvenes, por lo que recomendamos asistir sin niños.',
    jovenes: {
      titulo: 'Jóvenes',
      edad: '11 a 22 años',
      requisito: 'Deberán tener entre 11 y 22 años.',
    },
    noEnviar: [
      'Tengan menos de 11 años.',
      'Tengan problemas de comportamiento.',
      'Tengan una condición de salud que requiera cuidado especial.',
    ],
    servidores: {
      titulo: 'Servidores',
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
    comidas: ['Desayuno', 'Almuerzo', 'Merienda', 'Cena'],
    inicio: 'Almuerzo del lunes',
    fin: 'Almuerzo del sábado',
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
    firma: 'En Cristo,',
    firmaDetalle: 'Los hermanos que coordinan para la conferencia',
  },
} as const;

export const enlaces = {
  whatsapp: `https://wa.me/${evento.contacto.whatsapp}?text=${encodeURIComponent(
    evento.contacto.mensajeWhatsapp,
  )}`,
  email: `mailto:${evento.contacto.email}?subject=${encodeURIComponent(
    'Inscripción conferencia de jóvenes',
  )}`,
  mapa: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(evento.mapaQuery)}`,
  mapaEmbed: `https://maps.google.com/maps?q=${encodeURIComponent(
    evento.mapaQuery,
  )}&z=14&output=embed`,
};
