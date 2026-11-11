import type { Meta, StoryObj } from "@storybook/react-vite";
import { DropdownItem } from "@presentation";

/**
 * @description Stories del atomo elemento de menu de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/DropdownItem",
  component: DropdownItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownItem>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Elemento simple con etiqueta.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Basico: Story = {
  args: {
    item: { id: "copy", label: "Copiar" },
  },
};

/**
 * @description Elemento con atajo de teclado renderizado por el atomo Kbd.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConAtajo: Story = {
  args: {
    item: { id: "copy", label: "Copiar", shortcut: "Ctrl+C" },
  },
};

/**
 * @description Elemento seleccionado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Seleccionado: Story = {
  args: {
    item: { id: "paste", label: "Pegar", shortcut: "Ctrl+V" },
    isSelected: true,
  },
};

/**
 * @description Elemento con variante de color primaria.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Primario: Story = {
  args: {
    item: { id: "delete", label: "Eliminar", shortcut: "Del" },
    variant: "primary",
  },
};

/**
 * @description Elemento responsive con texto ajustado por breakpoint.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Responsive: Story = {
  args: {
    item: { id: "share", label: "Compartir" },
    className: "text-xs sm:text-sm md:text-base",
  },
};
