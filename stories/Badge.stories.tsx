import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@presentation";

/**
 * @description Stories del badge reutilizable de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Badge primario con contenido por defecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Primario: Story = {
  args: {
    children: "Nuevo",
  },
};

/**
 * @description Variantes visuales disponibles del badge.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Variantes: Story = {
  render: (): JSX.Element => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary">primary</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="accent">accent</Badge>
      <Badge variant="neutral">neutral</Badge>
      <Badge variant="info">info</Badge>
      <Badge variant="success">success</Badge>
      <Badge variant="warning">warning</Badge>
      <Badge variant="error">error</Badge>
    </div>
  ),
};

/**
 * @description Tamanos disponibles del badge.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Tamanos: Story = {
  render: (): JSX.Element => (
    <div className="flex items-center gap-2">
      <Badge size="sm">sm</Badge>
      <Badge size="md">md</Badge>
      <Badge size="lg">lg</Badge>
    </div>
  ),
};

/**
 * @description Badge con estilo de borde.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConBorde: Story = {
  args: {
    children: "Borde",
    variant: "primary",
    isOutlined: true,
  },
};
