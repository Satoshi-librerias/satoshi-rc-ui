import { describe, expect, it } from "vitest";

import { translateLanguageSelectorMessages } from "@components/molecules/language-selector/utils/translate-language-selector-messages.util";

const translate = (key: string): string =>
  ({
    "language.select": "Seleccionar idioma",
    "language.listLabel": "Idiomas disponibles",
    "language.searchPlaceholder": "Buscar idioma...",
    "language.empty": "No se encontraron idiomas.",
    "language.selected": "Idioma seleccionado",
  })[key] ?? key;

describe("translateLanguageSelectorMessages", () => {
  it("resolves every message from the translation context", () => {
    expect(translateLanguageSelectorMessages(undefined, translate)).toEqual({
      select: "Seleccionar idioma",
      listLabel: "Idiomas disponibles",
      searchPlaceholder: "Buscar idioma...",
      empty: "No se encontraron idiomas.",
      selected: "Idioma seleccionado",
    });
  });

  it("prefers consumer configured keys over defaults", () => {
    const messages = translateLanguageSelectorMessages(
      { select: "custom.select" },
      translate,
    );

    expect(messages.select).toBe("custom.select");
    expect(messages.listLabel).toBe("Idiomas disponibles");
  });
});
