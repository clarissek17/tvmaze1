const version = 'v123';  // change this everytime you update the service worker
                          // to force the browser to also update it.

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        'style.css',
        'apiexample.js',
        'manifest.json',
        'stars.jpg',
        'icons/icon-48-48.png',
        'icons/icon-72-72.png',
        'icons/icon-96-96.png',
        'icons/icon-144-144.png',
        'icons/icon-192-192.png',
        'icons/icon-512-512.png',
        'screenshots/screenshot1.png',
        'screenshots/screenshot2.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});