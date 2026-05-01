import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// ✅ Safe defaults (no crashing in production builds)
const PORT = Number(process.env.PORT) || 5173;
const BASE_PATH = process.env.BASE_PATH || "/";

export default defineConfig({
  base: BASE_PATH,

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "../../attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },

  root: path.resolve(__dirname),

  // ✅ IMPORTANT: match Netlify publish dir
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  server: {
    port: PORT,
    host: "0.0.0.0",
  },

  preview: {
    port: PORT,
    host: "0.0.0.0",
  },
});