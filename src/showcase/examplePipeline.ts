/**
 * Simplified public example.
 *
 * The production repository contains the real domain rules.
 * This file only demonstrates phase isolation and immutable inputs.
 */

import type {
  BaselineSnapshot,
  StructuralSnapshot,
  FinalPublicResult,
} from "./types";

export function buildStructuralSnapshot(
  baseline: BaselineSnapshot,
): StructuralSnapshot {
  return {
    baselineId: baseline.id,
    state: baseline.state === "resolved" ? "resolved" : "unresolved",
    relations: [],
  };
}

export function finalizePublicResult(
  baseline: BaselineSnapshot,
  structure: StructuralSnapshot,
): FinalPublicResult {
  if (baseline.state !== "resolved" || structure.state !== "resolved") {
    return {
      state: "unresolved",
      evidenceIds: [baseline.id],
      summary: "Insufficient resolved inputs for a final decision.",
    };
  }

  return {
    state: "resolved",
    evidenceIds: [baseline.id],
    summary: "Public showcase result. Production logic intentionally omitted.",
  };
}
