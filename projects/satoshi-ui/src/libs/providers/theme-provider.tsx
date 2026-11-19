import { useCallback, useEffect, useMemo, useState, type FC } from "react";
import type {
  AppTheme,
  CustomThemeDefinition,
  ThemeContextValue,
  ThemeProviderProps,
} from "@domain";
import {
  applyThemeToDocument,
  customThemeService,
  findThemeByName,
  isCustomThemeDefinition,
  persistTheme,
  resolveInitialTheme,
  ThemeContext,
} from "@aplicacion";

/**
 * @description Resuelve el tema activo o selecciona el primer tema disponible.
 * @param themes Coleccion de temas disponibles.
 * @param themeName Nombre del tema seleccionado.
 * @returns Tema activo resuelto.
 * @author Steveen Cues
 * @version 1.0.0
 */
const resolveActiveTheme = (
  themes: readonly AppTheme[],
  themeName: string,
): AppTheme => {
  const activeTheme = findThemeByName(themes, themeName);

  if (activeTheme !== undefined) {
    return activeTheme;
  }

  if (themes.length === 0) {
    throw new Error("ThemeProvider requires at least one theme.");
  }

  return themes[0];
};

/**
 * @description Anade o actualiza un tema personalizado en la coleccion.
 * @param currentThemes Coleccion actual de temas personalizados.
 * @param customTheme Tema que se registrara.
 * @returns Nueva coleccion de temas personalizados.
 * @author Steveen Cues
 * @version 1.0.0
 */
const updateCustomThemes = (
  currentThemes: readonly CustomThemeDefinition[],
  customTheme: CustomThemeDefinition,
): readonly CustomThemeDefinition[] => {
  const existingTheme = currentThemes.some(
    (item) => item.name === customTheme.name,
  );

  if (existingTheme) {
    return currentThemes.map((item) =>
      item.name === customTheme.name ? customTheme : item,
    );
  }

  return [...currentThemes, customTheme];
};

/**
 * @description Construye el valor compartido del contexto de temas.
 * @param theme Tema activo.
 * @param themes Coleccion de temas disponibles.
 * @param setTheme Funcion para cambiar el tema.
 * @param registerTheme Funcion para registrar un tema personalizado.
 * @returns Valor del contexto de temas.
 * @author Steveen Cues
 * @version 1.0.0
 */
const createThemeContextValue = (
  theme: AppTheme,
  themes: readonly AppTheme[],
  setTheme: (name: string) => void,
  registerTheme: (customTheme: CustomThemeDefinition) => void,
): ThemeContextValue => ({
  theme,
  themeName: theme.name,
  themes,
  setTheme,
  registerTheme,
});

/**
 * @description Estado interno del ThemeProvider: temas personalizados
 * registrados y nombre del tema activo. Se combina en un solo estado para
 * que setTheme vea los temas registrados en el mismo tick (evita la race
 * condition registerTheme + setTheme).
 * @author Steveen Cues
 * @version 1.0.0
 */
interface ThemeProviderState {
  readonly customThemes: readonly CustomThemeDefinition[];
  readonly themeName: string;
}

/**
 * @description Proporciona los temas base y personalizados a los componentes.
 * Gestiona la seleccion, el registro y la persistencia del tema activo.
 * @author Steveen Cues
 * @version 2.0.0
 */
export const ThemeProvider: FC<ThemeProviderProps> = ({
  themes: baseThemes,
  initialTheme,
  children,
}) => {
  const [state, setState] = useState<ThemeProviderState>(() => ({
    customThemes: [],
    themeName: resolveInitialTheme(baseThemes, initialTheme),
  }));

  const themes = useMemo<readonly AppTheme[]>(
    () => [...baseThemes, ...state.customThemes],
    [baseThemes, state.customThemes],
  );

  const theme = useMemo<AppTheme>(
    () => resolveActiveTheme(themes, state.themeName),
    [themes, state.themeName],
  );

  const registerTheme = useCallback(
    (customTheme: CustomThemeDefinition): void => {
      customThemeService.register(customTheme);
      setState((current) => ({
        ...current,
        customThemes: updateCustomThemes(current.customThemes, customTheme),
      }));
    },
    [],
  );

  const setTheme = useCallback(
    (name: string): void => {
      setState((current) => {
        const availableThemes = [...baseThemes, ...current.customThemes];
        const selectedTheme = findThemeByName(availableThemes, name);

        if (selectedTheme === undefined) {
          return current;
        }

        return { ...current, themeName: selectedTheme.name };
      });
    },
    [baseThemes],
  );

  useEffect((): void => {
    if (isCustomThemeDefinition(theme)) {
      customThemeService.register(theme);
    }

    applyThemeToDocument(theme.name);
    persistTheme(theme.name);
  }, [theme]);

  const contextValue = useMemo(
    () => createThemeContextValue(theme, themes, setTheme, registerTheme),
    [theme, themes, setTheme, registerTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
