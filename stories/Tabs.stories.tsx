import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "@presentation";

/**
 * @description Pestanas compartidas por las stories.
 * @author Steveen Cues
 * @version 1.0.0
 */
const TAB_ITEMS = [
  { id: "general", label: "General" },
  { id: "security", label: "Seguridad" },
  { id: "billing", label: "Facturacion" },
];

/**
 * @description Stories de la molecula pestanas de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Pestanas en caja con seleccion controlada.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const EnCaja: Story = {
  render: () => {
    const [activeId, setActiveId] = useState("general");

    return (
      <Tabs items={TAB_ITEMS} activeId={activeId} onChange={setActiveId} />
    );
  },
};

/**
 * @description Pestanas elevadas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Elevadas: Story = {
  args: {
    items: TAB_ITEMS,
    variant: "lifted",
  },
};

/**
 * @description Pestanas con borde.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConBorde: Story = {
  args: {
    items: TAB_ITEMS,
    variant: "bordered",
  },
};

/**
 * @description Pestanas pequenas con etiqueta accesible.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Pequenas: Story = {
  args: {
    items: TAB_ITEMS,
    size: "sm",
    ariaLabel: "Secciones de la cuenta",
  },
};

/**
 * @description Pestanas responsive con tamano ajustado por breakpoint.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Responsive: Story = {
  args: {
    items: TAB_ITEMS,
    className: "text-xs sm:text-sm md:text-base",
  },
};
