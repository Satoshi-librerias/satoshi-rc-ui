import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "@presentation";
import { useLanguage } from "@aplicacion";

/**
 * @description Stories del boton de opcion reutilizable de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * @description Demostracion que consume el catalogo multiidioma de las
 * stories a traves del hook useLanguage.
 * @author Steveen Cues
 * @version 1.0.0
 */
const ConTraduccion = (): JSX.Element => {
  const { t } = useLanguage();

  return (
    <fieldset className="flex w-64 flex-col gap-3 sm:w-80">
      <legend className="mb-2 text-sm font-medium">
        {t("atoms.radioGroup")}
      </legend>
      <label className="flex items-center gap-2">
        <Radio
          name="plan-demo"
          value="free"
          isChecked={true}
          ariaLabel={t("atoms.radioFree")}
        />
        <span className="text-sm">{t("atoms.radioFree")}</span>
      </label>
      <label className="flex items-center gap-2">
        <Radio name="plan-demo" value="pro" ariaLabel={t("atoms.radioPro")} />
        <span className="text-sm">{t("atoms.radioPro")}</span>
      </label>
    </fieldset>
  );
};

/**
 * @description Grupo de opciones con etiquetas traducidas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConEtiqueta: Story = {
  render: (): JSX.Element => <ConTraduccion />,
};

/**
 * @description Variantes de color del boton de opcion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Variantes: Story = {
  render: (): JSX.Element => (
    <div className="flex items-center gap-4">
      <Radio
        name="variantes"
        variant="primary"
        isChecked={true}
        ariaLabel="Primario"
      />
      <Radio
        name="variantes"
        variant="secondary"
        isChecked={true}
        ariaLabel="Secundario"
      />
      <Radio
        name="variantes"
        variant="accent"
        isChecked={true}
        ariaLabel="Acento"
      />
      <Radio
        name="variantes"
        variant="neutral"
        isChecked={true}
        ariaLabel="Neutral"
      />
    </div>
  ),
};

/**
 * @description Tamanos disponibles del boton de opcion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Tamanos: Story = {
  render: (): JSX.Element => (
    <div className="flex items-center gap-4">
      <Radio
        name="tamanos"
        size="xs"
        isChecked={true}
        ariaLabel="Extra small"
      />
      <Radio name="tamanos" size="sm" isChecked={true} ariaLabel="Small" />
      <Radio name="tamanos" size="md" isChecked={true} ariaLabel="Medium" />
      <Radio name="tamanos" size="lg" isChecked={true} ariaLabel="Large" />
    </div>
  ),
};

/**
 * @description Estado deshabilitado del boton de opcion.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Deshabilitado: Story = {
  render: (): JSX.Element => (
    <Radio
      name="deshabilitado"
      disabled={true}
      ariaLabel="Opcion deshabilitada"
    />
  ),
};
