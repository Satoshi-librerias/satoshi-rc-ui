import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmptyState } from "@presentation";
import { Button } from "@presentation";

/**
 * @description Stories de la molecula estado vacio de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Estado vacio con titulo y descripcion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Basico: Story = {
  args: {
    title: "No hay resultados",
    description: "Ajusta los filtros para encontrar lo que buscas.",
  },
};

/**
 * @description Estado vacio con accion principal.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConAccion: Story = {
  args: {
    title: "Sin proyectos",
    description: "Crea tu primer proyecto para comenzar.",
    action: <Button variant="primary">Nuevo proyecto</Button>,
  },
};

/**
 * @description Estado vacio con icono decorativo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConIcono: Story = {
  args: {
    title: "Bandeja vacia",
    description: "No tienes mensajes nuevos.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-12 w-12 text-base-content/40"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path d="M3 8l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" />
      </svg>
    ),
  },
};

/**
 * @description Estado vacio responsive con padding ajustado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Responsive: Story = {
  args: {
    title: "Sin notificaciones",
    className: "p-4 sm:p-8 md:p-12",
  },
};
