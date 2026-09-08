import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist',
      include: ['src/**/*'],
      exclude: ['**/*.stories.tsx', '**/*.test.tsx', '**/*.test.ts'],
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'DracoBrandUI',
      formats: ['es', 'cjs'],
      fileName: (format): string => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    sourcemap: true,
    minify: true,
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'lit',
        /^lit\//,
        '@dracoui-brand/lit',
      ],
      output: {
        preserveModules: false,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
