import {fetchJson} from './http.js';
const BASE='https://apis.datos.gob.ar/series/api';
export async function searchSeries(q,{limit=10}={}){const u=new URL(`${BASE}/search/`);u.searchParams.set('q',q);u.searchParams.set('limit',String(limit));return fetchJson(u)}
export async function getSeries(ids,{start_date,end_date,limit=5000}={}){const u=new URL(`${BASE}/series/`);u.searchParams.set('ids',Array.isArray(ids)?ids.join(','):ids);if(start_date)u.searchParams.set('start_date',start_date);if(end_date)u.searchParams.set('end_date',end_date);u.searchParams.set('limit',String(limit));return fetchJson(u)}
export const SERIES_AR_META={institution:'Administración Pública Nacional',documentation:'https://www.argentina.gob.ar/innovacion-ciencia-y-tecnologia/gobierno-abierto/datos-abiertos/api-series-de-tiempo/referencia-completa-de-la-api-series-de-tiempo'};
