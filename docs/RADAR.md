# Radar V0

Radar discovers public statements; it does not treat media reports as evidence.

Pipeline: ingest -> normalize -> dedupe -> extract verifiable sentences -> opportunity score -> Research Engine.

Scoring inputs: virality, public importance, verifiability, primary-evidence availability, velocity and audiovisual potential. Political favorability is prohibited as a ranking feature.

## X integration contract
An eventual X adapter only needs to emit: `id,text,speaker,source_url,published_at,channel,metrics,tags`. The rest of Radar is platform-independent.

## Safety
Radar never publishes. Research/evidence must independently verify every claim. V0 responses require human approval.
