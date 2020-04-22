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
    "url": "webpack-runtime-ca28e65b156f598e0e70.js"
  },
  {
    "url": "commons-c5d9c9636107219360bb.js"
  },
  {
    "url": "app-977bda99d178a0fc26eb.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-7ca1fffc0f095fe8aa22.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "11078613de9d9966506e1207058c1907"
  },
  {
    "url": "google-fonts/s/baloo2/v1/wXKrE3kTposypRyd51jcAA.woff2",
    "revision": "ff36e5e00d11be793e0827dd21f2e2ea"
  },
  {
    "url": "google-fonts/s/crimsontext/v10/wlp2gwHKFkZgtmSR3NB0oRJfbwhT.woff2",
    "revision": "29c6d640c48ad6666c008c6f010d05da"
  },
  {
    "url": "google-fonts/s/gotu/v1/o-0FIpksx3QOpHoBiw.woff2",
    "revision": "a67f29f609c8f3ea6b98ef97e51e17eb"
  },
  {
    "url": "google-fonts/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2",
    "revision": "479970ffb74f2117317f9d24d9e317fe"
  },
  {
    "url": "google-fonts/s/shadowsintolight/v9/UqyNK9UOIntux_czAvDQx_ZcHqZXBNQzdcD5.woff2",
    "revision": "3238e51cb019f0ba4322d2b48ce7ba81"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "606144d434ed6a49ec382a3835b72405"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

const navigationRoute = new NavigationRoute(async ({ event }) => {
  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-977bda99d178a0fc26eb.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  return await caches.match(offlineShell)
})

workbox.routing.registerRoute(navigationRoute)

const messageApi = {
  setPathResources(event, { path, resources }) {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources(event) {
    event.waitUntil(idbKeyval.clear())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event, event.data)
})
