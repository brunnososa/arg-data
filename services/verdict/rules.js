export function detectComparisonRisks(claim={}) {
  const flags=[];
  const t=(claim.text||'').toLowerCase();
  if(t.includes('deuda')&&t.includes('reserv')) flags.push('CHECK_STOCK_VS_LIQUIDITY');
  if(t.includes('brut')||t.includes('net')) flags.push('CHECK_GROSS_VS_NET');
  if(t.includes('interanual')||t.includes('mensual')) flags.push('CHECK_PERIOD_BASIS');
  if(t.includes('reces')) flags.push('CHECK_RECESSION_DEFINITION_AND_REVISIONS');
  return flags;
}
