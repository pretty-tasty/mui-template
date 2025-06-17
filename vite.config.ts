import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled']
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    host: true,
    port: 5173
  }
});