import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { Badge } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias del atomo Badge.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Badge", (): void => {
  it("renderiza su contenido", (): void => {
    renderWithProviders(<Badge>Nuevo</Badge>);

    expect(screen.getByText("Nuevo")).toBeInTheDocument();
  });

  it("usa la variante primaria por defecto", (): void => {
    renderWithProviders(<Badge>Estado</Badge>);

    expect(screen.getByText("Estado")).toHaveClass("badge", "badge-primary");
  });

  it("aplica la variante configurada", (): void => {
    renderWithProviders(<Badge variant="success">Activo</Badge>);

    expect(screen.getByText("Activo")).toHaveClass("badge-success");
  });

  it("aplica el tamano configurado", (): void => {
    renderWithProviders(<Badge size="lg">Contador</Badge>);

    expect(screen.getByText("Contador")).toHaveClass("badge-lg");
  });

  it("aplica el estilo con borde cuando isOutlined es verdadero", (): void => {
    renderWithProviders(<Badge isOutlined={true}>Borde</Badge>);

    expect(screen.getByText("Borde")).toHaveClass("badge-outline");
  });

  it("aplica clases adicionales del atributo className", (): void => {
    renderWithProviders(<Badge className="hidden sm:inline-flex">Extra</Badge>);

    expect(screen.getByText("Extra")).toHaveClass("hidden", "sm:inline-flex");
  });
});
