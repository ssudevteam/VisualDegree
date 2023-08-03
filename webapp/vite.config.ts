import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react()],
    resolve: {},
    server: {
      port: 4000,
      proxy: {
        // Proxy configurations...
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
  };
});
