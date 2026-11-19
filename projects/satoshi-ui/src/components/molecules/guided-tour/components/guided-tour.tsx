import { useCallback, useEffect, useRef, useState } from "react";
import type { FC, JSX } from "react";
import type {
  GuidedTourProps,
  GuidedTourStep,
} from "../types/guided-tour.types";

const DEFAULT_STORAGE_KEY = "satoshi-guided-tour-completed";
const PERCENTAGE_MAX = 100;

interface SavedOutline {
  readonly element: HTMLElement;
  readonly outline: string;
  readonly outlineOffset: string;
  readonly position: string;
  readonly zIndex: string;
}

const TOUR_BACKDROP_CLASS = "fixed inset-0 z-[80]";

interface GuidedTourDialogProps {
  readonly step: GuidedTourStep;
  readonly index: number;
  readonly total: number;
  readonly translations: GuidedTourProps["translations"];
  readonly onBack: () => void;
  readonly onNext: () => void;
  readonly onSkip: () => void;
}

function getInitialTourOpen(storageKey: string, hasSteps: boolean): boolean {
  if (!hasSteps || typeof window === "undefined") {
    return false;
  }

  try {
    return window.localStorage.getItem(storageKey) === null;
  } catch (error) {
    console.error("Unable to read guided tour preference.", error);
    return true;
  }
}

function GuidedTourDialog({
  step,
  index,
  total,
  translations,
  onBack,
  onNext,
  onSkip,
}: GuidedTourDialogProps): JSX.Element {
  return (
    <section
      aria-label={step.title}
      aria-modal="true"
      className="card fixed inset-x-4 bottom-4 z-[90] mx-auto max-h-[calc(100dvh-2rem)] w-auto max-w-lg overflow-y-auto rounded-2xl border border-base-300 bg-base-100 text-base-content shadow-2xl md:inset-x-auto md:right-4"
      role="dialog"
    >
      <div className="card-body gap-4 p-5 text-center sm:p-6">
        <div className="space-y-3">
          <div
            aria-label={translations.stepOf
              .replace("{current}", String(index + 1))
              .replace("{total}", String(total))}
            aria-valuemax={total}
            aria-valuemin={1}
            aria-valuenow={index + 1}
            className="h-2 w-full overflow-hidden rounded-full bg-base-200"
            role="progressbar"
          >
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-300 ease-out"
              style={{
                width: `${((index + 1) / total) * PERCENTAGE_MAX}%`,
              }}
            />
          </div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            {translations.stepOf
              .replace("{current}", String(index + 1))
              .replace("{total}", String(total))}
          </p>
        </div>
        <div className="flex items-start justify-center gap-3">
          <div className="min-w-0 flex-1">
            <h2 className="card-title justify-center text-lg sm:text-xl">
              {step.title}
            </h2>
          </div>
          <button
            aria-label={translations.skip}
            className="btn btn-circle btn-ghost btn-sm shrink-0 rounded-full"
            onClick={onSkip}
            type="button"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <p className="mx-auto max-w-prose text-sm leading-relaxed text-base-content/70">
          {step.description}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-base-300 pt-3">
          <button
            className="btn btn-ghost btn-sm rounded-xl"
            onClick={onSkip}
            type="button"
          >
            {translations.skip}
          </button>
          <div className="flex gap-2">
            {index > 0 && (
              <button
                className="btn btn-ghost btn-sm rounded-xl"
                onClick={onBack}
                type="button"
              >
                {translations.back}
              </button>
            )}
            <button
              className="btn btn-primary btn-sm min-w-24 rounded-xl"
              onClick={onNext}
              type="button"
            >
              {index === total - 1 ? translations.finish : translations.next}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuidedTourOverlay(props: GuidedTourDialogProps): JSX.Element {
  return (
    <>
      <div
        aria-hidden="true"
        className={TOUR_BACKDROP_CLASS}
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-base-content) 45%, transparent)",
        }}
      />
      <GuidedTourDialog {...props} />
    </>
  );
}

function highlightTourTarget(
  step: GuidedTourStep,
  previousOutline: { current: SavedOutline | null },
  clearHighlight: () => void,
): (() => void) | void {
  const target = document.getElementById(step.targetId);
  if (target === null) {
    console.error(`Guided tour target not found: #${step.targetId}`);
    return;
  }

  target.scrollIntoView({ behavior: "smooth", block: "center" });
  previousOutline.current = {
    element: target,
    outline: target.style.outline,
    outlineOffset: target.style.outlineOffset,
    position: target.style.position,
    zIndex: target.style.zIndex,
  };
  const targetPosition = window.getComputedStyle(target).position;
  if (targetPosition === "static" || targetPosition === "") {
    target.style.position = "relative";
  }
  target.style.zIndex = "81";
  target.style.outline = "3px solid var(--color-primary)";
  target.style.outlineOffset = "6px";
  return clearHighlight;
}

/**
 * @description Presenta una guia inicial y permite volver a iniciarla.
 * La finalizacion se recuerda localmente para mostrarla automaticamente una vez.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const GuidedTour: FC<GuidedTourProps> = ({
  steps,
  translations,
  storageKey = DEFAULT_STORAGE_KEY,
  enabled = true,
}): JSX.Element | null => {
  const [isOpen, setIsOpen] = useState(() =>
    getInitialTourOpen(storageKey, steps.length > 0),
  );
  const [activeStep, setActiveStep] = useState(0);
  const previousOutline = useRef<SavedOutline | null>(null);

  const clearHighlight = useCallback((): void => {
    const previous = previousOutline.current;
    if (previous !== null) {
      previous.element.style.outline = previous.outline;
      previous.element.style.outlineOffset = previous.outlineOffset;
      previous.element.style.position = previous.position;
      previous.element.style.zIndex = previous.zIndex;
      previousOutline.current = null;
    }
  }, []);

  const markCompleted = useCallback((): void => {
    try {
      window.localStorage.setItem(storageKey, "completed");
    } catch (error) {
      console.error("Unable to save guided tour preference.", error);
    }
    setIsOpen(false);
    clearHighlight();
  }, [clearHighlight, storageKey]);

  const step = steps.at(activeStep) ?? null;
  const showTour = isOpen && enabled && step !== null;

  useEffect((): (() => void) | void => {
    if (!showTour) {
      return;
    }
    return highlightTourTarget(step, previousOutline, clearHighlight);
  }, [activeStep, clearHighlight, showTour, step]);

  useEffect((): (() => void) => {
    if (!showTour) {
      return (): void => undefined;
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        markCompleted();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return (): void => document.removeEventListener("keydown", handleKeyDown);
  }, [markCompleted, showTour]);

  const startTour = (): void => {
    setActiveStep(0);
    setIsOpen(true);
  };

  const handleNext = (): void => {
    if (activeStep === steps.length - 1) {
      markCompleted();
      return;
    }
    setActiveStep((current) => current + 1);
  };

  return (
    <>
      <button
        aria-label={translations.openGuide}
        className="btn btn-circle btn-primary fixed bottom-4 right-4 z-[70] rounded-full shadow-lg"
        onClick={startTour}
        type="button"
      >
        <span aria-hidden="true">?</span>
      </button>
      {showTour && (
        <GuidedTourOverlay
          index={activeStep}
          onBack={() => setActiveStep((current) => current - 1)}
          onNext={handleNext}
          onSkip={markCompleted}
          step={step}
          total={steps.length}
          translations={translations}
        />
      )}
    </>
  );
};

export default GuidedTour;
