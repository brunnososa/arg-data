import crypto from 'node:crypto';
import { detectComparisonRisks } from '../verdict/rules.js';

const TOPICS = [
  ['debt',['deuda','default','vencimiento','bonos']],
  ['reserves',['reservas','bcra','dólares','dolares']],
  ['activity',['recesión','recesion','pbi','emae','actividad']],
  ['employment',['empleo','desempleo','puestos de trabajo','trabajo']],
  ['inflation',['inflación','inflacion','ipc','precios']],
  ['poverty',['pobreza','indigencia']],
  ['trade',['exportaciones','importaciones','balanza comercial']]
];

export function inferTopics(text='') {
  const t=text.toLowerCase();
  return TOPICS.filter(([,words])=>words.some(w=>t.includes(w))).map(([topic])=>topic);
}

export function claimFingerprint(text='') {
  return crypto.createHash('sha256').update(text.trim().toLowerCase()).digest('hex').slice(0,16);
}

export function promoteCandidate(candidate, sequence) {
  const id=`ARG-${String(sequence).padStart(6,'0')}`;
  const text=candidate.claim || candidate.text || '';
  return {
    id,
    fingerprint: claimFingerprint(text),
    created_at: new Date().toISOString(),
    status:'QUEUED_FOR_RESEARCH',
    source:{
      platform:candidate.platform || 'web',
      author:candidate.author || null,
      url:candidate.url || null,
      published_at:candidate.published_at || null,
      observed_metrics:candidate.metrics || null
    },
    claim:text,
    topics:inferTopics(text),
    radar_score:candidate.score ?? null,
    research_plan:{
      comparison_risks:detectComparisonRisks({text}),
      require_primary_sources:true,
      require_human_approval:true
    }
  };
}
