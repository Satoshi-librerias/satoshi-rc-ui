import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { Button, EmptyState } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias de la molecula EmptyState.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("EmptyState", (): void => {
  it("renderiza el titulo con rol de estado", (): void => {
    renderWithProviders(<EmptyState title="Sin resultados" />);

    expect(screen.getByRole("status")).toHaveTextContent("Sin resultados");
  });

  it("renderiza la descripcion opcional", (): void => {
    renderWithProviders(
      <EmptyState description="Ajusta los filtros" title="Sin resultados" />,
    );

    expect(screen.getByText("Ajusta los filtros")).toBeInTheDocument();
  });

  it("renderiza la accion opcional", (): void => {
    renderWithProviders(
      <EmptyState action={<Button>Crear</Button>} title="Sin proyectos" />,
    );

    expect(screen.getByRole("button", { name: "Crear" })).toBeInTheDocument();
  });

  it("renderiza el icono decorativo oculto para lectores", (): void => {
    renderWithProviders(
      <EmptyState
        icon={<svg data-testid="empty-icon" viewBox="0 0 24 24" />}
        title="Vacio"
      />,
    );

    expect(screen.getByTestId("empty-icon").parentElement).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("aplica clases adicionales al contenedor", (): void => {
    renderWithProviders(<EmptyState className="p-2 md:p-6" title="Vacio" />);

    expect(screen.getByRole("status")).toHaveClass("p-2", "md:p-6");
  });
});
