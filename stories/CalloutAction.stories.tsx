import type { Meta, StoryObj } from "@storybook/react-vite";
import { CalloutAction } from "@presentation";

/**
 * @description Stories de la molecula aviso con accion de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/CalloutAction",
  component: CalloutAction,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CalloutAction>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Aviso informativo con accion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Informativo: Story = {
  args: {
    message: "Tu prueba termina en 5 dias.",
    actionLabel: "Mejorar plan",
    variant: "info",
  },
};

/**
 * @description Aviso de exito.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const DeExito: Story = {
  args: {
    message: "Los cambios se guardaron correctamente.",
    actionLabel: "Ver cambios",
    variant: "success",
  },
};

/**
 * @description Aviso de alerta.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const DeAlerta: Story = {
  args: {
    message: "El almacenamiento esta al 90%.",
    actionLabel: "Ampliar",
    variant: "warning",
  },
};

/**
 * @description Aviso de error.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const DeError: Story = {
  args: {
    message: "No pudimos procesar el pago.",
    actionLabel: "Reintentar",
    variant: "error",
  },
};

/**
 * @description Aviso responsive con texto ajustado por breakpoint.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Responsive: Story = {
  args: {
    message: "Hay una actualizacion disponible.",
    actionLabel: "Actualizar",
    className: "text-xs sm:text-sm md:text-base",
  },
};
