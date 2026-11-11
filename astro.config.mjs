import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // ⚠️ Cambiá esta URL por el dominio final antes de publicar.
  // Se usa para el canonical y las imágenes de Open Graph (WhatsApp).
  site: 'https://conferencia-jovenes.netlify.app',

  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
