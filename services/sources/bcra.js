import {fetchJson} from './http.js';
const BASE='https://api.bcra.gob.ar/estadisticas/v4.0';
export async function listMonetaryVariables(){return fetchJson(`${BASE}/Monetarias`,{headers:{'Accept-Language':'es-AR'}})}
export function normalizeBcraObservation({institution='BCRA',dataset,series_id,source_url,period,value,unit,transformation='none',methodology_note=''}){return {institution,dataset,series_id:String(series_id??''),source_url,retrieved_at:new Date().toISOString(),period:String(period),value,unit,transformation,methodology_note}}
export const BCRA_META={institution:'BCRA',catalog:'Estadísticas Monetarias v4.0',documentation:'https://www.bcra.gob.ar/apis-banco-central/'};
