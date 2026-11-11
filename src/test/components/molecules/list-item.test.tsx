import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { Avatar, Badge, ListItem } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias de la molecula ListItem.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("ListItem", (): void => {
  it("renderiza el titulo y la descripcion", (): void => {
    renderWithProviders(<ListItem description="Descripcion" title="Titulo" />);

    expect(screen.getByText("Titulo")).toBeInTheDocument();
    expect(screen.getByText("Descripcion")).toBeInTheDocument();
  });

  it("no es interactivo sin callback de clic", (): void => {
    renderWithProviders(<ListItem title="Titulo" />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("es interactivo y ejecuta el callback al hacer clic", async (): Promise<void> => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    renderWithProviders(<ListItem onClick={onClick} title="Titulo" />);

    await user.click(screen.getByRole("button", { name: "Titulo" }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("responde a Enter y Espacio por teclado", async (): Promise<void> => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    renderWithProviders(<ListItem onClick={onClick} title="Titulo" />);

    const item = screen.getByRole("button", { name: "Titulo" });
    item.focus();
    await user.keyboard("{Enter}");
    await user.keyboard(" ");

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("no ejecuta el callback cuando esta deshabilitado", async (): Promise<void> => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    renderWithProviders(
      <ListItem isDisabled onClick={onClick} title="Titulo" />,
    );

    expect(screen.getByRole("button", { name: "Titulo" })).toHaveAttribute(
      "aria-disabled",
      "true",
    );
  });

  it("renderiza el contenido de las ranuras inicial y final", (): void => {
    renderWithProviders(
      <ListItem
        end={<Badge variant="success">Activo</Badge>}
        start={<Avatar initials="SC" />}
        title="Titulo"
      />,
    );

    expect(screen.getByText("SC")).toBeInTheDocument();
    expect(screen.getByText("Activo")).toBeInTheDocument();
  });

  it("expone la etiqueta accesible configurada", (): void => {
    renderWithProviders(<ListItem ariaLabel="Fila uno" title="Titulo" />);

    expect(screen.getByLabelText("Fila uno")).toBeInTheDocument();
  });

  it("aplica clases adicionales al contenedor", (): void => {
    renderWithProviders(<ListItem className="mb-2 md:mb-4" title="Titulo" />);

    expect(screen.getByText("Titulo").parentElement?.parentElement).toHaveClass(
      "mb-2",
      "md:mb-4",
    );
  });
});
