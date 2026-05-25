import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'development' ? '/' : '/build/',

  build: {
    outDir: path.resolve(__dirname, '../backend/public/build'),
    emptyOutDir: true,
  },
}))