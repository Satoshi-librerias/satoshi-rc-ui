import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { LanguageSelectorList } from "@presentation";
import { STORY_LANGUAGES } from "./fixtures";

/**
 * @description Stories de la lista de idiomas del selector.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Moleculas/LanguageSelectorList",
  component: LanguageSelectorList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onSelect: fn(),
  },
} satisfies Meta<typeof LanguageSelectorList>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Lista completa con el idioma espanol seleccionado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Completa: Story = {
  args: {
    languages: STORY_LANGUAGES,
    selectedLanguage: "es",
  },
};

/**
 * @description Lista con un unico idioma seleccionado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const UnicoIdioma: Story = {
  args: {
    languages: ["en"],
    selectedLanguage: "en",
  },
};
