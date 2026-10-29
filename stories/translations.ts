import type { TranslationCatalog } from "@domain";

/**
 * @description Catalogo de traducciones compartido por las stories.
 * Los idiomas parciales demuestran el mecanismo de respaldo del TranslateProvider.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const STORY_TRANSLATIONS: TranslationCatalog = {
  es: {
    menu: {
      open: "Abrir menu",
      close: "Cerrar menu",
    },
    navigation: {
      ariaLabel: "Navegacion principal",
    },
    theme: {
      title: "Temas",
      searchPlaceholder: "Buscar temas...",
      selected: "Tema seleccionado",
      empty: "No se encontraron temas",
      of: "de",
      results: "resultados",
    },
    light: {
      name: "Claro",
      description: "Tema claro predeterminado de la libreria",
    },
    dark: {
      name: "Oscuro",
      description: "Tema oscuro para ambientes con poca luz",
    },
    cupcake: {
      name: "Cupcake",
      description: "Tema suave con tonos pastel",
    },
    emerald: {
      name: "Esmeralda",
      description: "Tema fresco con tonos verdes",
    },
    synthwave: {
      name: "Synthwave",
      description: "Tema retro inspirado en los anos 80",
    },
    dracula: {
      name: "Dracula",
      description: "Tema oscuro inspirado en el editor Dracula",
    },
    marca: {
      name: "Marca",
      description: "Tema personalizado registrado en tiempo de ejecucion",
    },
  },

  en: {
    menu: {
      open: "Open menu",
      close: "Close menu",
    },
    navigation: {
      ariaLabel: "Main navigation",
    },
    theme: {
      title: "Themes",
      searchPlaceholder: "Search themes...",
      selected: "Selected theme",
      empty: "No themes found",
      of: "of",
      results: "results",
    },
    light: {
      name: "Light",
      description: "Default light theme of the library",
    },
    dark: {
      name: "Dark",
      description: "Dark theme for low light environments",
    },
    cupcake: {
      name: "Cupcake",
      description: "Soft theme with pastel tones",
    },
    emerald: {
      name: "Emerald",
      description: "Fresh theme with green tones",
    },
    synthwave: {
      name: "Synthwave",
      description: "Retro theme inspired in the 80s",
    },
    dracula: {
      name: "Dracula",
      description: "Dark theme inspired in the Dracula editor",
    },
    marca: {
      name: "Brand",
      description: "Custom theme registered at runtime",
    },
  },

  fr: {
    menu: {
      open: "Ouvrir le menu",
      close: "Fermer le menu",
    },
    navigation: {
      ariaLabel: "Navigation principale",
    },
    theme: {
      title: "Thèmes",
      searchPlaceholder: "Rechercher des thèmes...",
      selected: "Thème actif",
    },
  },

  de: {
    menu: {
      open: "Menü öffnen",
      close: "Menü schließen",
    },
    navigation: {
      ariaLabel: "Hauptnavigation",
    },
    theme: {
      title: "Themen",
      searchPlaceholder: "Themen suchen...",
      selected: "Aktives Thema",
    },
  },

  pt: {
    menu: {
      open: "Abrir menu",
      close: "Fechar menu",
    },
    navigation: {
      ariaLabel: "Navegação principal",
    },
    theme: {
      title: "Temas",
      searchPlaceholder: "Pesquisar temas...",
      selected: "Tema ativo",
    },
  },

  it: {
    menu: {
      open: "Apri menu",
      close: "Chiudi menu",
    },
    navigation: {
      ariaLabel: "Navigazione principale",
    },
    theme: {
      title: "Temi",
      searchPlaceholder: "Cerca temi...",
      selected: "Tema attivo",
    },
  },
};
