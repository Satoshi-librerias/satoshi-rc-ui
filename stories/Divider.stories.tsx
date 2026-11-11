import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "@presentation";

/**
 * @description Stories del separador reutilizable de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Separador horizontal con texto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Horizontal: Story = {
  render: (): JSX.Element => (
    <div className="w-64">
      <p>Seccion superior</p>
      <Divider>o</Divider>
      <p>Seccion inferior</p>
    </div>
  ),
};

/**
 * @description Separador vertical.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Vertical: Story = {
  render: (): JSX.Element => (
    <div className="flex h-16 items-center gap-4">
      <p>Izquierda</p>
      <Divider orientation="vertical" />
      <p>Derecha</p>
    </div>
  ),
};
