export type Candidate = {
  id: string;
  claim: string;
  virality: number;
  publicImportance: number;
  verifiability: number;
  evidenceAvailability: number;
  novelty: number;
  contentPotential: number;
  partisanOutcome?: "government_positive" | "government_negative" | "neutral";
};

export type RankedCandidate = Candidate & {
  opportunityScore: number;
};

const WEIGHTS = {
  virality: 0.25,
  publicImportance: 0.20,
  verifiability: 0.20,
  evidenceAvailability: 0.15,
  novelty: 0.10,
  contentPotential: 0.10,
} as const;

function bounded(value: number): number {
  return Math.max(0, Math.min(100, value));
}

/**
 * Scores what ARG Data should investigate next.
 *
 * Deliberately excluded: partisanOutcome. The system must not rank a claim
 * higher because the eventual verdict may benefit or damage a government,
 * party, politician or media organization.
 */
export function scoreCandidate(candidate: Candidate): RankedCandidate {
  const score =
    bounded(candidate.virality) * WEIGHTS.virality +
    bounded(candidate.publicImportance) * WEIGHTS.publicImportance +
    bounded(candidate.verifiability) * WEIGHTS.verifiability +
    bounded(candidate.evidenceAvailability) * WEIGHTS.evidenceAvailability +
    bounded(candidate.novelty) * WEIGHTS.novelty +
    bounded(candidate.contentPotential) * WEIGHTS.contentPotential;

  return {
    ...candidate,
    opportunityScore: Math.round(score * 100) / 100,
  };
}

export function rankCandidates(candidates: Candidate[]): RankedCandidate[] {
  return candidates
    .map(scoreCandidate)
    .sort((a, b) => b.opportunityScore - a.opportunityScore);
}
