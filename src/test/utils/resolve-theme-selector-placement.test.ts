import { describe, expect, it } from "vitest";
import { resolveThemeSelectorPlacement } from "@presentation";

describe("resolveThemeSelectorPlacement", (): void => {
  it("keeps a mobile panel within the viewport when aligned to a narrow container", (): void => {
    const placement = resolveThemeSelectorPlacement({
      container: new DOMRect(16, 300, 160, 40),
      viewport: { width: 320, height: 740 },
    });

    expect(placement.horizontal).toBe("left");
  });

  it("keeps the default right alignment when there is enough space", (): void => {
    const placement = resolveThemeSelectorPlacement({
      container: new DOMRect(1100, 100, 160, 40),
      viewport: { width: 1440, height: 900 },
    });

    expect(placement.horizontal).toBe("right");
  });
});
