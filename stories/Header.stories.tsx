import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "@presentation";

/**
 * @description Elementos de navegacion compartidos por las stories.
 * @author Steveen Cues
 * @version 1.0.0
 */
const NAVIGATION_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Componentes", href: "/componentes" },
  { label: "Documentacion", href: "/documentacion" },
];

/**
 * @description Stories del encabezado generico de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Organismos/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Encabezado completo: logo, navegacion y ambos selectores.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Completo: Story = {
  args: {
    logo: {
      src: "/favicon.svg",
      alt: "Logo de la libreria",
      href: "/",
      width: 40,
      height: 40,
    },
    navigationItems: NAVIGATION_ITEMS,
  },
};

/**
 * @description Encabezado sin navegacion, solo marca y selectores.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SinNavegacion: Story = {
  args: {
    logo: {
      src: "/favicon.svg",
      alt: "Logo de la libreria",
      href: "/",
      width: 40,
      height: 40,
    },
    showNavigation: false,
  },
};

/**
 * @description Encabezado sin logo ni navegacion, solo selectores.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SoloSelectores: Story = {
  args: {
    showLogo: false,
    showNavigation: false,
  },
};

/**
 * @description Encabezado con acciones adicionales junto a los selectores.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConAccionesAdicionales: Story = {
  args: {
    logo: {
      src: "/favicon.svg",
      alt: "Logo de la libreria",
      href: "/",
      width: 40,
      height: 40,
    },
    navigationItems: NAVIGATION_ITEMS,
    additionalActions: (
      <button className="btn btn-primary btn-sm" type="button">
        Accion
      </button>
    ),
  },
};
