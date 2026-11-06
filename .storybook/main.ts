import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";

const SRC_DIRECTORY = fileURLToPath(new URL("../src/", import.meta.url));
const LIBS_DIRECTORY = fileURLToPath(new URL("../src/libs/", import.meta.url));

const ALIASES = [
  {
    find: /^@presentation$/,
    replacement: `${LIBS_DIRECTORY}presentation/index.ts`,
  },
  {
    find: /^@presentation\//,
    replacement: `${LIBS_DIRECTORY}presentation/`,
  },
  {
    find: /^@aplicacion$/,
    replacement: `${LIBS_DIRECTORY}aplicacion/index.ts`,
  },
  {
    find: /^@aplicacion\//,
    replacement: `${LIBS_DIRECTORY}aplicacion/`,
  },
  {
    find: /^@domain$/,
    replacement: `${LIBS_DIRECTORY}domain/index.ts`,
  },
  {
    find: /^@domain\//,
    replacement: `${LIBS_DIRECTORY}domain/`,
  },
  {
    find: /^@infraestructura$/,
    replacement: `${LIBS_DIRECTORY}infraestructura/index.ts`,
  },
  {
    find: /^@infraestructura\//,
    replacement: `${LIBS_DIRECTORY}infraestructura/`,
  },
  {
    find: /^@assets\//,
    replacement: `${SRC_DIRECTORY}assets/`,
  },
  {
    find: /^@\//,
    replacement: SRC_DIRECTORY,
  },
];

/**
 * @description Configuracion de Storybook para desarrollar y documentar la libreria.
 * Reutiliza los aliases del proyecto y el plugin de Tailwind/DaisyUI.
 * @author Steveen Cues
 * @version 1.0.0
 */
const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(ts|tsx)"],

  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
  ],

  framework: "@storybook/react-vite",

  async viteFinal(config) {
    const currentAlias = config.resolve?.alias ?? [];

    const baseAliases = Array.isArray(currentAlias)
      ? currentAlias
      : Object.entries(currentAlias).map(([find, replacement]) => ({
          find,
          replacement,
        }));

    const basePath = process.env.STORYBOOK_BASE_PATH ?? "/";

    return {
      ...config,
      base: basePath,
      plugins: [...(config.plugins ?? []), tailwindcss()],
      resolve: {
        ...config.resolve,
        alias: [...baseAliases, ...ALIASES],
      },
    };
  },
};

export default config;
