'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d8062c8c14e86b7ca75c7e2cbbb46dbc",
"index.html": "22935037729e87fb69e51c11dabece22",
"/": "22935037729e87fb69e51c11dabece22",
"main.dart.js": "dde75f4d5293f5388b3c340fd9e23554",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2769bd925a2c065ed6b509e4b578e5a8",
".git/config": "743f9fb3fe737e647304677205586048",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/3b/c64dfabe3460b42328504668d5f9d937775c29": "1c4287e216e1b0489127ef84ff57cca3",
".git/objects/9b/aeb7ff8be267353c10f833866d103dbf413e11": "2ca273df157f072d9009abaa793ff6b5",
".git/objects/04/a216ea0fd570c420d2c3b3055de5807ac7d576": "f6abd69d5d2f79d1e873fe646fe29796",
".git/objects/3d/3278a084bc6e418b86b5c16fd8c827c74113ca": "b9c7887c04ab413158d9c1f3147a32d8",
".git/objects/94/2dfe92df649a7c3a3c3d705e37cc8754fdb787": "840acc61ab17d588896afab3bbe5ef27",
".git/objects/02/12e0a582aa38ca29b9c3f973a5f06c238eac45": "a7b212355791e0576e8378fef47cbc4b",
".git/objects/b2/7169746937fd862505b42ae14644e43b1756cf": "58fa6515acc9ccb66fbc0a5f072ef654",
".git/objects/ad/b6ab6f5bcf408f964f3edce48cecf3653498f3": "2dcbb714088320f9c0d5c63aa049104f",
".git/objects/bb/fdfbca24b9dc11dbbb94e65ea9d2914bb5732e": "6884ac4506ca7e159f017bd133d3cd11",
".git/objects/bb/2192e2bddb8eadf5b5b3a1e199481b4987cfed": "59498cf623bf5a682e83328732141d4b",
".git/objects/df/768eb6174a0c1f37f935548d55b288a89ef23e": "6f5f3de8763294c6d35e96f5dc4e25d4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/443065297824acda2c2b9633ca7801179d8f20": "25dea7914e2b2fa8dd655de4a2fbb40b",
".git/objects/d8/a519971b80295fad2f05f20f8ccc4bc837e1c9": "9f7bf2de58d23507c61724596c5d8f5a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/d497e040de11178e779ca23127083ff43cdff6": "85087e4f0eb7b1cfe74d7c37582a956d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/6fa8ac13d841f08ef65681df9f0cbcfd59b0be": "7569873ee56a757d46d1043ae4923415",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/2d0400c946e23c60b96da2ff52390e81de8136": "17bb74f0b963e978b6b5b15449671bc3",
".git/objects/fd/df5abf4734935ddd617c5df71ad74e0e6500ee": "0aef0abc2620255714d3af1076e8df87",
".git/objects/ca/1bbef18eeecc84e9308a1993171e6839be3bf7": "15f56e4a55bed3ff84630d19fcabc9d1",
".git/objects/e4/c3d006c12aa6c71743924c068e3bd96b0ce9d2": "182b9c90c8985354b567db31ea1922ef",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/45/9980407fce563adb776a2ca811c65cb1bd16e2": "c1130cf008bfda3693966b7c5111fb6f",
".git/objects/74/38a3455a1c9a1e66a528f7fe33acd0a80cecc9": "94628e8251111509880e48d226fc7400",
".git/objects/17/a9f4e7d0a12ac8830303b34394cf8c2722399e": "bbcaf90795750b14217c7f690848eaf7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/8680f4a7733592dcd6fecb2072f97371299ae1": "b03f3fcfa248d91f51e9e5cb2b8823e5",
".git/objects/26/2b41af3f1befef528bd770c69801b55cd10831": "32edb2b8caa43fa43d38c6178d617e2e",
".git/objects/21/c97b4d0c45f91774bc3655668f0014b5f82dbb": "d78dea58e3436e7dda4bf3d80edbca15",
".git/objects/72/edf8b673d574291faef27bc584bce0ee0031e2": "af6a80200d21288e7ac194f6af97c3f8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/114fd56db55630c3e65d78b7a1acff03cf88e2": "d9b2f40a26285ceec2fee1e48d00b8b7",
".git/objects/9a/3b2c5ec3a6a0466ccdabdaee1872b26290cf07": "27ff1fed4b99006f33f3f404f88af134",
".git/objects/9a/2a4887745a9c1882676207d8babf9670cebb85": "77b3d05d9a67f5e4777f1fdc3a963877",
".git/objects/91/e732c9957e398c11847ad2c568e499986573d6": "a1dce6776fd4e07695d27270fe3852b4",
".git/objects/96/7e7b87a9b76a6dbfbba7873a949965e3f94b1e": "096a67422d00bf1018d3583c48b814b8",
".git/objects/53/3b7b2ff9905aa9af97ba83b14ad9e31097416f": "2008e503b29216ae53cb80515e393e0b",
".git/objects/30/f427b763ea6533c435746345e752f03b05d8a3": "e41f41fe6cf98c51d10b94d90f966397",
".git/objects/5b/56668cdd9462ac305018275232dabf86c74863": "9d81b485fd0b947ec330136c31216ac2",
".git/objects/37/0eab976e5f351288005376b22a4c20f8803544": "4458f9a3d0c0e3a884d1fc3c4f02d628",
".git/objects/37/58f1881ff8b246c850c0d607b810838d8dfc9e": "daaf65def6407264eaf203b51d933266",
".git/objects/6c/ac16641182ce42201528eb0296ff28e64ac66a": "54878b6be3d177e7e4fd89e547c330b8",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/55/e7cc917bd917dc963449d968c0dff8b1665c19": "6362c34870d091fe3c688a254b5f0f9b",
".git/objects/97/0938da48feab275052f092db7224b3a3b48b65": "3243ab50e29f48b59d2b44652c57c127",
".git/objects/97/39e6132e5697fc7ad69d3e7d169959db1407ad": "7382126da3e79e98d816ac50202b0a1c",
".git/objects/63/6dfcee7b3eff4d3f221adba741cdab04fca0f5": "117f068c896e2825df2bb4143dd21a01",
".git/objects/63/4d0a2fdaab31320f9bffee4adcd165ed9a68f5": "9460a38f95484bfbe9c4d994d242c61c",
".git/objects/0a/45dbaf9ef59eada462fbd568c7680013b41093": "25110b1b965e2b0554ee516cc79a6986",
".git/objects/aa/d82afd9dfa8afaa1d045c79046dcea349dc35f": "6f119a260812df249d601faecb930324",
".git/objects/aa/6114b00e3781750a245dfed70c325490ba5e4c": "8429613a07a1e50cacce62d2ca90ba34",
".git/objects/aa/08da19653975fff3b79eac685c3f56da9a0901": "944d5931258ad728bd41524780fffbaf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/025f317251c633214044a8e2735f5611220c6f": "f50b6e07b1d2f201491d06226dc1d463",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/2481466cd3105ef3c146b1aed60663e7af5aae": "d312ef0fdd6b31d418e08c3cc82949f2",
".git/objects/e6/9a6f94bbc68d86df510477bd8f9918e0273588": "c020560d888270976ce63b36a1c9c476",
".git/objects/fa/08c03f22072ffc8467c11f60197cd66e927b61": "348f8a937dd3b09f43034871c85cde21",
".git/objects/fa/a31c1e1fe66ba03a7c631ec0fdeb3b0f209fa5": "ce64d07196c5def815429035e22e911a",
".git/objects/ff/75eb04250e4a8e11d40baf68cbd324341b4477": "0d41871a6d6ee1e59e256185f2530c89",
".git/objects/f6/bffc01c5f005dd41cc49a670807a585fba5688": "8bc8be51867ca3a11b67472755548694",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/dc1cd14b907bc2368a6b547ae44fcf2b2fa4b7": "edc4da28dd2deaf20f5099ff6ec3e9ea",
".git/objects/f1/cfda5c3578440ba7ef9a513b929daeb431892e": "a5a7b51d4dea03396fbcf8a8acda63fa",
".git/objects/f8/31080594acaeaed4e5446471d471033364c09a": "140d586988fd72bac90c59e8324afdb3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/15/f9a485b16774c7b68b6cdc4617ae54e77e3414": "d31fda42010561b28b59ac1988806769",
".git/objects/12/9724eb150912f8b06efd4b9263961f8cbf48e4": "f57b3f17515eaf4a649abd58b8922fca",
".git/objects/71/c8c931777a33e0f819f51cb53bc426b1cca115": "5577eef60e16cb68eb13ccae02cb76ed",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/6e5799b7b8943dfdab304c3ed82316823aa010": "e4330a079706416290d65cd5dbc9b4b9",
".git/objects/8b/7d576489a0cc7eeff5feb2bb7cc821aa35bdcd": "b283b78b7c2d84dc6a14a0809be22612",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8ca3c2dd8aa10bf31a16198909721c9e",
".git/logs/refs/heads/main": "115c7d43927cc4376481b3b8ff840acc",
".git/logs/refs/remotes/origin/main": "fe87bc8c2f3b3c18d2cde6dc496efd3f",
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
".git/refs/heads/main": "6e6b41725f5c45a92d771680ef9809ab",
".git/refs/remotes/origin/main": "6e6b41725f5c45a92d771680ef9809ab",
".git/index": "42ea7220b89e31f98405861a9500263c",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"assets/AssetManifest.json": "05d21d4d80c4c3b1cf25cc473058784a",
"assets/NOTICES": "31376134964b23b3101579e0f66d207f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
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
"assets/assets/check_icon.svg": "83a87a0e43dce0e68e2a1d178c09f143",
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
