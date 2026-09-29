import {rankCandidates} from './rank.js';
const demo=[
{id:'ARG-000001',claim:'Argentina quebró por comparar deuda externa con reservas',virality:92,importance:95,verifiability:90,evidence:95,novelty:75,content:95},
{id:'ARG-000002',claim:'Argentina ya está en recesión',virality:88,importance:90,verifiability:85,evidence:90,novelty:85,content:95}
];
console.table(rankCandidates(demo));
