# Sprint 01: WORLD//EVIDENCE newsroom
Date: 2026-11-02 | Priority P0 | Status: scoped, not deployed

## Mission
Build an international, nonpartisan claim-verification newsroom. Audit specific factual claims from any publisher (Infobae, A24, CNN, government accounts, etc.) using the same methodology; never assume a publisher is lying.

## Demo: end-to-end
Paste article/post URL -> extract attributed, dated, checkable claim -> capture original context -> retrieve independent primary sources -> run deterministic numeric checks -> generate evidence dossier with uncertainty and opposing evidence -> human editorial approval -> export article, 9:16 reel storyboard, 4:5 carousel and multilingual captions. Distribution off by default.

## Workstreams (virtual responsibilities, not live agents)
- ENG: inspect arg-data main and existing beta branch; implement claim/evidence data contracts and one working fixture.
- RESEARCH: source registry, independent corroboration, translations with provenance.
- QA/SEC: tests, prompt-injection defense, copyright and personal-data handling, audit trail.
- EDITORIAL: neutral selection policy, corrections log, review/approval gate.
- DESIGN: high-impact responsive newsroom and social export templates.
- OPS: isolate from CEREBRO private/business memory; optional read-only orchestrator; verify Railway deploy target before changes.

## Data contract
Claim {id, original_url, outlet, speaker, exact_text, published_at, captured_at, language, country, context}
Evidence {claim_id, url, publisher, source_type, retrieved_at, archive_url, excerpt, period, units, methodology}
Assessment {claim_id, status: supported|contradicted|misleading|insufficient|unverifiable, rationale, caveats, reviewer, reviewed_at, revision}
Asset {claim_id, format, script, citations, approved, published_url}

## Release gates
No unsourced numbers, no automated accusations about publishers, no unverifiable truth scores, no unapproved political publishing. Show the original claim and supporting/contrary evidence. Corrections must remain visible. Follow IFCN nonpartisanship, transparent sources/methodology, and corrections standards.

## First deliverable
One demonstrable claim investigation with sources and tests, responsive dossier, carousel and short-video storyboard, human review state. Do not claim API integrations, agent execution, or deployment until verified.

## Follow-on
Grok/X search adapter, media RSS ingest, multilingual clustering, duplicate detection, newsroom analytics, platform publishing APIs after authorization.
