import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  optimizeDeps: {
    // 提前预构建依赖子入口，减少按需发现依赖时触发的页面刷新。
    include: ['@base-ui/react/*'],
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
