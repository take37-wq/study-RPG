const CACHE_NAME="study-pop-rpg-v1";
const ASSETS=[
  "./",
  "./index.html",
  "./manifest.json",
  "./image/New Piskel-1.png",
  "./image/New Piskel-2.png",
  "./images/Piskel-3.png"
];

self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS))
  );
});

self.addEventListener("fetch",e=>{
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request))
  );
});
