import { defineConfig } from "vite"
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "entities",
      fileName: "entities",
      formats: ["es"]
    }
  },
  plugins: [
    dts({ rollupTypes: true })
  ]
})
