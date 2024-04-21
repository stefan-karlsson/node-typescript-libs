import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'app-context': resolve(__dirname, 'src/request-context/index.ts'),
        'async-hooks': resolve(__dirname, 'src/async-hooks/index.ts'),
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['node:async_hooks'],
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
    }),
  ],
})
