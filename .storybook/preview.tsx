import type { Decorator, Preview } from "@storybook/react-vite";
import { DecoratorHelpers } from "@storybook/addon-themes";
import { useGlobals } from "storybook/preview-api";
import { ThemeProvider, TranslateProvider } from "@aplicacion";
import { STORY_THEMES } from "../stories/fixtures";
import { STORY_TRANSLATIONS } from "../stories/translations";
import "../src/libs/styles/index.css";

const { initializeThemeState } = DecoratorHelpers;

const THEME_OPTIONS: Record<string, string> = {
  Claro: "light",
  Oscuro: "dark",
  Cupcake: "cupcake",
  Esmeralda: "emerald",
  Synthwave: "synthwave",
  Dracula: "dracula",
};

const DEFAULT_THEME = "light";

initializeThemeState(Object.keys(THEME_OPTIONS), DEFAULT_THEME);

/**
 * @description Sincroniza el global de la toolbar con el ThemeProvider real
 * de la libreria. Remonta el arbol cuando el global cambia (el provider lee
 * localStorage en el montaje, por lo que se limpia antes de remontar para
 * que initialTheme gane). No usa hooks de preview-api dentro del arbol de
 * React: useGlobals solo es valido en el cuerpo del decorador.
 * @author Steveen Cues
 * @version 1.1.0
 */
const withThemeSync: Decorator = (Story, context) => {
  const [globals] = useGlobals();
  const selectedTheme = (globals as Record<string, string | undefined>).theme;
  const themeOverride = context.parameters.themes?.themeOverride;
  const nextTheme =
    themeOverride ?? THEME_OPTIONS[selectedTheme ?? ""] ?? DEFAULT_THEME;

  if (typeof window !== "undefined") {
    window.localStorage.removeItem("app_theme");
  }

  return (
    <ThemeProvider
      key={nextTheme}
      themes={STORY_THEMES}
      initialTheme={nextTheme}
    >
      <Story />
    </ThemeProvider>
  );
};

/**
 * @description Envuelve todas las stories con los providers publicos de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const withProviders: Decorator = (Story) => (
  <TranslateProvider
    translations={STORY_TRANSLATIONS}
    initialLanguage="es"
    fallbackLanguage="en"
    languageEncryptionKey="storybook-demo-key"
  >
    <Story />
  </TranslateProvider>
);

/**
 * @description Configuracion global del preview de Storybook.
 * El orden importa: Storybook aplica los decoradores con el ultimo del
 * array como el mas externo. Se necesita withProviders -> withThemeSync ->
 * Story para que useTheme resuelva el contexto.
 * @author Steveen Cues
 * @version 1.3.0
 */
const preview: Preview = {
  decorators: [withThemeSync, withProviders],

  parameters: {
    layout: "padded",
    themes: {
      themes: THEME_OPTIONS,
      defaultTheme: DEFAULT_THEME,
    },
  },
};

export default preview;
