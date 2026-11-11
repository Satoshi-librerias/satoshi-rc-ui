import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "@presentation";

/**
 * @description Stories de la tarjeta reutilizable de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Tarjeta base con contenido.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Base: Story = {
  args: {
    variant: "base",
    className: "w-72 bg-base-100 shadow-xl",
    children: (
      <div className="card-body">
        <h2 className="card-title">Tarjeta</h2>
        <p>Contenido de ejemplo con clases responsive.</p>
      </div>
    ),
  },
};

/**
 * @description Variantes de color de la tarjeta.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Variantes: Story = {
  render: (): JSX.Element => (
    <div className="flex flex-wrap gap-4">
      <Card variant="base" className="bg-base-200 p-4">
        base
      </Card>
      <Card variant="primary" className="p-4">
        primary
      </Card>
      <Card variant="secondary" className="p-4">
        secondary
      </Card>
      <Card variant="accent" className="p-4">
        accent
      </Card>
      <Card variant="neutral" className="p-4">
        neutral
      </Card>
    </div>
  ),
};
