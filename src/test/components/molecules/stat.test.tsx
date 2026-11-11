import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { Stat } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias de la molecula Stat.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Stat", (): void => {
  it("renderiza titulo y valor", (): void => {
    renderWithProviders(<Stat title="Usuarios" value="1,204" />);

    expect(screen.getByText("Usuarios")).toBeInTheDocument();
    expect(screen.getByText("1,204")).toBeInTheDocument();
  });

  it("renderiza la descripcion opcional", (): void => {
    renderWithProviders(
      <Stat description="+12% este mes" title="Usuarios" value="1,204" />,
    );

    expect(screen.getByText("+12% este mes")).toBeInTheDocument();
  });

  it("usa la variante neutral por defecto", (): void => {
    const { container } = renderWithProviders(
      <Stat title="Usuarios" value="1,204" />,
    );

    expect(container.firstElementChild).toHaveClass("stat");
    expect(container.firstElementChild?.firstElementChild).not.toHaveClass(
      "text-primary",
    );
  });

  it("aplica la variante de color configurada", (): void => {
    const { container } = renderWithProviders(
      <Stat title="Usuarios" value="1,204" variant="success" />,
    );

    expect(container.firstElementChild).toHaveClass("text-success");
  });

  it("renderiza el icono opcional junto al valor", (): void => {
    renderWithProviders(
      <Stat
        icon={<span data-testid="stat-icon">icono</span>}
        title="Usuarios"
        value="1,204"
      />,
    );

    expect(screen.getByTestId("stat-icon")).toBeInTheDocument();
  });

  it("aplica clases responsive adicionales", (): void => {
    const { container } = renderWithProviders(
      <Stat className="p-2 md:p-4" title="Usuarios" value="1,204" />,
    );

    expect(container.firstElementChild).toHaveClass("stat");

    const statElement = container.querySelector("div.stat");

    expect(statElement).not.toBeNull();
  });
});
