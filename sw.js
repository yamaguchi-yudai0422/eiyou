const CACHE_NAME = "nutrition-note-v19";
const APP_ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=19",
  "./app.js?v=19",
  "./manifest.webmanifest",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/data/food-data.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const shouldRevalidate =
    event.request.mode === "navigate" ||
    event.request.destination === "script" ||
    event.request.destination === "style";
  const networkRequest = shouldRevalidate
    ? new Request(event.request, { cache: "no-cache" })
    : event.request;

  event.respondWith(
    fetch(networkRequest)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(event.request);
        if (cached) return cached;
        if (event.request.mode === "navigate") return caches.match("./index.html");
        throw new Error("Offline asset unavailable");
      }),
  );
});
