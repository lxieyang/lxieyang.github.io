import React from 'react';
import { graphql } from 'gatsby';
import {
  // Container,
  Row,
  Col
} from 'reactstrap';

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
            <div className="image-watermark-bottom-right">
              Yellowstone National Park, US
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
            Michael Xieyang Liu (刘燮洋) &nbsp;
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
          </h1>

          <p className="my-title">
            #hci-researcher &nbsp; #developer &nbsp; #adventurer
          </p>

          <hr />

          <p className="self-identify-paragraph">
            I am a 2nd year Ph.D. student at{' '}
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
              <span className="contact-name">]</span> (Dec 2018)
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
              <span className="contact-name">Facebook: </span>
              <a href={data.site.siteMetadata.externalLinks.facebook}>
                Michael Xieyang Liu
              </a>
              <br />
              <span className="contact-name">Instagram: </span>
              <a href={data.site.siteMetadata.externalLinks.instagram}>
                xieyangl
              </a>
              <br />
            </Col>
          </Row>

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
        <ul style={{ paddingLeft: '16px' }}>
          {NewsList.map((newsItem, idx) => (
            <li
              key={idx}
              className={newsItem.shouldDisplay === false ? 'old-news' : null}
              dangerouslySetInnerHTML={{
                __html: newsItem.content
              }}
            />
          ))}
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
            borderRadius: '4px'
          }}
        >
          Due to my recent Achilles tendon injury, my travel plan is very
          limited. I'm expected to recover fully in early 2019.
        </div>
        {TravelList.map((travelItem, idx) => {
          const YearGap = 2.0;
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
                  : 'travel-old'
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
