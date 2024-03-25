import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3434,
    host: true 
  },
  preview: {
    port: 8080,
  }
})
