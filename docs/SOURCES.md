# Source adapters

## BCRA
Use the current **Estadísticas Monetarias v4.0** API, not deprecated Principales Variables versions. BCRA documents the APIs as intended for automated integration into applications and monitoring systems. Authentication is not required for the monetary API.

## Argentina Series API
The national Series API exposes `/search`, `/series`, metadata lists and dumps across 30k+ public-sector time series. It is useful for discovery and normalized retrieval; ARG Data still records the original publisher/institution and methodology.

## Rule
An aggregator endpoint never erases provenance. Evidence must identify the original institution, dataset/series, period, unit, retrieval time and transformation.
