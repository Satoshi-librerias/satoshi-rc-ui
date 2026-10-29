import type { Meta, StoryObj } from "@storybook/react-vite";
import type { JSX } from "react";
import { useLanguage } from "@aplicacion";

/**
 * @description Stories del TranslateProvider de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Aplicacion/TranslateProvider",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

/**
 * @description Componente que muestra el estado del contexto de idiomas.
 * @author Steveen Cues
 * @version 1.0.0
 */
const LanguageState = (): JSX.Element => {
  const { language, languages, setLanguage, t } = useLanguage();

  return (
    <div className="flex w-96 flex-col gap-4 rounded-2xl border border-base-300 bg-base-100 p-6 text-base-content shadow-sm">
      <div>
        <p className="text-xs uppercase tracking-wider opacity-60">
          Idioma activo
        </p>
        <p className="text-lg font-semibold">{language}</p>
      </div>

      <p className="text-sm opacity-70">
        {languages.length} idiomas: {languages.join(", ")}
      </p>

      <div className="flex flex-wrap gap-2">
        {languages.map((availableLanguage) => (
          <button
            key={availableLanguage}
            type="button"
            onClick={() => setLanguage(availableLanguage)}
            className={`btn btn-sm ${
              availableLanguage === language ? "btn-primary" : "btn-outline"
            }`}
          >
            {availableLanguage}
          </button>
        ))}
      </div>

      <div className="rounded-xl bg-base-200 p-3 text-sm">
        <p>
          <strong>t("theme.title"):</strong> {t("theme.title")}
        </p>
        <p>
          <strong>t("theme.selected"):</strong> {t("theme.selected")}
        </p>
        <p>
          <strong>fallback (fr):</strong> {t("theme.of")}
        </p>
      </div>
    </div>
  );
};

/**
 * @description Estado inicial en espanol con respaldo al ingles.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const EstadoInicial: Story = {
  render: () => <LanguageState />,
};

/**
 * @description Demostracion del mecanismo de respaldo entre idiomas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const RespaldoDeIdiomas: Story = {
  render: () => <LanguageState />,
  parameters: {
    docs: {
      description: {
        story:
          "Los idiomas fr, de, pt e it solo definen algunas claves; el resto se resuelve con el fallback en ingles.",
      },
    },
  },
};
