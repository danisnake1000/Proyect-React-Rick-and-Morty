import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://danisnake1000.github.io/Proyect-React-Rick-and-Morty",
  plugins: [react()],
})
