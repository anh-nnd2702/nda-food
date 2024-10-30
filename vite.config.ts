import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
  resolve: {
    alias: {
      assets: "/scr/assets",
      components: "/src/components",
      constants: "/src/constants",
      layout: "/src/layout",
      services: "/src/services",
      pages: "/src/pages",
      utils: "/src/utils",
      reducers: "/src/redux/reducers",
      store: "/src/redux/store",
    },
  },
});
