import path from "path";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import Unocss from "unocss/vite";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      Unocss(),
      react(),
      TanStackRouterVite(),
    ],
    base: "/grader",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },
    server: {
      proxy: {
        "/api": {
          target: env.HOST,
          changeOrigin: true
        }
      }
    }
  };
});
