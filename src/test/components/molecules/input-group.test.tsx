import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { InputGroup } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias de la molecula InputGroup.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("InputGroup", (): void => {
  it("renderiza el campo con la etiqueta opcional", (): void => {
    renderWithProviders(<InputGroup label="Precio" />);

    expect(screen.getByLabelText("Precio")).toBeInTheDocument();
  });

  it("renderiza el prefijo y sufijo unidos al campo", (): void => {
    renderWithProviders(<InputGroup prefix="$" suffix="USD" />);

    expect(screen.getByText("$")).toBeInTheDocument();
    expect(screen.getByText("USD")).toBeInTheDocument();
  });

  it("renderiza el valor controlado", (): void => {
    renderWithProviders(<InputGroup label="Precio" value="120" />);

    expect(screen.getByLabelText("Precio")).toHaveValue("120");
  });

  it("ejecuta el callback al cambiar el valor", async (): Promise<void> => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderWithProviders(<InputGroup label="Precio" onChange={onChange} />);

    await user.type(screen.getByLabelText("Precio"), "5");

    expect(onChange).toHaveBeenCalledWith("5");
  });

  it("deshabilita el campo cuando se configura", (): void => {
    renderWithProviders(<InputGroup disabled label="Precio" />);

    expect(screen.getByLabelText("Precio")).toBeDisabled();
  });

  it("aplica la variante del atomo Input", (): void => {
    renderWithProviders(<InputGroup label="Precio" variant="ghost" />);

    expect(screen.getByLabelText("Precio")).toHaveClass("input-ghost");
  });

  it("aplica clases adicionales al contenedor", (): void => {
    const { container } = renderWithProviders(
      <InputGroup className="max-w-sm md:max-w-lg" />,
    );

    expect(container.firstElementChild).toHaveClass("max-w-sm", "md:max-w-lg");
  });
});
