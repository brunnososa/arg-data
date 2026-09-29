import crypto from 'node:crypto';
import { detectComparisonRisks } from '../verdict/rules.js';

export function fingerprint(text='') {
  return crypto.createHash('sha256').update(text.toLowerCase().replace(/\s+/g,' ').trim()).digest('hex').slice(0,16);
}

export function promoteCandidate(candidate, nextId) {
  if (!candidate?.claim) throw new Error('candidate.claim required');
  const id = `ARG-${String(nextId).padStart(6,'0')}`;
  const topics = [...new Set((candidate.tags || []).map(String))];
  return {
    id,
    fingerprint: fingerprint(candidate.claim),
    status: 'RESEARCHING',
    created_at: new Date().toISOString(),
    claim: candidate.claim,
    source: candidate.source || {},
    radar: { score: candidate.score ?? null, metrics: candidate.metrics || {} },
    topics,
    methodological_flags: detectComparisonRisks({text:candidate.claim}),
    research: {
      primary_sources_required: true,
      secondary_sources_discovery_only: true,
      questions: candidate.research_questions || [],
      evidence_status: 'PENDING'
    },
    publication: { auto_publish:false, human_approval_required:true }
  };
}
