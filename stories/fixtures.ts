import type { AppTheme, CustomThemeDefinition } from "@domain";
import { STORY_TRANSLATIONS } from "./translations";

/**
 * @description Construye un tema base con su manifiesto.
 * @param name Nombre del tema y clave de traduccion.
 * @param isDefault Indica si es el tema predeterminado.
 * @returns Tema base para las stories.
 * @author Steveen Cues
 * @version 1.0.0
 */
const createTheme = (name: string, isDefault = false): AppTheme => ({
  name,
  manifest: {
    id: name,
    name: `${name}.name`,
    description: `${name}.description`,
    version: "1.0.0",
    author: "Steveen Cues",
    tags: ["daisyui"],
    supportedFeatures: ["data-theme"],
    isDefault,
    isExperimental: false,
  },
});

/**
 * @description Temas base disponibles en las stories.
 * Seis temas para que el panel muestre el campo de busqueda.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const STORY_THEMES: readonly AppTheme[] = [
  createTheme("light", true),
  createTheme("dark"),
  createTheme("cupcake"),
  createTheme("emerald"),
  createTheme("synthwave"),
  createTheme("dracula"),
];

/**
 * @description Idiomas derivados del catalogo de traducciones.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const STORY_LANGUAGES: readonly string[] =
  Object.keys(STORY_TRANSLATIONS);

/**
 * @description Tema personalizado de ejemplo para demostrar registerTheme.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CUSTOM_STORY_THEME: CustomThemeDefinition = {
  name: "marca",
  manifest: {
    id: "marca",
    name: "marca.name",
    description: "marca.description",
    version: "1.0.0",
    author: "Steveen Cues",
    tags: ["personalizado"],
    supportedFeatures: ["data-theme"],
    isDefault: false,
    isExperimental: true,
  },
  daisyUI: {
    colorScheme: "dark",
    primary: "#8b5cf6",
    primaryContent: "#faf5ff",
    secondary: "#ec4899",
    secondaryContent: "#fdf2f8",
    accent: "#22d3ee",
    accentContent: "#083344",
    neutral: "#1e1b4b",
    neutralContent: "#e0e7ff",
    base100: "#0f0a1e",
    base200: "#1a1230",
    base300: "#2a1f4d",
    baseContent: "#ede9fe",
    info: "#38bdf8",
    infoContent: "#082f49",
    success: "#34d399",
    successContent: "#064e3b",
    warning: "#fbbf24",
    warningContent: "#451a03",
    error: "#f87171",
    errorContent: "#450a0a",
  },
};
