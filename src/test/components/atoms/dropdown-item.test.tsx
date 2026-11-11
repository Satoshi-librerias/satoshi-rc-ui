import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { DropdownItem } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

const ITEM = { id: "copy", label: "Copiar", shortcut: "Ctrl+C" };

/**
 * @description Pruebas unitarias del atomo DropdownItem.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("DropdownItem", (): void => {
  it("renderiza la etiqueta del elemento", (): void => {
    renderWithProviders(<DropdownItem item={ITEM} />);

    expect(screen.getByRole("option", { name: /Copiar/ })).toBeInTheDocument();
  });

  it("renderiza el atajo con el atomo Kbd", (): void => {
    const { container } = renderWithProviders(<DropdownItem item={ITEM} />);

    expect(container.querySelector("kbd")).toHaveClass("kbd", "kbd-sm");
    expect(screen.getByText("Ctrl+C")).toBeInTheDocument();
  });

  it("no renderiza atajo cuando no esta configurado", (): void => {
    const { container } = renderWithProviders(
      <DropdownItem item={{ id: "copy", label: "Copiar" }} />,
    );

    expect(container.querySelector("kbd")).not.toBeInTheDocument();
  });

  it("refleja el estado de seleccion", (): void => {
    const { container } = renderWithProviders(
      <DropdownItem isSelected item={ITEM} />,
    );

    expect(screen.getByRole("option", { name: /Copiar/ })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(container.firstElementChild).toHaveClass("bg-primary/10");
  });

  it("ejecuta el callback con el identificador del elemento", async (): Promise<void> => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    renderWithProviders(<DropdownItem item={ITEM} onSelect={onSelect} />);

    await user.click(screen.getByRole("option", { name: /Copiar/ }));

    expect(onSelect).toHaveBeenCalledWith("copy");
  });

  it("aplica la variante configurada", (): void => {
    const { container } = renderWithProviders(
      <DropdownItem item={ITEM} variant="primary" />,
    );

    expect(container.firstElementChild).toHaveClass("text-primary");
  });

  it("aplica clases responsive adicionales", (): void => {
    const { container } = renderWithProviders(
      <DropdownItem className="text-xs md:text-sm" item={ITEM} />,
    );

    expect(container.firstElementChild).toHaveClass("text-xs", "md:text-sm");
  });
});
