import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/graphics/index.ts'),
        graphics: resolve(__dirname, 'src/graphics/index.ts'),
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
