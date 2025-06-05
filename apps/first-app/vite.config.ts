import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'First App',
      fileName: (format) => `index.${format}.js`,
    //   formats: ['es', 'cjs'],
      formats: ['cjs'],
    },
    rollupOptions: {
      external: [], // ⬅ empty means "bundle everything"
    },
  },
//   resolve: {
//     alias: {
//       '@example/shared': path.resolve(__dirname, '../../libs/shared/src'),
//     },
//   },
});
