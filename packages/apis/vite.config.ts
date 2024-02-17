import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.ts",
      name: "apis",
      fileName: "apis",
      formats: ["es"]
    },
  },
  plugins: [
    dts({ rollupTypes: true })
  ]
})