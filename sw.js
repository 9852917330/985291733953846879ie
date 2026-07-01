const CACHE="2026.07.01-github-compact-v22";
const ASSETS=["./","./index.html","./writing-general.html","./writing-academic.html","./writing-task-2.html","./speaking-part-1.html","./speaking-part-2.html","./speaking-part-3.html","./app.css","./app.js","./data.js","./visuals.js","./manifest.webmanifest","./app-icon-32.png","./app-icon-180.png","./app-icon-192.png","./app-icon-512.png","./app-icon-maskable-512.png"];
self.addEventListener("install",event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener("activate",event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET") return;
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
    if(response&&response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}
    return response;
  }).catch(()=>event.request.mode==="navigate"?caches.match("./index.html"):undefined)));
});
