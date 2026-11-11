import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { Radio } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias del atomo Radio.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Radio", (): void => {
  it("renderiza el boton de opcion", (): void => {
    renderWithProviders(<Radio name="plan" ariaLabel="Plan pro" />);

    expect(screen.getByRole("radio", { name: "Plan pro" })).toBeInTheDocument();
  });

  it("usa la variante primaria por defecto", (): void => {
    renderWithProviders(<Radio name="plan" ariaLabel="Opcion" />);

    expect(screen.getByRole("radio")).toHaveClass("radio", "radio-primary");
  });

  it("aplica la variante y el tamano configurados", (): void => {
    renderWithProviders(
      <Radio name="plan" variant="accent" size="lg" ariaLabel="Opcion" />,
    );

    expect(screen.getByRole("radio")).toHaveClass("radio-accent", "radio-lg");
  });

  it("pertenece al grupo configurado", (): void => {
    renderWithProviders(<Radio name="plan" ariaLabel="Opcion" />);

    expect(screen.getByRole("radio")).toHaveAttribute("name", "plan");
  });

  it("arranca desmarcado por defecto", (): void => {
    renderWithProviders(<Radio name="plan" ariaLabel="Opcion" />);

    expect(screen.getByRole("radio")).not.toBeChecked();
  });

  it("arranca marcado cuando isChecked es verdadero", (): void => {
    renderWithProviders(
      <Radio name="plan" isChecked={true} ariaLabel="Opcion" />,
    );

    expect(screen.getByRole("radio")).toBeChecked();
  });

  it("queda deshabilitado cuando disabled es verdadero", (): void => {
    renderWithProviders(
      <Radio name="plan" disabled={true} ariaLabel="Opcion" />,
    );

    expect(screen.getByRole("radio")).toBeDisabled();
  });

  it("ejecuta onChange con el valor de la opcion", async (): Promise<void> => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    renderWithProviders(
      <Radio
        name="plan"
        value="pro"
        onChange={handleChange}
        ariaLabel="Plan pro"
      />,
    );

    await user.click(screen.getByRole("radio"));

    expect(handleChange).toHaveBeenCalledWith("pro");
  });

  it("comparte el grupo entre radios", async (): Promise<void> => {
    const user = userEvent.setup();
    const { rerender } = renderWithProviders(
      <Radio name="plan" value="free" ariaLabel="Plan free" />,
    );

    rerender(
      <Radio name="plan" value="free" isChecked={true} ariaLabel="Plan free" />,
    );

    expect(screen.getByRole("radio", { name: "Plan free" })).toBeChecked();
  });
});
