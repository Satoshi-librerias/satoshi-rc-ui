import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { Pagination } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias de la molecula Pagination.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Pagination", (): void => {
  it("renderiza las paginas visibles con elipsis", (): void => {
    renderWithProviders(<Pagination page={5} totalPages={20} />);

    expect(screen.getByRole("button", { name: "5" })).toBeInTheDocument();
    expect(screen.getAllByText("\u2026").length).toBeGreaterThan(0);
  });

  it("marca la pagina actual con aria-current", (): void => {
    renderWithProviders(<Pagination page={3} totalPages={10} />);

    expect(screen.getByRole("button", { name: "3" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("deshabilita el boton anterior en la primera pagina", (): void => {
    renderWithProviders(<Pagination page={1} totalPages={10} />);

    expect(
      screen.getByRole("button", { name: "Pagina anterior" }),
    ).toBeDisabled();
  });

  it("deshabilita el boton siguiente en la ultima pagina", (): void => {
    renderWithProviders(<Pagination page={10} totalPages={10} />);

    expect(
      screen.getByRole("button", { name: "Pagina siguiente" }),
    ).toBeDisabled();
  });

  it("ejecuta el callback al cambiar de pagina", async (): Promise<void> => {
    const user = userEvent.setup();
    const onPageChange = vi.fn();
    renderWithProviders(
      <Pagination onPageChange={onPageChange} page={2} totalPages={10} />,
    );

    await user.click(screen.getByRole("button", { name: "4" }));

    expect(onPageChange).toHaveBeenCalledWith(4);
  });

  it("usa las etiquetas traducidas por defecto", (): void => {
    renderWithProviders(<Pagination page={2} totalPages={10} />);

    expect(
      screen.getByRole("button", { name: "Pagina anterior" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Pagina siguiente" }),
    ).toBeInTheDocument();
  });

  it("permite etiquetas personalizadas", (): void => {
    renderWithProviders(
      <Pagination
        nextLabel="Despues"
        page={2}
        previousLabel="Antes"
        totalPages={10}
      />,
    );

    expect(screen.getByRole("button", { name: "Antes" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Despues" })).toBeInTheDocument();
  });

  it("expone la etiqueta accesible configurada", (): void => {
    renderWithProviders(
      <Pagination ariaLabel="Paginado" page={1} totalPages={10} />,
    );

    expect(
      screen.getByRole("navigation", { name: "Paginado" }),
    ).toBeInTheDocument();
  });

  it("aplica el tamano configurado", (): void => {
    renderWithProviders(<Pagination page={1} size="sm" totalPages={10} />);

    expect(screen.getByRole("button", { name: "1" })).toHaveClass("btn-sm");
  });
});
