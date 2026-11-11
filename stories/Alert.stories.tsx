import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "@presentation";

/**
 * @description Stories de la alerta reutilizable de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Alerta informativa por defecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Informativa: Story = {
  args: {
    children: "Mensaje informativo",
  },
};

/**
 * @description Variantes semanticas de la alerta.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Variantes: Story = {
  render: (): JSX.Element => (
    <div className="flex w-80 flex-col gap-2">
      <Alert variant="info">Informacion</Alert>
      <Alert variant="success">Operacion exitosa</Alert>
      <Alert variant="warning">Advertencia</Alert>
      <Alert variant="error">Error inesperado</Alert>
      <Alert variant="neutral">Mensaje neutral</Alert>
    </div>
  ),
};
