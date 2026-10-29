import { useState } from "react";
import type { FC, JSX } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ResponsiveMenuToggle } from "@presentation";

/**
 * @description Contenedor interactivo que alterna el estado del toggle.
 * @author Steveen Cues
 * @version 1.0.0
 */
const ToggleInteractivo: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <ResponsiveMenuToggle
        isOpen={isOpen}
        openLabel="Abrir menu"
        closeLabel="Cerrar menu"
        onToggle={() => setIsOpen((prev) => !prev)}
      />
      <p className="text-sm text-base-content/70">
        Estado: {isOpen ? "abierto" : "cerrado"}
      </p>
    </div>
  );
};

/**
 * @description Stories del boton toggle del menu responsive. El boton
 * usa md:hidden, por lo que solo es visible en viewports pequenos.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/ResponsiveMenuToggle",
  component: ResponsiveMenuToggle,
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ResponsiveMenuToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Toggle cerrado: muestra el icono de hamburguesa.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Cerrado: Story = {
  args: {
    isOpen: false,
    openLabel: "Abrir menu",
    closeLabel: "Cerrar menu",
    onToggle: () => {},
  },
};

/**
 * @description Toggle abierto: muestra el icono de cerrar (X).
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Abierto: Story = {
  args: {
    isOpen: true,
    openLabel: "Abrir menu",
    closeLabel: "Cerrar menu",
    onToggle: () => {},
  },
};

/**
 * @description Toggle con estado real: al hacer clic alterna entre
 * hamburguesa y X actualizando el aria-label.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Interactivo: Story = {
  args: {
    isOpen: false,
    openLabel: "Abrir menu",
    closeLabel: "Cerrar menu",
    onToggle: () => {},
  },
  render: () => <ToggleInteractivo />,
};
