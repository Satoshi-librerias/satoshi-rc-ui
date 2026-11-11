import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { Button, Tooltip } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias del atomo Tooltip.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Tooltip", (): void => {
  it("renderiza su contenido", (): void => {
    renderWithProviders(
      <Tooltip message="Guardar">
        <Button>Guardar</Button>
      </Tooltip>,
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("expose el mensaje en el atributo data-tip", (): void => {
    renderWithProviders(
      <Tooltip message="Guardar cambios">
        <Button>Guardar</Button>
      </Tooltip>,
    );

    expect(screen.getByRole("button").parentElement).toHaveAttribute(
      "data-tip",
      "Guardar cambios",
    );
  });

  it("usa la posicion superior por defecto", (): void => {
    renderWithProviders(
      <Tooltip message="Mensaje">
        <Button>Accion</Button>
      </Tooltip>,
    );

    expect(screen.getByRole("button").parentElement).toHaveClass("tooltip-top");
  });

  it("aplica la posicion configurada", (): void => {
    renderWithProviders(
      <Tooltip message="Mensaje" placement="left">
        <Button>Accion</Button>
      </Tooltip>,
    );

    expect(screen.getByRole("button").parentElement).toHaveClass(
      "tooltip-left",
    );
  });

  it("aplica clases adicionales del atributo className", (): void => {
    renderWithProviders(
      <Tooltip message="Mensaje" className="hidden sm:tooltip">
        <Button>Accion</Button>
      </Tooltip>,
    );

    expect(screen.getByRole("button").parentElement).toHaveClass(
      "hidden",
      "sm:tooltip",
    );
  });
});
