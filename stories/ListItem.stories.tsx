import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, Badge, Button, ListItem } from "@presentation";

/**
 * @description Stories de la molecula elemento de lista de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/ListItem",
  component: ListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Elemento simple con titulo y descripcion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Simple: Story = {
  args: {
    title: "Sprint 42",
    description: "Planificacion del sprint actual",
  },
};

/**
 * @description Elemento interactivo con avatar y badge en las ranuras.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Interactivo: Story = {
  args: {
    title: "Steveen Cues",
    description: "Activo hace 5 minutos",
    start: <Avatar initials="SC" />,
    end: <Badge variant="success">En linea</Badge>,
    ariaLabel: "Abrir perfil de Steveen Cues",
    onClick: (): void => undefined,
  },
};

/**
 * @description Elemento con accion en la ranura final.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConAccion: Story = {
  args: {
    title: "Factura 2026-011",
    description: "Vence en 3 dias",
    end: (
      <Button size="sm" variant="primary">
        Pagar
      </Button>
    ),
    isDisabled: true,
  },
};

/**
 * @description Elemento deshabilitado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Deshabilitado: Story = {
  args: {
    title: "Cuenta suspendida",
    description: "Contacta al administrador",
    isDisabled: true,
  },
};
