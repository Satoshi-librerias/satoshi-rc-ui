import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { ButtonGroup } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

const ITEMS = [
  { id: "day", label: "Dia" },
  { id: "week", label: "Semana" },
];

/**
 * @description Pruebas unitarias de la molecula ButtonGroup.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("ButtonGroup", (): void => {
  it("renderiza los botones configurados", (): void => {
    renderWithProviders(<ButtonGroup items={ITEMS} />);

    expect(screen.getByRole("button", { name: "Dia" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Semana" })).toBeInTheDocument();
  });

  it("refleja el boton seleccionado con aria-pressed", (): void => {
    renderWithProviders(<ButtonGroup items={ITEMS} selectedId="week" />);

    expect(screen.getByRole("button", { name: "Semana" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: "Dia" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  it("ejecuta el callback al seleccionar un boton", async (): Promise<void> => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    renderWithProviders(<ButtonGroup items={ITEMS} onSelect={onSelect} />);

    await user.click(screen.getByRole("button", { name: "Semana" }));

    expect(onSelect).toHaveBeenCalledWith("week");
  });

  it("expone la etiqueta accesible configurada", (): void => {
    renderWithProviders(<ButtonGroup ariaLabel="Rango" items={ITEMS} />);

    expect(screen.getByRole("group", { name: "Rango" })).toBeInTheDocument();
  });

  it("aplica la variante y el tamano configurados", (): void => {
    renderWithProviders(
      <ButtonGroup items={ITEMS} size="sm" variant="primary" />,
    );

    expect(screen.getByRole("button", { name: "Dia" })).toHaveClass(
      "btn-primary",
      "btn-sm",
    );
  });

  it("aplica clases adicionales al contenedor", (): void => {
    renderWithProviders(
      <ButtonGroup className="text-xs md:text-sm" items={ITEMS} />,
    );

    expect(screen.getByRole("group")).toHaveClass("text-xs", "md:text-sm");
  });
});
