import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  base: '/Product-listing-using-React/', // ✅ this must match your repo name
  plugins: [react(), tailwindcss()],
})
