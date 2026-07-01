(()=>{
 const data=window.IELTS_DATA||{items:[]};
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const decode=s=>{const t=document.createElement('textarea');t.innerHTML=String(s??'');return t.value};
 const cleanText=s=>{const d=document.createElement('div');d.innerHTML=decode(String(s??''));return (d.textContent||'').replace(/\u0000/g,'').trim()};
 const rich=s=>{
   const source=decode(String(s??''));
   const doc=new DOMParser().parseFromString('<div>'+source+'</div>','text/html');
   const root=doc.body.firstElementChild;
   const walk=node=>{
     if(node.nodeType===Node.TEXT_NODE)return esc(node.nodeValue||'');
     if(node.nodeType!==Node.ELEMENT_NODE)return '';
     const tag=node.tagName.toLowerCase();
     const inside=[...node.childNodes].map(walk).join('');
     if(tag==='strong'||tag==='b')return '<strong class="key-phrase">'+inside+'</strong>';
     if(tag==='br')return '<br>';
     return inside;
   };
   return [...root.childNodes].map(walk).join('');
 };
 const setupGlobal=()=>{
   const theme=document.getElementById('theme');const saved=localStorage.getItem('ielts-theme');if(saved)document.documentElement.dataset.theme=saved;
   if(theme)theme.onclick=()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;localStorage.setItem('ielts-theme',n)};
   let deferred;const install=document.getElementById('install');
   window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferred=e;if(install)install.hidden=false});
   if(install)install.onclick=async()=>{if(deferred){deferred.prompt();await deferred.userChoice;deferred=null;install.hidden=true}};
   if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js?v='+encodeURIComponent(data.build||'v8')).catch(()=>{}));
 };
 setupGlobal();
 if(document.body.dataset.home==='true')return;
 const section=document.body.dataset.section;
 const all=data.items.filter(x=>x.section===section);
 const byId=new Map(all.map(x=>[x.id,x]));
 const list=document.getElementById('list'),search=document.getElementById('search'),topicSel=document.getElementById('topicFilter'),count=document.getElementById('count');
 const detail=document.getElementById('detail'),shade=document.getElementById('shade');let visible=[];
 const norm=s=>String(s??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const palette=['#1d4ed8','#2563eb','#0284c7','#0369a1','#3b82f6','#1e40af'];
 function color(s){const c=(cleanText(s)[0]||'A').toUpperCase().charCodeAt(0);const idx=Math.max(0,Math.min(5,Math.floor((c-65)/5)));return palette[idx]}
 function answerHtml(value){
   const raw=String(value||'').trim();
   if(/(^|\n)Q:\s/m.test(raw)){
     return raw.split(/\n{2,}/).filter(Boolean).map(block=>{
       const m=block.match(/^Q:\s*([\s\S]*?)\nA:\s*([\s\S]*)$/);
       return m?`<p class="q">${esc(cleanText(m[1]))}</p><p>${rich(m[2])}</p>`:`<p>${rich(block)}</p>`;
     }).join('');
   }
   return raw.split(/\n{2,}/).filter(Boolean).map(p=>`<p>${rich(p)}</p>`).join('');
 }
 function render(){
   const q=norm(search.value).trim(),t=topicSel.value;
   visible=all.filter(x=>(!t||cleanText(x.topic)===t)&&(!q||norm([x.topic,x.title,x.prompt,x.answer,x.author].map(cleanText).join(' ')).includes(q)));
   list.innerHTML='';
   const groups=[];const map=new Map();
   visible.forEach(x=>{const topic=cleanText(x.topic);if(!map.has(topic)){const g={topic,items:[]};map.set(topic,g);groups.push(g)}map.get(topic).items.push(x)});
   groups.forEach(g=>{
     const wrap=document.createElement('div');wrap.className='topic-group';wrap.style.setProperty('--topic',color(g.topic));
     g.items.forEach(x=>{const b=document.createElement('button');b.className='item-row';b.dataset.id=x.id;b.innerHTML=`<span class="no">${esc(x._displayNo)}</span><span class="topic">${esc(g.topic)}</span>`;b.onclick=()=>open(x.id);wrap.appendChild(b)});
     list.appendChild(wrap);
   });
   count.textContent=`${visible.length} / ${all.length}`;
   document.getElementById('empty').hidden=visible.length>0;
 }
 function visualHtml(v){if(!v||!v.images||!v.images.length)return'';return`<div class="visuals">${v.images.map(key=>{const src=(window.IELTS_VISUALS&&window.IELTS_VISUALS[key])||key;return`<img src="${esc(src)}" alt="Biểu đồ hoặc hình minh họa của đề bài" loading="eager" decoding="async">`}).join('')}</div>`}
 function open(id){
   const x=byId.get(id);if(!x)return;const c=color(x.topic),idx=visible.findIndex(y=>y.id===id);
   detail.innerHTML=`<div class="detail-top"><strong>${esc(x._displayNo)}</strong><div class="detail-actions"><button class="icon" id="prev" aria-label="Bài trước">←</button><button class="icon" id="next" aria-label="Bài sau">→</button><button class="icon" id="close" aria-label="Đóng">✕</button></div></div><main class="detail-main">${cleanText(x.title||x.topic).toLowerCase()===cleanText(x.topic).toLowerCase()?'':`<div class="kicker" style="--topic:${c}">${esc(cleanText(x.topic))}</div>`}<h2>${esc(cleanText(x.title||x.topic))}</h2><div class="meta"><span>Tác giả: <b>${esc(cleanText(x.author||'Không xác định'))}</b></span>${x.source?`<span>Nguồn: ${esc(cleanText(x.source))}</span>`:''}</div><h3 class="section-label">Đề bài</h3><div class="prompt" style="--topic:${c}">${esc(cleanText(x.prompt||''))}</div>${visualHtml(x.visual)}<h3 class="section-label">Câu trả lời</h3><div class="answer">${answerHtml(x.answer||'')}</div>${x.phrases&&x.phrases.length?`<h3 class="section-label">Cụm từ nổi bật và giải nghĩa</h3><div class="phrases">${x.phrases.map(p=>`<div class="phrase"><b>${esc(cleanText(p.en))}</b><span>${esc(cleanText(p.vi))}</span></div>`).join('')}</div>`:''}</main>`;
   detail.classList.add('open');shade.classList.add('open');document.body.style.overflow='hidden';
   detail.querySelector('#close').onclick=close;detail.querySelector('#prev').onclick=()=>{if(visible.length)open(visible[(idx-1+visible.length)%visible.length].id)};detail.querySelector('#next').onclick=()=>{if(visible.length)open(visible[(idx+1)%visible.length].id)};history.replaceState(null,'','#'+id);
 }
 function close(){detail.classList.remove('open');shade.classList.remove('open');document.body.style.overflow='';history.replaceState(null,'',location.pathname+location.search)}
 shade.onclick=close;document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 const topics=[...new Set(all.map(x=>cleanText(x.topic)))].sort((a,b)=>a.localeCompare(b,'en',{sensitivity:'base'}));
 topicSel.innerHTML='<option value="">Tất cả chủ đề</option>'+topics.map(t=>`<option>${esc(t)}</option>`).join('');
 search.oninput=render;topicSel.onchange=render;render();if(location.hash&&byId.has(location.hash.slice(1)))open(location.hash.slice(1));
})();
