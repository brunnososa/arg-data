# ARG Data

**Argentina, sin relato.**

ARG Data is an evidence-first verification and economic intelligence platform for Argentina.

## Mission

Detect claims that matter, recover primary evidence, make calculations reproducible, and turn verified research into useful public information.

ARG Data does **not** optimize verdicts for or against any government, party, politician, media outlet, or ideology. Ranking is based on public relevance, virality, verifiability, evidence availability, novelty, and content potential.

## Pipeline

```text
Radar -> Claim Engine -> Opportunity Ranker -> Research -> Evidence -> Verdict -> Human Review -> Content Package
                                                                                           |
                                                                                           +-> Content Lab (later)
```

## V0 modules

- `services/radar`: candidate discovery and ranking
- `services/research`: primary-source research orchestration
- `services/evidence`: provenance and reproducible evidence
- `services/verdict`: deterministic verdict rules and confidence
- `packages/contracts`: stable schemas shared with future Content Lab
- `data/claims`: versioned benchmark claims
- `docs`: editorial and evidence policies

## Verdict scale

`TRUE | MOSTLY_TRUE | MISLEADING | MOSTLY_FALSE | FALSE | UNVERIFIABLE`

## Non-negotiables

1. No numeric claim without source, period, unit and retrieval timestamp.
2. AI may interpret evidence but may not invent evidence.
3. Material source contradictions block automatic publication.
4. Political/economic verdicts require human approval in V0.
5. Primary sources are preferred over secondary reporting.
6. Every transformation must be reproducible.

## First benchmark

`ARG-000001`: the viral claim that Argentina is bankrupt because external debt is roughly USD 321.8B while reserves are roughly USD 48.9B, therefore maturities through 2032 cannot be paid.

The benchmark intentionally separates the numerical subclaims from the causal conclusion.
