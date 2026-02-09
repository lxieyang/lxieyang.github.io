(self.webpackChunkmichael_personal_website =
  self.webpackChunkmichael_personal_website || []).push([
  [829],
  {
    1542: function (e, t, n) {
      var r = n(5972).k5;
      e.exports.m = function (e) {
        return r({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
              },
            },
          ],
        })(e);
      };
    },
    2110: function (e, t, n) {
      var r = n(5972).k5;
      e.exports.E = function (e) {
        return r({
          tag: 'svg',
          attr: { version: '1.2', baseProfile: 'tiny', viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'g',
              attr: {},
              child: [
                {
                  tag: 'path',
                  attr: {
                    d: 'M17 21h-10c-1.654 0-3-1.346-3-3v-12c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v12c0 1.654-1.346 3-3 3zm-10-16c-.551 0-1 .449-1 1v12c0 .551.449 1 1 1h10c.551 0 1-.449 1-1v-12c0-.551-.449-1-1-1h-10zM16 11h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5zM16 8h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5zM16 14h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5zM16 17h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5z',
                  },
                },
              ],
            },
          ],
        })(e);
      };
    },
    2603: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          Head: function () {
            return L;
          },
        });
      var r,
        a,
        l,
        i,
        c,
        o,
        s,
        m,
        g = n(5276),
        u = n(7126),
        d = n.n(u),
        E = n(3031),
        h = n.n(E),
        p = n(6540),
        f = n(2568),
        S = n(9722),
        b = n.n(S),
        y = n(5826),
        x = n(9704),
        v = n(5876),
        w = n(9014),
        C = n(519),
        M = n(6054),
        A = n(9662);
      const I = f.Ay.div(
          r ||
            (r = (0, g.A)([
              '\n  display: flex;\n  align-items: center;\n  margin: 1rem 0rem 1rem 0rem;\n',
            ]))
        ),
        k = f.Ay.div(
          a || (a = (0, g.A)(['\n  font-size: 2.4rem;\n  font-weight: 700;\n']))
        ),
        D = f.Ay.a(
          l ||
            (l = (0, g.A)([
              '\n  margin-left: 2rem;\n  display: flex;\n  align-items: center;\n  font-size: 1.2rem;\n  border-radius: 5px;\n  padding: 0.25rem 0.5rem;\n  /* border: 1px solid #c1000f; */\n  border: 1px solid #01751e;\n  /* background-color: #c1000f; */\n  /* color: #fff; */\n',
            ]))
        ),
        U = f.Ay.div(
          i || (i = (0, g.A)(['\n  color: #666;\n  font-size: 1rem;\n']))
        ),
        z = f.Ay.div(c || (c = (0, g.A)(['\n  margin-bottom: 1.5rem;\n']))),
        N = f.Ay.div(
          o ||
            (o = (0, g.A)([
              '\n  font-family: sans-serif;\n  font-weight: 600;\n  font-size: 1.5rem;\n',
            ]))
        ),
        P = f.Ay.div(
          s ||
            (s = (0, g.A)([
              '\n  font-family: sans-serif;\n  font-weight: 500;\n  font-style: italic;\n  color: #666;\n  font-size: 1.1rem;\n',
            ]))
        ),
        T = f.Ay.span(
          m ||
            (m = (0, g.A)([
              '\n  /* font-style: italic; */\n  font-weight: 300;\n\n  @media (max-width: 768px) {\n    font-style: normal;\n    font-weight: 600;\n    color: #c1000f;\n  }\n',
            ]))
        ),
        R = (e) => {
          let { dateString: t, content: n, indexSpace: r = 2 } = e;
          return p.createElement(
            y.A,
            { style: { marginBottom: '0.45rem' } },
            p.createElement(
              x.A,
              { xs: '12', sm: r },
              p.createElement(T, null, t)
            ),
            p.createElement(
              x.A,
              { xs: '12', sm: 12 - r, style: { fontWeight: 300 } },
              n
            )
          );
        },
        H = (e) => {
          let { indexString: t, children: n, indexSpace: r = 40 } = e;
          return p.createElement(
            'div',
            {
              style: {
                marginBottom: '0.5rem',
                display: 'flex',
                fontWeight: 300,
              },
            },
            p.createElement(
              'div',
              {
                style: {
                  fontStyle: 'italic',
                  width: r,
                  flexShrink: 0,
                  marginRight: '0.5rem',
                },
              },
              t
            ),
            p.createElement('div', { style: { flex: 1 } }, n)
          );
        },
        L = (e) => {
          let { data: t } = e;
          return p.createElement(
            p.Fragment,
            null,
            p.createElement('title', null, 'CV | ' + t.site.siteMetadata.title)
          );
        };
      t.default = (e) => {
        let { data: t } = e,
          n = [
            {
              prompt: 'Conference Papers, Journal Articles & Pre-prints',
              prefix: 'C',
              data: b()('publications[*type=conference]', {
                data: A.u,
              }).value.filter((e) => !1 !== e.showOnWebCV),
            },
            {
              prompt: 'Workshop Papers & Posters',
              prefix: 'W',
              data: b()('publications[*type=workshop]', { data: A.u }).value,
            },
            {
              prompt: 'Patents and Defensive Publications',
              prefix: 'P',
              data: b()('publications[*type=patent]', { data: A.u }).value,
            },
          ];
        return p.createElement(
          w.A,
          { pathName: 'CV' },
          p.createElement(
            'div',
            null,
            p.createElement(
              I,
              null,
              p.createElement(k, null, 'Michael Xieyang Liu'),
              p.createElement(
                D,
                { className: 'button', href: C.Bj },
                p.createElement(v.U, {
                  className: 'icon',
                  style: { marginRight: '0.5rem' },
                }),
                ' ',
                'Download CV'
              )
            ),
            p.createElement(
              y.A,
              null,
              p.createElement(
                x.A,
                { xs: '12', sm: '6' },
                p.createElement(
                  U,
                  null,
                  'People + AI Research (PAIR) ',
                  p.createElement('br', null),
                  'Google DeepMind'
                )
              ),
              p.createElement(
                x.A,
                { xs: '12', sm: '6' },
                p.createElement(M.A, { data: t, inCVPage: !0, showTwitter: !1 })
              )
            ),
            p.createElement(
              z,
              null,
              p.createElement(N, null, 'Research Focus'),
              'My research is at the intersection of Human-computer Interaction (HCI), programming tools, sensemaking, intelligent user interfaces, and human-AI interaction, where I design and build systems that accelerate online sensemaking for developers and facilitate human-AI interactions for end-users.'
            ),
            p.createElement(
              z,
              null,
              p.createElement(N, null, 'Professional Experience'),
              p.createElement(R, {
                dateString: '2023 - ',
                content: p.createElement(
                  p.Fragment,
                  null,
                  p.createElement('strong', null, 'Google DeepMind'),
                  ', Senior Research Scientist'
                ),
              }),
              p.createElement(R, {
                dateString: '2022',
                content: p.createElement(
                  p.Fragment,
                  null,
                  p.createElement('strong', null, 'Microsoft Research'),
                  ', Research Intern',
                  p.createElement('br', null),
                  'Natural language interactions for end-user programmers using code-generating LLMs.'
                ),
              }),
              p.createElement(R, {
                dateString: '2020',
                content: p.createElement(
                  p.Fragment,
                  null,
                  p.createElement('strong', null, 'Google'),
                  ', Research Intern',
                  p.createElement('br', null),
                  "Go developers' refactoring practices and engagement with refactoring tools"
                ),
              }),
              p.createElement(R, {
                dateString: '2019',
                content: p.createElement(
                  p.Fragment,
                  null,
                  p.createElement('strong', null, 'Bosch Research'),
                  ', Research Intern',
                  p.createElement('br', null),
                  'AI & Crowdsourcing for improving the safety and performance of autonomous vehicles.'
                ),
              })
            ),
            p.createElement(
              z,
              null,
              p.createElement(N, null, 'Education'),
              p.createElement(R, {
                dateString: '2017 - 2023',
                content: p.createElement(
                  p.Fragment,
                  null,
                  p.createElement('strong', null, 'Ph.D.'),
                  ' in',
                  ' ',
                  p.createElement('strong', null, 'Human-Computer Interaction'),
                  p.createElement('br', null),
                  'Carnegie Mellon University, Pittsburgh, PA, USA ',
                  p.createElement('br', null),
                  'Thesis: Tool Support for Knowledge Foraging, Structuring, and Transfer during Online Sensemaking ',
                  p.createElement('br', null),
                  'Advisors:',
                  ' ',
                  p.createElement(
                    'a',
                    {
                      href: 'https://www.cs.cmu.edu/~bam/',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    'Brad A. Myers'
                  ),
                  ' ',
                  '&',
                  ' ',
                  p.createElement(
                    'a',
                    {
                      href: 'https://kittur.org/',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    'Aniket Kittur'
                  ),
                  p.createElement('br', null),
                  'Committee:',
                  ' ',
                  p.createElement(
                    'a',
                    {
                      href: 'https://www.thecoalalab.com/kenholstein',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    'Kenneth Holstein'
                  ),
                  ',',
                  ' ',
                  p.createElement(
                    'a',
                    {
                      href: 'https://sites.google.com/site/dmrussell/',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    'Daniel M. Russell'
                  ),
                  ' '
                ),
              }),
              p.createElement(R, {
                dateString: '2017 - 2021',
                content: p.createElement(
                  p.Fragment,
                  null,
                  p.createElement('strong', null, 'M.S.'),
                  ' in',
                  ' ',
                  p.createElement('strong', null, 'Human-Computer Interaction'),
                  p.createElement('br', null),
                  'Carnegie Mellon University, Pittsburgh, PA, USA ',
                  p.createElement('br', null)
                ),
              }),
              p.createElement(R, {
                dateString: '2013 - 2017',
                content: p.createElement(
                  p.Fragment,
                  null,
                  p.createElement('strong', null, 'B.S.'),
                  ' in ',
                  p.createElement('strong', null, 'Computer Science'),
                  p.createElement('br', null),
                  'University of Michigan, Ann Arbor, MI, USA ',
                  p.createElement('br', null)
                ),
              })
            ),
            p.createElement(
              z,
              null,
              p.createElement(N, null, 'Publications'),
              n.map((e, t) =>
                p.createElement(
                  'div',
                  { key: t },
                  p.createElement(P, null, e.prompt),
                  d()(h()(e.data, ['year', 'month'])).map((t, n) =>
                    p.createElement(
                      H,
                      {
                        indexString: p.createElement(
                          p.Fragment,
                          null,
                          e.prefix,
                          e.data.length - n,
                          '.'
                        ),
                        key: n,
                      },
                      t.authors.map((e, n) =>
                        p.createElement(
                          p.Fragment,
                          { key: n },
                          p.createElement(
                            'span',
                            {
                              key: n,
                              style: { fontWeight: e.bold ? '500' : '300' },
                            },
                            e.name
                          ),
                          n === t.authors.length - 1 ? '. ' : ', '
                        )
                      ),
                      'patent' !== t.type
                        ? p.createElement(
                            'a',
                            {
                              style: { color: '#005f18', fontWeight: 500 },
                              href:
                                A.N +
                                '/' +
                                t.codename +
                                '/' +
                                t.codename +
                                '.pdf',
                            },
                            t.title
                          )
                        : t.website
                        ? p.createElement(
                            'a',
                            {
                              style: { color: '#005f18', fontWeight: 500 },
                              href: t.website,
                              target: '_blank',
                              rel: 'noreferrer',
                            },
                            t.title
                          )
                        : p.createElement(
                            'span',
                            { style: { fontWeight: 500 } },
                            t.title
                          ),
                      '.',
                      ' ',
                      p.createElement(
                        'span',
                        { style: { fontStyle: 'italic', fontWeight: 300 } },
                        t.conferenceFullName,
                        ', ',
                        p.createElement('span', null, t.year)
                      ),
                      p.createElement('br', null),
                      'patent' !== t.type &&
                        p.createElement(
                          p.Fragment,
                          null,
                          p.createElement(
                            'span',
                            { style: { textDecoration: 'underline' } },
                            t.conferenceTag,
                            ' '
                          ),
                          p.createElement('br', null)
                        ),
                      t.award &&
                        p.createElement(
                          'div',
                          { style: { fontWeight: 600 } },
                          t.award.honorableMention &&
                            p.createElement(
                              'span',
                              { className: 'honorable' },
                              '🏅 Best Paper Honorable Mention Award'
                            ),
                          t.award.bestPaper &&
                            p.createElement(
                              'span',
                              { className: 'best-paper' },
                              '🏆 Best Paper Award'
                            )
                        )
                    )
                  )
                )
              )
            ),
            p.createElement(
              z,
              null,
              p.createElement(N, null, 'Invited Talks & Guest Lectures'),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'April 2024' },
                p.createElement(
                  'strong',
                  null,
                  p.createElement(
                    'a',
                    {
                      href: 'https://drive.google.com/file/d/1xg8X-Es4PVK5wVx_Cjay7hFzdN3_9IVb/view',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    'Guest lecture: Sensemaking'
                  )
                ),
                ',',
                ' ',
                p.createElement(
                  'a',
                  {
                    href: 'https://www.cs.cmu.edu/~sherryw/courses/2024s-dhcs.html',
                    target: '_blank',
                    rel: 'noreferrer',
                  },
                  'Designing Human-Centered Software'
                ),
                ', Carnegie Mellon University'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Dec. 2023' },
                p.createElement(
                  'strong',
                  null,
                  p.createElement(
                    'a',
                    {
                      href: 'https://youtu.be/CqtRFZGYfks',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    'Building AI Sensemaking Systems'
                  )
                ),
                ', University of Zürich'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Sept. 2023' },
                p.createElement(
                  'strong',
                  null,
                  'Bridging the Abstraction Gap Between End-User Programmers and Code-Generating Large Language Models'
                ),
                ', Viginia Tech'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Mar. 2023' },
                p.createElement(
                  'strong',
                  null,
                  'Accelerating Programming Sensemaking with Human-Centered Interactive Systems'
                ),
                ', Microsoft Research'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Mar. 2023' },
                p.createElement(
                  'strong',
                  null,
                  'Accelerating Programming Sensemaking with Human-Centered Interactive Systems'
                ),
                ', Apple AI/ML'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Feb. 2023' },
                p.createElement(
                  'strong',
                  null,
                  'Accelerating Sensemaking with Human-Centered Interactive Systems'
                ),
                ', Google Research'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Feb. 2023' },
                p.createElement(
                  'strong',
                  null,
                  'Accelerating Sensemaking with Human-Centered Interactive Systems'
                ),
                ', Allen Institute for Artificial Intelligence (AI2)'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Aug. 2022' },
                p.createElement(
                  'strong',
                  null,
                  'Bridging the Abstration Gap Between End-User Programmers and LLM-backed Code-Generating Models'
                ),
                ', Microsoft Research'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Aug. 2020' },
                p.createElement(
                  'strong',
                  null,
                  'Understanding Refactoring with Golang'
                ),
                ', Google Cloud DevEx Presentation'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'April 2018' },
                p.createElement(
                  'strong',
                  null,
                  'Supporting Knowledge Acceleration for Programming from a Sensemaking Perspective'
                ),
                ', Sensemaking Workshop at CHI Conference on Human Factors in Computing Systems'
              )
            ),
            p.createElement(
              z,
              null,
              p.createElement(N, null, 'Open-source Experience'),
              p.createElement(R, {
                dateString: '2019 - present',
                content: p.createElement(
                  p.Fragment,
                  null,
                  p.createElement(
                    'strong',
                    null,
                    p.createElement(
                      'a',
                      {
                        href: 'https://github.com/lxieyang/chrome-extension-boilerplate-react/',
                        target: '_blank',
                        rel: 'noreferrer',
                      },
                      'Chrome extension boilerplate (w/ React & Webpack)'
                    )
                  ),
                  p.createElement('br', null),
                  p.createElement(
                    'a',
                    {
                      href: 'https://github.com/lxieyang/chrome-extension-boilerplate-react/stargazers',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    '3.6k stars'
                  ),
                  ',',
                  ' ',
                  p.createElement(
                    'a',
                    {
                      href: 'https://github.com/lxieyang/chrome-extension-boilerplate-react/forks',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    '1.1k forks'
                  ),
                  ' ',
                  'on GitHub (as of Oct. 2024)'
                ),
              }),
              p.createElement(R, {
                dateString: '2019 - present',
                content: p.createElement(
                  p.Fragment,
                  null,
                  p.createElement(
                    'strong',
                    null,
                    p.createElement(
                      'a',
                      {
                        href: 'https://chrome.google.com/webstore/detail/vertical-tabs/pddljdmihkpdfpkgmbhdomeeifpklgnm',
                        target: '_blank',
                        rel: 'noreferrer',
                      },
                      'Vertical Tabs Chrome Extension'
                    )
                  ),
                  p.createElement('br', null),
                  p.createElement(
                    'a',
                    {
                      href: 'https://chrome.google.com/webstore/detail/vertical-tabs/pddljdmihkpdfpkgmbhdomeeifpklgnm',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    '36.9k users'
                  ),
                  ' ',
                  'on Chrome Web Store;',
                  ' ',
                  p.createElement(
                    'a',
                    {
                      href: 'https://github.com/lxieyang/vertical-tabs-chrome-extension',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    '460+ stars'
                  ),
                  ' ',
                  'on GitHub (as of Oct. 2024)'
                ),
              })
            ),
            p.createElement(
              z,
              null,
              p.createElement(N, null, 'Service'),
              p.createElement(P, null, 'Academic Service'),
              p.createElement(
                H,
                {
                  indexSpace: 160,
                  indexString: p.createElement(
                    'strong',
                    { style: { fontStyle: 'normal' } },
                    'Steering & Advising'
                  ),
                },
                p.createElement('u', null, 'ACM IUI'),
                ' 2025',
                ' ',
                p.createElement(
                  'a',
                  {
                    target: '_blank',
                    href: 'https://iui.acm.org/2025/committee_members.html',
                    rel: 'noreferrer',
                  },
                  'Doctoral Consortium Chair'
                )
              ),
              p.createElement(
                H,
                {
                  indexSpace: 160,
                  indexString: p.createElement(
                    'strong',
                    { style: { fontStyle: 'normal' } },
                    'Associate Chair'
                  ),
                },
                ' ',
                p.createElement('u', null, 'ACM CHI'),
                ' 2026',
                ' ',
                p.createElement(
                  'a',
                  {
                    target: '_blank',
                    href: 'https://chi2026.acm.org/authors/papers/selecting-a-subcommittee/#blending_interaction',
                    rel: 'noreferrer',
                  },
                  'Blending Interaction: Engineering Interactive Systems & Tools subcommittee'
                ),
                p.createElement('br', null),
                p.createElement('u', null, 'ACM CHI'),
                ' 2025',
                ' ',
                p.createElement(
                  'a',
                  {
                    target: '_blank',
                    href: 'https://chi2025.acm.org/subcommittees/selecting-a-subcommittee/#blending_interaction',
                    rel: 'noreferrer',
                  },
                  'Blending Interaction: Engineering Interactive Systems & Tools subcommittee'
                ),
                p.createElement('br', null),
                p.createElement('u', null, 'ACM UIST'),
                ' 2024',
                ' ',
                p.createElement(
                  'a',
                  {
                    target: '_blank',
                    href: 'https://uist.acm.org/2024/organizers/',
                    rel: 'noreferrer',
                  },
                  'Program Committee Member'
                ),
                p.createElement('br', null),
                p.createElement('u', null, 'ACM CHI'),
                ' 2024',
                ' ',
                p.createElement(
                  'a',
                  {
                    target: '_blank',
                    href: 'https://chi2024.acm.org/subcommittees/selecting-a-subcommittee/',
                    rel: 'noreferrer',
                  },
                  'Computational Interaction subcommittee'
                ),
                p.createElement('br', null),
                p.createElement('u', null, 'ACM CHI'),
                ' 2020 Late Breaking Work Track'
              ),
              p.createElement(
                H,
                {
                  indexSpace: 160,
                  indexString: p.createElement(
                    'strong',
                    { style: { fontStyle: 'normal' } },
                    'Paper Reviewing'
                  ),
                },
                p.createElement('strong', null, 'Conferences'),
                ': ',
                p.createElement('u', null, 'CHI'),
                ' (2019 - 2026), ',
                p.createElement('u', null, 'CSCW'),
                ' ',
                '(2019 - 2023), ',
                p.createElement('u', null, 'UIST'),
                ' (2019 - 2025), ',
                p.createElement('u', null, 'IUI'),
                ' (2020),',
                ' ',
                p.createElement('u', null, 'VAST'),
                ' (2020)',
                p.createElement('br', null),
                p.createElement('strong', null, 'Journal'),
                ': ',
                p.createElement('u', null, 'TOCHI'),
                ' (2022) ',
                p.createElement('br', null),
                p.createElement(
                  'strong',
                  null,
                  'Special Recognitions for Outstanding Reviews'
                ),
                ':',
                ' ',
                p.createElement('u', null, 'UIST'),
                ' (2021, 2024, 2025), ',
                p.createElement('u', null, 'CHI'),
                ' (2023, 2025)'
              ),
              p.createElement(P, null, 'Departmental & Community Service'),
              p.createElement(
                H,
                {
                  indexSpace: 160,
                  indexString: p.createElement(
                    'strong',
                    { style: { fontStyle: 'normal' } },
                    'Committee Member'
                  ),
                },
                'Ph.D. Admission Committee (2022-2023)'
              ),
              p.createElement(
                H,
                {
                  indexSpace: 160,
                  indexString: p.createElement(
                    'strong',
                    { style: { fontStyle: 'normal' } },
                    'Committee Member'
                  ),
                },
                'REU (Research Experience for Undergraduate) Admissions Committee (2021-2022)'
              ),
              p.createElement(
                H,
                {
                  indexSpace: 160,
                  indexString: p.createElement(
                    'strong',
                    { style: { fontStyle: 'normal' } },
                    'Committee Member'
                  ),
                },
                'CMU HCII Faculty Lunch Organization Committee (2019-2020)'
              ),
              p.createElement(
                H,
                {
                  indexSpace: 160,
                  indexString: p.createElement(
                    'strong',
                    { style: { fontStyle: 'normal' } },
                    'Committee Member'
                  ),
                },
                'CMU HCII Ph.D. Student Lounge Committee (2019-2020)'
              )
            ),
            p.createElement(
              z,
              null,
              p.createElement(N, null, 'Research Experience'),
              p.createElement(R, {
                dateString: '2023 - present',
                content: p.createElement(
                  p.Fragment,
                  null,
                  p.createElement('strong', null, 'Research Scientist'),
                  p.createElement('br', null),
                  p.createElement('em', null, 'People + AI Research, Google'),
                  p.createElement('br', null)
                ),
              }),
              p.createElement(R, {
                dateString: '2017 - 2023',
                content: p.createElement(
                  p.Fragment,
                  null,
                  p.createElement(
                    'strong',
                    null,
                    'Graduate Research Assistant'
                  ),
                  ' (advised by',
                  ' ',
                  p.createElement(
                    'a',
                    {
                      href: 'http://www.cs.cmu.edu/~bam/',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    'Brad A. Myers'
                  ),
                  ' ',
                  '&',
                  ' ',
                  p.createElement(
                    'a',
                    {
                      href: 'http://kittur.org/',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    'Aniket Kittur)'
                  ),
                  p.createElement('br', null),
                  p.createElement(
                    'em',
                    null,
                    'Human-Computer Interaction Institute, Carnegie Mellon University'
                  ),
                  p.createElement('br', null),
                  'Working on prototype systems that scaffold developers in making decisions using information from various web sources and enable subsequent developers to learn, understand, and reuse those decisions and rationales.'
                ),
              }),
              p.createElement(R, {
                dateString: '2020 - 2021',
                content: p.createElement(
                  p.Fragment,
                  null,
                  p.createElement('strong', null, 'Research Assistant'),
                  ' (with',
                  ' ',
                  p.createElement(
                    'a',
                    {
                      href: 'http://jodiforlizzi.com/',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    'Jodi Forlizzi'
                  ),
                  ',',
                  ' ',
                  p.createElement(
                    'a',
                    {
                      href: 'http://www.cs.cmu.edu/~roni/',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    'Roni Rosenfeld'
                  ),
                  ' ',
                  '&',
                  ' ',
                  p.createElement(
                    'a',
                    {
                      href: 'http://www.stat.cmu.edu/~ryantibs/',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    'Ryan Tibshirani'
                  ),
                  ')',
                  p.createElement('br', null),
                  p.createElement(
                    'em',
                    null,
                    p.createElement(
                      'a',
                      {
                        href: 'https://delphi.cmu.edu/',
                        target: '_blank',
                        rel: 'noreferrer',
                      },
                      'Delphi Research Group'
                    ),
                    ', Carnegie Mellon University'
                  ),
                  p.createElement('br', null),
                  'Working on the visualization team of the',
                  ' ',
                  p.createElement(
                    'a',
                    {
                      href: 'https://delphi.cmu.edu/covidcast/',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    'COVIDcast system'
                  ),
                  ', which displays indicators related to COVID-19 activity level across the U.S. These indicators are derived from a variety of anonymized, aggregated data sources made available by multiple partners, including Facebook, Google, and Quidel.',
                  ' ',
                  p.createElement(
                    'a',
                    {
                      href: 'https://www.cmu.edu/news/stories/archives/2020/april/cmu-unveils-covidcast-maps.html',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    '[Press coverage]'
                  )
                ),
              }),
              p.createElement(R, {
                dateString: '2016 - 2017',
                content: p.createElement(
                  p.Fragment,
                  null,
                  p.createElement('strong', null, 'Undergraduate Researcher'),
                  p.createElement('br', null),
                  p.createElement(
                    'em',
                    null,
                    'Crowds and Machines Lab, University of Michigan, Ann Arbor'
                  ),
                  p.createElement('br', null),
                  'Worked on crowd & AI-powered interdisciplinary projects that address novel and promising research questions.'
                ),
              }),
              p.createElement(R, {
                dateString: '2015 - 2016',
                content: p.createElement(
                  p.Fragment,
                  null,
                  p.createElement('strong', null, 'Research Assistant'),
                  ' (advised by',
                  ' ',
                  p.createElement(
                    'a',
                    {
                      href: 'https://www.cs.princeton.edu/~jiadeng/',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    'Jia Deng'
                  ),
                  ')',
                  p.createElement('br', null),
                  p.createElement(
                    'em',
                    null,
                    'Vision & Learning Lab, University of Michigan, Ann Arbor'
                  ),
                  p.createElement('br', null),
                  'Worked on a computer vision based toolkit that boosts performance on human-object interaction detection by exploiting human-object spatial relations.'
                ),
              })
            ),
            p.createElement(
              z,
              null,
              p.createElement(N, null, 'Mentoring'),
              p.createElement(
                H,
                { indexSpace: 120, indexString: '2018 - 2019' },
                p.createElement(
                  'strong',
                  null,
                  p.createElement(
                    'a',
                    {
                      href: 'https://janeon.github.io/',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    'Jane Hsieh'
                  )
                ),
                ' ',
                p.createElement('br', null),
                p.createElement(
                  'em',
                  null,
                  'Oberlin College Student (Currently a CMU S3D Ph.D. Candidate)'
                ),
                ' ',
                p.createElement('br', null),
                "Studied programmers' web-foraging behaviors. Contributed to the development of the Unakite system."
              ),
              p.createElement(
                H,
                { indexSpace: 120, indexString: '2017 - 2018' },
                p.createElement('strong', null, 'Emily Deng'),
                ' ',
                p.createElement('br', null),
                p.createElement('em', null, "CMU Master's Student"),
                ' ',
                p.createElement('br', null),
                'Designed and carried out interview studies with programmers that probe their programming behaviors and needs.'
              ),
              p.createElement(
                H,
                { indexSpace: 120, indexString: '2017 - 2018' },
                p.createElement('strong', null, 'Shaun Burley'),
                ' ',
                p.createElement('br', null),
                p.createElement('em', null, "CMU Master's Student"),
                ' ',
                p.createElement('br', null),
                'Designed and carried out interview studies with programmers that probe their programming behaviors and needs.'
              )
            ),
            p.createElement(
              z,
              null,
              p.createElement(
                N,
                null,
                'Selected Honors, Grants, Awards & Coverage'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'April 2023' },
                p.createElement(
                  'strong',
                  null,
                  '🏅 Best Paper Honorable Mention Award'
                ),
                ', ACM CHI Conference on Human Factors in Computing Systems (CHI 2023)'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Nov. 2022' },
                p.createElement(
                  'strong',
                  null,
                  'Special Recognitions for Outstanding Reviews'
                ),
                ', ACM CHI Conference on Human Factors in Computing Systems (CHI 2023)'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Nov. 2021' },
                p.createElement(
                  'strong',
                  null,
                  'CMU SCS News Coverage on our CSCW 2021 Best Paper'
                ),
                ':',
                ' ',
                p.createElement(
                  'a',
                  {
                    href: 'https://www.cs.cmu.edu/news/2021/reuse-content-tool',
                    target: '_blank',
                    rel: 'noreferrer',
                  },
                  '"CMU Researchers Develop Tool To Help Determine When To Reuse Content"'
                )
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Oct. 2021' },
                p.createElement('strong', null, '🏆 Best Paper Award'),
                ', 24th ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW 2021)'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'June 2021' },
                p.createElement(
                  'strong',
                  null,
                  'Special Recognitions for Outstanding Reviews'
                ),
                ', 34th Annual ACM Symposium on User Interface Software and Technology (UIST 2021)'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'April 2020' },
                p.createElement(
                  'strong',
                  null,
                  'CMU News Coverage on COVIDcast'
                ),
                ':',
                ' ',
                p.createElement(
                  'a',
                  {
                    href: 'https://www.cmu.edu/news/stories/archives/2020/april/cmu-unveils-covidcast-maps.html',
                    target: '_blank',
                    rel: 'noreferrer',
                  },
                  '"Carnegie Mellon Unveils Five Interactive COVID-19 Maps"'
                )
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Oct. 2019' },
                p.createElement(
                  'strong',
                  null,
                  '🏅 Best Paper Honorable Mention Award'
                ),
                ', 32nd Annual ACM Symposium on User Interface Software and Technology (UIST 2019)'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'June 2018' },
                p.createElement(
                  'strong',
                  null,
                  p.createElement(
                    'a',
                    {
                      href: 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=1814826',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    'SHF: Small: Knowledge Acceleration for Programming ($500,000 over 3 years)'
                  )
                ),
                ', NSF'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'March 2017' },
                p.createElement('strong', null, 'James B. Angell Scholar'),
                ', 94th Annual Honors Convocation, University of Michigan'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'March 2017' },
                p.createElement('strong', null, 'EECS Scholar Award'),
                ', 2017 EECS Honors & Awards Reception, University of Michigan'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'May 2016' },
                p.createElement(
                  'strong',
                  null,
                  'Summer Undergraduate Research Experience (SURE) program'
                ),
                ', University of Michigan'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'July 2015, July 2016' },
                p.createElement(
                  'strong',
                  null,
                  'Tang-Junyuan Fellowship (Top 2/250, $50,000)'
                ),
                ', UM-SJTU Joint Institute'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Dec. 2015, April 2016' },
                p.createElement('strong', null, "Dean's List"),
                ', University of Michigan'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Aug. 2015' },
                p.createElement(
                  'strong',
                  null,
                  'Basic Teaching Assistant Certificate'
                ),
                ', Center for Learning and Teaching, UM-SJTU Joint Institute'
              ),
              p.createElement(
                H,
                {
                  indexSpace: 100,
                  indexString: 'Dec. 2013, Aug. 2014, Dec. 2014',
                },
                p.createElement('strong', null, "Dean's List"),
                ', UM-SJTU Joint Institute'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'June 2015' },
                p.createElement(
                  'strong',
                  null,
                  'Fellowship for Outstanding Academic Performance'
                ),
                ', Shanghai Jiao Tong University'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'April 2015' },
                p.createElement(
                  'strong',
                  null,
                  p.createElement(
                    'a',
                    {
                      href: 'https://www.comap-math.com/mcm/2015Certs/33804.pdf',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    'Meritorious Winner (Acceptance: 9%)'
                  )
                ),
                ', COMAP Mathematical Contest in Modeling'
              )
            ),
            p.createElement(
              z,
              null,
              p.createElement(N, null, 'Teaching Experience'),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Fall 2020' },
                p.createElement(
                  'strong',
                  null,
                  'Teaching Assistant – 05-410/05-610 User-Centered Research & Evaluation'
                ),
                ' ',
                p.createElement('br', null),
                'Human-Computer Interaction Institute, Carnegie Mellon University'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Fall 2020' },
                p.createElement(
                  'strong',
                  null,
                  'Teaching Assistant –',
                  ' ',
                  p.createElement(
                    'a',
                    {
                      href: 'https://www.cs.cmu.edu/~bam/uicourse/05631fall2020/',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    '05-431/05-631 Software Structures for User Interfaces'
                  )
                ),
                ' ',
                p.createElement('br', null),
                'Human-Computer Interaction Institute, Carnegie Mellon University'
              ),
              ' ',
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Fall 2019' },
                p.createElement(
                  'strong',
                  null,
                  'Teaching Assistant – 05-430/05-630 Programming Usable Interfaces'
                ),
                ' ',
                p.createElement('br', null),
                'Human-Computer Interaction Institute, Carnegie Mellon University'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Winter 2017' },
                p.createElement(
                  'strong',
                  null,
                  'Instructional Aide –',
                  ' ',
                  p.createElement(
                    'a',
                    {
                      href: 'https://docs.google.com/document/d/1tn3SMN37z4f_Q8Sey-oe9LuZKh9AMctI7B4HO-zs-F4/edit?usp=sharing',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    'EECS484 Database Management Systems'
                  )
                ),
                ' ',
                p.createElement('br', null),
                'University of Michigan, Ann Arbor'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Fall 2016' },
                p.createElement(
                  'strong',
                  null,
                  'Instructional Aide –',
                  ' ',
                  p.createElement(
                    'a',
                    {
                      href: 'http://web.eecs.umich.edu/~aprakash/eecs484/index.html',
                      target: '_blank',
                      rel: 'noreferrer',
                    },
                    'EECS484 Database Management Systems'
                  )
                ),
                ' ',
                p.createElement('br', null),
                'University of Michigan, Ann Arbor'
              ),
              p.createElement(
                H,
                { indexSpace: 100, indexString: 'Summer 2015' },
                p.createElement(
                  'strong',
                  null,
                  'Teaching Assistant – Vv255 Multivariate Calculus'
                ),
                ' ',
                p.createElement('br', null),
                'University of Michigan – Shanghai Jiao Tong University Joint Institute'
              )
            ),
            p.createElement(
              z,
              null,
              p.createElement(N, null, 'Languages, Technical Skills & Courses'),
              p.createElement(
                H,
                {
                  indexSpace: 160,
                  indexString: p.createElement(
                    'strong',
                    { style: { fontStyle: 'normal' } },
                    'Languages'
                  ),
                },
                p.createElement('strong', null, 'English, Chinese (Mandarin)'),
                ' - Native or bilingual proficiency, ',
                p.createElement('strong', null, 'German'),
                ' - Limited working proficiency'
              ),
              p.createElement(
                H,
                {
                  indexSpace: 160,
                  indexString: p.createElement(
                    'strong',
                    { style: { fontStyle: 'normal' } },
                    'Programming'
                  ),
                },
                'HTML/Javascript/CSS, Python, SQL, C/C++, Swift, Java, LaTeX, etc.'
              ),
              p.createElement(
                H,
                {
                  indexSpace: 160,
                  indexString: p.createElement(
                    'strong',
                    { style: { fontStyle: 'normal' } },
                    'Web & App Development'
                  ),
                },
                'React.js, Angular, Redux, Bootstrap, Node.js, PHP, Ionic Framework, etc.'
              ),
              p.createElement(
                H,
                {
                  indexSpace: 160,
                  indexString: p.createElement(
                    'strong',
                    { style: { fontStyle: 'normal' } },
                    'Deep Learning & AI'
                  ),
                },
                'PyTorch, Tensorflow, ml5.js'
              ),
              p.createElement(
                H,
                {
                  indexSpace: 160,
                  indexString: p.createElement(
                    'strong',
                    { style: { fontStyle: 'normal' } },
                    'Courses'
                  ),
                },
                'Machine Learning, Deep Learning, Advanced User Interfaces, Database Management Systems, Information Security, Web Development'
              )
            )
          )
        );
      };
    },
    4463: function (e, t, n) {
      var r = n(5972).k5;
      e.exports.h = function (e) {
        return r({
          tag: 'svg',
          attr: { viewBox: '0 0 496 512' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
              },
            },
          ],
        })(e);
      };
    },
    5074: function (e, t, n) {
      var r = n(5972).k5;
      e.exports.D = function (e) {
        return r({
          tag: 'svg',
          attr: { viewBox: '0 0 512 512' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M288 48H136c-22.092 0-40 17.908-40 40v336c0 22.092 17.908 40 40 40h240c22.092 0 40-17.908 40-40V176L288 48zm-16 144V80l112 112H272z',
              },
            },
          ],
        })(e);
      };
    },
    5876: function (e, t, n) {
      var r = n(5972).k5;
      e.exports.U = function (e) {
        return r({
          tag: 'svg',
          attr: { viewBox: '0 0 16 16', fill: 'currentColor' },
          child: [
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                d: 'M.5 8a.5.5 0 01.5.5V12a1 1 0 001 1h12a1 1 0 001-1V8.5a.5.5 0 011 0V12a2 2 0 01-2 2H2a2 2 0 01-2-2V8.5A.5.5 0 01.5 8z',
                clipRule: 'evenodd',
              },
            },
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                d: 'M5 7.5a.5.5 0 01.707 0L8 9.793 10.293 7.5a.5.5 0 11.707.707l-2.646 2.647a.5.5 0 01-.708 0L5 8.207A.5.5 0 015 7.5z',
                clipRule: 'evenodd',
              },
            },
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                d: 'M8 1a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 018 1z',
                clipRule: 'evenodd',
              },
            },
          ],
        })(e);
      };
    },
    5972: function (e, t, n) {
      'use strict';
      n.d(t, {
        k5: function () {
          return s;
        },
      });
      var r = n(6540),
        a = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        l = r.createContext && r.createContext(a),
        i = function () {
          return (
            (i =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            i.apply(this, arguments)
          );
        },
        c = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        };
      function o(e) {
        return (
          e &&
          e.map(function (e, t) {
            return r.createElement(e.tag, i({ key: t }, e.attr), o(e.child));
          })
        );
      }
      function s(e) {
        return function (t) {
          return r.createElement(m, i({ attr: i({}, e.attr) }, t), o(e.child));
        };
      }
      function m(e) {
        var t = function (t) {
          var n,
            a = e.attr,
            l = e.size,
            o = e.title,
            s = c(e, ['attr', 'size', 'title']),
            m = l || t.size || '1em';
          return (
            t.className && (n = t.className),
            e.className && (n = (n ? n + ' ' : '') + e.className),
            r.createElement(
              'svg',
              i(
                {
                  stroke: 'currentColor',
                  fill: 'currentColor',
                  strokeWidth: '0',
                },
                t.attr,
                a,
                s,
                {
                  className: n,
                  style: i(i({ color: e.color || t.color }, t.style), e.style),
                  height: m,
                  width: m,
                  xmlns: 'http://www.w3.org/2000/svg',
                }
              ),
              o && r.createElement('title', null, o),
              e.children
            )
          );
        };
        return void 0 !== l
          ? r.createElement(l.Consumer, null, function (e) {
              return t(e);
            })
          : t(a);
      }
    },
    6054: function (e, t, n) {
      'use strict';
      n.d(t, {
        A: function () {
          return u;
        },
      });
      var r = n(6540);
      var a = () =>
          r.createElement(
            'a',
            { href: 'mailto:lxieyang.ggl@gmail.com' },
            r.createElement(
              'span',
              { className: 'ObfuscatedEmail-module--Obfuscated--13a88' },
              'moc.liamg@lgg.gnayeixl'
            )
          ),
        l = n(519),
        i = n(1542),
        c = n(4463),
        o = n(6768),
        s = n(5074),
        m = n(2110);
      let g;
      var u = (e) => {
        let {
          data: t,
          inCVPage: n,
          showEmail: u = !0,
          showTwitter: d = !0,
          showGithub: E = !0,
          showScholar: h = !0,
          showCV: p = !0,
          showThesis: f = !0,
        } = e;
        const { 0: S, 1: b } = (0, r.useState)(!1);
        return r.createElement(
          'div',
          {
            className: 'contact-container',
            role: 'button',
            tabIndex: 0,
            onDoubleClick: () => {
              b(!S),
                g && clearTimeout(g),
                (g = setTimeout(() => {
                  b(!1);
                }, 3e3));
            },
            onKeyDown: (e) => {
              'Enter' === e.key &&
                (b(!S),
                g && clearTimeout(g),
                (g = setTimeout(() => {
                  b(!1);
                }, 3e3)));
            },
          },
          u &&
            r.createElement(
              'div',
              { className: 'contact-entry' },
              r.createElement(i.m, { className: 'icon' }),
              ' ',
              r.createElement(a, null)
            ),
          h &&
            r.createElement(
              'div',
              { className: 'contact-entry' },
              r.createElement(o.w, { className: 'icon' }),
              ' ',
              r.createElement(
                'a',
                {
                  href: t.site.siteMetadata.externalLinks.googleScholarProfile,
                },
                'Google Scholar'
              )
            ),
          E &&
            r.createElement(
              'div',
              { className: 'contact-entry' },
              r.createElement(c.h, { className: 'icon' }),
              r.createElement(
                'a',
                { href: t.site.siteMetadata.externalLinks.github },
                'Github'
              )
            ),
          p &&
            !0 !== n &&
            r.createElement(
              'div',
              { className: 'contact-entry' },
              r.createElement(s.D, { className: 'icon' }),
              ' ',
              r.createElement('a', { href: l.Bj }, 'Curriculum Vitae (PDF)')
            ),
          d &&
            r.createElement(
              'div',
              { className: 'contact-entry' },
              r.createElement('img', {
                src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxnIGZpbGw9Im5vbmUiIGZpbGxSdWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyIDExMikiPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik03MTEuMTExIDgwMEg4OC44OUMzOS44IDgwMCAwIDc2MC4yIDAgNzExLjExMVY4OC44OUMwIDM5LjggMzkuOCAwIDg4Ljg4OSAwSDcxMS4xMUM3NjAuMiAwIDgwMCAzOS44IDgwMCA4OC44ODlWNzExLjExQzgwMCA3NjAuMiA3NjAuMiA4MDAgNzExLjExMSA4MDAiLz48cGF0aCBmaWxsPSIjRkZGIiBmaWxsUnVsZT0ibm9uemVybyIgZD0iTTYyOCA2MjNINDg0Ljk0MkwxNzQgMTc5aDE0My4wNTh6bS0xMjYuMDEyLTM3LjY1MWg1Ni45NkwzMDAuMDEzIDIxNi42NWgtNTYuOTZ6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbFJ1bGU9Im5vbnplcm8iIGQ9Ik0yMTkuMjk2ODg1IDYyMyAzNzkgNDM3LjczMjQwOSAzNTguMTE0MjEyIDQxMCAxNzQgNjIzeiIvPjxwYXRoIGZpbGw9IiNGRkYiIGZpbGxSdWxlPSJub256ZXJvIiBkPSJNNDA5IDM0OC4zODczNDcgNDI5LjIxMjk4NiAzNzcgNjAzIDE3NyA1NTguMzMwNDE3IDE3N3oiLz48L2c+PC9zdmc+Cg==',
                alt: 'X',
                className: 'icon',
                style: { width: '1.1rem', height: '1.1rem' },
              }),
              r.createElement(
                'a',
                { href: t.site.siteMetadata.externalLinks.twitter },
                'X'
              )
            ),
          f &&
            r.createElement(
              'div',
              {
                className: 'contact-entry',
                style: {
                  display: S ? 'block' : 'none',
                  transition: 'all 0.1s ease-in-out',
                },
              },
              r.createElement(m.E, { className: 'icon' }),
              r.createElement(
                'a',
                { href: l.hy, target: '_blank', rel: 'noopener noreferrer' },
                'Dissertation'
              ),
              ' '
            ),
          r.createElement('div', { style: { width: '100%', height: '20px' } })
        );
      };
    },
    6768: function (e, t, n) {
      var r = n(5972).k5;
      e.exports.w = function (e) {
        return r({
          tag: 'svg',
          attr: { viewBox: '0 0 24 24' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z',
              },
            },
          ],
        })(e);
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-cv-index-jsx-6773b315988f4498592f.js.map
