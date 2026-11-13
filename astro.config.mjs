import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // Se usa para el canonical y las imágenes de Open Graph (WhatsApp).
  site: 'https://ev2027.com',

  compressHTML: true,

  // Español en "/" (idioma por defecto) e inglés en "/en/".
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },

  build: {
    inlineStylesheets: 'auto',
  },

  adapter: cloudflare()
});