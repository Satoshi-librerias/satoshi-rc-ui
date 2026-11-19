import type { SkeletonVariant } from "../types/skeleton.types";

/**
 * @description Define las clases de DaisyUI por variante del skeleton.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SKELETON_VARIANT_CLASSES: Record<SkeletonVariant, string> = {
  circle: "rounded-full",
  rectangle: "rounded-box",
  text: "rounded",
};

/**
 * @description Define la clase base compartida por todos los skeletons.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SKELETON_BASE_CLASS = "skeleton";
