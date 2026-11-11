import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { Switch } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias del atomo Switch.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Switch", (): void => {
  it("renderiza el interruptor", (): void => {
    renderWithProviders(<Switch ariaLabel="Notificaciones" />);

    expect(
      screen.getByRole("switch", { name: "Notificaciones" }),
    ).toBeInTheDocument();
  });

  it("usa la variante primaria por defecto", (): void => {
    renderWithProviders(<Switch ariaLabel="Estado" />);

    expect(screen.getByRole("switch")).toHaveClass("toggle", "toggle-primary");
  });

  it("aplica la variante y el tamano configurados", (): void => {
    renderWithProviders(
      <Switch variant="accent" size="lg" ariaLabel="Estado" />,
    );

    expect(screen.getByRole("switch")).toHaveClass(
      "toggle-accent",
      "toggle-lg",
    );
  });

  it("arranca desactivado por defecto", (): void => {
    renderWithProviders(<Switch ariaLabel="Estado" />);

    expect(screen.getByRole("switch")).not.toBeChecked();
  });

  it("arranca activado cuando isChecked es verdadero", (): void => {
    renderWithProviders(<Switch isChecked={true} ariaLabel="Estado" />);

    expect(screen.getByRole("switch")).toBeChecked();
  });

  it("queda deshabilitado cuando disabled es verdadero", (): void => {
    renderWithProviders(<Switch disabled={true} ariaLabel="Estado" />);

    expect(screen.getByRole("switch")).toBeDisabled();
  });

  it("ejecuta onChange con el nuevo estado", async (): Promise<void> => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    renderWithProviders(
      <Switch isChecked={false} onChange={handleChange} ariaLabel="Estado" />,
    );

    await user.click(screen.getByRole("switch"));

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("expone la etiqueta accesible configurada", (): void => {
    renderWithProviders(<Switch ariaLabel="Modo oscuro" />);

    expect(
      screen.getByRole("switch", { name: "Modo oscuro" }),
    ).toBeInTheDocument();
  });
});
