import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col } from 'reactstrap';

import Layout from '../components/layout/layout';
import ContactInfo from '../components/UI/ContactInfo/ContactInfo';

import ProfileImg from '../images/lxieyang-avatar.png';
import HeadshotTooltip from '../components/UI/HeadshotTooltip/HeadshotTooltip';
import BradImg from '../images/people/bradmyers.jpg';
import NikiImg from '../images/people/nikikittur.jpg';

import Publication from '../components/Content/Publications/Publications';

import './index.css';

const IndexPage = ({ data }) => {
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

                {/* <p className="basic-info-text d-none d-sm-none d-md-block d-lg-block">
                  Pronoun: he/him
                </p> */}
                <p className="basic-info-text">
                  Senior Research Scientist
                  <br /> @GoogleDeepMind
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
            <br />

            <p>
              Michael Xieyang Liu is a Senior Research Scientist at Google
              DeepMind in the{' '}
              <a
                href="https://pair.withgoogle.com/"
                target="_blank"
                rel="noreferrer"
              >
                PAIR
              </a>{' '}
              (People + AI Research Initiative) team. His research aims to
              improve human-AI interaction, with a particular focus on human
              interaction with multimodal large language models and controllable
              AI.
            </p>

            <p>
              He previously earned his Ph.D. from the{' '}
              <a href="https://www.hcii.cmu.edu" rel="noreferrer">
                Human-Computer Interaction Institute
              </a>{' '}
              @{' '}
              <a href="https://www.cmu.edu" rel="noreferrer">
                Carnegie Mellon University
              </a>
              , where he was advised by{' '}
              <a
                href="http://www.cs.cmu.edu/~bam/"
                id="brad-myers"
                rel="noreferrer"
              >
                Dr. Brad A. Myers
              </a>{' '}
              and{' '}
              <a href="http://kittur.org/" id="niki-kittur" rel="noreferrer">
                Dr. Niki Kittur
              </a>
              . During his Ph.D., he interned at the{' '}
              <a
                href="https://www.microsoft.com/en-us/research/group/research-software-engineering-rise/"
                target="_blank"
                rel="noreferrer"
              >
                RiSE
              </a>{' '}
              group and{' '}
              <a
                href="https://www.microsoft.com/en-us/research/project/calc-intelligence/"
                target="_blank"
                rel="noreferrer"
              >
                Calc Intelligence
              </a>{' '}
              group at Microsoft Research, the Google Cloud team at Google, and
              Bosch Research.
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
              collect, organize, and make sense of information online as well as
              to keep track of their complex decision making processes so that
              other individuals could also benefit.
            </p>
            <p>
              He publishes at premier HCI academic venues such as CHI, UIST, and
              CSCW, VIS, including three award-winning papers: a{' '}
              <strong>best paper honorable mention</strong> at CHI 2023, a{' '}
              <strong>best paper</strong> at CSCW 2021, and a{' '}
              <strong>best paper honorable mention</strong> at UIST 2019. His
              work has been generously supported by the{' '}
              <a
                href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1814826"
                rel="noreferrer"
              >
                National Science Foundation (NSF)
              </a>
              , Google, Bosch, the Office of Naval Research, and the{' '}
              <a
                href="https://centerforknowledgeacceleration.wordpress.com/"
                rel="noreferrer"
              >
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

            <Publication />

            <hr />
            <br />

            <h1>Selected Open-source projects</h1>

            <ul>
              {/* Vertical Tabs */}
              <li style={{ marginBottom: 8 }}>
                <div style={{ fontWeight: 'bold' }}>
                  <a
                    href={
                      'https://chrome.google.com/webstore/detail/vertical-tabs/pddljdmihkpdfpkgmbhdomeeifpklgnm'
                    }
                    rel="noreferrer"
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
                    rel="noreferrer"
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
                    rel="noreferrer"
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
                    rel="noreferrer"
                  >
                    [Code]
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export const Head = ({ location, data }) => {
  const { pathname } = location;
  return (
    <>
      <title>
        {`${pathname !== '/' ? pathname : 'Home'} | ${
          data.site.siteMetadata.title
        }`}
      </title>
      <html lang="en" />
      <meta
        name="description"
        content="Michael Xieyang Liu's personal website"
      />
      <meta
        name="keywords"
        content="Google Research, Human-AI Interaction, Computer Science, Research Scientist"
      />
    </>
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
          linkedin
          twitter
        }
      }
    }
  }
`;

export default IndexPage;
