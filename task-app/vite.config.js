// vite.config.ts
import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  server: {
    host: true,
    allowedHosts: [/\.onrender\.com$/],
    port: process.env.PORT || 4200
  },
  build: {
    outDir: 'dist'
  }
});
