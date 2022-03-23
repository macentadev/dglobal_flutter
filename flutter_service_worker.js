'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d8062c8c14e86b7ca75c7e2cbbb46dbc",
"index.html": "4cc1cc867d24651ada09343789a939fb",
"/": "4cc1cc867d24651ada09343789a939fb",
"main.dart.js": "54e7d971039c278454a2fb225ac9f083",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2769bd925a2c065ed6b509e4b578e5a8",
"assets/AssetManifest.json": "c31d4aa6060c879f86255822efe7853d",
"assets/NOTICES": "62acec0b776fce0f43682b4c58b777cf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/leaderboard_icon-1.svg": "e3febcb6b0cccc894f017e606cbc70a5",
"assets/assets/character03.svg": "35be6710e40bfc40604f5738f722e31d",
"assets/assets/home.svg": "4c4c72384125b927d441a30c632d0467",
"assets/assets/dglobals_logo.svg": "eef7bc4c20aec95f9d56b706e9f35bef",
"assets/assets/homeworkclimate.webp": "b588c7e39485b39a7561cf4e0d2e3a49",
"assets/assets/study_again_icon.svg": "8199049cf02ad753d487aa344909f583",
"assets/assets/certificate_icon.svg": "21bf588e04e1c0fd8e5441d90e8ecb81",
"assets/assets/medal_icon.svg": "a15690fb76f12898b3fda36c8c8aa0ab",
"assets/assets/jupa_icon.svg": "da38c0134c751956c239577ffc742115",
"assets/assets/bg_pattern_tv.svg": "9c392630869be34547f13f303587719f",
"assets/assets/check_icon.svg": "83a87a0e43dce0e68e2a1d178c09f143",
"assets/assets/certificates/1.webp": "8bd3e34974624eaed1ca45956f5d0d2f",
"assets/assets/nopoverty.webp": "b1a31d01e835b7ba4c193096bb6223ab",
"assets/assets/homework_icon.svg": "c010c49a64a5d090ef64fb33b1173dd3",
"assets/assets/goalphotos/affordableclean.webp": "93375efcc6e9d1dc6595955625634bd3",
"assets/assets/goalphotos/qualityeducation.webp": "525a183f71f5baecc50f1cdaedb62d11",
"assets/assets/goalphotos/cleanwater.webp": "875fb2919e6b750f48cc1429882465d6",
"assets/assets/goalphotos/reduced.webp": "129f3a4c3f3e5f015c2c55b0baa08e32",
"assets/assets/goalphotos/goodhealth.webp": "d4d553248fd0bdb2934125df41aa349a",
"assets/assets/goalphotos/zerohunger.webp": "3ce774a1a560c4d8a631c9fbd1a9c3ec",
"assets/assets/undp-logo-blue.svg": "7aef7be74e7ef14355fb99a540d25ef4",
"assets/assets/bg_pattern_1.svg": "2d19b93e6e573ce82448754e8d9f965b",
"assets/assets/home_bg.webp": "b5acd563106067422fc9fbcd6d475902",
"assets/assets/climateaction.webp": "71cfe4fdf547062f8911f932c1bc9a85",
"assets/assets/1homeworkgoal.webp": "295c5a2e418e40e54406f3f74d62b0df",
"assets/assets/clock.png": "5b64f788e3064dfc7cf02cbfdfb0f3a1",
"assets/assets/DogaagacEtaVakfi.png": "fa3c1135b96c7fef088d9fe661211f40",
"assets/assets/tv_icon.svg": "dbce6b894e2370a476c257d8acc8d96c",
"assets/assets/completed_activities_icon.svg": "03e2350eda102ceb5a7ac5ae7de8838e",
"assets/assets/badges/10.svg": "7e5e89d0223800a614de131eb4c37dd7",
"assets/assets/badges/11.svg": "5152890daf80977851e60828988b03e7",
"assets/assets/badges/13.svg": "1dd307ddcca32b572cd35af0019a8a4a",
"assets/assets/badges/12.svg": "901ba5e76a08e783ddc8bbc71dc62107",
"assets/assets/badges/16.svg": "7e25681b0ac3399777d46e8412d97ba6",
"assets/assets/badges/15.svg": "1c82d0cbbbd74cd34d9988f2e7dae18e",
"assets/assets/badges/14.svg": "06868b293eef42f0ee5788e21d6a07ad",
"assets/assets/badges/9.svg": "b0d1b6862b01cb13ef4670a183b36da1",
"assets/assets/badges/8.svg": "cd8384b967f108cecac2372d67bc580e",
"assets/assets/badges/1.svg": "72957111296171f69a206fc75b341c8b",
"assets/assets/badges/3.svg": "da785a6f995069be3b028fc96e46f3b6",
"assets/assets/badges/2.svg": "103a950a18c98a685930780a6fda497e",
"assets/assets/badges/6.svg": "3bbf7dd023851af363c388105388b61a",
"assets/assets/badges/7.svg": "bb88f3945efd8ecae5f3c565f82fbb97",
"assets/assets/badges/5.svg": "1bd18ce5c62b4f329743813ed03a15e0",
"assets/assets/badges/4.svg": "640f3f95d624a7ff943b71dc4dcc4780",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
