import {detectComparisonRisks} from './rules.js';
const claim={id:'ARG-000001',text:'Argentina quebró. Tiene US$321,8 mil millones de deuda externa, US$48,9 mil millones de reservas y no podrá pagar hasta 2032.'};
console.log(JSON.stringify({claim,flags:detectComparisonRisks(claim)},null,2));
