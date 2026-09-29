const W={virality:.25,importance:.2,verifiability:.2,evidence:.15,novelty:.1,content:.1};
export function rankCandidate(c){
  let score=0;
  for(const [k,w] of Object.entries(W)) score += Math.max(0,Math.min(100,Number(c[k]||0)))*w;
  return Math.round(score*10)/10;
}
export function rankCandidates(items){return items.map(x=>({...x,score:rankCandidate(x)})).sort((a,b)=>b.score-a.score)}
// Political favorability is deliberately absent from W.
