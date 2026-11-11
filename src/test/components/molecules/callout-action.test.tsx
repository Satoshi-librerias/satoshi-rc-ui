import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { CalloutAction } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

/**
 * @description Pruebas unitarias de la molecula CalloutAction.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("CalloutAction", (): void => {
  it("renderiza el mensaje y la etiqueta de accion", (): void => {
    renderWithProviders(
      <CalloutAction actionLabel="Aceptar" message="Mensaje del aviso" />,
    );

    expect(screen.getByText("Mensaje del aviso")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Aceptar" })).toBeInTheDocument();
  });

  it("ejecuta el callback al pulsar la accion", async (): Promise<void> => {
    const user = userEvent.setup();
    const onAction = vi.fn();
    renderWithProviders(
      <CalloutAction
        actionLabel="Aceptar"
        message="Mensaje"
        onAction={onAction}
      />,
    );

    await user.click(screen.getByRole("button", { name: "Aceptar" }));

    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it("aplica la variante semantica configurada", (): void => {
    const { container } = renderWithProviders(
      <CalloutAction
        actionLabel="Aceptar"
        message="Mensaje"
        variant="warning"
      />,
    );

    expect(container.firstElementChild).toHaveClass("alert-warning");
  });

  it("usa la variante informativa por defecto", (): void => {
    const { container } = renderWithProviders(
      <CalloutAction actionLabel="Aceptar" message="Mensaje" />,
    );

    expect(container.firstElementChild).toHaveClass("alert-info");
  });

  it("aplica clases adicionales al contenedor", (): void => {
    const { container } = renderWithProviders(
      <CalloutAction
        actionLabel="Aceptar"
        className="text-xs md:text-sm"
        message="Mensaje"
      />,
    );

    expect(container.firstElementChild).toHaveClass("text-xs", "md:text-sm");
  });
});
