import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import type { AppTheme } from "@domain";

import { ThemeSelectorTrigger } from "./theme-selector-trigger";

vi.mock("@aplicacion", () => ({
  useLanguage: () => ({
    t: (key: string) => (key === "themes.light.name" ? "Light" : key),
  }),
}));

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

describe("ThemeSelectorTrigger", () => {
  it("uses the same compact, accessible structure as the language selector", () => {
    render(
      <ThemeSelectorTrigger
        ariaLabel="Select theme"
        isOpen={false}
        onToggle={vi.fn()}
        theme={LIGHT_THEME}
      />,
    );

    expect(
      screen.getByRole("button", { name: /^Select theme: Light$/ }),
    ).toHaveTextContent("Light");
    expect(
      screen.getByRole("button", { name: /^Select theme: Light$/ }),
    ).toHaveAttribute("aria-expanded", "false");
  });

  it("announces the open state and invokes the toggle handler", () => {
    const onToggle = vi.fn();

    render(
      <ThemeSelectorTrigger
        ariaLabel="Select theme"
        isOpen={true}
        onToggle={onToggle}
        theme={LIGHT_THEME}
      />,
    );

    const trigger = screen.getByRole("button", {
      name: /^Select theme: Light$/,
    });
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(trigger);

    expect(onToggle).toHaveBeenCalledOnce();
  });
});
