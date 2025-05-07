import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        'C:/SanGit/node_modules',               // Allow node_modules folder
        'C:/SanGit/client/node_modules',         // Allow client node_modules folder
        'C:/SanGit/client/src',                  // Allow src folder where main.jsx is located
        'C:/SanGit/node_modules/slick-carousel/slick/fonts', // Allow slick-carousel fonts
      ],
    },
  },
});
