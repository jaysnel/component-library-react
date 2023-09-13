import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'index.html',
      formats: ['cjs', 'es'],
    },
    outDir: './dist'
  },
  base: "/component-library-react/",
  plugins: [react()],
})
