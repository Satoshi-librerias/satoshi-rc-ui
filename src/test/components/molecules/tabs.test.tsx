import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { Tabs } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

const TAB_ITEMS = [
  { id: "general", label: "General" },
  { id: "security", label: "Seguridad" },
];

/**
 * @description Pruebas unitarias de la molecula Tabs.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Tabs", (): void => {
  it("renderiza las pestanas configuradas", (): void => {
    renderWithProviders(<Tabs items={TAB_ITEMS} />);

    expect(screen.getByRole("tab", { name: "General" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Seguridad" })).toBeInTheDocument();
  });

  it("usa la primera pestana como activa por defecto", (): void => {
    renderWithProviders(<Tabs items={TAB_ITEMS} />);

    expect(screen.getByRole("tab", { name: "General" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("refleja la pestana activa configurada", (): void => {
    renderWithProviders(<Tabs activeId="security" items={TAB_ITEMS} />);

    expect(screen.getByRole("tab", { name: "Seguridad" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByRole("tab", { name: "General" })).toHaveAttribute(
      "aria-selected",
      "false",
    );
  });

  it("ejecuta el callback al cambiar de pestana", async (): Promise<void> => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderWithProviders(<Tabs items={TAB_ITEMS} onChange={onChange} />);

    await user.click(screen.getByRole("tab", { name: "Seguridad" }));

    expect(onChange).toHaveBeenCalledWith("security");
  });

  it("expone la etiqueta accesible configurada", (): void => {
    renderWithProviders(<Tabs ariaLabel="Secciones" items={TAB_ITEMS} />);

    expect(
      screen.getByRole("tablist", { name: "Secciones" }),
    ).toBeInTheDocument();
  });

  it("aplica la variante y el tamano configurados", (): void => {
    renderWithProviders(<Tabs items={TAB_ITEMS} size="sm" variant="lifted" />);

    expect(screen.getByRole("tablist")).toHaveClass("tabs-lifted");
    expect(screen.getByRole("tab", { name: "General" })).toHaveClass("tab-sm");
  });

  it("aplica clases adicionales al contenedor", (): void => {
    renderWithProviders(
      <Tabs className="text-xs md:text-sm" items={TAB_ITEMS} />,
    );

    expect(screen.getByRole("tablist")).toHaveClass("text-xs", "md:text-sm");
  });
});
