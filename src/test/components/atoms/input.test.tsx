import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { Input } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias del atomo Input.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Input", (): void => {
  it("renderiza el campo de texto", (): void => {
    renderWithProviders(<Input ariaLabel="Nombre" />);

    expect(screen.getByRole("textbox", { name: "Nombre" })).toBeInTheDocument();
  });

  it("usa la variante primaria por defecto", (): void => {
    renderWithProviders(<Input ariaLabel="Campo" />);

    expect(screen.getByRole("textbox")).toHaveClass(
      "input",
      "input-primary",
      "rounded-xl",
    );
  });

  it("aplica el tamano configurado", (): void => {
    renderWithProviders(<Input size="lg" ariaLabel="Campo" />);

    expect(screen.getByRole("textbox")).toHaveClass("input-lg");
  });

  it("muestra el placeholder configurado", (): void => {
    renderWithProviders(<Input placeholder="Escribe aqui" />);

    expect(screen.getByPlaceholderText("Escribe aqui")).toBeInTheDocument();
  });

  it("ejecuta onChange con el nuevo valor", async (): Promise<void> => {
    const handleChange = vi.fn();
    renderWithProviders(<Input onChange={handleChange} ariaLabel="Campo" />);

    await userEvent.type(screen.getByRole("textbox"), "abc");

    expect(handleChange).toHaveBeenLastCalledWith("abc");
  });

  it("esta deshabilitado cuando disabled es verdadero", (): void => {
    renderWithProviders(<Input disabled={true} ariaLabel="Campo" />);

    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("marca el campo como obligatorio cuando se configura", (): void => {
    renderWithProviders(<Input required ariaLabel="Campo" />);

    expect(screen.getByRole("textbox")).toBeRequired();
  });
});
