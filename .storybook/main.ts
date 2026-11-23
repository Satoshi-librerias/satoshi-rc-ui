import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";

const PROJECT_DIRECTORY = fileURLToPath(
  new URL("../projects/satoshi-ui/src/", import.meta.url),
);
const LIBS_DIRECTORY = fileURLToPath(
  new URL("../projects/satoshi-ui/src/libs/", import.meta.url),
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
    replacement: `${PROJECT_DIRECTORY}components/index.ts`,
  },
  {
    find: /^@components\//,
    replacement: `${PROJECT_DIRECTORY}components/`,
  },
  {
    find: /^@test\//,
    replacement: fileURLToPath(
      new URL("../projects/satoshi-ui/test/", import.meta.url),
    ),
  },
  {
    find: /^@assets\//,
    replacement: `${PROJECT_DIRECTORY}assets/`,
  },
  {
    find: /^@\//,
    replacement: PROJECT_DIRECTORY,
  },
];

/**
 * @description Configuracion de Storybook para desarrollar y documentar la libreria.
 * Reutiliza los aliases del proyecto y el plugin de Tailwind/DaisyUI.
 * @author Steveen Cues
 * @version 2.0.0
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
