// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

import webmanifest from 'astro-webmanifest';

// https://astro.build/config
export default defineConfig({
  site: 'https://chidubem.name.ng',
  integrations: [react(), sitemap(), webmanifest(
    {
      name: 'Chidubem - Full stack web developer',
      icon: '/icon.ico',
    }
  ),
],

  vite: {
    plugins: [tailwindcss(), ViteImageOptimizer({
        
        includePublic: true,

        png: {
          quality: 75, // Reduce quality
        },
        jpeg: {
          quality: 75,
        },
        jpg: {
          quality: 75,
        },
        webp: {
          quality: 75,
          lossless: false, // Enable lossy compression
        },

      }),]
  }
});