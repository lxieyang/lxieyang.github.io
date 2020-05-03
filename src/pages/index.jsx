import React from 'react';
import moment from 'moment';
import ordinal from 'ordinal';
import { graphql } from 'gatsby';
import {
  // Container,
  Row,
  Col,
} from 'reactstrap';
// import Darkmode from 'darkmode-js';

import Layout from '../components/layout/layout';
import ContactInfo from '../components/UI/ContactInfo/ContactInfo';

import ProfileImg from '../images/lxieyang-avatar.jpg';
import CMUAvatar from '../images/cmu.png';
import HCIIAvatar from '../images/hcii-logo-big.jpg';
import HeadshotTooltip from '../components/UI/HeadshotTooltip/HeadshotTooltip';
import BradImg from '../images/people/bradmyers.jpg';
import NikiImg from '../images/people/nikikittur.jpg';
import WalterImg from '../images/people/walterlasecki.jpg';

import { CVPath } from '../utils/constants';

import NewsList from '../utils/news';
import TravelList from '../utils/travel';

import './index.css';

const IndexPage = ({ data }) => (
  <Layout>
    <Row>
      <Col md="4" className="d-none d-sm-none d-md-block d-lg-block">
        <div className="homepage-avatar-section">
          <div className="watermark-image-display-container">
            <img
              src={ProfileImg}
              alt="profile"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
            <br />
            <div className="image-watermark-top-left">The Selfie (2019)</div>
            <div className="image-watermark-bottom-right">
              Great Lakes Science Center, Cleveland, OH
            </div>
          </div>
          <div className="card-words">
            <ContactInfo />
          </div>
        </div>
      </Col>

      <Col md="8">
        <div className="homepage-word-section">
          <h1>
            Michael Xieyang Liu{' '}
            <span className="d-none d-sm-none d-md-none d-lg-inline">
              (刘燮洋) &nbsp;
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
          </h1>
          <Row>
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
          </Row>
          <hr />
          <p className="self-identify-paragraph">
            I am a {ordinal(3)} year Ph.D. student at{' '}
            <a href="http://www.hcii.cmu.edu">
              Human-Computer Interaction Institute
            </a>{' '}
            @ <a href="http://www.cmu.edu">Carnegie Mellon University</a>.{' '}
            <br />
          </p>
          <p>
            My current research interests include{' '}
            <strong>human-computer interaction</strong>,{' '}
            <strong>programming support tools</strong>,{' '}
            <strong>sensemaking</strong>, <strong>end-user programming</strong>,{' '}
            <strong>intelligent user interfaces</strong>. <br />
            My current advisors are{' '}
            <a href="http://www.cs.cmu.edu/~bam/" id="brad-myers">
              Dr. Brad A. Myers
            </a>{' '}
            and{' '}
            <a href="http://kittur.org/" id="niki-kittur">
              Dr. Niki Kittur
            </a>
            . <br />
            <HeadshotTooltip target="brad-myers" headshotPath={BradImg} />
            <HeadshotTooltip target="niki-kittur" headshotPath={NikiImg} />
          </p>
          <hr />
          <p>
            I obtained my two B.S. degrees at{' '}
            <a href="https://www.umich.edu">
              University of Michigan, Ann Arbor
            </a>{' '}
            and{' '}
            <a href="http://en.sjtu.edu.cn">Shanghai Jiao Tong University</a>. I
            worked as an undergraduate researcher with{' '}
            <a href="https://web.eecs.umich.edu/~wlasecki/" id="walter-lasecki">
              Dr. Walter S. Lasecki
            </a>{' '}
            in the{' '}
            <a href="http://web.eecs.umich.edu/~wlasecki/croma.html">
              Crowds + Machines Lab (Croma Lab)
            </a>{' '}
            during my time in Michigan.
            <HeadshotTooltip target="walter-lasecki" headshotPath={WalterImg} />
          </p>
          <Row className="contacts">
            <Col sm="12">
              <span className="contact-name">Curriculum Vitae: [</span>
              <a href={CVPath}>pdf</a>
              <span className="contact-name">]</span> (May 2020)
              <br />
              <span className="contact-name">Google Scholar Profile: </span>
              <a
                href={data.site.siteMetadata.externalLinks.googleScholarProfile}
              >
                Michael Xieyang Liu
              </a>
              <br />
              <span className="contact-name">Github: </span>
              <a href={data.site.siteMetadata.externalLinks.github}>lxieyang</a>
              <br />
              {/* <span className="contact-name">Facebook: </span>
              <a href={data.site.siteMetadata.externalLinks.facebook}>
                Michael Xieyang Liu
              </a>
              <br /> */}
              {/* <span className="contact-name">Instagram: </span>
              <a href={data.site.siteMetadata.externalLinks.instagram}>
                xieyangl
              </a>
              <br /> */}
            </Col>
          </Row>
          <hr />
          Open-source projects:
          <ul>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <a
                style={{ display: 'flex', alignItems: 'center' }}
                href={
                  'https://chrome.google.com/webstore/detail/vertical-tabs/pddljdmihkpdfpkgmbhdomeeifpklgnm'
                }
              >
                Vertical Tabs Chrome Extension &nbsp;
                <img
                  alt="user-count"
                  src={
                    'https://img.shields.io/chrome-web-store/users/pddljdmihkpdfpkgmbhdomeeifpklgnm'
                  }
                />
              </a>{' '}
              &nbsp;
              <a
                href={
                  'https://github.com/lxieyang/vertical-tabs-chrome-extension'
                }
              >
                [Code]
              </a>
            </li>
          </ul>
          <div className="d-sm-block d-md-none d-lg-none">
            <hr />
            <ContactInfo />
          </div>
        </div>
      </Col>
    </Row>

    <br />
    <hr />
    <br />

    <Row>
      <Col md="6">
        <h2>News</h2>
        <ul style={{ padding: 0, listStyle: 'none' }}>
          {NewsList.map((newsItem, idx) => {
            return (
              <li
                key={idx}
                style={{
                  margin: '16px 0px',
                }}
                className={newsItem.shouldDisplay === false ? 'old-news' : null}
              >
                {newsItem.date && (
                  <span
                    className="news-date"
                    style={{
                      fontSize:
                        idx === 0 ? '1rem' : idx <= 2 ? '0.95rem' : null,
                      padding:
                        idx === 0 ? '3px 6px' : idx <= 2 ? '2px 6px' : null,
                      opacity: idx === 0 ? 0.9 : idx <= 2 ? 0.75 : 0.6,
                    }}
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
        <h2>Travel</h2>
        <div
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
        </div>
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
  </Layout>
);

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        externalLinks {
          googleScholarProfile
          github
          facebook
          instagram
        }
      }
    }
  }
`;

export default IndexPage;
