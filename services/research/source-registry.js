export const SOURCE_REGISTRY=[
{id:'bcra-monetary-v4',institution:'BCRA',tier:1,topics:['reservas','dolar','depositos','prestamos','base monetaria','tasas'],machine_readable:true,official:true,url:'https://www.bcra.gob.ar/apis-banco-central/'},
{id:'series-ar',institution:'Administración Pública Nacional',tier:1,topics:['inflacion','actividad','empleo','salarios','sector externo','fiscal','deuda'],machine_readable:true,official:true,url:'https://apis.datos.gob.ar/series/api/'},
{id:'indec',institution:'INDEC',tier:1,topics:['ipc','pib','emae','pobreza','empleo','comercio exterior','deuda externa'],machine_readable:'mixed',official:true,url:'https://www.indec.gob.ar/'}
];
export function sourcesForTopic(topic){const t=topic.toLowerCase();return SOURCE_REGISTRY.filter(s=>s.topics.some(x=>t.includes(x)||x.includes(t))).sort((a,b)=>a.tier-b.tier)}
