import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { Breadcrumb } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

const ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Catalogo", href: "/catalogo" },
  { label: "Producto" },
];

/**
 * @description Pruebas unitarias de la molecula Breadcrumb.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Breadcrumb", (): void => {
  it("renderiza los elementos como enlaces y pagina actual", (): void => {
    renderWithProviders(<Breadcrumb items={ITEMS} />);

    expect(screen.getByRole("link", { name: "Inicio" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByRole("link", { name: "Catalogo" })).toHaveAttribute(
      "href",
      "/catalogo",
    );
    expect(screen.getByText("Producto")).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("marca el ultimo elemento como pagina actual", (): void => {
    renderWithProviders(<Breadcrumb items={ITEMS} />);

    const current = screen.getByText("Producto");

    expect(current).toHaveClass("font-medium");
    expect(screen.getByText("Catalogo")).not.toHaveAttribute("aria-current");
  });

  it("renderiza un solo elemento como pagina actual sin enlace", (): void => {
    renderWithProviders(<Breadcrumb items={[{ label: "Inicio" }]} />);

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.getByText("Inicio")).toHaveAttribute("aria-current", "page");
  });

  it("expone la etiqueta accesible configurada", (): void => {
    renderWithProviders(
      <Breadcrumb ariaLabel="Ruta principal" items={ITEMS} />,
    );

    expect(
      screen.getByRole("navigation", { name: "Ruta principal" }),
    ).toBeInTheDocument();
  });

  it("aplica clases adicionales al contenedor", (): void => {
    renderWithProviders(
      <Breadcrumb className="text-xs md:text-sm" items={ITEMS} />,
    );

    expect(screen.getByRole("navigation")).toHaveClass("text-xs", "md:text-sm");
  });
});
