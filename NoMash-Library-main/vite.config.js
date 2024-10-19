import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// Dynamically set the base path depending on the environment
// eslint-disable-next-line no-undef
export const publicPath = process.env.NODE_ENV === 'production'
  ? '/Deploy-FIT5032/'  // For production, use the GitHub Pages repository name as the base path
  : '/';  // For development, use the root path

// Vite configuration
export default defineConfig({
  base: publicPath,  // Use the dynamically set publicPath as the base
  plugins: [
    vue(),  // Enable Vue.js plugin
    vueDevTools(),  // Enable Vue DevTools for development
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),  // Set up alias for 'src' folder
    }
  }
})



