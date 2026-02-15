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
      icon: 'src/images/icon.png',
    }
  ),
],

  vite: {
    plugins: [tailwindcss(), ViteImageOptimizer({
        
        includePublic: true,

        png: {
          quality: 50, // Reduce quality
        },
        jpeg: {
          quality: 50,
        },
        jpg: {
          quality: 50,
        },
        webp: {
          quality: 50,
          lossless: false, // Enable lossy compression
        },

      }),]
  }
});