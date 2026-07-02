// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/aree-di-intervento': '/servizi#aree-di-intervento'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});