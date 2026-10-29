import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeaderSelectors } from "@presentation";

/**
 * @description Stories de la seccion de selectores del encabezado.
 * @author Steveen Cues
 * @version 1.1.0
 */
const meta = {
  title: "Organismos/HeaderSelectors",
  component: HeaderSelectors,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderSelectors>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Seccion con ambos selectores y una accion adicional.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const Completo: Story = {
  args: {
    showThemeSelector: true,
    showLanguageSelector: true,
    additionalActions: (
      <button className="btn btn-primary btn-sm" type="button">
        Accion
      </button>
    ),
  },
};

/**
 * @description Seccion con solo el selector de tema.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const SoloTema: Story = {
  args: {
    showThemeSelector: true,
    showLanguageSelector: false,
    additionalActions: null,
  },
};

/**
 * @description Seccion con solo el selector de idioma.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const SoloIdioma: Story = {
  args: {
    showThemeSelector: false,
    showLanguageSelector: true,
    additionalActions: null,
  },
};

/**
 * @description Seccion sin selectores: renderiza unicamente las
 * acciones adicionales del consumidor.
 * @author Steveen Cues
 * @version 1.1.0
 */
export const SinSelectores: Story = {
  args: {
    showThemeSelector: false,
    showLanguageSelector: false,
    additionalActions: (
      <button className="btn btn-outline btn-sm" type="button">
        Entrar
      </button>
    ),
  },
};
