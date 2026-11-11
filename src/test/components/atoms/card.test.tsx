import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { Card } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias del atomo Card.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Card", (): void => {
  it("renderiza su contenido", (): void => {
    renderWithProviders(<Card>Contenido</Card>);

    expect(screen.getByText("Contenido")).toBeInTheDocument();
  });

  it("usa la variante base por defecto", (): void => {
    renderWithProviders(<Card>Texto</Card>);

    expect(screen.getByText("Texto")).toHaveClass("card", "bg-base-100");
  });

  it("aplica la variante configurada", (): void => {
    renderWithProviders(<Card variant="primary">Destacado</Card>);

    expect(screen.getByText("Destacado")).toHaveClass("bg-primary");
  });

  it("aplica clases adicionales del atributo className", (): void => {
    renderWithProviders(<Card className="p-4 md:p-6 lg:p-8">Con padding</Card>);

    expect(screen.getByText("Con padding")).toHaveClass(
      "p-4",
      "md:p-6",
      "lg:p-8",
    );
  });
});
