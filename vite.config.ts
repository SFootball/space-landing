import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
// import basicSsl from "@vitejs/plugin-basic-ssl";
// import fs from "node:fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const VITE_API_URL = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    resolve: {
      alias: {
        src: "/src",
      },
    },
    server: {
      // host: true,
      port: 3000,
      proxy: {
        "/api": VITE_API_URL,
      },
    },
  };
});
