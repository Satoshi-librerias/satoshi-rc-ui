import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Tooltip } from "@presentation";

/**
 * @description Stories del tooltip reutilizable de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Tooltip superior por defecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Superior: Story = {
  render: (): JSX.Element => (
    <Tooltip message="Guardar cambios" placement="top">
      <Button>Guardar</Button>
    </Tooltip>
  ),
};

/**
 * @description Posiciones disponibles del tooltip.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Posiciones: Story = {
  render: (): JSX.Element => (
    <div className="flex flex-col items-center gap-6">
      <Tooltip message="Arriba" placement="top">
        <Button variant="ghost">top</Button>
      </Tooltip>
      <div className="flex gap-6">
        <Tooltip message="Izquierda" placement="left">
          <Button variant="ghost">left</Button>
        </Tooltip>
        <Tooltip message="Derecha" placement="right">
          <Button variant="ghost">right</Button>
        </Tooltip>
      </div>
      <Tooltip message="Abajo" placement="bottom">
        <Button variant="ghost">bottom</Button>
      </Tooltip>
    </div>
  ),
};

/**
 * @description Variantes de color del tooltip.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Variantes: Story = {
  render: (): JSX.Element => (
    <div className="flex gap-6">
      <Tooltip message="primary" variant="primary">
        <Button variant="ghost">primary</Button>
      </Tooltip>
      <Tooltip message="secondary" variant="secondary">
        <Button variant="ghost">secondary</Button>
      </Tooltip>
      <Tooltip message="accent" variant="accent">
        <Button variant="ghost">accent</Button>
      </Tooltip>
    </div>
  ),
};
