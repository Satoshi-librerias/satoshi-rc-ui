import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeSelector } from "@presentation";

/**
 * @description Stories del selector de temas de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Presentation/ThemeSelector",
  component: ThemeSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Selector con textos por defecto y descripciones visibles.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const PorDefecto: Story = {};

/**
 * @description Selector sin descripciones y con textos personalizados.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Compacto: Story = {
  args: {
    showDescriptions: false,
    label: "theme.title",
    placeholder: "theme.searchPlaceholder",
    className: "w-80",
  },
};
