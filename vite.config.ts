import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
// import basicSsl from "@vitejs/plugin-basic-ssl";
// import fs from "node:fs";

const CDN_PATH = "https://sfootball.b-cdn.net";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_API_URL, VITE_NODE_ENV } = loadEnv(mode, process.cwd());
  // check dev
  // eslint-disable-next-line
  // @ts-ignore
  const basePath = VITE_NODE_ENV === "dev" ? "/" : CDN_PATH;
  console.log("basePath: ", basePath);
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
    base: basePath,
  };
});
