import { render, act } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { ReactNode } from "react";

import { ThemeProvider, TranslateProvider, useLanguage, useTheme } from "@libs";

const TRANSLATIONS = {
  es: { greeting: "Hola", items: { one: "Uno" } },
  en: { greeting: "Hello", items: { one: "One" } },
};

const THEMES = [
  {
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
  },
  {
    name: "dark",
    manifest: {
      id: "dark",
      name: "themes.dark.name",
      description: "themes.dark.description",
      version: "1.0.0",
      author: "Satoshi",
      tags: [],
      supportedFeatures: [],
      isDefault: false,
      isExperimental: false,
    },
  },
];

/**
 * @description Renderiza un sondeo dentro de los providers y captura su valor.
 * @param useHook Hook a sondear.
 * @returns Valor actual del hook con rerender controlado.
 * @author Steveen Cues
 * @version 1.0.0
 */
function renderProbe<T>(useHook: () => T): {
  current: T;
  rerender: () => void;
} {
  let captured: T | undefined;
  let rerenderFn: () => void = () => undefined;

  function Probe(): null {
    captured = useHook();
    return null;
  }

  function Wrapper({ children }: { children: ReactNode }): ReactNode {
    return (
      <TranslateProvider
        translations={TRANSLATIONS}
        initialLanguage="es"
        fallbackLanguage="en"
        languageEncryptionKey="test-encryption-key"
      >
        <ThemeProvider themes={THEMES} initialTheme="light">
          {children}
        </ThemeProvider>
      </TranslateProvider>
    );
  }

  const view = render(<Probe />, { wrapper: Wrapper });
  rerenderFn = (): void => view.rerender(<Probe />);

  return {
    get current(): T {
      if (captured === undefined) {
        throw new Error("Probe did not capture a value.");
      }
      return captured;
    },
    rerender: rerenderFn,
  };
}

describe("useLanguage", () => {
  it("exposes the active language and translation function", () => {
    const probe = renderProbe(useLanguage);

    expect(probe.current.language).toBe("es");
    expect(probe.current.t("greeting")).toBe("Hola");
    expect(probe.current.languages).toEqual(["es", "en"]);
  });

  it("switches language and translates with the new catalog", () => {
    const probe = renderProbe(useLanguage);

    act(() => {
      probe.current.setLanguage("en");
    });

    expect(probe.current.language).toBe("en");
    expect(probe.current.t("greeting")).toBe("Hello");
  });

  it("falls back to the fallback language for missing keys", () => {
    const probe = renderProbe(useLanguage);

    expect(probe.current.t("items.one")).toBe("Uno");
  });
});

describe("useTheme", () => {
  it("exposes the active theme name", () => {
    const probe = renderProbe(useTheme);

    expect(probe.current.themeName).toBe("light");
  });

  it("switches the active theme", () => {
    const probe = renderProbe(useTheme);

    act(() => {
      probe.current.setTheme("dark");
    });

    expect(probe.current.themeName).toBe("dark");
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });
});
