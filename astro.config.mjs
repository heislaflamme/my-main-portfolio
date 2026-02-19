// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


import vercel from '@astrojs/vercel';


// https://astro.build/config
export default defineConfig({
  site: 'https://chidubem.name.ng',

  integrations: [react(), sitemap(),
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
  },

  adapter: vercel(),
});