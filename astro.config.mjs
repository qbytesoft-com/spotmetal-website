import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://spotmetal.qbytesoft.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  }
});
