import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "@presentation";
import { useLanguage } from "@aplicacion";

/**
 * @description Stories del interruptor reutilizable de la libreria.
 * @author Steveen Cues
 * @version 1.0.0
 */
const meta = {
  title: "Atomos/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

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

  return <Switch isChecked={true} ariaLabel={t("atoms.switchLabel")} />;
};

/**
 * @description Interruptor activado con etiqueta traducida.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const ConEtiqueta: Story = {
  render: (): JSX.Element => <ConTraduccion />,
};

/**
 * @description Variantes de color del interruptor.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Variantes: Story = {
  render: (): JSX.Element => (
    <div className="flex items-center gap-4">
      <Switch variant="primary" isChecked={true} ariaLabel="Primario" />
      <Switch variant="secondary" isChecked={true} ariaLabel="Secundario" />
      <Switch variant="accent" isChecked={true} ariaLabel="Acento" />
      <Switch variant="neutral" isChecked={true} ariaLabel="Neutral" />
    </div>
  ),
};

/**
 * @description Tamanos disponibles del interruptor.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Tamanos: Story = {
  render: (): JSX.Element => (
    <div className="flex items-center gap-4">
      <Switch size="xs" isChecked={true} ariaLabel="Extra small" />
      <Switch size="sm" isChecked={true} ariaLabel="Small" />
      <Switch size="md" isChecked={true} ariaLabel="Medium" />
      <Switch size="lg" isChecked={true} ariaLabel="Large" />
    </div>
  ),
};

/**
 * @description Estados del interruptor: desactivado y deshabilitado.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const Estados: Story = {
  render: (): JSX.Element => (
    <div className="flex items-center gap-4">
      <Switch ariaLabel="Desactivado" />
      <Switch disabled={true} ariaLabel="Deshabilitado" />
    </div>
  ),
};
