import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isProduction = process.env.VITE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {},
  server: {
    port: 4000,
    proxy: {
      "/app": "http://localhost:4000/webapp/app",
      "/api/": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      "/api": {
        target: "http://localhost:4000/webapp/api",
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => {
          if (path.startsWith("/api/programs")) {
            return path.replace(/^\/api\/programs/, "");
          }
          return path;
        },
      },
      "/schedules": {
        target: "http://localhost:4000/webapp/schedules",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
  root: "./webapp", // move the root from the root directory to web
  base: "/webapp",
  build: {
    outDir: "../public/webapp",
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        // read .js files that have .jsx features (required for react-native-webview)
        ".js": "jsx",
      },
    },
  },
  define: {
    "process.env.IS_PRODUCTION": isProduction,
  },
});
