// Random Masterworks service worker.
// Caches the app shell so the app opens instantly and works offline.
// Museum APIs and artwork images are NOT cached here (cross-origin opaque
// responses would waste a lot of storage quota) — the browser's own HTTP
// cache handles images.
const CACHE = 'rm-shell-v2';
const SHELL = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);
  const isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if(url.origin !== self.location.origin && !isFont) return; // APIs, images: untouched
  if(req.headers.has('range') || url.pathname.includes('/music/')) return; // audio streaming

  // Page: network first (so updates show up right away), cache when offline.
  if(req.mode === 'navigate' || url.pathname.endsWith('/index.html')){
    e.respondWith(
      // cache:'no-cache' revalidates with the server, so a fresh deploy is
      // picked up immediately instead of waiting out GitHub Pages' 10-min max-age.
      fetch(req, { cache: 'no-cache' }).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put('./index.html', copy));
        return res;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Everything else: cache first, refresh in background.
  e.respondWith(
    caches.match(req).then(hit => {
      const net = fetch(req).then(res => {
        if(res && (res.ok || res.type === 'opaque')){
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
