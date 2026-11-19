import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonGroup } from "@presentation";
import { useState } from "react";

/**
 * @description Elementos compartidos por las stories del grupo de botones.
 * @author Steveen Cues
 * @version 1.0.0
 */
const VIEW_ITEMS = [
  { id: "day", label: "Dia" },
  { id: "week", label: "Semana" },
  { id: "month", label: "Mes" },
];

/**
 * @description Stories de la molecula grupo de botones de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Grupo con seleccion controlada.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Seleccion: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState("day");

    return (
      <ButtonGroup
        items={VIEW_ITEMS}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
    );
  },
};

/**
 * @description Grupo con variante primaria.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Primario: Story = {
  args: {
    items: VIEW_ITEMS,
    selectedId: "week",
    variant: "primary",
  },
};

/**
 * @description Grupo pequeno con etiqueta accesible.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Pequeno: Story = {
  args: {
    items: VIEW_ITEMS,
    size: "sm",
    ariaLabel: "Rango de fechas",
  },
};

/**
 * @description Grupo responsive con tamano ajustado por breakpoint.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Responsive: Story = {
  args: {
    items: VIEW_ITEMS,
    className: "text-xs sm:text-sm md:text-base",
  },
};
