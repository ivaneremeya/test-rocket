import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/test-rocket/',
  resolve: {
    alias: {
      '@page': '/src/page',
      '@app': '/src/app',
      '@entities': '/src/entities',
      '@shared': '/src/shared',
    },
  },
});
