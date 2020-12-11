self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request, { ignoreSearch: true })
      .then(response => response || fetch(event.request))
  );
});
