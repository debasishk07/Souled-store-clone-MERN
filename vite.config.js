import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ Required for Render deployment
  server: {
    port: 3000,
  },
});
