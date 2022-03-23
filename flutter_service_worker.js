'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d8062c8c14e86b7ca75c7e2cbbb46dbc",
"index.html": "e61f242833fb2ffb75edf87d040ecf38",
"/": "e61f242833fb2ffb75edf87d040ecf38",
"main.dart.js": "ddf293079c85446d60bea77ec732c10c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2769bd925a2c065ed6b509e4b578e5a8",
".git/config": "38881ccff4dc4e249623736f3cd97a15",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/66/6e82f714328c665b6f4f92c1a355f9c31b316a": "26232740acdb1129184c0b3d721b5293",
".git/objects/68/c9fb563ed40df4537950283aff20dcdb7cb4de": "faa1c697e119ae7ea915e51f26a6fd38",
".git/objects/04/f71b078d0a7b312dd397ecb50bbf04974fbe8e": "b6383ee0303596ee202b414aead717c8",
".git/objects/04/a216ea0fd570c420d2c3b3055de5807ac7d576": "f6abd69d5d2f79d1e873fe646fe29796",
".git/objects/3d/3278a084bc6e418b86b5c16fd8c827c74113ca": "b9c7887c04ab413158d9c1f3147a32d8",
".git/objects/02/12e0a582aa38ca29b9c3f973a5f06c238eac45": "a7b212355791e0576e8378fef47cbc4b",
".git/objects/a4/7fcb6ed622935eea0b18b863e94ed9845e4e5b": "529c8c28339b1ac9d020bfcece2b82bc",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/bb/26f08167d4a9faf372c32ff3eae6e01f6b3189": "3bea83468f5a66a033159b8d6a478a54",
".git/objects/df/768eb6174a0c1f37f935548d55b288a89ef23e": "6f5f3de8763294c6d35e96f5dc4e25d4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/923d5b67179cef0076cf1b4dbc46ef296e8132": "d4a3ce2713e15e1d04e09f831b9998c6",
".git/objects/d8/5d03da022781e35c92e58b19295a993d519a08": "40f2b5cb38a05c0c3ccc2a75acb66237",
".git/objects/e5/d497e040de11178e779ca23127083ff43cdff6": "85087e4f0eb7b1cfe74d7c37582a956d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/7ba80653d4d5dec07f62fe95243fdf21e9da61": "727a3426e30c97beee8b73e6f47885fa",
".git/objects/f3/d7f69294fd6f13c03e81954cd9c988f0bccbe2": "1b25d1d164ec9e6ec32f867cf66b5448",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/39617b9bbc3776344737655cfc23234cbfc656": "89828491ea97fb9f1e43cb9ed52b7d18",
".git/objects/fd/df5abf4734935ddd617c5df71ad74e0e6500ee": "0aef0abc2620255714d3af1076e8df87",
".git/objects/cf/ae438418a48abfe4a25ed914110f88e8f49867": "5cb4bdeb583b0eacd46a25e998844238",
".git/objects/c1/0f18813e4f83510e56bd70e0149cd1c0a3821a": "f87ee750be58b34dd680d1a60d07d318",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/d00509d0bd4c4ee3e252aeb856fe2627b08a4c": "daa4904be01c2dd866204578ce1dcea2",
".git/objects/20/3c7b48435206e06a062cde6b598cf1bbbfdec6": "f3474359cf513c77efc8c3d6d184f174",
".git/objects/80/9c9b2f07ade91fb7081f4b28058306d7ff8dbe": "5846d8e37d5315a3ec39a4ef1cb1c74a",
".git/objects/74/38a3455a1c9a1e66a528f7fe33acd0a80cecc9": "94628e8251111509880e48d226fc7400",
".git/objects/28/a7fd4ef9bed6978ac5e0c4fb9cdb1cdd0fcf76": "654ad10365008de0398085d7146ec364",
".git/objects/8f/03071b81a7f4328ff8b4009096bd9c9c93d7cf": "18582dad536d881b617e2ede4354bb13",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/2a5ac5f35e4b9ad5a6bba272d5c589cbeda998": "51ced99c28e3a36e0b04678cec1d69e5",
".git/objects/21/c97b4d0c45f91774bc3655668f0014b5f82dbb": "d78dea58e3436e7dda4bf3d80edbca15",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/94b278645ae2194778249d6a5007478b8c5613": "cf265615d93bdf0920d4b508e0b94999",
".git/objects/9a/3b2c5ec3a6a0466ccdabdaee1872b26290cf07": "27ff1fed4b99006f33f3f404f88af134",
".git/objects/36/78da950428b8f6e40059ffc448ec1d8f4eb894": "c0b87fcec9771e34d10b45b26430253a",
".git/objects/30/64d357a403384e3bc3f7bb2744e7842c61268a": "45cd4548826e63244a69a98c99cc2323",
".git/objects/37/58f1881ff8b246c850c0d607b810838d8dfc9e": "daaf65def6407264eaf203b51d933266",
".git/objects/01/fae0cce359f99c763ea2c659d40f270903426d": "b1b078d4dd81e903e7d09dfe05336d41",
".git/objects/6c/ac16641182ce42201528eb0296ff28e64ac66a": "54878b6be3d177e7e4fd89e547c330b8",
".git/objects/99/f5caa43fcb499028b02914d38510604bdc5193": "ce9816b9a24f1cdb8294b07c753a15ad",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/63/6dfcee7b3eff4d3f221adba741cdab04fca0f5": "117f068c896e2825df2bb4143dd21a01",
".git/objects/90/f097eb8d5d94e22c65ba037a7446499c035fe5": "273237474536a15f4ea8ad17b5696a23",
".git/objects/d3/32e7c25350c97468250b46699c1ad8ff94558f": "a3984fc7cea55fa169cf320cf0a07328",
".git/objects/dd/2c5318de834785ad20a537aecebe0142bcbd20": "622b711b2b321e99ccb0cccbfb0b59c4",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/6114b00e3781750a245dfed70c325490ba5e4c": "8429613a07a1e50cacce62d2ca90ba34",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/81b8dbe518b789d1e5b4361532b3a1e37476a2": "9b45ee0bbdd1ff80aa1be6fda1093e7c",
".git/objects/b0/025f317251c633214044a8e2735f5611220c6f": "f50b6e07b1d2f201491d06226dc1d463",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/0d8ab2efb6cf1a8cae8aeaa1f75deab281aca3": "fec0460fa3d52a856dd32175c69fbdac",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/f7/26b74bd845cc5c39d941174bf128fb5335b708": "f05a26ce61318ea95c8b331f5d3d1414",
".git/objects/e8/112e962163732577141a1f799aea31ce84ee62": "0b689f887ce4287027490952fba67300",
".git/objects/fa/08c03f22072ffc8467c11f60197cd66e927b61": "348f8a937dd3b09f43034871c85cde21",
".git/objects/f6/bffc01c5f005dd41cc49a670807a585fba5688": "8bc8be51867ca3a11b67472755548694",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/e23aa2f958d14351329484627299cac6ed642d": "add085519b6ea27e58813089f7b0d2c1",
".git/objects/e9/dc1cd14b907bc2368a6b547ae44fcf2b2fa4b7": "edc4da28dd2deaf20f5099ff6ec3e9ea",
".git/objects/e7/87bbbc5ff3238776f05867940a0d1b84f422cb": "5dbb14a8995e39faa7e4a21ffa59f5aa",
".git/objects/e0/839b9ab2aba7c8632fac8aafa527a6be74acef": "4225239652629971c0d5f58e4869ab1d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/84/b14c38317e9e54c2b0894e072148c77da69044": "bb8e86551a9681012b42166bc962c99a",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/15/f9a485b16774c7b68b6cdc4617ae54e77e3414": "d31fda42010561b28b59ac1988806769",
".git/objects/12/9724eb150912f8b06efd4b9263961f8cbf48e4": "f57b3f17515eaf4a649abd58b8922fca",
".git/objects/12/65b4673eac616201236d1d9d9e9f109d5b54b0": "3b5a2663d2f3ac6b79ea9061b470d7e9",
".git/objects/1d/4817704d2becb3e7adea47044bd05e2affb170": "9beeb75e1d68911ff6666f158a1aaed4",
".git/objects/71/c8c931777a33e0f819f51cb53bc426b1cca115": "5577eef60e16cb68eb13ccae02cb76ed",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/6e5799b7b8943dfdab304c3ed82316823aa010": "e4330a079706416290d65cd5dbc9b4b9",
".git/objects/40/7c4c757a582434ada6ab6b52315a4aba5eea8c": "1b1b178f46b755ba79e68e95c3a9a690",
".git/objects/2b/6f1c96034b47a0c0ecf3acf1dff740bc31b73b": "35302c55be0b31ca0d86b9c262a93e83",
".git/objects/13/8d008f83884194fcd287c24f1905fb031672a3": "f62eef0e31f621a6d1c45448ddb043b7",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b1c814082a4114fd70b4a611f01f8ab5",
".git/logs/refs/heads/master": "b1c814082a4114fd70b4a611f01f8ab5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "cd098de7d3ba33581b6e487203d341c4",
".git/index": "c4f71852378810ffe0ac3692f5d2fa76",
".git/COMMIT_EDITMSG": "57850b9b26de81cb10555f49b93a0573",
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
