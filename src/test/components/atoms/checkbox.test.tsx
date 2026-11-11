import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { Checkbox } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias del atomo Checkbox.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Checkbox", (): void => {
  it("renderiza el checkbox", (): void => {
    renderWithProviders(<Checkbox ariaLabel="Aceptar" />);

    expect(
      screen.getByRole("checkbox", { name: "Aceptar" }),
    ).toBeInTheDocument();
  });

  it("usa la variante primaria por defecto", (): void => {
    renderWithProviders(<Checkbox ariaLabel="Casilla" />);

    expect(screen.getByRole("checkbox")).toHaveClass(
      "checkbox",
      "checkbox-primary",
    );
  });

  it("aplica el estado marcado configurado", (): void => {
    renderWithProviders(<Checkbox isChecked={true} ariaLabel="Casilla" />);

    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("ejecuta onChange con el nuevo estado", async (): Promise<void> => {
    const handleChange = vi.fn();
    renderWithProviders(
      <Checkbox onChange={handleChange} ariaLabel="Casilla" />,
    );

    await userEvent.click(screen.getByRole("checkbox"));

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("esta deshabilitado cuando disabled es verdadero", (): void => {
    renderWithProviders(<Checkbox disabled={true} ariaLabel="Casilla" />);

    expect(screen.getByRole("checkbox")).toBeDisabled();
  });
});
