import fs from 'node:fs';
import {normalizeCandidate,dedupeCandidates} from './normalize.js';
import {prioritize} from './score.js';
import {extractCandidateClaims} from './extract-claims.js';
const raw=JSON.parse(fs.readFileSync(new URL('./fixtures/2026-09-29.json',import.meta.url)));
const ranked=prioritize(dedupeCandidates(raw.candidates.map(normalizeCandidate)));
const out=ranked.map(c=>({...c,claims:extractCandidateClaims(c)}));
console.log(JSON.stringify({date:raw.date,count:out.length,candidates:out},null,2));
