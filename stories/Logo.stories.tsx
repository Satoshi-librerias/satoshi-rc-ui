import type { Meta, StoryObj } from "@storybook/react-vite";
import { Logo } from "@presentation";

/**
 * @description Stories del logo reutilizable de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Logo simple sin enlace.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Simple: Story = {
  args: {
    src: "/favicon.svg",
    alt: "Logo de la libreria",
    width: 48,
    height: 48,
  },
};

/**
 * @description Logo envuelto en un enlace a la raiz del sitio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConEnlace: Story = {
  args: {
    src: "/favicon.svg",
    alt: "Ir al inicio",
    href: "/",
    width: 48,
    height: 48,
  },
};

/**
 * @description Logo con clases personalizadas en el contenedor y la imagen.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConClasesPersonalizadas: Story = {
  args: {
    src: "/favicon.svg",
    alt: "Logo redondeado",
    width: 48,
    height: 48,
    className: "inline-flex rounded-full border border-base-300 p-1",
    imageClassName: "rounded-full",
  },
};
