import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { FormField } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias de la molecula FormField.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("FormField", (): void => {
  it("renderiza la etiqueta asociada al campo", (): void => {
    renderWithProviders(<FormField label="Correo" />);

    const input = screen.getByLabelText("Correo");

    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe("INPUT");
  });

  it("renderiza el valor controlado", (): void => {
    renderWithProviders(<FormField label="Correo" value="test@demo.com" />);

    expect(screen.getByLabelText("Correo")).toHaveValue("test@demo.com");
  });

  it("ejecuta el callback al cambiar el valor", async (): Promise<void> => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderWithProviders(<FormField label="Correo" onChange={onChange} />);

    await user.type(screen.getByLabelText("Correo"), "a");

    expect(onChange).toHaveBeenCalledWith("a");
  });

  it("muestra el mensaje de ayuda cuando no hay error", (): void => {
    renderWithProviders(
      <FormField hint="Entre 3 y 20 caracteres" label="Usuario" />,
    );

    expect(screen.getByText("Entre 3 y 20 caracteres")).toBeInTheDocument();
  });

  it("muestra el error con rol de alerta y oculta la ayuda", (): void => {
    renderWithProviders(
      <FormField
        errorMessage="Campo obligatorio"
        hint="Texto de ayuda"
        label="Usuario"
      />,
    );

    expect(screen.getByRole("alert")).toHaveTextContent("Campo obligatorio");
    expect(screen.queryByText("Texto de ayuda")).not.toBeInTheDocument();
  });

  it("deshabilita el campo cuando se configura", (): void => {
    renderWithProviders(<FormField disabled label="Usuario" />);

    expect(screen.getByLabelText("Usuario")).toBeDisabled();
  });

  it("marca el campo como obligatorio cuando se configura", (): void => {
    renderWithProviders(<FormField label="Correo" required />);

    expect(screen.getByLabelText("Correo")).toBeRequired();
  });

  it("aplica la variante del atomo Input", (): void => {
    renderWithProviders(<FormField label="Correo" variant="accent" />);

    expect(screen.getByLabelText("Correo")).toHaveClass("input-accent");
  });

  it("aplica clases adicionales al contenedor", (): void => {
    renderWithProviders(
      <FormField className="max-w-sm md:max-w-lg" label="Correo" />,
    );

    const input = screen.getByLabelText("Correo");

    expect(input.parentElement).toHaveClass("max-w-sm", "md:max-w-lg");
  });
});
