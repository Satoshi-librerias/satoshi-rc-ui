import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormField } from "@presentation";
import { useState } from "react";

/**
 * @description Stories de la molecula campo de formulario de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/FormField",
  component: FormField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Campo controlado basico.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Basico: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <FormField
        label="Correo electronico"
        type="email"
        placeholder="tu@correo.com"
        value={value}
        onChange={setValue}
      />
    );
  },
};

/**
 * @description Campo con mensaje de error accesible.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConError: Story = {
  args: {
    label: "Correo electronico",
    type: "email",
    value: "correo-invalido",
    errorMessage: "Ingresa un correo valido",
  },
};

/**
 * @description Campo con texto de ayuda.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConAyuda: Story = {
  args: {
    label: "Nombre de usuario",
    hint: "Entre 3 y 20 caracteres",
    placeholder: "usuario",
  },
};

/**
 * @description Campo deshabilitado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Deshabilitado: Story = {
  args: {
    label: "Identificador",
    value: "usr-1024",
    disabled: true,
  },
};
