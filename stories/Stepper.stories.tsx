import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stepper } from "@presentation";

/**
 * @description Pasos compartidos por las stories del stepper.
 * @author Steveen Cues
 * @version 1.0.0
 */
const STEPS = [
  { id: "cart", label: "Carrito", description: "Revisa tu pedido" },
  { id: "payment", label: "Pago", description: "Elige el metodo" },
  { id: "confirmation", label: "Confirmacion" },
];

/**
 * @description Stories de la molecula stepper de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Stepper horizontal en el primer paso.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Horizontal: Story = {
  args: {
    steps: STEPS,
    currentId: "cart",
    ariaLabel: "Progreso del proceso",
  },
};

/**
 * @description Stepper horizontal avanzado con pasos completados.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const HorizontalAvanzado: Story = {
  args: {
    steps: STEPS,
    currentId: "confirmation",
    ariaLabel: "Progreso del proceso",
  },
};

/**
 * @description Stepper vertical para paneles laterales.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Vertical: Story = {
  args: {
    steps: STEPS,
    currentId: "payment",
    orientation: "vertical",
    ariaLabel: "Progreso del proceso",
  },
};

/**
 * @description Stepper con navegacion por clic en pasos alcanzables.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConNavegacion: Story = {
  args: {
    steps: STEPS,
    currentId: "payment",
    ariaLabel: "Progreso del proceso",
  },
};

/**
 * @description Stepper con etiqueta accesible traducida mediante el
 * catalogo de stories.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConTraduccion: Story = {
  args: {
    steps: STEPS,
    currentId: "payment",
    ariaLabel: "molecules.stepper",
  },
};
