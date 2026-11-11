import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { Textarea } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias del atomo Textarea.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Textarea", (): void => {
  it("renderiza el area de texto", (): void => {
    renderWithProviders(<Textarea ariaLabel="Comentario" />);

    expect(
      screen.getByRole("textbox", { name: "Comentario" }),
    ).toBeInTheDocument();
  });

  it("usa tres filas por defecto", (): void => {
    renderWithProviders(<Textarea ariaLabel="Comentario" />);

    expect(screen.getByRole("textbox")).toHaveAttribute("rows", "3");
    expect(screen.getByRole("textbox")).toHaveClass("rounded-xl");
  });

  it("aplica el numero de filas configurado", (): void => {
    renderWithProviders(<Textarea rows={6} ariaLabel="Comentario" />);

    expect(screen.getByRole("textbox")).toHaveAttribute("rows", "6");
  });

  it("ejecuta onChange con el nuevo valor", async (): Promise<void> => {
    const handleChange = vi.fn();
    renderWithProviders(
      <Textarea onChange={handleChange} ariaLabel="Comentario" />,
    );

    await userEvent.type(screen.getByRole("textbox"), "hola");

    expect(handleChange).toHaveBeenLastCalledWith("hola");
  });

  it("muestra el placeholder configurado", (): void => {
    renderWithProviders(<Textarea placeholder="Escribe aqui" />);

    expect(screen.getByPlaceholderText("Escribe aqui")).toBeInTheDocument();
  });

  it("marca el area como obligatoria cuando se configura", (): void => {
    renderWithProviders(<Textarea ariaLabel="Mensaje" required />);

    expect(screen.getByRole("textbox", { name: "Mensaje" })).toBeRequired();
  });
});
