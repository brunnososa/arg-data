# Argentina Data — Public beta readiness

This document records the release gates for the existing MVP. It does not imply the application is production-ready.

## Confirmed current behavior
- `npm run radar` uses a hard-coded demonstration candidate list, not a live feed.
- `npm run benchmark` runs a single example, not an automated test suite.
- `npm run review:build` builds a JSON review queue from local claim and content artifacts.
- The queue includes `human_approval: true`; this is metadata, **not** an enforced authorization control.

## Release blockers
1. Implement and test authenticated human approval on the server before publication. Never trust a client-side flag.
2. Add source provenance (publisher, URL, publication date, retrieval timestamp, archival snapshot, series methodology) for each factual assertion.
3. Replace demo radar inputs with documented ingestion connectors and resilient update jobs.
4. Define neutral editorial categories, uncertainty handling, corrections, right of reply, and conflict-of-interest policy.
5. Validate inputs, escape output, add rate limits, protect secrets, and review dependency security.
6. Add automated unit/integration tests and CI; verify the public UI and accessibility.
7. Separate staging from production; require explicit release approval after smoke tests and rollback rehearsal.

## Release sequence
- **Internal alpha:** review queue, source registry, automated tests.
- **Private beta:** working data ingestion, human editorial review, monitored staging.
- **Public beta:** accessible public dashboard, methodology and corrections page, operational monitoring.

Do not auto-publish verdicts or deploy to production until all blockers are verified.
