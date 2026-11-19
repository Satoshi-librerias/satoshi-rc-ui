import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@presentation";

/**
 * @description Stories del campo de texto reutilizable de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Campo de texto por defecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PorDefecto: Story = {
  args: {
    placeholder: "Escribe aqui",
    ariaLabel: "Campo de texto",
  },
};

/**
 * @description Variantes visuales del campo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Variantes: Story = {
  render: (): JSX.Element => (
    <div className="flex w-72 flex-col gap-3">
      <Input placeholder="primary" variant="primary" />
      <Input placeholder="secondary" variant="secondary" />
      <Input placeholder="accent" variant="accent" />
      <Input placeholder="ghost" variant="ghost" />
    </div>
  ),
};

/**
 * @description Tamanos disponibles del campo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Tamanos: Story = {
  render: (): JSX.Element => (
    <div className="flex w-72 flex-col gap-3">
      <Input size="xs" placeholder="xs" />
      <Input size="sm" placeholder="sm" />
      <Input size="md" placeholder="md" />
      <Input size="lg" placeholder="lg" />
    </div>
  ),
};
