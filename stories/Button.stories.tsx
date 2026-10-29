import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "@presentation";

/**
 * @description Stories del boton reutilizable de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Boton primario con contenido por defecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Primario: Story = {
  args: {
    children: "Boton primario",
  },
};

/**
 * @description Variantes visuales disponibles del boton.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Variantes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="neutral">Neutral</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

/**
 * @description Tamanos disponibles del boton.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Tamanos: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

/**
 * @description Boton con estilo de borde y ancho completo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConBordeYAnchoCompleto: Story = {
  render: () => (
    <div className="w-72">
      <Button isOutlined>Outlined</Button>
      <Button isFullWidth className="mt-3">
        Full width
      </Button>
    </div>
  ),
};

/**
 * @description Boton deshabilitado y boton en estado de carga.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Estados: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button disabled>Disabled</Button>
      <Button isLoading>Loading</Button>
    </div>
  ),
};
