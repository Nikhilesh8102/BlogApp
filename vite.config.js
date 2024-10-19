import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/BlogApp/', // Add the base URL here for GitHub Pages
  server: {
    historyApiFallback: true, // Ensures client-side routing works during development
  },
  build: {
    outDir: 'dist', // Default output directory, change if necessary
  },
})
