import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      src:"/src",
      common:"/src/common",
      images:"/src/assets/images",
      locales:"/src/locales",
      pages:"/src/pages"
    },
  },
})
