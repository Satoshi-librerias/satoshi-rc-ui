import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationLink } from "@presentation";

/**
 * @description Stories del enlace individual de navegacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/NavigationLink",
  component: NavigationLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationLink>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Enlace interno: se abre en la misma pestana sin rel.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const EnlaceInterno: Story = {
  args: {
    item: {
      label: "Inicio",
      href: "/",
    },
  },
};

/**
 * @description Enlace externo: abre en pestana nueva con rel noopener.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const EnlaceExterno: Story = {
  args: {
    item: {
      label: "GitHub",
      href: "https://github.com",
      isExternal: true,
    },
  },
};

/**
 * @description Enlace con etiqueta larga para verificar el ajuste de
 * texto y el area de clic.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const EtiquetaLarga: Story = {
  args: {
    item: {
      label: "Documentacion de componentes y patrones",
      href: "/documentacion",
    },
  },
};
