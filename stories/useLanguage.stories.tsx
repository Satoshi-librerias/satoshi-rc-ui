import type { Meta, StoryObj } from "@storybook/react-vite";
import type { JSX } from "react";
import { useLanguage } from "@aplicacion";

/**
 * @description Stories del hook useLanguage de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Aplicacion/useLanguage",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj;

/**
 * @description Componente que traduce claves con interpolacion.
 * @author Steveen Cues
 * @version 1.0.0
 */
const TranslatedCard = (): JSX.Element => {
  const { language, t } = useLanguage();

  return (
    <div className="rounded-2xl border border-base-300 bg-base-100 p-6 text-base-content shadow-sm">
      <p className="text-xs uppercase tracking-wider opacity-60">
        Idioma activo via useLanguage
      </p>
      <p className="text-lg font-semibold">{language}</p>
      <p className="mt-2 text-sm">
        {t("theme.title")} · {t("theme.selected")}
      </p>
    </div>
  );
};

/**
 * @description Lectura del idioma activo y traduccion de claves.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const IdiomaActivo: Story = {
  render: () => <TranslatedCard />,
};

/**
 * @description Componente que cambia entre los idiomas del catalogo.
 * @author Steveen Cues
 * @version 1.0.0
 */
const LanguageSwitcher = (): JSX.Element => {
  const { language, languages, setLanguage, t } = useLanguage();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
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

      <p className="text-sm">{t("theme.title")}</p>
    </div>
  );
};

/**
 * @description Cambio de idioma en caliente con actualizacion de traducciones.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const CambioDeIdioma: Story = {
  render: () => <LanguageSwitcher />,
};
