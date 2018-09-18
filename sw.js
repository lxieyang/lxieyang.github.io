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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

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
    "url": "webpack-runtime-92115e523d211da4ba8b.js"
  },
  {
    "url": "app-02388ed71a9b334b62f2.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-f0e40cffa3553f680108.js"
  },
  {
    "url": "index.html",
    "revision": "7d0df84e5a4de2d47511714e4e202569"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0e569862d619cb5f31544c822c7292a8"
  },
  {
    "url": "1.c559bf10d3521e3ec123.css"
  },
  {
    "url": "0.c4d3658edaf9440d1993.css"
  },
  {
    "url": "component---src-pages-index-js.57415af16473abb894b1.css"
  },
  {
    "url": "component---src-pages-index-js-11cdc60dc2220d9edb40.js"
  },
  {
    "url": "1-f9180a14ae440a494712.js"
  },
  {
    "url": "0-0202b6d36a768fdd4bf7.js"
  },
  {
    "url": "static/d/591/path---index-6a9-5I9MGvMHREKYTfTgTdZqKXDpLg.json",
    "revision": "010615c90f1b42d028a5662b73c68eef"
  },
  {
    "url": "component---src-pages-404-js-0b8723cb0bf642c6b814.js"
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
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});