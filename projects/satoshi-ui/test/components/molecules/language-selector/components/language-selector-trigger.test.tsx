import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { LanguageSelectorTrigger } from "@components/molecules/language-selector/components/language-selector-trigger";

describe("LanguageSelectorTrigger", () => {
  it("renders the translated accessible label", () => {
    render(
      <LanguageSelectorTrigger
        ariaLabel="Seleccionar idioma"
        isOpen={false}
        language="es"
        onClick={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("button", { name: "Seleccionar idioma" }),
    ).toBeInTheDocument();
  });

  it("announces the open state and invokes the toggle handler", () => {
    const onClick = vi.fn();

    render(
      <LanguageSelectorTrigger
        ariaLabel="Select language"
        isOpen={true}
        language="en"
        onClick={onClick}
      />,
    );

    const trigger = screen.getByRole("button", { name: "Select language" });
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(trigger);

    expect(onClick).toHaveBeenCalledOnce();
  });
});
