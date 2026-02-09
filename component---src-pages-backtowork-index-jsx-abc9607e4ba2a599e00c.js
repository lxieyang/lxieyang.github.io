/*! For license information please see component---src-pages-backtowork-index-jsx-abc9607e4ba2a599e00c.js.LICENSE.txt */
(self.webpackChunkmichael_personal_website =
  self.webpackChunkmichael_personal_website || []).push([
  [195],
  {
    2485: function (n, t) {
      var e;
      !(function () {
        'use strict';
        var r = {}.hasOwnProperty;
        function o() {
          for (var n = [], t = 0; t < arguments.length; t++) {
            var e = arguments[t];
            if (e) {
              var i = typeof e;
              if ('string' === i || 'number' === i) n.push(e);
              else if (Array.isArray(e)) {
                if (e.length) {
                  var c = o.apply(null, e);
                  c && n.push(c);
                }
              } else if ('object' === i) {
                if (
                  e.toString !== Object.prototype.toString &&
                  !e.toString.toString().includes('[native code]')
                ) {
                  n.push(e.toString());
                  continue;
                }
                for (var u in e) r.call(e, u) && e[u] && n.push(u);
              }
            }
          }
          return n.join(' ');
        }
        n.exports
          ? ((o.default = o), (n.exports = o))
          : void 0 ===
              (e = function () {
                return o;
              }.apply(t, [])) || (n.exports = e);
      })();
    },
    4185: function (n, t, e) {
      'use strict';
      e.r(t);
      var r = e(6540),
        o = e(5169);
      t.default = (n) =>
        r.createElement(
          'div',
          { className: 'PageContainer' },
          r.createElement(
            o.A,
            null,
            r.createElement(
              'div',
              { className: 'Banner' },
              "You won't get much work done if you only do it when you feel like it."
            )
          )
        );
    },
    5169: function (n, t, e) {
      'use strict';
      var r = e(6540),
        o = e(5556),
        i = e.n(o),
        c = e(2485),
        u = e.n(c),
        a = e(6331),
        f = ['className', 'cssModule', 'fluid', 'tag'];
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var t = 1; t < arguments.length; t++) {
                  var e = arguments[t];
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                }
                return n;
              }),
          l.apply(this, arguments)
        );
      }
      function s(n, t) {
        if (null == n) return {};
        var e,
          r,
          o = (function (n, t) {
            if (null == n) return {};
            var e,
              r,
              o = {},
              i = Object.keys(n);
            for (r = 0; r < i.length; r++)
              (e = i[r]), t.indexOf(e) >= 0 || (o[e] = n[e]);
            return o;
          })(n, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(n);
          for (r = 0; r < i.length; r++)
            (e = i[r]),
              t.indexOf(e) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(n, e) &&
                  (o[e] = n[e]));
        }
        return o;
      }
      var p = {
        tag: a.Wx,
        fluid: i().oneOfType([i().bool, i().string]),
        className: i().string,
        cssModule: i().object,
      };
      function y(n) {
        var t = n.className,
          e = n.cssModule,
          o = n.fluid,
          i = n.tag,
          c = void 0 === i ? 'div' : i,
          p = s(n, f),
          y = 'container';
        !0 === o ? (y = 'container-fluid') : o && (y = 'container-'.concat(o));
        var d = (0, a.qO)(u()(t, y), e);
        return r.createElement(c, l({}, p, { className: d }));
      }
      (y.propTypes = p), (t.A = y);
    },
    6331: function (n, t, e) {
      'use strict';
      e.d(t, {
        $0: function () {
          return E;
        },
        EW: function () {
          return P;
        },
        Gv: function () {
          return x;
        },
        Jb: function () {
          return T;
        },
        Jc: function () {
          return N;
        },
        MJ: function () {
          return O;
        },
        PS: function () {
          return m;
        },
        Q6: function () {
          return h;
        },
        Tu: function () {
          return A;
        },
        Up: function () {
          return s;
        },
        Wx: function () {
          return g;
        },
        cJ: function () {
          return l;
        },
        io: function () {
          return y;
        },
        qO: function () {
          return f;
        },
        to: function () {
          return b;
        },
        vL: function () {
          return k;
        },
        xQ: function () {
          return v;
        },
      });
      var r,
        o = e(5556),
        i = e.n(o);
      function c(n, t) {
        var e = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(n);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function u(n, t, e) {
        return (
          t in n
            ? Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[t] = e),
          n
        );
      }
      function a(n) {
        return (
          (a =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (n) {
                  return typeof n;
                }
              : function (n) {
                  return n &&
                    'function' == typeof Symbol &&
                    n.constructor === Symbol &&
                    n !== Symbol.prototype
                    ? 'symbol'
                    : typeof n;
                }),
          a(n)
        );
      }
      function f() {
        var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
        return t
          ? n
              .split(' ')
              .map(function (n) {
                return t[n] || n;
              })
              .join(' ')
          : n;
      }
      function l(n, t) {
        var e = {};
        return (
          Object.keys(n).forEach(function (r) {
            -1 === t.indexOf(r) && (e[r] = n[r]);
          }),
          e
        );
      }
      function s(n, t) {
        for (
          var e, r = Array.isArray(t) ? t : [t], o = r.length, i = {};
          o > 0;

        )
          i[(e = r[(o -= 1)])] = n[e];
        return i;
      }
      var p = {};
      function y(n, t) {
        return function (e, r, o) {
          var i;
          null !== e[r] &&
            void 0 !== e[r] &&
            ((i = '"'
              .concat(r, '" property of "')
              .concat(o, '" has been deprecated.\n')
              .concat(t)),
            p[i] ||
              ('undefined' != typeof console && console.error(i), (p[i] = !0)));
          for (
            var c = arguments.length, u = new Array(c > 3 ? c - 3 : 0), a = 3;
            a < c;
            a++
          )
            u[a - 3] = arguments[a];
          return n.apply(void 0, [e, r, o].concat(u));
        };
      }
      var d =
        ('object' ===
          ('undefined' == typeof window ? 'undefined' : a(window)) &&
          window.Element) ||
        function () {};
      function b(n, t, e) {
        if (!(n[t] instanceof d))
          return new Error(
            'Invalid prop `' +
              t +
              '` supplied to `' +
              e +
              '`. Expected prop to be an instance of Element. Validation failed.'
          );
      }
      var v = i().oneOfType([
          i().string,
          i().func,
          b,
          i().shape({ current: i().any }),
        ]),
        g = i().oneOfType([
          i().func,
          i().string,
          i().shape({ $$typeof: i().symbol, render: i().func }),
          i().arrayOf(
            i().oneOfType([
              i().func,
              i().string,
              i().shape({ $$typeof: i().symbol, render: i().func }),
            ])
          ),
        ]),
        h = {
          Fade: 150,
          Collapse: 350,
          Modal: 300,
          Carousel: 600,
          Offcanvas: 300,
        },
        m = [
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
        ],
        O = {
          ENTERING: 'entering',
          ENTERED: 'entered',
          EXITING: 'exiting',
          EXITED: 'exited',
        },
        E = [
          'auto-start',
          'auto',
          'auto-end',
          'top-start',
          'top',
          'top-end',
          'right-start',
          'right',
          'right-end',
          'bottom-end',
          'bottom',
          'bottom-start',
          'left-end',
          'left',
          'left-start',
        ],
        j = !(
          'undefined' == typeof window ||
          !window.document ||
          !window.document.createElement
        );
      function w(n) {
        return null == n
          ? void 0 === n
            ? '[object Undefined]'
            : '[object Null]'
          : Object.prototype.toString.call(n);
      }
      function x(n) {
        var t = a(n);
        return null != n && ('object' === t || 'function' === t);
      }
      function A(n) {
        if (
          (function (n) {
            return !(!n || 'object' !== a(n)) && 'current' in n;
          })(n)
        )
          return n.current;
        if (
          (function (n) {
            if (!x(n)) return !1;
            var t = w(n);
            return (
              '[object Function]' === t ||
              '[object AsyncFunction]' === t ||
              '[object GeneratorFunction]' === t ||
              '[object Proxy]' === t
            );
          })(n)
        )
          return n();
        if ('string' == typeof n && j) {
          var t = document.querySelectorAll(n);
          if (
            (t.length || (t = document.querySelectorAll('#'.concat(n))),
            !t.length)
          )
            throw new Error(
              "The target '".concat(
                n,
                "' could not be identified in the dom, tip: check spelling"
              )
            );
          return t;
        }
        return n;
      }
      function S(n) {
        return (
          null !== n && (Array.isArray(n) || (j && 'number' == typeof n.length))
        );
      }
      function P(n, t) {
        var e = A(n);
        return t ? (S(e) ? e : null === e ? [] : [e]) : S(e) ? e[0] : e;
      }
      var T = ['touchstart', 'click'];
      function k(n, t, e, r) {
        var o = n;
        S(o) || (o = [o]);
        var i = e;
        if (
          ('string' == typeof i && (i = i.split(/\s+/)),
          !S(o) || 'function' != typeof t || !Array.isArray(i))
        )
          throw new Error(
            '\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    '
          );
        return (
          Array.prototype.forEach.call(i, function (n) {
            Array.prototype.forEach.call(o, function (e) {
              e.addEventListener(n, t, r);
            });
          }),
          function () {
            Array.prototype.forEach.call(i, function (n) {
              Array.prototype.forEach.call(o, function (e) {
                e.removeEventListener(n, t, r);
              });
            });
          }
        );
      }
      function N(n, t) {
        if (!n || !t) return t;
        var e = (function (n) {
          for (var t = 1; t < arguments.length; t++) {
            var e = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? c(Object(e), !0).forEach(function (t) {
                  u(n, t, e[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e))
              : c(Object(e)).forEach(function (t) {
                  Object.defineProperty(
                    n,
                    t,
                    Object.getOwnPropertyDescriptor(e, t)
                  );
                });
          }
          return n;
        })({}, t);
        return (
          Object.keys(n).forEach(function (t) {
            void 0 === e[t] && (e[t] = n[t]),
              Object.keys(n[t] || {}).length > 0 &&
                'object' === a(n[t]) &&
                N(n[t], e);
          }),
          e
        );
      }
    },
  },
]);
//# sourceMappingURL=component---src-pages-backtowork-index-jsx-abc9607e4ba2a599e00c.js.map
