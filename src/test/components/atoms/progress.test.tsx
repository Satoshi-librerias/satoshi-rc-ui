import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { Progress } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias del atomo Progress.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Progress", (): void => {
  it("renderiza la barra de progreso", (): void => {
    renderWithProviders(<Progress ariaLabel="Carga" />);

    expect(
      screen.getByRole("progressbar", { name: "Carga" }),
    ).toBeInTheDocument();
  });

  it("usa la variante primaria por defecto", (): void => {
    renderWithProviders(<Progress ariaLabel="Carga" />);

    expect(screen.getByRole("progressbar")).toHaveClass(
      "progress",
      "progress-primary",
    );
  });

  it("aplica la variante configurada", (): void => {
    renderWithProviders(<Progress variant="success" ariaLabel="Carga" />);

    expect(screen.getByRole("progressbar")).toHaveClass("progress-success");
  });

  it("refleja el valor y el maximo configurados", (): void => {
    renderWithProviders(<Progress value={40} max={80} ariaLabel="Carga" />);

    const bar = screen.getByRole("progressbar");

    expect(bar).toHaveAttribute("value", "40");
    expect(bar).toHaveAttribute("max", "80");
  });

  it("queda indeterminado sin valor", (): void => {
    renderWithProviders(<Progress ariaLabel="Carga" />);

    expect(screen.getByRole("progressbar")).not.toHaveAttribute("value");
  });

  it("aplica clases adicionales", (): void => {
    renderWithProviders(<Progress className="h-2 md:h-4" ariaLabel="Carga" />);

    expect(screen.getByRole("progressbar")).toHaveClass("h-2", "md:h-4");
  });
});
