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

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

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
    "url": "webpack-runtime-ed4ad0cc054174e1276c.js"
  },
  {
    "url": "app-9851df0ee0c9a114031a.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-b9f8e16bfa8aab5c3e84.js"
  },
  {
    "url": "index.html",
    "revision": "b3b6aa800716476cad14d47d4d86308f"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0dc8eae31dd613ddc2987bf4a8749c63"
  },
  {
    "url": "1.fcf476111a9d585dbfed.css"
  },
  {
    "url": "0.2bc437b82132119ad2dd.css"
  },
  {
    "url": "component---src-pages-index-js.57fc0a03975fe255a3db.css"
  },
  {
    "url": "component---src-pages-index-js-184efad9fda4cd084160.js"
  },
  {
    "url": "1-bef729f0578900a63a87.js"
  },
  {
    "url": "0-5a16dc49349a77d49586.js"
  },
  {
    "url": "static/d/591/path---index-6a9-5I9MGvMHREKYTfTgTdZqKXDpLg.json",
    "revision": "010615c90f1b42d028a5662b73c68eef"
  },
  {
    "url": "component---src-pages-404-js-e55998c4f23837173ce9.js"
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