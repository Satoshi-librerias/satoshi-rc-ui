import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AccordionItem } from "@presentation";

/**
 * @description Stories de la molecula elemento de acordeon de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/AccordionItem",
  component: AccordionItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AccordionItem>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Acordeon cerrado por defecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Cerrado: Story = {
  args: {
    title: "Que incluye la licencia?",
    children: "La licencia cubre proyectos comerciales e internos.",
  },
};

/**
 * @description Acordeon abierto controlado por el estado del consumidor.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Abierto: Story = {
  args: {
    title: "Que incluye la licencia?",
    children: "La licencia cubre proyectos comerciales e internos.",
    isOpen: true,
  },
};

/**
 * @description Acordeon controlado con estado local y callback onToggle.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Controlado: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <AccordionItem
        isOpen={isOpen}
        title="Como solicito soporte?"
        onToggle={setIsOpen}
      >
        Escribe a soporte con el identificador de tu pedido.
      </AccordionItem>
    );
  },
};

/**
 * @description Acordeon deshabilitado que no puede abrirse.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Deshabilitado: Story = {
  args: {
    title: "Seccion no disponible",
    children: "Este contenido no esta disponible.",
    isDisabled: true,
  },
};

/**
 * @description Lista de acordeones con traduccion de titulos mediante el
 * catalogo de stories.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConTraduccion: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-2">
      <AccordionItem title="molecules.accordion">
        Contenido traducido del acordeon.
      </AccordionItem>
    </div>
  ),
};
