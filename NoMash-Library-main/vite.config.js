import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),  // Enables Vue.js support
    vueDevTools(),  // Adds Vue DevTools support for debugging in development
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))  // Sets up an alias for easier imports (e.g., '@' points to the 'src' folder)
    }
  },
  base: '/Deploy-FIT5032/',  // Ensure this matches your GitHub Pages repository name
})


