import type { Meta, StoryObj } from "@storybook/react-vite";
import { LanguageSelector } from "@presentation";

/**
 * @description Stories del selector de idiomas de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Presentation/LanguageSelector",
  component: LanguageSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LanguageSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Selector con el catalogo completo de idiomas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PorDefecto: Story = {};

/**
 * @description Selector con ancho restringido para probar el truncado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const AnchoLimitado: Story = {
  args: {
    className: "w-64",
  },
};
