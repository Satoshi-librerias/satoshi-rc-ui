import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Navigation, ResponsiveMenu } from "@presentation";

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
 * @description Stories del menu responsive de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/ResponsiveMenu",
  component: ResponsiveMenu,
  globals: {
    viewport: "mobile1",
  },
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ResponsiveMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Menu con toggle por defecto y navegacion vertical en el
 * panel. El toggle solo es visible en pantallas pequenas (md:hidden).
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PorDefecto: Story = {
  render: () => (
    <ResponsiveMenu
      labels={{ open: "menu.open", close: "menu.close" }}
      className="rounded-xl border border-base-300 p-3"
    >
      <Navigation items={NAVIGATION_ITEMS} orientation="vertical" />
    </ResponsiveMenu>
  ),
};

/**
 * @description Menu con toggle personalizado controlado por el consumidor
 * mediante las propiedades isOpen y onToggle.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const ConTogglePersonalizado: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <ResponsiveMenu
        isOpen={isOpen}
        onToggle={(): void => setIsOpen((open) => !open)}
        toggle={
          <button className="btn btn-primary btn-sm" type="button">
            Abrir menu
          </button>
        }
        className="rounded-xl border border-base-300 p-3"
      >
        <Navigation items={NAVIGATION_ITEMS} orientation="vertical" />
      </ResponsiveMenu>
    );
  },
};

/**
 * @description Menu con contenido arbitrario en el panel colapsable.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConContenidoArbitrario: Story = {
  render: () => (
    <ResponsiveMenu
      labels={{ open: "menu.open", close: "menu.close" }}
      className="rounded-xl border border-base-300 p-3"
    >
      <p className="text-sm text-base-content/80">
        El panel acepta cualquier contenido React, no solo navegacion.
      </p>
    </ResponsiveMenu>
  ),
};
