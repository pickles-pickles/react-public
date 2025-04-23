import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  base: '/',
  plugins: [react() /* eslint() */],
  server: {
    port: 3000, // Change if needed
    historyApiFallback: true // Vite uses this behind the scenes
  },
  assetsInclude: ['**/*.woff', '**/*.woff2']
})
