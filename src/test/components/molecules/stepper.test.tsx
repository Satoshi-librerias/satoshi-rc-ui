import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { Stepper } from "@presentation";
import { renderWithProviders } from "../../utils/test-providers";

const STEPS = [
  { id: "cart", label: "Carrito" },
  { id: "payment", label: "Pago" },
  { id: "confirmation", label: "Confirmacion" },
];

/**
 * @description Pruebas unitarias de la molecula Stepper.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("Stepper", (): void => {
  it("renderiza todos los pasos configurados", (): void => {
    renderWithProviders(<Stepper steps={STEPS} currentId="payment" />);

    expect(screen.getByText("Carrito")).toBeInTheDocument();
    expect(screen.getByText("Pago")).toBeInTheDocument();
    expect(screen.getByText("Confirmacion")).toBeInTheDocument();
  });

  it("marca el paso actual como paso accesible", (): void => {
    renderWithProviders(<Stepper steps={STEPS} currentId="payment" />);

    expect(screen.getByText("Pago").closest("li")).toHaveAttribute(
      "aria-current",
      "step",
    );
  });

  it("usa el primer paso por defecto", (): void => {
    renderWithProviders(<Stepper steps={STEPS} />);

    expect(screen.getByText("Carrito").closest("li")).toHaveAttribute(
      "aria-current",
      "step",
    );
  });

  it("aplica la clase de estado a pasos completados", (): void => {
    renderWithProviders(<Stepper steps={STEPS} currentId="confirmation" />);

    expect(screen.getByText("Carrito").closest("li")).toHaveClass(
      "step-primary",
    );
    expect(screen.getByText("Confirmacion").closest("li")).toHaveClass(
      "step-primary",
    );
  });

  it("renderiza orientacion vertical cuando se configura", (): void => {
    renderWithProviders(<Stepper steps={STEPS} orientation="vertical" />);

    expect(screen.getByRole("list")).toHaveClass("steps-vertical");
  });

  it("renderiza orientacion horizontal por defecto", (): void => {
    renderWithProviders(<Stepper steps={STEPS} />);

    expect(screen.getByRole("list")).toHaveClass("flex-row");
  });

  it("ejecuta el callback al seleccionar un paso alcanzable", async (): Promise<void> => {
    const user = userEvent.setup();
    const onStepClick = vi.fn();
    renderWithProviders(
      <Stepper currentId="payment" onStepClick={onStepClick} steps={STEPS} />,
    );

    await user.click(screen.getByRole("button", { name: "Carrito" }));

    expect(onStepClick).toHaveBeenCalledWith("cart");
  });

  it("no renderiza botones cuando no hay callback", (): void => {
    renderWithProviders(<Stepper steps={STEPS} currentId="payment" />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("expone la etiqueta accesible configurada", (): void => {
    renderWithProviders(<Stepper ariaLabel="Progreso" steps={STEPS} />);

    expect(
      screen.getByRole("navigation", { name: "Progreso" }),
    ).toBeInTheDocument();
  });

  it("aplica clases adicionales al contenedor", (): void => {
    renderWithProviders(
      <Stepper className="text-xs md:text-sm" steps={STEPS} />,
    );

    expect(screen.getByRole("list")).toHaveClass("text-xs", "md:text-sm");
  });
});
