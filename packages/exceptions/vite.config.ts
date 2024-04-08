import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        exceptions: resolve(__dirname, 'src/exceptions/index.ts'),
      },
      formats: ['es', 'cjs'],
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
    }),
  ],
  resolve: { alias: { src: resolve('src/') } },
})
