import fs from 'node:fs/promises';import {buildResearchPlan} from './research-plan.js';
const claim=JSON.parse(await fs.readFile(new URL('../../data/claims/ARG-000001.json',import.meta.url),'utf8'));
console.log(JSON.stringify(buildResearchPlan(claim),null,2));
