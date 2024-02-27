import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/Showgle/',
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
});
