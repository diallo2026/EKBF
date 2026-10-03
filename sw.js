// Service worker : met l'application en cache pour le mode hors ligne.
// Changer VERSION à chaque mise à jour de index.html pour forcer le rafraîchissement.
const VERSION='kbf-v2',FILES=['./','index.html','manifest.json','icons/icon-192.png','icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=VERSION).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
 e.respondWith(fetch(e.request).then(r=>{if(r.ok&&new URL(e.request.url).origin===location.origin){const c=r.clone();caches.open(VERSION).then(x=>x.put(e.request,c))}return r})
 .catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))))});
