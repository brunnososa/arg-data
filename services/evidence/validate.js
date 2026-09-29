export function validateEvidence(e) {
  const required = ['institution','source_url','retrieved_at','period','unit'];
  const missing = required.filter(k => !e?.[k]);
  return { valid: missing.length === 0, missing };
}

export function publicationGate(pkg) {
  const problems = [];
  if (!pkg.evidence?.length) problems.push('NO_EVIDENCE');
  for (const [i,e] of (pkg.evidence || []).entries()) {
    const r = validateEvidence(e);
    if (!r.valid) problems.push(`EVIDENCE_${i}_MISSING_${r.missing.join('_')}`);
  }
  if (pkg.source_conflict === true) problems.push('SOURCE_CONFLICT');
  if (pkg.confidence < 0.8) problems.push('LOW_CONFIDENCE');
  return { pass: problems.length === 0, problems, requires_human_approval: true };
}
