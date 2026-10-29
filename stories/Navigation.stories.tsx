import type { Meta, StoryObj } from "@storybook/react-vite";
import { Navigation } from "@presentation";

/**
 * @description Elementos de navegacion compartidos por las stories.
 * @author Steveen Cues
 * @version 1.0.0
 */
const NAVIGATION_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Componentes", href: "/componentes" },
  { label: "Documentacion", href: "/documentacion" },
  { label: "GitHub", href: "https://github.com", isExternal: true },
];

/**
 * @description Stories de la barra de navegacion de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/Navigation",
  component: Navigation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Navegacion horizontal con enlaces internos y externos.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Horizontal: Story = {
  args: {
    items: NAVIGATION_ITEMS,
  },
};

/**
 * @description Navegacion vertical para menus moviles.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Vertical: Story = {
  args: {
    items: NAVIGATION_ITEMS,
    orientation: "vertical",
  },
};

/**
 * @description Navegacion sin elementos: renderiza un nav vacio accesible.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SinElementos: Story = {
  args: {
    items: [],
  },
};

/**
 * @description Navegacion con etiqueta accesible personalizada.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConEtiquetaAccesible: Story = {
  args: {
    items: NAVIGATION_ITEMS.slice(0, 2),
    ariaLabel: "Navegacion principal del sitio",
  },
};
