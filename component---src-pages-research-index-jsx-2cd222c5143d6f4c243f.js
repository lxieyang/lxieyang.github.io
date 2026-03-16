'use strict';
(self.webpackChunkmichael_personal_website =
  self.webpackChunkmichael_personal_website || []).push([
  [261],
  {
    1003: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var r,
        a = n(5276),
        l = n(6540),
        o = n(2568),
        i = n(9014),
        s =
          n.p +
          'static/research-statement-bg-34723248d95bc123dcc2d23909d1df17.png',
        c = n(4723);
      const m = o.Ay.div(
        r ||
          (r = (0, a.A)([
            "\n  position: relative;\n  overflow: hidden;\n  padding: 10px 3px;\n  margin-bottom: 15px;\n\n  &::before {\n    content: ' ';\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    opacity: 0.03;\n    background-image: url(",
            ');\n    background-blend-mode: lighten;\n  }\n',
          ])),
        s
      );
      var p = () =>
        l.createElement(
          i.A,
          { pathName: 'Research' },
          l.createElement('div', { id: 'research' }),
          l.createElement('h1', null, 'Research'),
          l.createElement(
            m,
            null,
            l.createElement(
              'p',
              null,
              l.createElement('strong', null, 'Overview:'),
              ' I research programming support largely from a sensemaking perspective. My current work is in studying sensemaking activities in programming practices, and how sensemaking results could be effectively shared among programmers. I aim to design tools to better support programming activities, both for professional programmers and end-user programmers.'
            ),
            l.createElement(
              'p',
              null,
              l.createElement('strong', null, 'Background:'),
              ' Programmers spend a significant proportion of their time searching for and making sense of complex information in order to accomplish their goals, whether choosing between different APIs, adapting code snippets found on the Internet to meet their needs, or trying to learn unfamiliar code to fix an error or add a new feature. When performing tasks like these, programmers continually are making hypotheses, proposing questions, and discovering answers. However, after each sensemaking episode in which a programmer gains knowledge for themselves, their work is essentially lost, with no one else benefiting. Although there are many tools to help programmers find the answers, there are very few tools to help programmers make use of the knowledge gained performing the task, or share that knowledge with others. We aim to help the initial programmer collect, navigate, and organize knowledge to meet their goals, while capturing this knowledge and making it useful for later programmers with similar needs.'
            )
          ),
          l.createElement(c.A, null)
        );
    },
    4723: function (e, t, n) {
      n.d(t, {
        A: function () {
          return q;
        },
      });
      var r = n(7387),
        a = n(5276),
        l = n(7126),
        o = n.n(l),
        i = n(3031),
        s = n.n(i),
        c = n(6540),
        m = n(2568),
        p = n(5826),
        u = n(9704),
        f = n(5556),
        d = n.n(f),
        g = n(1247),
        h = n(6331);
      function b(e) {
        return (
          (b =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          b(e)
        );
      }
      function y() {
        return (
          (y = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          y.apply(this, arguments)
        );
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function E(e, t) {
        return (
          (E = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          E(e, t)
        );
      }
      function k(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = x(e);
          if (t) {
            var a = x(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ('object' === b(t) || 'function' == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            return w(e);
          })(this, n);
        };
      }
      function w(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function x(e) {
        return (
          (x = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          x(e)
        );
      }
      var A = ['toggleEvents', 'defaultOpen'],
        P = {
          defaultOpen: d().bool,
          toggler: d().string.isRequired,
          toggleEvents: d().arrayOf(d().string),
        },
        O = { toggleEvents: h.Jb },
        _ = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && E(e, t);
          })(l, e);
          var t,
            n,
            r,
            a = k(l);
          function l(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, l),
              ((t = a.call(this, e)).togglers = null),
              (t.removeEventListeners = null),
              (t.toggle = t.toggle.bind(w(t))),
              (t.state = { isOpen: e.defaultOpen || !1 }),
              t
            );
          }
          return (
            (t = l),
            (n = [
              {
                key: 'componentDidMount',
                value: function () {
                  (this.togglers = (0, h.Tu)(this.props.toggler)),
                    this.togglers.length &&
                      (this.removeEventListeners = (0, h.vL)(
                        this.togglers,
                        this.toggle,
                        this.props.toggleEvents
                      ));
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.togglers.length &&
                    this.removeEventListeners &&
                    this.removeEventListeners();
                },
              },
              {
                key: 'toggle',
                value: function (e) {
                  this.setState(function (e) {
                    return { isOpen: !e.isOpen };
                  }),
                    e.preventDefault();
                },
              },
              {
                key: 'render',
                value: function () {
                  return c.createElement(
                    g.A,
                    y({ isOpen: this.state.isOpen }, (0, h.cJ)(this.props, A))
                  );
                },
              },
            ]) && v(t.prototype, n),
            r && v(t, r),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            l
          );
        })(c.Component);
      (_.propTypes = P), (_.defaultProps = O);
      var N,
        I,
        j,
        S,
        C,
        L = _,
        R = n(9722),
        F = n.n(R),
        T = n(9662);
      const M = m.Ay.div(N || (N = (0, a.A)(['']))),
        B = m.Ay.div(I || (I = (0, a.A)(['\n  margin-bottom: 15px;\n']))),
        D = m.Ay.h4(j || (j = (0, a.A)(['\n  opacity: 0.7;\n']))),
        W = m.Ay.img(
          S ||
            (S = (0, a.A)([
              '\n  /* max-width: 95%; */\n  /* max-height: 90%; */\n  /* max-height: 95%; */\n  opacity: 0.8;\n',
            ]))
        ),
        z = m.Ay.div(
          C ||
            (C = (0, a.A)([
              '\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.9rem;\n  opacity: 0.8;\n\n  .tag-inner {\n    margin-top: 0.125rem;\n    padding: 0.05rem 0.25rem;\n    border-radius: 0.3rem;\n    background-color: #333;\n    color: #fff;\n  }\n',
            ]))
        );
      let V = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this).state = {
              currentYear: new Date().getFullYear(),
            }),
            t
          );
        }
        return (
          (0, r.A)(t, e),
          (t.prototype.render = function () {
            let e = [
              {
                prompt: 'Conferences & Pre-prints',
                data: F()('publications[*type=conference]', {
                  data: T.u,
                }).value.filter((e) => !1 !== e.showInResearchPage),
              },
              {
                prompt: 'Workshop Papers & Posters',
                data: F()('publications[*type=workshop]', {
                  data: T.u,
                }).value.filter((e) => !1 !== e.showInResearchPage),
              },
            ];
            return c.createElement(
              c.Fragment,
              null,
              c.createElement('div', { id: 'publications' }),
              c.createElement('h1', null, 'Publications'),
              c.createElement(
                M,
                null,
                e.map((e, t) =>
                  c.createElement(
                    B,
                    { key: t },
                    c.createElement(D, null, e.prompt),
                    o()(s()(e.data, ['year', 'month'])).map((t, n) =>
                      c.createElement(
                        p.A,
                        { key: n, style: { marginBottom: '25px' } },
                        c.createElement('div', { id: t.codename }),
                        c.createElement(
                          u.A,
                          {
                            xs: '5',
                            md: '4',
                            lg: '3',
                            className: 'd-md-block d-lg-block',
                          },
                          c.createElement(W, {
                            src: t.previewImgLink,
                            alt: t.codename,
                            className: 'img-fluid pub-image-preview',
                          }),
                          t.conferenceTag &&
                            c.createElement(
                              z,
                              {
                                className:
                                  'conference-tag d-inline-block d-sm-flex',
                              },
                              c.createElement(
                                'div',
                                { className: 'tag-inner' },
                                t.conferenceTag
                              )
                            )
                        ),
                        c.createElement(
                          u.A,
                          { xs: '12', md: '8', lg: '9' },
                          c.createElement(
                            'a',
                            {
                              className: 'paper-title pub-element',
                              href:
                                T.N +
                                '/' +
                                t.codename +
                                '/' +
                                t.codename +
                                '.pdf',
                            },
                            t.title
                          ),
                          c.createElement(
                            'div',
                            { className: 'authors pub-element' },
                            t.authors.map((e, n) =>
                              c.createElement(
                                c.Fragment,
                                { key: n },
                                c.createElement(
                                  'span',
                                  {
                                    key: n,
                                    className: e.bold
                                      ? 'author-important'
                                      : null,
                                  },
                                  e.name
                                ),
                                n === t.authors.length - 1 ? '. ' : ', '
                              )
                            )
                          ),
                          t.conferenceFullName &&
                            c.createElement(
                              'div',
                              { className: 'publication-location pub-element' },
                              c.createElement(
                                'span',
                                { className: 'conference' },
                                t.conferenceFullName
                              ),
                              ',',
                              ' ',
                              c.createElement(
                                'span',
                                { className: 'conference-year' },
                                t.year
                              ),
                              '.'
                            ),
                          t.award &&
                            c.createElement(
                              'div',
                              { className: 'awards pub-element' },
                              t.award.honorableMention &&
                                c.createElement(
                                  'span',
                                  { className: 'honorable' },
                                  '🏅 Best Paper Honorable Mention Award'
                                ),
                              t.award.bestPaper &&
                                c.createElement(
                                  'span',
                                  { className: 'best-paper' },
                                  '🏆 Best Paper Award'
                                )
                            ),
                          c.createElement(
                            'div',
                            { className: 'data pub-element' },
                            c.createElement(
                              'span',
                              null,
                              '[',
                              c.createElement(
                                'a',
                                {
                                  href: '#' + t.codename,
                                  id: t.codename + '-abstract',
                                  style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                  },
                                },
                                'Abstract'
                              ),
                              ']'
                            ),
                            void 0 !== t.ieeexplore &&
                              c.createElement(
                                'span',
                                null,
                                '[',
                                c.createElement(
                                  'a',
                                  {
                                    href: t.ieeexplore,
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                    style: {
                                      display: 'flex',
                                      alignItems: 'center',
                                    },
                                  },
                                  'IEEE Digital Library'
                                ),
                                ']'
                              ),
                            void 0 !== t.acmdl &&
                              c.createElement(
                                'span',
                                null,
                                !1 === t.acmdl_available
                                  ? c.createElement(
                                      c.Fragment,
                                      null,
                                      c.createElement(
                                        'em',
                                        null,
                                        'ACM DL available soon!'
                                      )
                                    )
                                  : c.createElement(
                                      c.Fragment,
                                      null,
                                      '[',
                                      c.createElement(
                                        'a',
                                        {
                                          href: t.acmdl,
                                          target: '_blank',
                                          rel: 'noopener noreferrer',
                                          style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                          },
                                        },
                                        'ACM DL'
                                      ),
                                      ']'
                                    )
                              ),
                            void 0 !== t.pnasdl &&
                              c.createElement(
                                'span',
                                null,
                                !1 === t.pnasdl_available
                                  ? c.createElement(
                                      c.Fragment,
                                      null,
                                      c.createElement(
                                        'em',
                                        null,
                                        'Available soon!'
                                      )
                                    )
                                  : c.createElement(
                                      c.Fragment,
                                      null,
                                      '[',
                                      c.createElement(
                                        'a',
                                        {
                                          href: t.pnasdl,
                                          target: '_blank',
                                          rel: 'noopener noreferrer',
                                          style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                          },
                                        },
                                        'PNAS'
                                      ),
                                      ']'
                                    )
                              ),
                            void 0 !== t.arxiv &&
                              c.createElement(
                                'span',
                                null,
                                '[',
                                c.createElement(
                                  'a',
                                  {
                                    href: t.arxiv,
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                    style: {
                                      display: 'flex',
                                      alignItems: 'center',
                                    },
                                  },
                                  'arxiv'
                                ),
                                ']'
                              ),
                            !1 !== t.shouldShowLocalPaperLink
                              ? 'poster' === t.type
                                ? c.createElement(
                                    c.Fragment,
                                    null,
                                    c.createElement(
                                      'span',
                                      null,
                                      '[',
                                      c.createElement(
                                        'a',
                                        {
                                          href:
                                            T.N +
                                            '/' +
                                            t.codename +
                                            '/' +
                                            t.codename +
                                            '-paper.pdf',
                                          target: '_blank',
                                          rel: 'noopener noreferrer',
                                          style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                          },
                                        },
                                        'Extended Abstract'
                                      ),
                                      ']'
                                    ),
                                    c.createElement(
                                      'span',
                                      null,
                                      '[',
                                      c.createElement(
                                        'a',
                                        {
                                          href:
                                            T.N +
                                            '/' +
                                            t.codename +
                                            '/' +
                                            t.codename +
                                            '-poster.pdf',
                                          target: '_blank',
                                          rel: 'noopener noreferrer',
                                          style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                          },
                                        },
                                        'Poster'
                                      ),
                                      ']'
                                    )
                                  )
                                : c.createElement(
                                    'span',
                                    null,
                                    '[',
                                    c.createElement(
                                      'a',
                                      {
                                        href:
                                          T.N +
                                          '/' +
                                          t.codename +
                                          '/' +
                                          t.codename +
                                          '.pdf',
                                        target: '_blank',
                                        rel: 'noopener noreferrer',
                                        style: {
                                          display: 'flex',
                                          alignItems: 'center',
                                        },
                                      },
                                      'Paper PDF'
                                    ),
                                    ']'
                                  )
                              : null,
                            void 0 !== t.conferenceTalkVideo &&
                              c.createElement(
                                'span',
                                null,
                                '[',
                                c.createElement(
                                  'a',
                                  {
                                    href: t.conferenceTalkVideo,
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                    style: {
                                      display: 'flex',
                                      alignItems: 'center',
                                    },
                                  },
                                  'Talk Video'
                                ),
                                ']'
                              ),
                            void 0 !== t.cmuSCSMedia &&
                              c.createElement(
                                'span',
                                null,
                                '[',
                                c.createElement(
                                  'a',
                                  {
                                    href: t.cmuSCSMedia,
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                    style: {
                                      display: 'flex',
                                      alignItems: 'center',
                                    },
                                  },
                                  'CMU SCS News'
                                ),
                                ']'
                              ),
                            void 0 !== t.msrblog &&
                              c.createElement(
                                'span',
                                null,
                                '[',
                                c.createElement(
                                  'a',
                                  {
                                    href: t.msrblog,
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                    style: {
                                      display: 'flex',
                                      alignItems: 'center',
                                    },
                                    title: t.msrblogTitle,
                                  },
                                  'Microsoft Research Blog'
                                ),
                                ']'
                              ),
                            void 0 !== t.codebaseLink &&
                              c.createElement(
                                'span',
                                null,
                                '[',
                                c.createElement(
                                  'a',
                                  {
                                    href: t.codebaseLink,
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                    style: {
                                      display: 'flex',
                                      alignItems: 'center',
                                    },
                                  },
                                  'Code'
                                ),
                                ']'
                              ),
                            void 0 !== t.blogPost &&
                              c.createElement(
                                'span',
                                null,
                                '[',
                                c.createElement(
                                  'a',
                                  {
                                    href: t.blogPost,
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                    style: {
                                      display: 'flex',
                                      alignItems: 'center',
                                    },
                                  },
                                  'Blog Post'
                                ),
                                ']'
                              ),
                            void 0 !== t.website &&
                              c.createElement(
                                'span',
                                null,
                                '[',
                                c.createElement(
                                  'a',
                                  {
                                    href: t.website,
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                    style: {
                                      display: 'flex',
                                      alignItems: 'center',
                                    },
                                  },
                                  'Project Website'
                                ),
                                ']'
                              )
                          ),
                          c.createElement(
                            L,
                            {
                              defaultOpen: !1,
                              toggler: '#' + t.codename + '-abstract',
                              className: 'paper-abstract publication-collapse',
                            },
                            t.abstract
                          )
                        ),
                        e.data.length - 1 !== n &&
                          c.createElement(
                            u.A,
                            { xs: '12', className: 'd-sm-none' },
                            c.createElement('div', {
                              style: {
                                height: 20,
                                borderBottom: '1px solid #eee',
                              },
                            })
                          )
                      )
                    )
                  )
                )
              )
            );
          }),
          t
        );
      })(c.Component);
      var q = V;
    },
  },
]);
//# sourceMappingURL=component---src-pages-research-index-jsx-2cd222c5143d6f4c243f.js.map
