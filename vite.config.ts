import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"
import autoprefixer from "autoprefixer"
import tailwindcss from "tailwindcss"

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ copyDtsFiles: true, rollupTypes: true }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "astra",
      formats: ["es", "cjs"],
      fileName: "index",
    },
    sourcemap: true,
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        preserveModules: false,
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss("./tailwind.config.ts"), autoprefixer],
      from: "src/index.css",
      to: "dist/index.css",
    },
  },
})
