import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://1thomasalan.github.io/TheAIBLUF',
  base: '/TheAIBLUF',  // Add this line to set the base URL
  integrations: [mdx(), sitemap()],
});
