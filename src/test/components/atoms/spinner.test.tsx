import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { Spinner } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias del atomo Spinner.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Spinner", (): void => {
  it("renderiza el indicador de carga", (): void => {
    renderWithProviders(<Spinner ariaLabel="Cargando" />);

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("usa el tamano mediano por defecto", (): void => {
    renderWithProviders(<Spinner />);

    expect(screen.getByRole("status")).toHaveClass("loading-spinner");
    expect(screen.getByRole("status").className).not.toContain("loading-lg");
  });

  it("aplica el tamano configurado", (): void => {
    renderWithProviders(<Spinner size="lg" />);

    expect(screen.getByRole("status")).toHaveClass("loading-lg");
  });

  it("aplica la variante configurada", (): void => {
    renderWithProviders(<Spinner variant="secondary" />);

    expect(screen.getByRole("status")).toHaveClass("text-secondary");
  });

  it("expone la etiqueta accesible configurada", (): void => {
    renderWithProviders(<Spinner ariaLabel="Enviando datos" />);

    expect(screen.getByRole("status")).toHaveAttribute(
      "aria-label",
      "Enviando datos",
    );
  });
});
