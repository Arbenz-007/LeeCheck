import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
   build: {
    rollupOptions: {
      input: {
        content: "src/content.jsx"
      },
      output: {
        entryFileNames: "[name].js"
      }
    },
    outDir: "dist",
    emptyOutDir: true
  },
  plugins: [react(),
    tailwindcss(),
  ],
})
