import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { Button, Toolbar } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias de la molecula Toolbar.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Toolbar", (): void => {
  it("renderiza el contenido inicial y final", (): void => {
    renderWithProviders(
      <Toolbar end={<Button>Accion</Button>} start={<span>Inicio</span>} />,
    );

    expect(screen.getByText("Inicio")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Accion" })).toBeInTheDocument();
  });

  it("renderiza con el rol de barra de herramientas", (): void => {
    renderWithProviders(<Toolbar start={<span>Inicio</span>} />);

    expect(screen.getByRole("toolbar")).toBeInTheDocument();
  });

  it("expone la etiqueta accesible configurada", (): void => {
    renderWithProviders(
      <Toolbar ariaLabel="Herramientas" start={<span>Inicio</span>} />,
    );

    expect(
      screen.getByRole("toolbar", { name: "Herramientas" }),
    ).toBeInTheDocument();
  });

  it("usa la variante con borde por defecto", (): void => {
    renderWithProviders(<Toolbar start={<span>Inicio</span>} />);

    expect(screen.getByRole("toolbar")).toHaveClass("border-base-300");
  });

  it("aplica la variante configurada", (): void => {
    renderWithProviders(
      <Toolbar start={<span>Inicio</span>} variant="filled" />,
    );

    expect(screen.getByRole("toolbar")).toHaveClass("bg-base-200");
  });

  it("aplica clases adicionales al contenedor", (): void => {
    renderWithProviders(
      <Toolbar className="p-1 md:p-2" start={<span>Inicio</span>} />,
    );

    expect(screen.getByRole("toolbar")).toHaveClass("p-1", "md:p-2");
  });
});
