import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  assetsInclude: ["**/*.docx"],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  css: {
    devSourcemap: true,   // 👈 enables CSS source maps in development
  },

  build: {
    sourcemap: true,      // 👈 enables source maps in production build
  },
});
