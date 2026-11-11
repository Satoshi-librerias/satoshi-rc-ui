import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { Kbd } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias del atomo Kbd.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Kbd", (): void => {
  it("renderiza el contenido de la tecla", (): void => {
    renderWithProviders(<Kbd>Ctrl + S</Kbd>);

    expect(screen.getByText("Ctrl + S")).toBeInTheDocument();
  });

  it("renderiza el elemento kbd semantico", (): void => {
    const { container } = renderWithProviders(<Kbd>Esc</Kbd>);

    expect(container.querySelector("kbd")).toBeInTheDocument();
  });

  it("usa la variante neutral por defecto", (): void => {
    const { container } = renderWithProviders(<Kbd>Esc</Kbd>);

    expect(container.querySelector("kbd")).toHaveClass("kbd", "kbd-neutral");
  });

  it("aplica la variante y el tamano configurados", (): void => {
    const { container } = renderWithProviders(
      <Kbd variant="primary" size="lg">
        Enter
      </Kbd>,
    );

    expect(container.querySelector("kbd")).toHaveClass("kbd-primary", "kbd-lg");
  });

  it("aplica clases responsive adicionales", (): void => {
    const { container } = renderWithProviders(
      <Kbd className="text-xs md:text-sm">Tab</Kbd>,
    );

    expect(container.querySelector("kbd")).toHaveClass("text-xs", "md:text-sm");
  });
});
