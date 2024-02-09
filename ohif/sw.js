navigator.serviceWorker.getRegistrations().then((function(e){for(let o of e)o.unregister()})),importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0-beta.1/workbox-sw.js"),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.routing.registerRoute(/\.(?:js|css|json5)$/,new workbox.strategies.StaleWhileRevalidate({cacheName:"static-resources"})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]}),new workbox.expiration.ExpirationPlugin({maxAgeSeconds:31536e3,maxEntries:30})]})),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&("SKIP_WAITING"===e.data.type||console.warn(`SW: Invalid message type: ${e.data.type}`))})),workbox.precaching.precacheAndRoute([{'revision':null,'url':'/ohif/12.bundle.61040e6bcaef7351855f.js'},{'revision':'77c2b2a55a121c4db1a949adb7d653a0','url':'/ohif/12.bundle.61040e6bcaef7351855f.js.map'},{'revision':null,'url':'/ohif/125.bundle.d3de47cf555d2dc72f3b.js'},{'revision':'dbc75631bb2ce6cbb3cf6727c819c864','url':'/ohif/125.bundle.d3de47cf555d2dc72f3b.js.map'},{'revision':null,'url':'/ohif/170.bundle.0e19a50aa29245aee91a.js'},{'revision':'2f590111726bad92c4f1dfddb907b06a','url':'/ohif/170.bundle.0e19a50aa29245aee91a.js.map'},{'revision':null,'url':'/ohif/181.bundle.e24dc78addbb89a2c647.js'},{'revision':'4a797827de50091483b3e0d4c0f6d59e','url':'/ohif/181.bundle.e24dc78addbb89a2c647.js.map'},{'revision':'a0ce365ea2532bba907205a43aeff99a','url':'/ohif/181.css'},{'revision':'af1b3f286ceaa0602823ace791357b1f','url':'/ohif/181.css.map'},{'revision':null,'url':'/ohif/185.bundle.197fa5616414d05eaab8.js'},{'revision':'02d73184af87bf8365c42dc32a7ae983','url':'/ohif/185.bundle.197fa5616414d05eaab8.js.map'},{'revision':null,'url':'/ohif/19.bundle.0f24a4739e08c976d266.js'},{'revision':'6987cab853b47e779ae3b63fb6a02b47','url':'/ohif/19.bundle.0f24a4739e08c976d266.js.map'},{'revision':'a37c67d7435f6a3306cfb08caed030c0','url':'/ohif/19.css'},{'revision':'85d9a0fdaac6b35bea2e2e8217c4ade4','url':'/ohif/19.css.map'},{'revision':null,'url':'/ohif/199.bundle.5c288651d3341cf1bd4b.js'},{'revision':'38a69c4f2469a3d9a162ba23d2511ff0','url':'/ohif/199.bundle.5c288651d3341cf1bd4b.js.map'},{'revision':null,'url':'/ohif/202.bundle.177da760d839ccf39f3e.js'},{'revision':'3df54bba2137ec524f3fb39f2c61461a','url':'/ohif/202.bundle.177da760d839ccf39f3e.js.LICENSE.txt'},{'revision':'c7b711c0fa1061ee0235db7fa31ef5e3','url':'/ohif/202.bundle.177da760d839ccf39f3e.js.map'},{'revision':'d32549aa3716d55d525e59e31e2f6591','url':'/ohif/20fc4c659b85ccd2a9c0.wasm'},{'revision':null,'url':'/ohif/223.bundle.3ba5841e4f1d1a39dd52.js'},{'revision':'16c271ced8a3ab408de5102713853461','url':'/ohif/223.bundle.3ba5841e4f1d1a39dd52.js.LICENSE.txt'},{'revision':'f89ac64c7c9ff3710516ead9c6526813','url':'/ohif/223.bundle.3ba5841e4f1d1a39dd52.js.map'},{'revision':null,'url':'/ohif/23.bundle.55a52b7fcb8943e02d3e.js'},{'revision':'ba6aebc74af7a97b39a3bfc1f5ce3890','url':'/ohif/23.bundle.55a52b7fcb8943e02d3e.js.map'},{'revision':null,'url':'/ohif/250.bundle.a1b336bfce937ea524e9.js'},{'revision':'4e7ad13890f02e550e35e6b017a61eb6','url':'/ohif/250.bundle.a1b336bfce937ea524e9.js.map'},{'revision':'fae0898b7f424a92fe03176f870d75a7','url':'/ohif/250.css'},{'revision':'d125ae3202f88a549940685097175b43','url':'/ohif/250.css.map'},{'revision':null,'url':'/ohif/281.bundle.5fa45372a3e4d799e388.js'},{'revision':'dace1fb0855311ee9eee79dbaddfc702','url':'/ohif/281.bundle.5fa45372a3e4d799e388.js.map'},{'revision':null,'url':'/ohif/290.bundle.1d7d170eee613cf3ff1f.js'},{'revision':'40b0e843476f0c0f3c6f09b7409dc33f','url':'/ohif/290.bundle.1d7d170eee613cf3ff1f.js.map'},{'revision':'1a81c5c757f52e0ded8fb9baf3c244c5','url':'/ohif/290.css'},{'revision':'17aff1c4239969e7c6d7d49905d4f72c','url':'/ohif/290.css.map'},{'revision':null,'url':'/ohif/359.bundle.7b157e4a0390b3b615a9.js'},{'revision':'f17484d8256bf9d96e177657b3acbf92','url':'/ohif/359.bundle.7b157e4a0390b3b615a9.js.map'},{'revision':'c4ea120c6da08aa75348edfa3e57ece9','url':'/ohif/36785fbd89b0e17f6099.wasm'},{'revision':null,'url':'/ohif/410.bundle.a12849d382ef906abc58.js'},{'revision':'b28422f38b0b26baae10c3f2362e6aa5','url':'/ohif/410.bundle.a12849d382ef906abc58.js.map'},{'revision':null,'url':'/ohif/417.bundle.c203283747ec1b98a955.js'},{'revision':'d7b313da3f0b5833cfb3f6228d554e63','url':'/ohif/417.bundle.c203283747ec1b98a955.js.map'},{'revision':null,'url':'/ohif/451.bundle.b637f56818d02ce58b8a.js'},{'revision':'bb1529f8ed693b41346d59cf314cdb73','url':'/ohif/451.bundle.b637f56818d02ce58b8a.js.map'},{'revision':null,'url':'/ohif/466.bundle.1d7599bb649241f1ca13.js'},{'revision':'0db997734ec11f7324adface2636114f','url':'/ohif/466.bundle.1d7599bb649241f1ca13.js.map'},{'revision':'61acdf0f062c0a50c90d7f38b4fec522','url':'/ohif/466.css'},{'revision':'a9d8c9ebb10533f6cd761340e5fc4ab8','url':'/ohif/466.css.map'},{'revision':null,'url':'/ohif/471.bundle.c533197338ff40926dba.js'},{'revision':'7117e743a4cb658ef3390939b6ccc58a','url':'/ohif/471.bundle.c533197338ff40926dba.js.map'},{'revision':null,'url':'/ohif/483.bundle.4f77496835023e737192.js'},{'revision':'1c6ada5dcc307417d459529649c5eb4b','url':'/ohif/483.bundle.4f77496835023e737192.js.map'},{'revision':'c377e1f5fe4a207d270c3f7a8dd3e3ca','url':'/ohif/5004fdc02f329ce53b69.wasm'},{'revision':null,'url':'/ohif/506.bundle.68264c3bd93f09a3707d.js'},{'revision':'a35a6e2cb4cf4e1d5bbc4bb34c42d12f','url':'/ohif/506.bundle.68264c3bd93f09a3707d.js.map'},{'revision':null,'url':'/ohif/530.bundle.7884807656fcbbf15e16.js'},{'revision':'d18d5005c9724f255f1367655b06f0c5','url':'/ohif/530.bundle.7884807656fcbbf15e16.js.LICENSE.txt'},{'revision':'358999bab0076ba8d66426bb5a01e298','url':'/ohif/530.bundle.7884807656fcbbf15e16.js.map'},{'revision':'c8bd83bb3850741e0139036d4f0d8754','url':'/ohif/579.css'},{'revision':'5946d43625bddb16d3b57432589b548e','url':'/ohif/579.css.map'},{'revision':'adfcdf177b2a25b4861c65ec3055f98b','url':'/ohif/610.min.worker.js'},{'revision':'3c2206525c18cd87dd28082949a4e43e','url':'/ohif/610.min.worker.js.map'},{'revision':null,'url':'/ohif/613.bundle.a105367b6b5267d6882c.js'},{'revision':'f5859f2e562c7ec30d4b7b7c4146d5fd','url':'/ohif/613.bundle.a105367b6b5267d6882c.js.map'},{'revision':'5800265b6831396572fb5d32c6bd8eef','url':'/ohif/62ab5d58a2bea7b5a1dc.wasm'},{'revision':'ce10eced3ce34e663d86569b27f5bffb','url':'/ohif/65916ef3def695744bda.wasm'},{'revision':null,'url':'/ohif/661.bundle.43a1718a01bcab5b6043.js'},{'revision':'275fe79abee3b697f1673c8bd9c58856','url':'/ohif/661.bundle.43a1718a01bcab5b6043.js.LICENSE.txt'},{'revision':'0d9bf354df786b64deacde36c2ad2119','url':'/ohif/661.bundle.43a1718a01bcab5b6043.js.map'},{'revision':null,'url':'/ohif/686.bundle.52f619891ac3bf30f512.js'},{'revision':'6f0fe6992b97dc776d839e3277e567a4','url':'/ohif/686.bundle.52f619891ac3bf30f512.js.map'},{'revision':null,'url':'/ohif/687.bundle.1a50b3e8c14c7d225313.js'},{'revision':'9b78e3943c64b25b4cc4c317e810b818','url':'/ohif/687.bundle.1a50b3e8c14c7d225313.js.map'},{'revision':null,'url':'/ohif/738.bundle.0832bd4df308f5e3e64e.js'},{'revision':'7d003a2d77e1878760aef66c7977a56b','url':'/ohif/738.bundle.0832bd4df308f5e3e64e.js.map'},{'revision':'cc4a3a4da4ac1b863a714f93c66c6ef2','url':'/ohif/75a0c2dfe07b824c7d21.wasm'},{'revision':null,'url':'/ohif/814.bundle.49a3be1beab858d88bc5.js'},{'revision':'493c2002d27273391fd708694dba7d6c','url':'/ohif/814.bundle.49a3be1beab858d88bc5.js.map'},{'revision':null,'url':'/ohif/822.bundle.09b70e94db413cc858ce.js'},{'revision':'f4127b117fd47adb7d9d2532b71cd149','url':'/ohif/822.bundle.09b70e94db413cc858ce.js.map'},{'revision':null,'url':'/ohif/831.bundle.94616c02af135b9f4118.js'},{'revision':'2366a91b4814ed43f91847462aba9250','url':'/ohif/831.bundle.94616c02af135b9f4118.js.map'},{'revision':null,'url':'/ohif/886.bundle.d81e08a8bc279ab937bb.js'},{'revision':'cb685070a2230758659b31e2ba6b4f48','url':'/ohif/886.bundle.d81e08a8bc279ab937bb.js.map'},{'revision':'30ca7c265a7fdd034b427b49882e69c9','url':'/ohif/945.min.worker.js'},{'revision':'cdf6f0457d4af2cef04fc41816241bc1','url':'/ohif/945.min.worker.js.map'},{'revision':null,'url':'/ohif/95.bundle.3755c765c1a45306b35b.js'},{'revision':'540d18901934be6818d7267d8b7a3265','url':'/ohif/95.bundle.3755c765c1a45306b35b.js.LICENSE.txt'},{'revision':'0695402403bdd0ae6b5643c92572f8c7','url':'/ohif/95.bundle.3755c765c1a45306b35b.js.map'},{'revision':null,'url':'/ohif/965.bundle.d3fd6cc88d62824c11b5.js'},{'revision':'56c04a5eb5436d414d0d33a1fe7c1e5f','url':'/ohif/965.bundle.d3fd6cc88d62824c11b5.js.map'},{'revision':'d1895aa7a4595dc279c382e5a31ef9f4','url':'/ohif/_headers'},{'revision':'e3bf0f3e9c34f51ad59836ae8e8eaf43','url':'/ohif/_redirects'},{'revision':'abb895b7462bc06771bb736e93da333b','url':'/ohif/app-config.js'},{'revision':null,'url':'/ohif/app.bundle.7916edf910548953de7b.js'},{'revision':'90b91c523368038b0e516c6a5181221c','url':'/ohif/app.bundle.7916edf910548953de7b.js.LICENSE.txt'},{'revision':'1ac18ca934dc429739ac160c515723ef','url':'/ohif/app.bundle.7916edf910548953de7b.js.map'},{'revision':'74e3ec37cfbbca890fbf84658aa87144','url':'/ohif/app.bundle.css'},{'revision':'b1ef9778b33fdc235ad7b2efb112a4b3','url':'/ohif/app.bundle.css.map'},{'revision':'cb4f64534cdf8dd88f1d7219d44490db','url':'/ohif/assets/android-chrome-144x144.png'},{'revision':'5cde390de8a619ebe55a669d2ac3effd','url':'/ohif/assets/android-chrome-192x192.png'},{'revision':'e7466a67e90471de05401e53b8fe20be','url':'/ohif/assets/android-chrome-256x256.png'},{'revision':'9bbe9b80156e930d19a4e1725aa9ddae','url':'/ohif/assets/android-chrome-36x36.png'},{'revision':'5698b2ac0c82fe06d84521fc5482df04','url':'/ohif/assets/android-chrome-384x384.png'},{'revision':'56bef3fceec344d9747f8abe9c0bba27','url':'/ohif/assets/android-chrome-48x48.png'},{'revision':'3e8b8a01290992e82c242557417b0596','url':'/ohif/assets/android-chrome-512x512.png'},{'revision':'517925e91e2ce724432d296b687d25e2','url':'/ohif/assets/android-chrome-72x72.png'},{'revision':'4c3289bc690f8519012686888e08da71','url':'/ohif/assets/android-chrome-96x96.png'},{'revision':'cf464289183184df09292f581df0fb4f','url':'/ohif/assets/apple-touch-icon-1024x1024.png'},{'revision':'0857c5282c594e4900e8b31e3bade912','url':'/ohif/assets/apple-touch-icon-114x114.png'},{'revision':'4208f41a28130a67e9392a9dfcee6011','url':'/ohif/assets/apple-touch-icon-120x120.png'},{'revision':'cb4f64534cdf8dd88f1d7219d44490db','url':'/ohif/assets/apple-touch-icon-144x144.png'},{'revision':'977d293982af7e9064ba20806b45cf35','url':'/ohif/assets/apple-touch-icon-152x152.png'},{'revision':'6de91b4d2a30600b410758405cb567b4','url':'/ohif/assets/apple-touch-icon-167x167.png'},{'revision':'87bff140e3773bd7479a620501c4aa5c','url':'/ohif/assets/apple-touch-icon-180x180.png'},{'revision':'647386c34e75f1213830ea9a38913525','url':'/ohif/assets/apple-touch-icon-57x57.png'},{'revision':'0c200fe83953738b330ea431083e7a86','url':'/ohif/assets/apple-touch-icon-60x60.png'},{'revision':'517925e91e2ce724432d296b687d25e2','url':'/ohif/assets/apple-touch-icon-72x72.png'},{'revision':'c9989a807bb18633f6dcf254b5b56124','url':'/ohif/assets/apple-touch-icon-76x76.png'},{'revision':'87bff140e3773bd7479a620501c4aa5c','url':'/ohif/assets/apple-touch-icon-precomposed.png'},{'revision':'87bff140e3773bd7479a620501c4aa5c','url':'/ohif/assets/apple-touch-icon.png'},{'revision':'05fa74ea9c1c0c3931ba96467999081d','url':'/ohif/assets/apple-touch-startup-image-1182x2208.png'},{'revision':'9e2cd03e1e6fd0520eea6846f4278018','url':'/ohif/assets/apple-touch-startup-image-1242x2148.png'},{'revision':'5591e3a1822cbc8439b99c1a40d53425','url':'/ohif/assets/apple-touch-startup-image-1496x2048.png'},{'revision':'337de578c5ca04bd7d2be19d24d83821','url':'/ohif/assets/apple-touch-startup-image-1536x2008.png'},{'revision':'cafb4ab4eafe6ef946bd229a1d88e7de','url':'/ohif/assets/apple-touch-startup-image-320x460.png'},{'revision':'d9bb9e558d729eeac5efb8be8d6111cc','url':'/ohif/assets/apple-touch-startup-image-640x1096.png'},{'revision':'038b5b02bac8b82444bf9a87602ac216','url':'/ohif/assets/apple-touch-startup-image-640x920.png'},{'revision':'2177076eb07b1d64d663d7c03268be00','url':'/ohif/assets/apple-touch-startup-image-748x1024.png'},{'revision':'4fc097443815fe92503584c4bd73c630','url':'/ohif/assets/apple-touch-startup-image-750x1294.png'},{'revision':'2e29914062dce5c5141ab47eea2fc5d9','url':'/ohif/assets/apple-touch-startup-image-768x1004.png'},{'revision':'f692ec286b3a332c17985f4ed38b1076','url':'/ohif/assets/browserconfig.xml'},{'revision':'f3d9a3b647853c45b0e132e4acd0cc4a','url':'/ohif/assets/coast-228x228.png'},{'revision':'ad6e1def5c66193d649a31474bbfe45d','url':'/ohif/assets/favicon-16x16.png'},{'revision':'84d1dcdb6cdfa55e2f46be0c80fa5698','url':'/ohif/assets/favicon-32x32.png'},{'revision':'95fb44c4998a46109e49d724c060db24','url':'/ohif/assets/favicon.ico'},{'revision':'5df2a5b0cee399ac0bc40af74ba3c2cb','url':'/ohif/assets/firefox_app_128x128.png'},{'revision':'11fd9098c4b07c8a07e1d2a1e309e046','url':'/ohif/assets/firefox_app_512x512.png'},{'revision':'27cddfc922dca3bfa27b4a00fc2f5e36','url':'/ohif/assets/firefox_app_60x60.png'},{'revision':'2017d95fae79dcf34b5a5b52586d4763','url':'/ohif/assets/manifest.webapp'},{'revision':'cb4f64534cdf8dd88f1d7219d44490db','url':'/ohif/assets/mstile-144x144.png'},{'revision':'334895225e16a7777e45d81964725a97','url':'/ohif/assets/mstile-150x150.png'},{'revision':'e295cca4af6ed0365cf7b014d91b0e9d','url':'/ohif/assets/mstile-310x150.png'},{'revision':'cbefa8c42250e5f2443819fe2c69d91e','url':'/ohif/assets/mstile-310x310.png'},{'revision':'aa411a69df2b33a1362fa38d1257fa9d','url':'/ohif/assets/mstile-70x70.png'},{'revision':'5609af4f69e40e33471aee770ea1d802','url':'/ohif/assets/yandex-browser-50x50.png'},{'revision':'dd001f21b3970d5a7f3e245cc10d21df','url':'/ohif/assets/yandex-browser-manifest.json'},{'revision':'52b9a07fe0541fe8c313d9788550bf51','url':'/ohif/b6b803111e2d06a825bd.wasm'},{'revision':'7edb59d2be7c993050cb31ded36afa31','url':'/ohif/c22b37c3488e1d6c3aa4.wasm'},{'revision':'e9f65fccef8d4b596f83a3976b253952','url':'/ohif/cornerstoneDICOMImageLoader.min.js'},{'revision':'2bbe6b9d0180e7c0c55e67f995aa0dd3','url':'/ohif/cornerstoneDICOMImageLoader.min.js.map'},{'revision':null,'url':'/ohif/dicom-microscopy-viewer.bundle.404fed6b666f38603cff.js'},{'revision':'a32734d2bcb762bc2576581869d2a32c','url':'/ohif/dicom-microscopy-viewer.bundle.404fed6b666f38603cff.js.LICENSE.txt'},{'revision':'8bdc993d50fe94d0944b87b69d4369c2','url':'/ohif/dicom-microscopy-viewer.bundle.404fed6b666f38603cff.js.map'},{'revision':'b3ed51d0e1a95f4c86b9657df308fe87','url':'/ohif/dicomMicroscopyViewer.min.js'},{'revision':'450494c199cf8dd8e8c34d5e98bf5334','url':'/ohif/dicomMicroscopyViewer.min.js.LICENSE.txt'},{'revision':'8a01f4e4374adc87eb07850f350aea8f','url':'/ohif/es6-shim.min.js'},{'revision':'020680fc0de257a26ef6c1df902f8d8f','url':'/ohif/es6-shim.min.js.LICENSE.txt'},{'revision':'e6d1707b32d2dee763af9be4012050a7','url':'/ohif/google.js'},{'revision':'a7092168665e4fce7ca2c18002d3b1d2','url':'/ohif/index.html'},{'revision':'bfd0810a61a338e41d84059937f137c2','url':'/ohif/index.worker.64c896c4316fcd506666.worker.js'},{'revision':'143490b997e10b23c1debfa35afeb9e4','url':'/ohif/index.worker.64c896c4316fcd506666.worker.js.map'},{'revision':'dea2eed78c84c32cf7a90d565a289883','url':'/ohif/index.worker.min.worker.js'},{'revision':'fd1116add443fee52a935df926396e0f','url':'/ohif/index.worker.min.worker.js.map'},{'revision':'96664560310999eea0795ed980d33a97','url':'/ohif/init-service-worker.js'},{'revision':'74fc9658b62903be2048c1f82a22b4d4','url':'/ohif/manifest.json'},{'revision':'3fa71aa0af3e34b4ebd9a71eee0f4bdd','url':'/ohif/ohif-logo-light.svg'},{'revision':'7e81da785c63e75650101db6c5d7560e','url':'/ohif/ohif-logo.svg'},{'revision':'8032232e4e08184ee8a9e4c018c8ba55','url':'/ohif/oidc-client.min.js'},{'revision':'4b43be1f14657780d4b120e50d8fee65','url':'/ohif/oidc-client.min.js.LICENSE.txt'},{'revision':'f5fd3850f3da362de535533e3803383f','url':'/ohif/polyfill.min.js'},{'revision':'af9346d3e597071ba9ee8cd32f8cc0ea','url':'/ohif/serve.json'},{'revision':'b1e488d9955b62bd2858874df11d5223','url':'/ohif/silent-refresh.html'},{'revision':'454a9caed5bf6cbe789d4dc58619fed0','url':'/ohif/sw.js.map'}]);
//# sourceMappingURL=sw.js.map