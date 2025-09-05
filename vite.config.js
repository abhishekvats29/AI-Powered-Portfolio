// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // relative paths (good for Render, Vercel, Netlify)
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src', // optional but helpful for cleaner imports
    },
  },
  optimizeDeps: {
    include: ['react-parallax-tilt'], // ensures it’s bundled correctly
  },
});
