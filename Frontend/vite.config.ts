import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    open: true,
    cors: true,
    proxy: {
      '/leetcode': {
        target: 'https://leetcode.com/graphql',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/leetcode/, '')
      },
    },
    // proxy: {
    //   '/api': {
    //     // target: 'http://localhost:5000',
    //     target: 'https://bitverse-bh6u.onrender.com',
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },
});
