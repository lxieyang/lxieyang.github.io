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

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

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
    "url": "webpack-runtime-7e0bc67c4ceabe32d7f6.js"
  },
  {
    "url": "app-74b87998e05b84184935.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-7ce2211edb70844e4d19.js"
  },
  {
    "url": "index.html",
    "revision": "d37cae767e1bf4eead3a17daf809c493"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "5335ee32cf46c492dac901926e26b811"
  },
  {
    "url": "1.dc709fa1e105400fb102.css"
  },
  {
    "url": "0.08eb512c534233bffd38.css"
  },
  {
    "url": "component---src-pages-index-js.f2c83da254d89964c62a.css"
  },
  {
    "url": "component---src-pages-index-js-2ed185f76c4f90803dc5.js"
  },
  {
    "url": "1-8d04003ec4965b21ebee.js"
  },
  {
    "url": "0-543a0853a9e618184efe.js"
  },
  {
    "url": "static/d/591/path---index-6a9-5I9MGvMHREKYTfTgTdZqKXDpLg.json",
    "revision": "010615c90f1b42d028a5662b73c68eef"
  },
  {
    "url": "component---src-pages-404-js-7d65c0e989ebb18c51e3.js"
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