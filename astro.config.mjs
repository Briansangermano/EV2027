import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Se usa para el canonical y las imágenes de Open Graph (WhatsApp).
  site: 'https://ev2027.com',

  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
