import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionHeading } from "@presentation";
import { Button } from "@presentation";

/**
 * @description Stories de la molecula encabezado de seccion de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/SectionHeading",
  component: SectionHeading,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SectionHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Encabezado con titulo y subtitulo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Basico: Story = {
  args: {
    title: "Resumen general",
    subtitle: "Metricas del ultimo trimestre",
  },
};

/**
 * @description Encabezado con accion alineada a la derecha.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConAccion: Story = {
  args: {
    title: "Equipo",
    subtitle: "5 miembros activos",
    action: (
      <Button size="sm" variant="primary">
        Invitar
      </Button>
    ),
  },
};

/**
 * @description Encabezado de primer nivel semantico.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Principal: Story = {
  args: {
    title: "Panel de control",
    level: 1,
  },
};

/**
 * @description Encabezado responsive con titulo ajustado por breakpoint.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Responsive: Story = {
  args: {
    title: "Configuracion",
    className: "text-sm sm:text-base md:text-lg",
  },
};
