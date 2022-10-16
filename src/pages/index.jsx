import React from 'react';
import moment from 'moment';
import ordinal from 'ordinal';
import randomItem from 'random-item';
import { graphql } from 'gatsby';
import {
  // Container,
  Row,
  Col,
} from 'reactstrap';

import Layout from '../components/layout/layout';
import ContactInfo from '../components/UI/ContactInfo/ContactInfo';

import ProfileImg from '../images/lxieyang-avatar.jpg';
import ProfileAvatar1 from '../images/avatar-mid-1.jpg';
import ProfileAvatar2 from '../images/avatar-mid-2.jpg';
import ProfileAvatar3 from '../images/avatar-mid-3.jpg';
import CMUAvatar from '../images/cmu.png';
import HCIIAvatar from '../images/hcii-logo-big.jpg';
import CMULogo from '../images/cmu-logo.png';
import CMUTextLogo from '../images/cmu-text-logo-transparent.png';
import HCIITextLogo from '../images/hcii-text-logo.png';
import HeadshotTooltip from '../components/UI/HeadshotTooltip/HeadshotTooltip';
import BradImg from '../images/people/bradmyers.jpg';
import NikiImg from '../images/people/nikikittur.jpg';
// import WalterImg from '../images/people/walterlasecki.jpg';

import { CVPath } from '../utils/constants';

import NewsList from '../utils/news';
import TravelList from '../utils/travel';
import Publication from '../components/Content/Publications/Publications';

import './index.css';
import Experiences from '../components/Content/Experiences/Experiences';

const IndexPage = ({ data }) => {
  const candidateAvatars = [
    ProfileImg,
    ProfileAvatar1,
    ProfileAvatar2,
    ProfileAvatar3,
  ];

  return (
    <Layout pathName={'Home'}>
      <Row>
        <Col
          sm="4"
          md="3"
          // className="d-none d-sm-none d-md-block d-lg-block"
        >
          <div
            className="homepage-avatar-section sticky-top"
            style={{ top: '5rem' }}
          >
            <Row>
              <Col xs="4" sm="12">
                <div className="watermark-image-display-container">
                  <img
                    // src={randomItem(candidateAvatars)}
                    src={ProfileImg}
                    alt="profile"
                    // style={{ maxWidth: '100%', maxHeight: '100%' }}
                    // style={{ transform: 'scale(2)' }}
                  />
                  <br />
                  {/* <div className="image-watermark-top-left">Dec. 2021</div>
            <div className="image-watermark-bottom-right">
              Meteor Crater, Winslow, AZ
            </div> */}
                </div>
                <br />
              </Col>

              <Col xs="8" sm="12">
                <h5 style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  {data.site.siteMetadata.nameEnglish}
                </h5>

                <p className="basic-info-text d-none d-sm-none d-md-block d-lg-block">
                  Pronoun: he/him
                </p>
                <p className="basic-info-text">
                  Ph.D. student{' '}
                  <span className="d-inline-block d-sm-none">@CMU HCII</span>
                </p>
                <p className="basic-info-text d-none d-sm-block">
                  <a href="http://www.hcii.cmu.edu">
                    {' '}
                    Human-Computer Interaction Institute
                  </a>{' '}
                  <br />
                  <a href="https://www.cs.cmu.edu/">
                    School of Computer Science
                  </a>{' '}
                  <br />
                  <a href="https://www.cmu.edu/">Carnegie Mellon University</a>
                </p>

                <div className="d-none d-sm-none d-md-block d-lg-block">
                  <ContactInfo data={data} />
                </div>
              </Col>
            </Row>
          </div>
        </Col>

        <Col sm="8" md="9">
          <div className="homepage-word-section">
            {/* <h1
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {data.site.siteMetadata.nameEnglish} &nbsp;
            <span className="d-none d-sm-none d-md-none d-lg-inline">
              <img
                src={CMUAvatar}
                width="30"
                height="30"
                className="d-inline-block"
                alt="cmu-avatar"
              />
              <img
                src={HCIIAvatar}
                width="30"
                height="30"
                className="d-inline-block"
                alt="hcii-avatar"
              />
            </span>
          </h1> */}
            {/* <Row>
            <Col xs="4" sm="4" className="d-sm-block d-md-none">
              <div>
                <img
                  src={ProfileImg}
                  alt="profile"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
            </Col>
            <Col xs="8" sm="8" md="12">
              <p className="my-title d-md-block">
                #humanComputerInteraction &nbsp; #programmingTools &nbsp;
                #sensemaking &nbsp; #intelligentUserInterfaces
              </p>
            </Col>
          </Row> */}

            <div className="header-banner-images-container d-none d-sm-none d-md-block d-lg-block">
              <img src={HCIITextLogo} alt="hcii" /> &nbsp; &nbsp; &nbsp;
              {/* <img src={CMULogo} alt="cmu" /> &nbsp; */}
              <img
                src={CMUTextLogo}
                alt="cmu-text"
                style={{
                  marginTop: '12px',
                }}
              />
            </div>
            <Row>
              <Col style={{ margin: 0, padding: 0 }}>
                <div
                  style={{
                    display: 'inline-block',
                    // backgroundColor: 'rgba(193, 0, 15, 0.75)',
                    // color: '#fff',
                    backgroundColor: '#fff',
                    color: '#333',
                    border: '2px dashed rgba(193, 0, 15, 0.75)',
                    margin: '0px 16px',
                    marginTop: 0,
                    padding: '6px 12px',
                    borderRadius: 8,
                  }}
                >
                  📢 I will be on the job market for{' '}
                  <strong>
                    industry research or applied scientist positions
                  </strong>{' '}
                  in 2023. Let's chat if you know an intersting opportunities!
                </div>
              </Col>
            </Row>
            {/* <h1>About me</h1> */}
            <br />
            <p className="">
              Michael Xieyang Liu is a{' '}
              <s>{ordinal(1 + moment().diff(moment([2017, 8]), 'years'))}</s>{' '}
              <em>final</em> year Ph.D. student at{' '}
              <a href="http://www.hcii.cmu.edu">
                Human-Computer Interaction Institute
              </a>{' '}
              @ <a href="http://www.cmu.edu">Carnegie Mellon University</a>,
              where he is advised by{' '}
              <a href="http://www.cs.cmu.edu/~bam/" id="brad-myers">
                Dr. Brad A. Myers
              </a>{' '}
              and{' '}
              <a href="http://kittur.org/" id="niki-kittur">
                Dr. Niki Kittur
              </a>
              .
              {/* Prior to Ph.D., he received his dual Bachelor’s degrees in
              Computer Science at{' '}
              <a href="https://www.umich.edu">
                University of Michigan, Ann Arbor
              </a>{' '}
              and{' '}
              <a href="http://en.sjtu.edu.cn">Shanghai Jiao Tong University</a>. */}
            </p>
            <p>
              He works at the intersection of{' '}
              <strong>Human-computer Interaction (HCI)</strong>,{' '}
              <strong>Programming Support Tools</strong>,{' '}
              <strong>Sensemaking</strong>,{' '}
              <strong>End-user Programming</strong>, and{' '}
              <strong>Intelligent User Interfaces</strong>, where he uses
              human-centered methods to design, build, and study interactive
              systems to empower individuals, especially developers, to find,
              collect, organize, and make sese of information online as well as
              to keep track of their complex decision making processes so that
              other individuals could also benefit.
            </p>
            <p>
              He publishes at premier HCI academic venues such as CHI, UIST, and
              CSCW, including two award-winning papers: a{' '}
              <strong>best paper</strong> at CSCW 2021 and a{' '}
              <strong>best paper honorable mention</strong> paper at UIST 2019.
              His work has been generously supported by the{' '}
              <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1814826">
                National Science Foundation (NSF)
              </a>
              , Google, Bosch, the Office of Naval Research, and the{' '}
              <a href="https://centerforknowledgeacceleration.wordpress.com/">
                CMU Center for Knowledge Acceleration
              </a>
              .
              <br />
              <HeadshotTooltip target="brad-myers" headshotPath={BradImg} />
              <HeadshotTooltip target="niki-kittur" headshotPath={NikiImg} />
            </p>

            <div className="d-sm-none d-md-none d-lg-none">
              <ContactInfo data={data} />
            </div>
            <hr />
            {/* <p>
            I worked as an undergraduate researcher with{' '}
            <a href="https://web.eecs.umich.edu/~wlasecki/" id="walter-lasecki">
              Dr. Walter S. Lasecki
            </a>{' '}
            in the{' '}
            <a href="http://web.eecs.umich.edu/~wlasecki/croma.html">
              Crowds + Machines Lab (Croma Lab)
            </a>{' '}
            during my time at Umich.
            <HeadshotTooltip target="walter-lasecki" headshotPath={WalterImg} />
          </p> */}

            <h1>Selected Open-source projects</h1>

            <ul>
              {/* Vertical Tabs */}
              <li style={{ marginBottom: 8 }}>
                <div style={{ fontWeight: 'bold' }}>
                  <a
                    href={
                      'https://chrome.google.com/webstore/detail/vertical-tabs/pddljdmihkpdfpkgmbhdomeeifpklgnm'
                    }
                  >
                    Vertical Tabs Chrome Extension
                  </a>
                </div>
                <div>
                  <img
                    alt="chrome-store-version"
                    src={
                      'https://img.shields.io/chrome-web-store/v/pddljdmihkpdfpkgmbhdomeeifpklgnm'
                    }
                  />
                  &nbsp; &nbsp;
                  <img
                    alt="user-count"
                    src={
                      'https://img.shields.io/chrome-web-store/users/pddljdmihkpdfpkgmbhdomeeifpklgnm'
                    }
                  />
                  &nbsp; &nbsp;
                  {/* <img
                  alt="master-branch-version"
                  src={
                    'https://img.shields.io/github/package-json/v/lxieyang/vertical-tabs-chrome-extension/master'
                  }
                />
                &nbsp; &nbsp; */}
                  <img
                    alt="last-commit"
                    src={
                      'https://img.shields.io/github/last-commit/lxieyang/vertical-tabs-chrome-extension'
                    }
                  />
                  &nbsp; &nbsp;
                  <img
                    alt="star-count"
                    src={
                      'https://img.shields.io/github/stars/lxieyang/vertical-tabs-chrome-extension?style=social'
                    }
                  />
                  &nbsp; &nbsp;
                  <a
                    href={
                      'https://github.com/lxieyang/vertical-tabs-chrome-extension'
                    }
                  >
                    [Code]
                  </a>
                </div>
              </li>

              {/* Chrome extension boilerplate (w/ React & Webpack) */}
              <li>
                <div style={{ fontWeight: 'bold' }}>
                  <a
                    style={{ display: 'flex', alignItems: 'center' }}
                    href={
                      'https://github.com/lxieyang/chrome-extension-boilerplate-react'
                    }
                  >
                    Chrome extension boilerplate (w/ React & Webpack)
                  </a>
                </div>
                <div>
                  <img
                    alt="fork-count"
                    src={
                      'https://img.shields.io/github/forks/lxieyang/chrome-extension-boilerplate-react'
                    }
                  />
                  &nbsp; &nbsp;
                  <img
                    alt="npm-version"
                    src={
                      'https://img.shields.io/npm/v/chrome-extension-boilerplate-react'
                    }
                  />
                  &nbsp; &nbsp;
                  <img
                    alt="npm-download-week"
                    src={
                      'https://img.shields.io/npm/dw/chrome-extension-boilerplate-react'
                    }
                  />
                  &nbsp; &nbsp;
                  <img
                    alt="npm-download-month"
                    src={
                      'https://img.shields.io/npm/dm/chrome-extension-boilerplate-react'
                    }
                  />
                  &nbsp; &nbsp;
                  <img
                    alt="star-count"
                    src={
                      'https://img.shields.io/github/stars/lxieyang/chrome-extension-boilerplate-react?style=social'
                    }
                  />
                  &nbsp; &nbsp;
                  <a
                    href={
                      'https://github.com/lxieyang/chrome-extension-boilerplate-react'
                    }
                  >
                    [Code]
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <hr />
          <br />

          <Publication />

          {/* <br />
          <hr />
          <br />

          <Experiences /> */}

          <br />
          <hr />
          <br />

          <Row>
            <Col md="6">
              <h1>News</h1>
              <ul
                style={{
                  padding: 0,
                  listStyle: 'none',
                  // fontSize: '0.9rem'
                }}
              >
                {NewsList.map((newsItem, idx) => {
                  return (
                    <li
                      key={idx}
                      style={{
                        margin: '16px 0px',
                      }}
                      className={
                        newsItem.shouldDisplay === false ? 'old-news' : null
                      }
                    >
                      {newsItem.date && (
                        <span
                          className="news-date"
                          // style={{
                          //   fontSize:
                          //     idx === 0 ? '1rem' : idx <= 2 ? '0.95rem' : null,
                          //   padding:
                          //     idx === 0 ? '3px 6px' : idx <= 2 ? '2px 6px' : null,
                          //   opacity: idx === 0 ? 0.9 : idx <= 2 ? 0.75 : 0.6,
                          // }}
                        >
                          {moment(newsItem.date).fromNow()}
                        </span>
                      )}

                      <p style={{ paddingLeft: 3 }}>{newsItem.content}</p>
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col md="6">
              <h1>Travel</h1>
              {/* <div
          style={{
            backgroundColor: 'lightgrey',
            padding: '5px',
            fontSize: '0.8rem',
            color: '#333',
            borderRadius: '4px',
          }}
        >
          Due to my Achilles tendon injury in July 2018, my travel plan is
          limited. I'm expected to recover fully in late 2019.
        </div> */}
              {TravelList.map((travelItem, idx) => {
                const YearGap = 3.0;
                let diff =
                  (new Date() - new Date(travelItem.date)) /
                  (YearGap * 365 * 24 * 60 * 60 * 1000);

                return (
                  <div
                    key={idx}
                    className={[
                      'travel',
                      diff <= 0
                        ? 'travel-upcoming'
                        : diff <= 1
                        ? 'travel-past'
                        : 'travel-old',
                    ].join(' ')}
                    // style={{ fontSize: '0.9rem' }}
                  >
                    <Row>
                      <Col>{travelItem.date}</Col>
                      <Col>
                        <a href={travelItem.url}>{travelItem.event}</a>
                      </Col>
                      <Col>{travelItem.location}</Col>
                    </Row>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        nameEnglish
        nameChinese
        externalLinks {
          googleScholarProfile
          github
          facebook
          instagram
          twitter
        }
      }
    }
  }
`;

export default IndexPage;
