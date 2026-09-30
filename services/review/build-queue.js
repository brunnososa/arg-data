import fs from 'node:fs';
import path from 'node:path';

const ROOT=process.cwd();
const claimsDir=path.join(ROOT,'data','claims');
const contentDir=path.join(ROOT,'data','content');
const out=path.join(ROOT,'apps','review','queue.json');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const files=fs.readdirSync(claimsDir).filter(x=>/^ARG-\d+\.json$/.test(x)).sort();
const items=files.map(file=>{
 const c=read(path.join(claimsDir,file));
 const cp=path.join(contentDir,file.replace('.json','.draft.json'));
 const d=fs.existsSync(cp)?read(cp):{};
 return {
  id:c.id,
  status:d.editorial_status||c.status||'RESEARCHING',
  score:c.opportunity_score??c.score??null,
  claim:c.claim||c.text,
  verdict:d.verdict||c.provisional_verdict||'PENDING',
  confidence:d.confidence??c.confidence??null,
  reply:d.reply||d.content?.x_post||null,
  evidence_path:fs.existsSync(path.join(ROOT,'data','evidence',`${c.id}.snapshot.json`))?`../../data/evidence/${c.id}.snapshot.json`:null
 };
});
const payload={generated_at:new Date().toISOString(),human_approval:true,items};
fs.writeFileSync(out,JSON.stringify(payload,null,2)+'\n');
console.log(`Review queue: ${items.length} expedientes -> ${out}`);
