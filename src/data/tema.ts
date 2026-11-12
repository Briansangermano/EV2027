/**
 * ─────────────────────────────────────────────────────────────
 *  TEMA / VARIABLES GENERALES DE DISEÑO
 *  Colores, tipografías, tamaños y formas de toda la página.
 *  Para cambiar el look, modificá únicamente este archivo.
 *
 *  · Los colores van en hexadecimal (#RRGGBB).
 *  · Las transparencias (bordes, brillos, fondos translúcidos)
 *    se calculan solas a partir de estos colores, así que al
 *    cambiar uno se actualizan todos sus usos.
 *  · Cada clave se convierte en una variable CSS: `sol` → `--sol`.
 * ─────────────────────────────────────────────────────────────
 */

export const colores = {
  /* ── Fondos oscuros (hero, secciones nocturnas, nav, footer) ── */
  noche: '#07160E', // fondo oscuro principal
  'noche-2': '#0B2116', // variante un poco más clara
  'noche-3': '#0A2015', // paso intermedio de degradés
  'noche-4': '#0C2619', // final del degradé del hero
  'noche-5': '#0D2A1B', // final del degradé del cierre
  'noche-profunda': '#04120B', // footer y silueta del cierre

  /* ── Verdes ── */
  musgo: '#12301F',
  'musgo-2': '#1A3F29',
  verde: '#2C5B3C', // acento verde sobre fondo claro
  'verde-2': '#3E7A4F', // brillos verdes sobre fondo oscuro
  salvia: '#9DB89A', // bordes y detalles sobre fondo oscuro
  'salvia-mute': '#8FA693', // texto secundario apagado

  /* ── Montañas del hero (de atrás hacia adelante) ── */
  'montana-1': '#123C27',
  'montana-2': '#0C2B1B',
  'montana-3': '#061710',

  /* ── Fondos claros ── */
  crema: '#F7F2E7', // fondo general de la página
  'crema-2': '#EFE7D5',
  'crema-3': '#F4ECDB', // final del degradé de la tarjeta de pago
  'crema-calida': '#FBF3E4', // tarjetas cálidas (participantes)
  arena: '#E7DCC4',
  tarjeta: '#FFFDF7', // fondo de tarjetas claras

  /* ── Tierras ── */
  corteza: '#6E5138',
  oxido: '#8A4F2A', // etiquetas de aviso / precios destacados

  /* ── Acento principal (botones, brillos, detalles dorados) ── */
  sol: '#EAB54D',
  'sol-2': '#F6D27C',
  'on-sol': '#241705', // texto encima de botones color sol

  /* ── Texto ── */
  ink: '#10241A', // texto principal sobre fondo claro
  'ink-soft': '#40584A',
  'ink-mute': '#6B7F70',
  'on-dark': '#F3F0E6', // texto principal sobre fondo oscuro
  'on-dark-soft': '#B9CCB9',
  'footer-texto': '#78907D',

  /* ── WhatsApp (botón flotante) ── */
  whatsapp: '#25D366',
  'on-whatsapp': '#04310F',
} as const;

export const tipografia = {
  'font-display': "'Fraunces', 'Iowan Old Style', Georgia, serif",
  'font-body': "'Manrope', system-ui, -apple-system, 'Segoe UI', sans-serif",

  'fs-hero': 'clamp(2.7rem, 7vw, 6rem)',
  'fs-h2': 'clamp(1.95rem, 4.3vw, 3.4rem)',
  'fs-h3': 'clamp(1.15rem, 1.7vw, 1.4rem)',
  'fs-body': 'clamp(1rem, 0.96rem + 0.2vw, 1.08rem)',
  'fs-small': '0.875rem',
} as const;

export const layout = {
  container: '1180px', // ancho máximo del contenido
  gutter: 'clamp(1.15rem, 4vw, 2.5rem)', // margen lateral
  'section-y': 'clamp(4.5rem, 9vw, 8.5rem)', // separación vertical de secciones

  /* Bordes redondeados */
  'r-lg': '28px',
  'r-md': '20px',
  'r-sm': '14px',
} as const;

/** Color de la barra del navegador en celulares */
export const themeColor = colores.noche;

/** Genera el bloque `:root { ... }` que se inyecta en el <head>. */
export function temaCSS(): string {
  const vars = { ...colores, ...tipografia, ...layout };
  const lineas = Object.entries(vars).map(([k, v]) => `--${k}:${v};`);
  return `:root{${lineas.join('')}}`;
}
