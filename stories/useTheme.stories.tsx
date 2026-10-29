import type { Meta, StoryObj } from "@storybook/react-vite";
import type { JSX } from "react";
import { useLanguage, useTheme } from "@aplicacion";
import { CUSTOM_STORY_THEME } from "./fixtures";

/**
 * @description Stories del hook useTheme de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Aplicacion/useTheme",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

/**
 * @description Componente que muestra el tema activo del contexto.
 * @author Steveen Cues
 * @version 1.0.0
 */
const ActiveTheme = (): JSX.Element => {
  const { theme, themeName } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="rounded-2xl border border-base-300 bg-base-100 p-6 text-base-content shadow-sm">
      <p className="text-xs uppercase tracking-wider opacity-60">
        Tema activo via useTheme
      </p>
      <p className="text-lg font-semibold">{themeName}</p>
      <p className="text-sm opacity-70">{t(theme.manifest.description)}</p>
    </div>
  );
};

/**
 * @description Lectura del tema activo desde el hook.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TemaActivo: Story = {
  render: () => <ActiveTheme />,
};

/**
 * @description Componente que registra y aplica un tema personalizado.
 * @author Steveen Cues
 * @version 1.0.0
 */
const RegisterAndApply = (): JSX.Element => {
  const { registerTheme, setTheme } = useTheme();

  const handleRegister = (): void => {
    registerTheme(CUSTOM_STORY_THEME);
    setTheme(CUSTOM_STORY_THEME.name);
  };

  return (
    <button type="button" className="btn btn-primary" onClick={handleRegister}>
      Registrar y aplicar tema personalizado
    </button>
  );
};

/**
 * @description Registro de un tema personalizado seguido de su aplicacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const RegistrarYAplicar: Story = {
  render: () => <RegisterAndApply />,
};
