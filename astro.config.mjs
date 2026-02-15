// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import webmanifest from 'astro-webmanifest';

// https://astro.build/config
export default defineConfig({
  site: 'https://chidubem.name.ng',
  integrations: [react(), sitemap(), webmanifest(
    {
      name: 'Chidubem - Full stack web developer',
      icon: 'src/images/icon.png',
    }
  )],

  vite: {
    plugins: [tailwindcss()]
  }
});