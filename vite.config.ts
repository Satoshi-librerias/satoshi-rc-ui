import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "unplugin-dts/vite";

const PROJECT_DIRECTORY = fileURLToPath(
  new URL("./projects/satoshi-ui/src", import.meta.url),
);
const LIBS_DIRECTORY = fileURLToPath(
  new URL("./projects/satoshi-ui/src/libs/", import.meta.url),
);
const OUTPUT_DIRECTORY = fileURLToPath(new URL("./dist", import.meta.url));
const TYPESCRIPT_CONFIG = fileURLToPath(
  new URL("./tsconfig.types.json", import.meta.url),
);

/**
 * @description Alias de la libreria: @libs para codigo transversal,
 * @components para la UI, @test para recursos de pruebas.
 * @author Steveen Cues
 * @version 3.0.0
 */
const TEST_DIRECTORY = fileURLToPath(
  new URL("./projects/satoshi-ui/test", import.meta.url),
);

const ALIASES = [
  {
    find: /^@libs$/,
    replacement: `${LIBS_DIRECTORY}index.ts`,
  },
  {
    find: /^@libs\//,
    replacement: LIBS_DIRECTORY,
  },
  {
    find: /^@components$/,
    replacement: `${PROJECT_DIRECTORY}/components/index.ts`,
  },
  {
    find: /^@components\//,
    replacement: `${PROJECT_DIRECTORY}/components/`,
  },
  {
    find: /^@test\//,
    replacement: `${TEST_DIRECTORY}/`,
  },
  {
    find: /^@assets\//,
    replacement: `${PROJECT_DIRECTORY}/assets/`,
  },
  {
    find: /^@\//,
    replacement: PROJECT_DIRECTORY,
  },
];

/**
 * @description Configuracion de compilacion de la libreria React.
 * @author Steveen Cues
 * @version 2.0.0
 */
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      entryRoot: PROJECT_DIRECTORY,
      outDirs: [OUTPUT_DIRECTORY],
      tsconfigPath: TYPESCRIPT_CONFIG,
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ],
  resolve: {
    alias: ALIASES,
  },
  build: {
    lib: {
      entry: fileURLToPath(
        new URL("./projects/satoshi-ui/src/index.ts", import.meta.url),
      ),
      name: "ReactUI",
      formats: ["es", "cjs"],
      fileName: (format): string =>
        format === "es" ? "index.js" : "index.cjs",
      cssFileName: "style",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
