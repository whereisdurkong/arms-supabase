import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

const resolvePath = (str) => path.resolve(__dirname, str);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    server: {
      open: false,
      port: 3009,
      host: true
    },
    preview: {
      port: 3009,
      open: false,
      host: true
    },
    define: {
      global: 'window'
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@assets': path.resolve(__dirname, './src/assets'),
      }
    },
    build: {
      chunkSizeWarningLimit: 1600,
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        input: {
          main: resolvePath('index.html'),
        }
      }
    },
    base: '/',  // Important: set to '/'
    plugins: [react(), tsconfigPaths()]
  };
});