import { fingerprint } from './promote.js';
export function dedupeCandidates(items, existingFingerprints=new Set()) {
  const seen = new Set(existingFingerprints);
  const out=[];
  for (const item of items) {
    const fp=fingerprint(item.claim || '');
    if(!item.claim || seen.has(fp)) continue;
    seen.add(fp); out.push({...item,fingerprint:fp});
  }
  return out;
}
