// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import alpinejs from "@astrojs/alpinejs";
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://medrent.mx',
  output: 'server',
  adapter: vercel(),
  integrations: [alpinejs()],
  vite: {
    plugins: [tailwind()],
    resolve: {
      alias: {
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@lib': '/src/lib',
        '@pages': '/src/pages',
      },
    },
  },
});
