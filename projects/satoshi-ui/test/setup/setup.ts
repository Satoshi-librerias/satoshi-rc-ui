import "@testing-library/jest-dom/vitest";

import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

/**
 * @description Limpia el DOM y el almacenamiento despues de cada prueba.
 * @author Steveen Cues
 * @version 1.0.0
 */
afterEach((): void => {
  cleanup();
  window.localStorage.clear();
});
