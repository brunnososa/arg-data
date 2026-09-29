export function normalizeCandidate(input) {
  return {
    id: input.id ?? `RADAR-${Date.now()}`,
    text: String(input.text ?? '').trim(),
    speaker: input.speaker ?? null,
    source_url: input.source_url ?? null,
    published_at: input.published_at ?? null,
    channel: input.channel ?? 'web',
    metrics: input.metrics ?? {},
    tags: [...new Set(input.tags ?? [])],
    discovered_at: new Date().toISOString()
  };
}

export function dedupeCandidates(items) {
  const seen = new Set();
  return items.filter(x => {
    const key = x.text.toLowerCase().replace(/\s+/g,' ').slice(0,240);
    if (!key || seen.has(key)) return false;
    seen.add(key); return true;
  });
}
