/**
 * Public showcase only.
 * This is NOT the production Judgment Engine contract.
 */

export type DecisionState =
  | "resolved"
  | "unresolved"
  | "not_applicable";

export interface BaselineSnapshot {
  readonly id: string;
  readonly state: DecisionState;
  readonly summary: string;
}

export interface StructuralSnapshot {
  readonly baselineId: string;
  readonly state: DecisionState;
  readonly relations: readonly string[];
}

export interface FinalPublicResult {
  readonly state: DecisionState;
  readonly evidenceIds: readonly string[];
  readonly summary: string;
}
