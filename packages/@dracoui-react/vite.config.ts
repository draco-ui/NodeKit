import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin({
      styleId: 'draco',
      topExecutionPriority: true,
      jsAssetsFilterFunction: (outputChunk) => {
        return /index\.(js|cjs)$/.test(outputChunk.fileName);
      },
    }),
    dts({
      insertTypesEntry: true,
      outDir: 'dist',
      include: ['src/**/*'],
      exclude: ['**/*.stories.tsx', '**/*.test.tsx', '**/*.test.ts'],
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@dracoui/styles': resolve(__dirname, '../@dracoui-styles'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [
          resolve(__dirname, '../@dracoui-styles'),
          resolve(__dirname, '../../node_modules'),
          resolve(__dirname, '../@dracoui-primitives/dist/scss'),
        ],
      },
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'DracoUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    sourcemap: true,
    minify: true,
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        '@emotion/react',
        '@emotion/styled',
        '@emotion/css',
        '@dracoui/types',
        /^@necto/,
        'class-variance-authority',
        'clsx',
        'react-aria-components',
        'react-if',
        'react-use',
        'ldrs'
      ],
      output: {
        preserveModules: false,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  }
});
