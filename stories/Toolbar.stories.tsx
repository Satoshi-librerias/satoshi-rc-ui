import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, SearchBar, Toolbar } from "@presentation";

/**
 * @description Stories de la molecula barra de herramientas de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/Toolbar",
  component: Toolbar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toolbar>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Barra con busqueda al inicio y accion al final.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Completa: Story = {
  render: () => (
    <Toolbar
      start={<SearchBar placeholder="Filtrar..." size="sm" />}
      end={
        <Button size="sm" variant="primary">
          Nuevo
        </Button>
      }
    />
  ),
};

/**
 * @description Barra con variante rellena.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Rellena: Story = {
  render: () => (
    <Toolbar
      variant="filled"
      start={<span className="text-sm font-semibold">Elementos</span>}
      end={
        <Button size="sm" variant="ghost">
          Actualizar
        </Button>
      }
    />
  ),
};

/**
 * @description Barra fantasma solo con contenido inicial.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Fantasma: Story = {
  args: {
    variant: "ghost",
    start: <span className="text-sm">Sin borde ni fondo</span>,
  },
};

/**
 * @description Barra responsive con contenido ajustado por breakpoint.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Responsive: Story = {
  args: {
    start: <span className="text-xs sm:text-sm">Herramientas</span>,
    end: (
      <Button size="sm" variant="ghost">
        Accion
      </Button>
    ),
  },
};
