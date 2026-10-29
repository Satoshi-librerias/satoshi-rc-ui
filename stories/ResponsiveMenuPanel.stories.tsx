import type { Meta, StoryObj } from "@storybook/react-vite";
import { Navigation, ResponsiveMenuPanel } from "@presentation";

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
 * @description Stories del panel colapsable del menu responsive. El
 * panel usa md:hidden, por lo que solo es visible en viewports
 * pequenos.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/ResponsiveMenuPanel",
  component: ResponsiveMenuPanel,
  parameters: {
    layout: "padded",
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ResponsiveMenuPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Panel abierto con navegacion vertical dentro.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Abierto: Story = {
  args: {
    isOpen: true,
    id: "responsive-menu-panel",
    children: <Navigation items={NAVIGATION_ITEMS} orientation="vertical" />,
  },
};

/**
 * @description Panel cerrado: no renderiza ningun elemento visible.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Cerrado: Story = {
  args: {
    isOpen: false,
    id: "responsive-menu-panel",
    children: <Navigation items={NAVIGATION_ITEMS} orientation="vertical" />,
  },
};

/**
 * @description Panel abierto con contenido arbitrario en lugar de
 * navegacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConContenidoArbitrario: Story = {
  args: {
    isOpen: true,
    id: "responsive-menu-panel",
    children: (
      <p className="text-sm text-base-content/80">
        El panel acepta cualquier contenido React, no solo navegacion.
      </p>
    ),
  },
};
