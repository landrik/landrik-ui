// vite.config.js
import svgr from "vite-plugin-svgr";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [svgr({ include: '**/*.svg' })],
});