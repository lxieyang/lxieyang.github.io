import React, { Fragment } from 'react';
import { pubFilePathPrefix } from '../utils/publications';
import { FaAward, FaTrophy } from 'react-icons/fa';

export default [
  {
    content: (
      <Fragment>
        Our two full papers{' '}
        <span className="paper-title">
          {/* <a href={`#`} target="_blank" rel="noopener noreferrer"> */}
          Crystalline: Lowering the Cost for Developers to Collect and Organize
          Information for Decision Making
          {/* </a> */}
        </span>{' '}
        and{' '}
        <span className="paper-title">
          {/* <a href={`#`} target="_blank" rel="noopener noreferrer"> */}
          Understanding How Programmers Can Use Annotations on Documentation
          {/* </a> */}
        </span>{' '}
        are conditionally accepted to{' '}
        <a
          href="https://chi2022.acm.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CHI 2022
        </a>
        ! .
      </Fragment>
    ),
    date: new Date('2021-11-19'),
    shouldDisplay: true,
  },
  {
    content: (
      <Fragment>
        Our full paper{' '}
        <span className="paper-title">
          <a
            href={`${pubFilePathPrefix}/strata-cscw-2021/strata-cscw-2021.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            To Reuse or Not To Reuse? A Framework and System for Evaluating
            Summarized Knowledge
          </a>
        </span>{' '}
        just won a{' '}
        <span className="news-badge">
          <span className="best-paper">
            <FaTrophy /> &nbsp; Best Paper Award
          </span>
        </span>{' '}
        at{' '}
        <a
          href="https://cscw.acm.org/2021/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CSCW 2021
        </a>
        ! Check it out{' '}
        <a href={`${pubFilePathPrefix}/strata-cscw-2021/strata-cscw-2021.pdf`}>
          here
        </a>
        ! Also check out this piece of{' '}
        <a
          href={`https://www.cs.cmu.edu/news/2021/reuse-content-tool`}
          target="_blank"
          rel="noopener noreferrer"
        >
          news ccoverage
        </a>{' '}
        from CMU SCS!
      </Fragment>
    ),
    date: new Date('2021-10-15'),
    shouldDisplay: true,
  },
  {
    content: (
      <Fragment>
        Our full paper{' '}
        <span className="paper-title">
          <a
            href={`${pubFilePathPrefix}/tabsdo-uist-2021/tabsdo-uist-2021.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tabs.do: Task-Centric Browser Tab Management
          </a>
        </span>{' '}
        is accepted to{' '}
        <a
          href="https://uist.acm.org/uist2021/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UIST 2021
        </a>
        ! Check it out{' '}
        <a href={`${pubFilePathPrefix}/tabsdo-uist-2021/tabsdo-uist-2021.pdf`}>
          here
        </a>
        .
      </Fragment>
    ),
    date: new Date('2021-09-10'),
    shouldDisplay: true,
  },
  {
    content: (
      <Fragment>
        Our full paper{' '}
        <span className="paper-title">
          <a
            href={`${pubFilePathPrefix}/strata-cscw-2021/strata-cscw-2021.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            To Reuse or Not To Reuse? A Framework and System for Evaluating
            Summarized Knowledge
          </a>
        </span>{' '}
        is accepted to{' '}
        <a
          href="https://cscw.acm.org/2021/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CSCW 2021
        </a>
        ! Check it out{' '}
        <a href={`${pubFilePathPrefix}/strata-cscw-2021/strata-cscw-2021.pdf`}>
          here
        </a>
        .
      </Fragment>
    ),
    date: new Date('2020-12-22'),
    shouldDisplay: true,
  },
  {
    content: (
      <Fragment>
        Check out our{' '}
        <a
          href={'https://covidcast.cmu.edu/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          COVIDcast system
        </a>
        , which displays indicators related to COVID-19 activity level across
        the U.S. <br />
        CMU news coverage:{' '}
        <a
          href="https://www.cmu.edu/news/stories/archives/2020/april/cmu-unveils-covidcast-maps.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Carnegie Mellon Unveils Five Interactive COVID-19 Maps
        </a>
        . <br />
        Honored to be on this team and contribute!
      </Fragment>
    ),
    date: new Date('2020-05-01'),
    shouldDisplay: true,
  },
  {
    content: (
      <Fragment>
        I presented our full paper{' '}
        <span className="paper-title">
          <a
            href={`${pubFilePathPrefix}/unakite-uist-2019/unakite-uist-2019.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Unakite: Scaffolding Developers’ Decision-Making Using the Web
          </a>
        </span>{' '}
        at{' '}
        <a
          href="http://uist.acm.org/uist2019/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UIST 2019
        </a>{' '}
        in New Orleans. It received a{' '}
        <span className="news-badge">
          <span className="honorable">
            <FaAward /> &nbsp; Best Paper Honorable Mention Award
          </span>
        </span>
        ! Check it out{' '}
        <a
          href={`${pubFilePathPrefix}/unakite-uist-2019/unakite-uist-2019.pdf`}
        >
          here
        </a>
        .
      </Fragment>
    ),
    date: new Date('2019-10-21'),
    shouldDisplay: true,
  },
  {
    content: (
      <Fragment>
        {' '}
        I just updated my Ionic template app called
        <a
          href="https://github.com/lxieyang/ionic-audio-player"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Ionic Audio Player{' '}
        </a>{' '}
        with the latest version of Ionic and Angular. Can't believe it's been
        two years since I last updated it. It's a great starting point for devs
        who would like to build an audio player using the Ionic Framework.
        Please{' '}
        <a
          href="https://github.com/lxieyang/ionic-audio-player"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          check it out
        </a>
        !
      </Fragment>
    ),
    date: new Date('2019-08-20'),
    shouldDisplay: false,
  },
  {
    content: (
      <Fragment>
        Our full paper{' '}
        <span className="paper-title">
          <a
            href={`${pubFilePathPrefix}/unakite-uist-2019/unakite-uist-2019.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Unakite: Scaffolding Developers’ Decision-Making Using the Web
          </a>
        </span>{' '}
        is accepted to{' '}
        <a
          href="http://uist.acm.org/uist2019/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ACM UIST 2019
        </a>
        . It also received a{' '}
        <strong>
          <FaAward /> Best Paper Honorable Mention Award
        </strong>
        ! Check it out <a href="/research/#unakite-uist-2019">here</a>.
      </Fragment>
    ),
    date: new Date('2019-08-06'),
    shouldDisplay: true,
  },
  {
    content: (
      <Fragment>
        {' '}
        Tired of looking for a tab among the 50 tabs you opened ? The{' '}
        <a
          href="https://chrome.google.com/webstore/detail/vertical-tabs/pddljdmihkpdfpkgmbhdomeeifpklgnm"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Vertical Tabs Chrome extension{' '}
        </a>{' '}
        I made as a hobby project might help you with that!{' '}
        <a
          href="https://github.com/lxieyang/vertical-tabs-chrome-extension"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          [Source code]
        </a>
      </Fragment>
    ),
    date: new Date('2019-07-31'),
    shouldDisplay: true,
  },
  {
    content: (
      <Fragment>
        Please try{' '}
        <a
          href="https://unakite.info"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unakite
        </a>
        , our new plugin for Chrome to help programmers organize information
        found on the web!
      </Fragment>
    ),
    date: new Date('2019-04-01'),
    shouldDisplay: false,
  },
  {
    content: (
      <Fragment>
        Our full paper{' '}
        <span className="paper-title">
          <a
            href={`${pubFilePathPrefix}/av_anno/av_anno.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Popup: Reconstructing 3D Video Using Particle Filtering to Aggregate
            Crowd Responses
          </a>
        </span>{' '}
        is accepted to{' '}
        <a
          href="https://iui.acm.org/2019/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ACM IUI 2019
        </a>
        . Check it out <a href="/research/#av_anno">here</a>.
      </Fragment>
    ),
    date: new Date('2019-03-01'),
    shouldDisplay: false,
  },
  {
    content: (
      <Fragment>
        Our long paper{' '}
        <span className="paper-title">
          UNAKITE: Support Developers for Capturing and Persisting Design
          Rationales When Solving Problems Using Web Resources
        </span>{' '}
        is accepted to{' '}
        <a
          href="https://www.cs.washington.edu/dtshps2018/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          DTSHPS 2018
        </a>
        . Check it out <a href="/research/#unakite-vlhcc-workshop">here</a>.
      </Fragment>
    ),
    date: new Date('2018-10-01'),
    shouldDisplay: false,
  },
  {
    content: (
      <Fragment>
        Our poster{' '}
        <span className="paper-title">
          An Exploratory Study of Web Foraging to Understand and Support
          Programming Decisions
        </span>{' '}
        is accepted to{' '}
        <a
          href="https://vlhcc18.github.io/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          VL/HCC 2018
        </a>
        . Check it out{' '}
        <a href="/research/#stackoverflow-vlhcc-workshop">here</a>.
      </Fragment>
    ),
    date: new Date('2018-10-01'),
    shouldDisplay: false,
  },
  {
    content: (
      <Fragment>
        I re-wrote this website as a Single Page Application (SPA) with{' '}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby.js
        </a>{' '}
        and{' '}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React.js
        </a>
        ! Way shorter loading time and better performance! It used to be based
        on{' '}
        <a
          href="https://jekyllrb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jekyll
        </a>
        .
      </Fragment>
    ),
    date: new Date('2018-06-12'),
    shouldDisplay: false,
  },
  {
    content: (
      <Fragment>
        I presented our position paper{' '}
        <span className="paper-title">
          Supporting Knowledge Acceleration for Programming from a Sensemaking
          Perspective
        </span>{' '}
        at{' '}
        <a
          href="https://sensemakingchi2018.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CHI 2018 Sensemaking Workshop
        </a>
        . Check it out <a href="/research/#kap-sensemaking-workshop">here</a>.
      </Fragment>
    ),
    date: new Date('2018-05-09'),
    shouldDisplay: false,
  },
  {
    content: (
      <Fragment>
        Our paper{' '}
        <span className="paper-title">
          <a
            href={`${pubFilePathPrefix}/hico/hico.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learning to Detect Human-Object Interactions
          </a>
        </span>{' '}
        is accepted to{' '}
        <a
          href="http://wacv18.uccs.us"
          target="_blank"
          rel="noopener noreferrer"
        >
          WACV 2018
        </a>
        . Check it out <a href="/research/#hico">here</a>.
      </Fragment>
    ),
    date: new Date('2018-03-01'),
    shouldDisplay: false,
  },
  {
    content: (
      <Fragment>
        Check out my{' '}
        <a
          href="https://github.com/lxieyang/mobile-paper-reader"
          target="_blank"
          rel="noopener noreferrer"
        >
          Paper Reader app
        </a>{' '}
        to support better reading experience of <strong>pdf</strong> documents
        (especially research papers) on mobile phones!
      </Fragment>
    ),
    date: new Date('2018-02-01'),
    shouldDisplay: false,
  },
  {
    content: (
      <Fragment>
        <a href="http://www.cs.cmu.edu/~bam/">Dr. Brad A. Myers</a> and{' '}
        <a href="http://kittur.org/">Dr. Niki Kittur</a> are my advisors here at{' '}
        <a href="http://www.hcii.cmu.edu">CMU HCII</a>.
      </Fragment>
    ),
    date: new Date('2017-10-01'),
    shouldDisplay: false,
  },
  {
    content: (
      <Fragment>
        I started as a <strong>Ph.D.</strong> student at{' '}
        <a href="http://www.hcii.cmu.edu">
          Human-Computer Interaction Institute
        </a>{' '}
        @ <a href="http://www.cmu.edu">Carnegie Mellon University</a> in August
        2017!
      </Fragment>
    ),
    date: new Date('2017-08-20'),
    shouldDisplay: false,
  },
  {
    content: (
      <Fragment>
        I am deeply honored to receive my{' '}
        <strong>B.S. in Electrical and Computer Engineering</strong> from{' '}
        <a href="http://en.sjtu.edu.cn">Shanghai Jiao Tong University</a> in
        August 2017.
      </Fragment>
    ),
    date: new Date('2017-08-10'),
    shouldDisplay: false,
  },
  {
    content: (
      <Fragment>
        I am deeply honored to receive my{' '}
        <strong>B.S. in Computer Science</strong> from{' '}
        <a href="https://www.umich.edu">University of Michigan, Ann Arbor</a> in
        April 2017.
      </Fragment>
    ),
    date: new Date('2017-04-30'),
    shouldDisplay: false,
  },
];
