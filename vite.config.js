import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    historyApiFallback: true, // Ensures client-side routing works during development
  },
  build: {
    outDir: 'dist', // Default output directory, change if necessary
  },
})
