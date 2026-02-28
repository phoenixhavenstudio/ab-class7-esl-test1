import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  root: "public",
  base: mode === "production" ? "/ab-class7-esl-test1/" : "/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
}));
