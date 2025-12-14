import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.d.ts',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  minify: false,
  outDir: 'dist',
  splitting: false,
  sourcemap: false,
  external: [],
});
