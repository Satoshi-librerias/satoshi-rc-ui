import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { AccordionItem } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias de la molecula AccordionItem.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("AccordionItem", (): void => {
  it("renderiza el titulo y el contenido", (): void => {
    renderWithProviders(
      <AccordionItem title="Titulo">Contenido interno</AccordionItem>,
    );

    expect(screen.getByText("Titulo")).toBeInTheDocument();
    expect(screen.getByText("Contenido interno")).toBeInTheDocument();
  });

  it("esta cerrado por defecto", (): void => {
    const { container } = renderWithProviders(
      <AccordionItem title="Titulo">Contenido</AccordionItem>,
    );

    expect(container.firstElementChild).toHaveClass("collapse-close");
  });

  it("muestra el estado abierto configurado", (): void => {
    const { container } = renderWithProviders(
      <AccordionItem isOpen title="Titulo">
        Contenido
      </AccordionItem>,
    );

    expect(container.firstElementChild).toHaveClass("collapse-open");
  });

  it("ejecuta el callback al alternar el estado", async (): Promise<void> => {
    const user = userEvent.setup();
    const onToggle = vi.fn();
    const { container } = renderWithProviders(
      <AccordionItem onToggle={onToggle} title="Titulo">
        Contenido
      </AccordionItem>,
    );

    const input = container.querySelector("input");
    expect(input).not.toBeNull();

    if (input !== null) {
      await user.click(input);
      expect(onToggle).toHaveBeenCalledWith(true);
    }
  });

  it("deshabilita la interaccion cuando se configura", (): void => {
    const { container } = renderWithProviders(
      <AccordionItem isDisabled title="Titulo">
        Contenido
      </AccordionItem>,
    );

    const input = container.querySelector("input");

    expect(input).toBeDisabled();
    expect(container.firstElementChild).toHaveClass("collapse-disabled");
  });

  it("expone la etiqueta accesible configurada", (): void => {
    renderWithProviders(
      <AccordionItem ariaLabel="Pregunta uno" title="Titulo">
        Contenido
      </AccordionItem>,
    );

    expect(screen.getByLabelText("Pregunta uno")).toBeInTheDocument();
  });

  it("aplica clases adicionales al contenedor", (): void => {
    const { container } = renderWithProviders(
      <AccordionItem className="mb-2 md:mb-4" title="Titulo">
        Contenido
      </AccordionItem>,
    );

    expect(container.firstElementChild).toHaveClass("mb-2", "md:mb-4");
  });
});
