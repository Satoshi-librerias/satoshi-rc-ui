import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@presentation";

/**
 * @description Stories del checkbox reutilizable de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Checkbox marcado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Marcado: Story = {
  args: {
    isChecked: true,
    ariaLabel: "Aceptar terminos",
  },
};

/**
 * @description Variantes de color del checkbox.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Variantes: Story = {
  render: (): JSX.Element => (
    <div className="flex items-center gap-4">
      <Checkbox isChecked={true} variant="primary" ariaLabel="primary" />
      <Checkbox isChecked={true} variant="secondary" ariaLabel="secondary" />
      <Checkbox isChecked={true} variant="accent" ariaLabel="accent" />
      <Checkbox isChecked={true} variant="neutral" ariaLabel="neutral" />
    </div>
  ),
};

/**
 * @description Tamanos disponibles del checkbox.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Tamanos: Story = {
  render: (): JSX.Element => (
    <div className="flex items-center gap-4">
      <Checkbox isChecked={true} size="xs" ariaLabel="xs" />
      <Checkbox isChecked={true} size="sm" ariaLabel="sm" />
      <Checkbox isChecked={true} size="md" ariaLabel="md" />
      <Checkbox isChecked={true} size="lg" ariaLabel="lg" />
    </div>
  ),
};
