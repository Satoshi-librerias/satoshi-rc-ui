import { describe, expect, it } from "vitest";

import {
  assertLanguageExists,
  findTranslation,
  interpolateTranslation,
  resolveActiveLanguage,
  resolveInitialLanguage,
  translateMessage,
  type TranslationCatalog,
} from "@libs";

const CATALOG: TranslationCatalog = {
  es: {
    greeting: "Hola",
    nested: { key: "Valor anidado" },
    welcome: "Bienvenido {{name}}",
  },
  en: {
    greeting: "Hello",
    nested: { key: "Nested value" },
  },
};

describe("resolveInitialLanguage", () => {
  it("returns the requested language when available", () => {
    expect(resolveInitialLanguage(CATALOG, "es", "en")).toBe("es");
  });

  it("falls back to the fallback language when requested is missing", () => {
    expect(resolveInitialLanguage(CATALOG, "fr", "en")).toBe("en");
  });

  it("uses the first registered language as last resort", () => {
    expect(resolveInitialLanguage(CATALOG, "fr", "de")).toBe("es");
  });

  it("throws when the catalog is empty", () => {
    expect(() => resolveInitialLanguage({}, "es", "en")).toThrow(
      "TranslateProvider requires at least one translation catalog.",
    );
  });
});

describe("resolveActiveLanguage", () => {
  it("keeps the selected language when available", () => {
    expect(resolveActiveLanguage(CATALOG, "en", "es", "en")).toBe("en");
  });

  it("resolves the initial language when the selection is unavailable", () => {
    expect(resolveActiveLanguage(CATALOG, "fr", "es", "en")).toBe("es");
  });
});

describe("assertLanguageExists", () => {
  it("passes for a registered language", () => {
    expect(() => assertLanguageExists(CATALOG, "es")).not.toThrow();
  });

  it("throws for an unregistered language", () => {
    expect(() => assertLanguageExists(CATALOG, "fr")).toThrow(
      'Language "fr" is not available in the translation catalog.',
    );
  });
});

describe("findTranslation", () => {
  it("resolves top level keys", () => {
    expect(findTranslation(CATALOG.es, "greeting")).toBe("Hola");
  });

  it("resolves nested keys with dot notation", () => {
    expect(findTranslation(CATALOG.es, "nested.key")).toBe("Valor anidado");
  });

  it("returns undefined for missing keys", () => {
    expect(findTranslation(CATALOG.es, "missing.key")).toBeUndefined();
  });
});

describe("interpolateTranslation", () => {
  it("replaces named placeholders", () => {
    expect(interpolateTranslation("Bienvenido {{name}}", { name: "Ada" })).toBe(
      "Bienvenido Ada",
    );
  });

  it("keeps placeholders without a matching param", () => {
    expect(interpolateTranslation("Bienvenido {{name}}")).toBe(
      "Bienvenido {{name}}",
    );
  });
});

describe("translateMessage", () => {
  it("translates in the active language with params", () => {
    expect(
      translateMessage(CATALOG.es, CATALOG.en, "welcome", { name: "Ada" }),
    ).toBe("Bienvenido Ada");
  });

  it("falls back to the fallback dictionary", () => {
    expect(translateMessage(CATALOG.es, CATALOG.en, "nested.key")).toBe(
      "Valor anidado",
    );
    expect(translateMessage(CATALOG.en, CATALOG.es, "welcome")).toBe(
      "Bienvenido {{name}}",
    );
  });

  it("returns the key when nothing matches", () => {
    expect(translateMessage(CATALOG.es, CATALOG.en, "missing.key")).toBe(
      "missing.key",
    );
  });
});
