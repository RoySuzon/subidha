'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1fc9393dc9951fca56fe843cdcffb1c4",
"version.json": "7b472dd93bc0969e9ab09246b4bcaf7d",
"index.html": "149fb9c1b88ddae7c1f0e34f66b15508",
"/": "149fb9c1b88ddae7c1f0e34f66b15508",
"main.dart.js": "97c9eecce140e1fddde56730d34b3097",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "28284e7d03c0c18ef3593a75383ebbc7",
".git/config": "0fe58dec83b07ce921476e29e3b8413e",
".git/objects/92/18940b51650c1402bd10080f652b5492df83b9": "6f4774afd62129230c15f8311ac187b1",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "4643131532bd21681468718600b3fdcf",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "7a45402238decbda5a1817c517e1f276",
".git/objects/9e/f47e38fced4914197e5ca254835cb90a8d6c33": "e0664fdca420b371022a0cf8fcc0fb34",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "a5ab4a345a37d6f24f2325aa56fbd1ef",
".git/objects/51/9ae15ac14f625b1d03d70708c9dd1d0ff37f44": "bdeca67a05adb56ada2f9e4925f0bf1d",
".git/objects/94/0367c30f11e8a2d3555c7a026cea19d0e7db81": "3509dba249c153ed9f13442e7177ec7f",
".git/objects/b2/65ed4d1aeed8cefebd1168b81a6ffb368b0cdb": "f450b28b7beb7b280e8be09be0526946",
".git/objects/ac/ccb624fc654a002e6740875257af8f6ce3a249": "890310a67b401dd02ea09c56851e8106",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "6dd3aa7909b7bea70e523e4a9c9861cc",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "4f6d7d5a9dcde6a00e4fa30f4bc76179",
".git/objects/bd/b6cda6d99b6662fb4577c91b98685724ee50fe": "ae935708acbd0b6bc33c7b11cb2738d9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/e2/d2d807683a5f7e861391dc3db006bfdcfbd5d6": "377a12c5c0c4705a1ebc7c5d8c244b5d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "26e88664696468ae8d5ce0608760da7a",
".git/objects/ee/2f2f9ec343ba4d695e34bba97554b4c16e5560": "246c7a52e7f9886bcc32aa94b6fcf3a2",
".git/objects/ee/085842499e0fc3d7154e48683f97a0d3a885c5": "57a7a5e83a71b6716931bfeda4fcada1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/e4/bdd95631a851824a564b1f1fcc56c1684d2643": "fa51e124aeebafb6a0a35ef029b7233e",
".git/objects/87/a2dbffee9ef83ba55b58dc1f9efd0b523f498d": "be7b0345780ea29b17988da70ae81d99",
".git/objects/7b/27722089ad79cf426c387ec18070eb997f798b": "9d53f02c72c13fed5c1aac83e7723310",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "7dc6862ccf9cf08361bcdcaa506b8cab",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "cedd036902896227217e1fe4c1f5af01",
".git/objects/6e/f9a8fa185a10607eb16ec13b9672c54de3601b": "e6135ef46a59a21926a358ca1e6910d8",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "3ae74c50121a252af7b735f48bed9193",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "8601fe5ad3c9535b9cb71142f3ee4c08",
".git/objects/30/6942dc5bda024438722d4da845f397d2b10e14": "79d0ca2706eaa2c3b4da470e9db526a2",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "6ba60eff6a71de7a55ea52c6181fc6b8",
".git/objects/6d/f2b253603094de7f39886aae03181c686e375b": "dae8dffe1b57334304dbe76d315d71ee",
".git/objects/6d/703faca0331b4db71ea6d57e0782e83021c4bf": "deab9690d5c6acb614ec6056b52da549",
".git/objects/01/e9a1d4395e6f61f23525a3a7f30f74b7fd5896": "830e5df3d0d5cea0f3ffe3d22b6b4b26",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "9a2741a9017f3e943ec0b7f327c2c020",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/0f/b75ef4a4b3eb1311c1bbcd6bf0f25653ae112d": "d149407cb6fcba4dc4bc5de8c708fc8e",
".git/objects/64/43297363260255f413ae679ded6248fa5405a9": "5fd6711e06f5d502645745db03c73bc2",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "541ccecb00d45c9fdc9852f95fcdad75",
".git/objects/d3/0747613ba59f1b7596c344f92518ad5dba32a1": "e51026413d56b17c555fa162e45ddf48",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b1/c95b4dd794f6b88ac1603a038399aadde2e9b6": "df61442f6a2d90e01e22f2c6427f09fa",
".git/objects/d2/a73dc520d3736927c315f4d0c050d2b7b7184e": "a5c99311cd6f09eefbfbba3169006dae",
".git/objects/aa/e49ba7b86151ca7a92f70815c5e168e2d92e2b": "acc43442ede3815aba454c48d0d7c7f1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/f3492df2246ac74a35c1cf49ec8590c46f0c37": "d195fa730e637a6b54bdfa9e1c2c8a36",
".git/objects/ef/e2bd30118e3aa835c052f957a58218c4081fea": "fffb4458850946e3592742ae537e5665",
".git/objects/ea/fcf24ecb56739b2ab2a9d1b5414412c00e7f5e": "51ebaff54b04947fff27df696720840b",
".git/objects/f7/f6537bfd081840a8e18462c921b3f7f64c6919": "dc3242f2eb6c602de484058fc99bc9a8",
".git/objects/fa/7792855821f1a83d6eef6b7142a2d6c984dc60": "909f1032a9e7e3440965ee0446e18978",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "733ddcf1f8467729f0dab00912add93d",
".git/objects/83/60c1e6d61ecfc92cd949371d60083aa98114f8": "3a3a74592d5038dab877bbd540f2e01e",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "b1cb8999ff2f6fd71df4417bebff996f",
".git/objects/48/f49f81db91a02050ccf74964a4f47c9ddb8286": "36865bd646607dbaba2026bdf74ee5a5",
".git/objects/84/321ee6ac1cc33aefbd696a18de72d725185f24": "886131ea3010915d2f1fccbf7188ed7e",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "a1eb710863406c04c5e7b061f2e96af9",
".git/objects/24/e6a38c85ee37f50d4fedd15319e65a97fb1e43": "5d93c985018c490ff24b6caf22e348ac",
".git/objects/76/8734ad6fdaae0ad1c82cedbc6c571fcf1a6397": "c0917579773d1b3544e71d9f3ddd0040",
".git/objects/40/8632a9def1fb59d0e70fd94ff380bb4574b8eb": "35e4d6a741c621b1a0a42c1868309b80",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "b8d6f15ef784ef37473a3264834abc7d",
".git/objects/14/d7a93d90d64d293fc6996daf9ba83a99d60586": "a6a76efb1ec474243336a4e043d0c0d3",
".git/objects/8e/88c9e44d2be884394ea9f239a8a72a18645081": "223f48a0aa31af854e569b64ae6c2c0c",
".git/objects/22/366e455fd833ffa13f6c7d597c902dedc0acea": "7043f128e5d5e1dd4511d267e7144fb0",
".git/objects/25/f7bcb8dcf249544d97e788ed6767fd83c99485": "ded6f3373a0a7ebe3f90e958572ff5d6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b685ff401310969e92c8d37378964ce6",
".git/logs/refs/heads/main": "b685ff401310969e92c8d37378964ce6",
".git/logs/refs/remotes/origin/main": "67925e33fe6efa83bae2a64860511096",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d327cc315e17503febb2fc2e4ee31969",
".git/refs/remotes/origin/main": "328b729b8a47e278dac7754ada89f843",
".git/index": "1c1df71f5120ff2076d9b264a63db49a",
".git/COMMIT_EDITMSG": "875bd36b125dc2bffa5cad53cc421ba8",
".git/FETCH_HEAD": "89a8f26eff1399a501bd2ead617a3aa6",
"assets/AssetManifest.json": "6e913fbac1b5ee42a2c57591baf27c00",
"assets/NOTICES": "74fb817700758a83e27ed2e8dec1efef",
"assets/FontManifest.json": "866b9b20ab0e8c30ffe220d2a2d66abe",
"assets/AssetManifest.bin.json": "0a56f86b6a3ce8b1e2ff0c0a5f6999cc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b617ad3f5ae85edf5f39c5540e7a9819",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0031a2ae0dad238667b0271ab641cf6c",
"assets/fonts/MaterialIcons-Regular.otf": "3ed5c49f265674e533ec995be218449a",
"assets/assets/auth.png": "cbd025fa1c6ae41fd16e228c4bc1a714",
"assets/assets/logo.png": "f0ffe634cff37c74b0acafc0323fd9e3",
"assets/assets/icon/grocery-cart.png": "24202352d871414d7e51d3311c4107ed",
"assets/assets/icon/cart.png": "a427f5882d8fcf600897e0280fd97d20",
"assets/assets/icon/shopping-cart.png": "2bfb752106320b2ddd94901fc417e9b2",
"assets/assets/translations/bn.json": "e6d2dd6761fed3034aaf4404ba9fb4fd",
"assets/assets/translations/en.json": "440023b1caac6f30f9b612c4e7b84151",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
