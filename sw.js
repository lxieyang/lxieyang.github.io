/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-251dc13f7ba9ab8a676a.js"
  },
  {
    "url": "app-c7a2fe3773eedaa95538.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-5b40985a58c12c0c8813.js"
  },
  {
    "url": "index.html",
    "revision": "9bf979202d55689f3a96c6e83bd7f113"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "86d08b00ecbb3356d2453c75a0b21ff4"
  },
  {
    "url": "1.b9d697448b8c9f9faf5e.css",
    "revision": "0816ae81565f52fde75450876d40ce0f"
  },
  {
    "url": "component---src-pages-index-js.7e684577ce613f701b75.css",
    "revision": "11ea7a26f647a0d3b62645883aed4ea5"
  },
  {
    "url": "0.8e715b17599b9690e6b5.css",
    "revision": "dc971514a6a63a4e289908288f75e068"
  },
  {
    "url": "0-235d4bcf42720ce81475.js"
  },
  {
    "url": "component---src-pages-index-js-352d3858369e156a2db2.js"
  },
  {
    "url": "1-47fb2bde426b4e5e7307.js"
  },
  {
    "url": "static/d/591/path---index-6a9-5I9MGvMHREKYTfTgTdZqKXDpLg.json",
    "revision": "010615c90f1b42d028a5662b73c68eef"
  },
  {
    "url": "component---src-pages-404-js-d1b1f8d4f7fe63a346fe.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "c10f2c13416431579ec4ba65de80d366"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
