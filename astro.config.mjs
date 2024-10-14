import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
site: 'https://1thomasalan.github.io/TheAIBLUF',
  base: '/TheAIBLUF',  // Add this line to set the base URL
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
