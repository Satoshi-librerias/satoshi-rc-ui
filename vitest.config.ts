import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const PROJECT_DIRECTORY = fileURLToPath(
  new URL("./projects/satoshi-ui/src", import.meta.url),
);
const LIBS_DIRECTORY = fileURLToPath(
  new URL("./projects/satoshi-ui/src/libs", import.meta.url),
);

/**
 * @description Configuracion de pruebas unitarias de la libreria.
 * @author Steveen Cues
 * @version 2.0.0
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^@libs$/, replacement: `${LIBS_DIRECTORY}/index.ts` },
      { find: /^@libs\//, replacement: `${LIBS_DIRECTORY}/` },
      {
        find: /^@components$/,
        replacement: `${PROJECT_DIRECTORY}/components/index.ts`,
      },
      {
        find: /^@components\//,
        replacement: `${PROJECT_DIRECTORY}/components/`,
      },
      { find: /^@test\//, replacement: `${PROJECT_DIRECTORY}/test/` },
      { find: /^@\//, replacement: PROJECT_DIRECTORY },
    ],
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./projects/satoshi-ui/test/setup/setup.ts"],
    include: ["projects/satoshi-ui/test/**/*.test.{ts,tsx}"],
    css: false,
  },
});
