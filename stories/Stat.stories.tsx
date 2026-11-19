import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stat } from "@presentation";

/**
 * @description Stories de la molecula estadistica de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/Stat",
  component: Stat,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Stat>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Estadistica con variantes semanticas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PorDefecto: Story = {
  args: {
    title: "Usuarios activos",
    value: "1,204",
    description: "+12% este mes",
  },
};

/**
 * @description Estadistica con variante de exito.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConExito: Story = {
  args: {
    title: "Ingresos",
    value: "$45,300",
    description: "Objetivo cumplido",
    variant: "success",
  },
};

/**
 * @description Estadistica con variante de alerta.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConAlerta: Story = {
  args: {
    title: "Tickets abiertos",
    value: "37",
    description: "Requiere atencion",
    variant: "warning",
  },
};

/**
 * @description Estadistica responsive con valor ajustado por breakpoint.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Responsive: Story = {
  args: {
    title: "Conversión",
    value: "3.4%",
    variant: "info",
    className: "text-sm sm:text-base md:text-lg",
  },
};
