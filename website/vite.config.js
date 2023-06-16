import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { createHtmlPlugin } from "vite-plugin-html";
import { resolve, extname } from "path";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      // copy assets to the public directory for distribution
      targets: [
        {
          src: "../website/landingPage/images/**/*",
          dest: "website/assets/images",
        },
        {
          src: "../website/assets/favicons/**/*",
          dest: "website/assets/favicons",
        },
      ],
    }),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  root: "./website", // root of the bundle space
  base: "/website", // base the relative paths from /website
  build: {
    outDir: "../public", // outDir of bundle
    rollupOptions: {
      input: {
        main: "./website/landingPage/landing.html", // entry html file - landing page
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) {
            console.error(
              "assetInfo.name is not defined. Check your css files"
            );
            return;
          }

          // move the css files into the proper directory i.e. landing.css > /landingPage
          const ext = extname(assetInfo.name);

          // Check if it's a CSS file
          if (ext === ".css") {
            // Extract the page name from the assetInfo object
            const pageName = assetInfo.name.split(".").shift();

            // Return the desired output path for CSS files
            return `${pageName}Page/${assetInfo.name}`;
          }

          // For other assets, use the default output path
          return `assets/${assetInfo.name}`;
        },
        entryFileNames: ({ name }) => `${name}.js`,
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        // read .js files that have .jsx features (required for react-native-webview)
        ".js": "jsx",
      },
    },
  },
});
