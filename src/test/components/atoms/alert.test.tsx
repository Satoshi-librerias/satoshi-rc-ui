import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { Alert } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias del atomo Alert.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Alert", (): void => {
  it("renderiza su contenido", (): void => {
    renderWithProviders(<Alert>Mensaje</Alert>);

    expect(screen.getByText("Mensaje")).toBeInTheDocument();
  });

  it("usa la variante info por defecto", (): void => {
    renderWithProviders(<Alert>Aviso</Alert>);

    expect(screen.getByText("Aviso")).toHaveClass("alert", "alert-info");
  });

  it("aplica la variante configurada", (): void => {
    renderWithProviders(<Alert variant="error">Error</Alert>);

    expect(screen.getByText("Error")).toHaveClass("alert-error");
  });

  it("aplica clases adicionales del atributo className", (): void => {
    renderWithProviders(<Alert className="hidden md:block">Oculto</Alert>);

    expect(screen.getByText("Oculto")).toHaveClass("hidden", "md:block");
  });
});
