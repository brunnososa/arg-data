const clamp=n=>Math.max(0,Math.min(100,Number(n)||0));
export function opportunityScore(c){
  const m=c.metrics||{};
  const virality=clamp(m.virality);
  const publicImportance=clamp(m.public_importance);
  const verifiability=clamp(m.verifiability);
  const evidence=clamp(m.evidence_availability);
  const velocity=clamp(m.velocity);
  const audiovisual=clamp(m.audiovisual);
  const score=.22*virality+.2*publicImportance+.2*verifiability+.16*evidence+.12*velocity+.1*audiovisual;
  return Math.round(score*10)/10;
}
export function prioritize(items){return items.map(c=>({...c,opportunity_score:opportunityScore(c)})).sort((a,b)=>b.opportunity_score-a.opportunity_score)}
// Political direction is intentionally not an input.
