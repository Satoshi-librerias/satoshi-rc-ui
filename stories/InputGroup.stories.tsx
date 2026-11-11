import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, InputGroup } from "@presentation";

/**
 * @description Stories de la molecula grupo de entrada de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/InputGroup",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Campo con prefijo de moneda.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConPrefijo: Story = {
  args: {
    label: "Precio",
    prefix: "$",
    type: "number",
    placeholder: "0.00",
  },
};

/**
 * @description Campo con sufijo de unidad.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConSufijo: Story = {
  args: {
    label: "Peso",
    suffix: "kg",
    type: "number",
    placeholder: "0",
  },
};

/**
 * @description Campo con prefijo y sufijo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Completo: Story = {
  args: {
    label: "Descuento",
    prefix: "%",
    suffix: "max",
    placeholder: "10",
  },
};

/**
 * @description Campo con accion en la ranura final mediante el atomo
 * Button.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConBoton: Story = {
  args: {
    label: "Codigo promocional",
    placeholder: "PROMO2026",
    suffix: "OK",
  },
};

/**
 * @description Campo deshabilitado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Deshabilitado: Story = {
  args: {
    label: "Dominio",
    prefix: "https://",
    value: "midominio.com",
    disabled: true,
  },
};
