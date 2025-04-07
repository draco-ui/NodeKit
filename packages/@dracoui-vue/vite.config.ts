import pkg from './package.json';
import { resolve } from "node:path";
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': resolve(resolve(__dirname), 'src'),
    },
    dedupe: [
      'vue',
      '@vue/runtime-core',
    ],
  },
  build: {
    minify: true,
    target: 'esnext',
    sourcemap: true,
    
  }
});