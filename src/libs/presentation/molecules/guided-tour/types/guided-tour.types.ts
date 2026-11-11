/**
 * @description Define una seccion que presenta la guia de inicio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface GuidedTourStep {
  readonly targetId: string;
  readonly title: string;
  readonly description: string;
}

/**
 * @description Define las etiquetas traducibles de la guia.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface GuidedTourTranslations {
  readonly openGuide: string;
  readonly stepOf: string;
  readonly back: string;
  readonly next: string;
  readonly skip: string;
  readonly finish: string;
}

/**
 * @description Define las propiedades de la guia de inicio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface GuidedTourProps {
  readonly steps: readonly GuidedTourStep[];
  readonly translations: GuidedTourTranslations;
  readonly storageKey?: string;
  readonly enabled?: boolean;
}
