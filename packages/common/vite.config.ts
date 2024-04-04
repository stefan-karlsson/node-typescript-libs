import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'), 
        logging: resolve(__dirname, 'src/logging/index.ts'),
        utils: resolve(__dirname, 'src/utils/index.ts')
      },
      formats: ['es', 'cjs']
    }
  },
  plugins: [
    dts({
      rollupTypes: true
    })
  ],
  resolve: { alias: { src: resolve('src/') } }
});
