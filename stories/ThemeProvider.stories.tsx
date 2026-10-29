import type { Meta, StoryObj } from "@storybook/react-vite";
import type { JSX } from "react";
import { useTheme } from "@aplicacion";
import { CUSTOM_STORY_THEME, STORY_THEMES } from "./fixtures";

/**
 * @description Stories del ThemeProvider de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Aplicacion/ThemeProvider",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

/**
 * @description Componente que muestra el estado del contexto de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
const ThemeState = (): JSX.Element => {
  const { theme, themeName, themes, setTheme, registerTheme } = useTheme();

  return (
    <div className="flex w-96 flex-col gap-4 rounded-2xl border border-base-300 bg-base-100 p-6 text-base-content shadow-sm">
      <div>
        <p className="text-xs uppercase tracking-wider opacity-60">
          Tema activo
        </p>
        <p className="text-lg font-semibold">{themeName}</p>
        <p className="text-sm opacity-70">
          {theme.manifest.version} · {theme.manifest.author}
        </p>
      </div>

      <p className="text-sm opacity-70">{themes.length} temas disponibles</p>

      <div className="flex flex-wrap gap-2">
        {themes.map((availableTheme) => (
          <button
            key={availableTheme.name}
            type="button"
            onClick={() => setTheme(availableTheme.name)}
            className={`btn btn-sm ${
              availableTheme.name === themeName ? "btn-primary" : "btn-outline"
            }`}
          >
            {availableTheme.name}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="btn btn-secondary btn-sm"
        onClick={() => registerTheme(CUSTOM_STORY_THEME)}
      >
        Registrar tema personalizado
      </button>
    </div>
  );
};

/**
 * @description Estado inicial con el tema claro y los temas base.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const EstadoInicial: Story = {
  render: () => <ThemeState />,
};

/**
 * @description Demostracion del registro de temas personalizados en caliente.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const RegistroPersonalizado: Story = {
  render: () => <ThemeState />,
  parameters: {
    docs: {
      description: {
        story:
          "Pulsa el boton para registrar un tema DaisyUI personalizado y seleccionarlo con setTheme.",
      },
    },
  },
};

/**
 * @description Coleccion de temas reducida para probar el fallback al primer tema.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TemaInicialPersonalizado: Story = {
  render: () => (
    <div className="rounded-2xl border border-base-300 bg-base-100 p-6 text-base-content">
      <p className="text-sm">
        Este arbol usa una coleccion reducida con initialTheme inexistente, por
        lo que el provider resuelve el primer tema disponible.
      </p>
    </div>
  ),
  decorators: [
    (Story) => (
      <div data-testid="coleccion-reducida">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Los temas base de las stories son " +
          STORY_THEMES.map((theme) => theme.name).join(", ") +
          ".",
      },
    },
  },
};
