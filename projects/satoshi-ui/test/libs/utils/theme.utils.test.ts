import { afterEach, describe, expect, it } from "vitest";

import {
  applyThemeToDocument,
  findThemeByName,
  isCustomThemeDefinition,
  persistTheme,
  resolveInitialTheme,
  type AppTheme,
  type CustomThemeDefinition,
} from "@libs";

const LIGHT_THEME: AppTheme = {
  name: "light",
  manifest: {
    id: "light",
    name: "themes.light.name",
    description: "themes.light.description",
    version: "1.0.0",
    author: "Satoshi",
    tags: [],
    supportedFeatures: [],
    isDefault: true,
    isExperimental: false,
  },
};

const CUSTOM_THEME: CustomThemeDefinition = {
  ...LIGHT_THEME,
  name: "brand",
  daisyUI: {
    colorScheme: "light",
    primary: "#2563eb",
    primaryContent: "#ffffff",
    secondary: "#7c3aed",
    secondaryContent: "#ffffff",
    accent: "#f59e0b",
    accentContent: "#ffffff",
    neutral: "#1f2937",
    neutralContent: "#ffffff",
    base100: "#ffffff",
    base200: "#f4f4f5",
    base300: "#e4e4e7",
    baseContent: "#18181b",
    info: "#0ea5e9",
    infoContent: "#ffffff",
    success: "#22c55e",
    successContent: "#ffffff",
    warning: "#eab308",
    warningContent: "#ffffff",
    error: "#ef4444",
    errorContent: "#ffffff",
  },
};

const THEMES: readonly AppTheme[] = [LIGHT_THEME, CUSTOM_THEME];

afterEach(() => {
  window.localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
});

describe("findThemeByName", () => {
  it("finds a theme by name", () => {
    expect(findThemeByName(THEMES, "light")).toBe(LIGHT_THEME);
  });

  it("returns undefined for an unknown theme", () => {
    expect(findThemeByName(THEMES, "magenta")).toBeUndefined();
  });
});

describe("isCustomThemeDefinition", () => {
  it("returns true for a theme with daisyUI colors", () => {
    expect(isCustomThemeDefinition(CUSTOM_THEME)).toBe(true);
  });

  it("returns false for a base theme", () => {
    expect(isCustomThemeDefinition(LIGHT_THEME)).toBe(false);
  });
});

describe("resolveInitialTheme", () => {
  it("returns the requested theme when registered", () => {
    expect(resolveInitialTheme(THEMES, "brand")).toBe("brand");
  });

  it("falls back to the first theme when the request is unknown", () => {
    expect(resolveInitialTheme(THEMES, "magenta")).toBe("light");
  });

  it("prefers the stored theme over the requested one", () => {
    window.localStorage.setItem("app_theme", "brand");

    expect(resolveInitialTheme(THEMES, "light")).toBe("brand");
  });
});

describe("applyThemeToDocument", () => {
  it("sets the data-theme attribute", () => {
    applyThemeToDocument("dark");

    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });
});

describe("persistTheme", () => {
  it("stores the theme name in localStorage", () => {
    persistTheme("dark");

    expect(window.localStorage.getItem("app_theme")).toBe("dark");
  });
});
