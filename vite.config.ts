import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    host: '127.0.0.1',
    proxy: {
      '/api': {
        target: 'https://fast-api-mock.netlify.app',
        changeOrigin: true,
      },
    },
  },
});
