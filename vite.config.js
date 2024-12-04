import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Makes the server accessible externally
    port: process.env.PORT || 5173, // Use the dynamic port from Render or fallback to 5173 for local dev
  },
})
