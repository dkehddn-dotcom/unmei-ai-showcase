import { describe, expect, it } from "vitest";
import {
  buildStructuralSnapshot,
  finalizePublicResult,
} from "../src/showcase/examplePipeline";

describe("public showcase pipeline", () => {
  it("does not overwrite the baseline", () => {
    const baseline = Object.freeze({
      id: "baseline-1",
      state: "resolved" as const,
      summary: "fixed baseline",
    });

    const structure = buildStructuralSnapshot(baseline);

    expect(baseline.summary).toBe("fixed baseline");
    expect(structure.baselineId).toBe("baseline-1");
  });

  it("keeps unresolved states explicit", () => {
    const baseline = {
      id: "baseline-2",
      state: "unresolved" as const,
      summary: "not enough information",
    };

    const structure = buildStructuralSnapshot(baseline);
    const result = finalizePublicResult(baseline, structure);

    expect(result.state).toBe("unresolved");
  });
});
