import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { Skeleton } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias del atomo Skeleton.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Skeleton", (): void => {
  it("renderiza el placeholder con la clase base", (): void => {
    const { container } = renderWithProviders(<Skeleton />);

    expect(container.firstElementChild).toHaveClass("skeleton");
  });

  it("usa la forma rectangular por defecto", (): void => {
    const { container } = renderWithProviders(<Skeleton />);

    expect(container.firstElementChild).toHaveClass("rounded-box");
  });

  it("aplica la forma circular configurada", (): void => {
    const { container } = renderWithProviders(<Skeleton variant="circle" />);

    expect(container.firstElementChild).toHaveClass("rounded-full");
  });

  it("aplica la forma de texto configurada", (): void => {
    const { container } = renderWithProviders(<Skeleton variant="text" />);

    expect(container.firstElementChild).toHaveClass("rounded");
  });

  it("aplica clases responsive adicionales", (): void => {
    const { container } = renderWithProviders(
      <Skeleton className="h-4 w-full md:h-8" />,
    );

    expect(container.firstElementChild).toHaveClass("h-4", "w-full", "md:h-8");
  });

  it("oculta el placeholder a los lectores de pantalla sin etiqueta", (): void => {
    const { container } = renderWithProviders(<Skeleton />);

    expect(container.firstElementChild).toHaveAttribute("aria-hidden", "true");
  });

  it("anuncia la carga cuando recibe etiqueta accesible", (): void => {
    renderWithProviders(<Skeleton ariaLabel="Cargando contenido" />);

    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
