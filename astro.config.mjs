import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dominio canónico: el mismo al que redirige Vercel (www). Se usa para el
  // canonical, hreflang, sitemap y las imágenes de Open Graph (WhatsApp).
  site: 'https://www.ev2027.com',

  compressHTML: true,

  // Español en "/" (idioma por defecto) e inglés en "/en/".
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-AR', en: 'en' },
      },
    }),
  ],

  build: {
    inlineStylesheets: 'auto',
  },
});
