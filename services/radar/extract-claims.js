const SIGNALS=[/\b\d+(?:[.,]\d+)?%/i,/\b(us\$|usd|\$)\s?\d/i,/\b(creci|cay[oó]|subi[oó]|baj[oó]|aument|reduj|r[eé]cord|m[aá]ximo|m[ií]nimo|recesi[oó]n|quebr|default|pobreza|empleo|inflaci[oó]n|reservas|deuda)\b/i];
export function isPotentiallyVerifiable(text=''){return SIGNALS.some(r=>r.test(text));}
export function extractCandidateClaims(item){
  const sentences=String(item.text||'').split(/(?<=[.!?])\s+/).map(s=>s.trim()).filter(Boolean);
  return sentences.filter(isPotentiallyVerifiable).map((text,i)=>({id:`${item.id}-C${i+1}`,text,parent_id:item.id,speaker:item.speaker,source_url:item.source_url,published_at:item.published_at,channel:item.channel}));
}
