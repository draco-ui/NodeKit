import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      outDir: 'dist',
      include: ['src/**/*'],
      exclude: ['**/*.stories.ts'],
      rollupTypes: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [resolve(__dirname, 'node_modules')],
      },
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js',
    },
    sourcemap: true,
    minify: true,
    rollupOptions: {
      external: [
        'lit',
        'lit/decorators.js',
        'lit/directive.js',
        'lit/directives/class-map.js',
        'lit/directives/style-map.js',
        /^lit\//,
      ],
    },
  },
});
