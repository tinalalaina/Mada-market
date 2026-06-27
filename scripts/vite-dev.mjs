import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
const root=process.cwd(); const port=Number(process.env.PORT||5173);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.jsx':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml'};
createServer(async(req,res)=>{try{let url=new URL(req.url,'http://x').pathname; if(url==='/' ) url='/index.html'; const path=normalize(join(root,url)); if(!path.startsWith(root)) throw Error('bad'); const data=await readFile(path); res.writeHead(200,{'content-type':types[extname(path)]||'application/octet-stream'}); res.end(data)}catch{res.writeHead(404);res.end('Not found')}}).listen(port,'0.0.0.0',()=>console.log(`VITE v7 dev server ready at http://localhost:${port}/`));
