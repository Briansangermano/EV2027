/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENIDO EDITABLE
 *  Todo el texto, fechas, precios y contactos del evento.
 *  Para actualizar la página, modificá únicamente este archivo.
 * ─────────────────────────────────────────────────────────────
 */

/** Fecha límite de inscripción (se usa en pago e inscripción) */
const LIMITE = 'Domingo 3 de enero';
const LIMITE_CORTO = '3 de enero';

export const evento = {
  /** Tema principal de la conferencia */
  titulo: 'Los dos espíritus: el Espíritu divino y el espíritu humano',

  /** Antetítulo / eje temático */
  // antetitulo: 'Aspectos cruciales de la economía de Dios presentados en Éxodo (3)',

  /** Etiqueta corta que aparece en el hero y el menú */
  etiqueta: 'Escuela de la verdad',
  referencia: '2027',

  /** Año del evento (se usa para el countdown y el pie) */
  anio: 2027,

  /** Fecha y hora de inicio en formato ISO (zona horaria de Argentina) */
  inicioISO: '2027-01-11T10:00:00-03:00',
  finalizacionInscripcionISO: '2027-01-03T23:59:59-03:00',

  /** Fecha y hora de cierre (solo informativa) */
  finISO: '2027-01-15T15:00:00-03:00',

  fechas: {
    inicio: { dia: 'lunes', numero: '11', mes: 'enero', corto: 'Lunes 11' },
    fin: { dia: 'viernes', numero: '15', mes: 'enero', corto: 'Viernes 15' },
    texto: '11 al 15 de enero',
    textoAnio: '11 al 15 de enero de 2027',
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

  lugar: {
    nombre: 'Don Bosco',
    direccion: 'Av. de Mayo 1902',
    ciudad: 'Ramos Mejía',
    provincia: 'Buenos Aires',
    textoCompleto: 'Av. de Mayo 1902, Ramos Mejía, La matanza, Buenos Aires',
  },

  /** Búsqueda usada por el mapa embebido */
  mapaQuery: 'Don Bosco, Av. de Mayo 1902, B1704 Ramos Mejía, La matanza, Buenos Aires, Argentina',

  pago: {
    precio: 260000,
    precioTexto: '$ 260.000',
    // incluye: 'Alojamiento, comidas y bosquejos',
    recargo: 10000,
    recargoTexto: '+ $ 10.000',
    recargoDetalle: `Recargo por inscribirse después del ${LIMITE_CORTO}`,
    libroPrecio: 8500,
    libroTexto: '+ $ 8.500',
    libroDetalle: 'Libro de lecciones',
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
      'Nueva Zelanda',
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
    // firma: 'En Cristo,',
    // firmaDetalle: 'Los hermanos que coordinan para la conferencia',
  },
} as const;

export const enlaces = {
  whatsapp: `https://wa.me/${evento.contacto.whatsapp}?text=${encodeURIComponent(
    evento.contacto.mensajeWhatsapp,
  )}`,
  email: `mailto:${evento.contacto.email}?subject=${encodeURIComponent(
    'Inscripción conferencia de jóvenes',
  )}`,
  mapa: `https://www.google.com/maps?client=ms-android-motorola-rvo3&sca_esv=e3485cb5c7d81e9c&hl=es-US&cs=1&output=search&q=Casa+De+Retiro+Domingo+Savio&source=lnms&fbs=ACAhTvz8IPjCPxG1iWSJgYnQu_fVIzk7TIz7-TOER5Rxm-_UXBae6ARxsuGy_sgM4sboOmsBDVZq2tiAO8bhY2OaxHpGE6Mz4n9E0AgGgQZCmnz0ym7kVvaxWPxF2dBYGpmkV2oMQdMudFmU_CbYlRNjJbHlr2n3s6poaMFqm8vp9mC3YSyva_IGFg2OuGTphWU2qreG_4Invmhvi1yxQFZqc4qEIToqKQ&entry=mc&ved=1t:200715&ictx=111`,
  mapaEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.721920587829!2d-58.5573180101768!3d-34.66172508916139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7d68b1b28d9%3A0xc6f12bc83a571f0!2sCasa%20De%20Retiro%20Domingo%20Savio!5e0!3m2!1ses-419!2sar!4v1794489946107!5m2!1ses-419!2sar',
};