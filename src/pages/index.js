import React from 'react';
import { graphql } from 'gatsby';
import {
  // Container, 
  Row, Col
} from 'reactstrap';

import Layout from '../components/layout/layout';
import Email from '../components/UI/ObfuscatedEmail/ObfuscatedEmail';

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

const IndexPage = ({data}) => (
  <Layout>
    <Row>
      <Col md='4' className="d-none d-sm-none d-md-block">
        <div className="homepage-avatar-section">
          <div className="watermark-image-display-container">
            <img src={ProfileImg} alt="profile" style={{maxWidth: '100%', maxHeight: '100%'}}/><br />
            <div className="image-watermark-bottom-right">
              Yellowstone National Park, US
            </div>
          </div>
          <div className="card-words">
            <p className="my-title">
              #hci-researcher <br/>
              #developer #adventurer <br/>
              <a href="https://twitter.com/search?q=%23cmu&src=typd&lang=en" target="_blank" rel="noopener noreferrer">#cmu</a> <a href="https://twitter.com/search?q=%23hcii&src=typd&lang=en" target="_blank" rel="noopener noreferrer">#hcii</a> <a href="https://twitter.com/search?q=%23pgh&src=typd&lang=en" target="_blank" rel="noopener noreferrer">#pgh</a>
              <br/>
            </p>
          </div>
        </div>
      </Col>

      <Col md='8'>
        <div className="homepage-word-section">
          <h2>
            Michael Xieyang Liu (刘燮洋)
            &nbsp;
            <img src={ CMUAvatar } width="30" height="30" className="d-inline-block" alt="cmu-avatar"/>
            <img src={ HCIIAvatar } width="30" height="30" className="d-inline-block" alt="hcii-avatar"/>
          </h2>
          <hr/>
          <p className="self-identify-paragraph">
            I am a Ph.D. student at <a href="http://www.hcii.cmu.edu">Human-Computer Interaction Institute</a> @ <a href="http://www.cmu.edu">Carnegie Mellon University</a>. <br/>
          </p>
          <hr/>
          <p style={{fontSize: '1.0rem'}}>
            My current research interests include <strong>human-computer interaction</strong>, <strong>user interface development</strong>, and  <strong>sensemaking</strong>. <br/>
            My current advisors are <a href="http://www.cs.cmu.edu/~bam/" id="brad-myers">Dr. Brad A. Myers</a> and <a href="http://kittur.org/" id="niki-kittur">Dr. Niki Kittur</a>. <br/>

            <HeadshotTooltip target="brad-myers" headshotPath={ BradImg }/>
            <HeadshotTooltip target="niki-kittur" headshotPath={ NikiImg }/>

            I obtained my two B.S. degrees at <a href="https://www.umich.edu">University of Michigan, Ann Arbor</a> and <a href="http://en.sjtu.edu.cn">Shanghai Jiao Tong University</a>. I worked as an undergraduate researcher with <a href="https://web.eecs.umich.edu/~wlasecki/" id="walter-lasecki">Dr. Walter S. Lasecki</a> in the <a href="http://web.eecs.umich.edu/~wlasecki/croma.html">Crowds + Machines Lab (Croma Lab)</a> during my time in Michigan.

            <HeadshotTooltip target="walter-lasecki" headshotPath={ WalterImg }/>
          </p>
          <Row className="contacts">
            <Col md='6'>
              <span className="contact-name">Curriculum Vitae: [</span><a href={ CVPath }>pdf</a><span className="contact-name">]</span> (September 2017)<br/>
              <span className="contact-name">Email: </span> <Email />
              
            </Col>
            <Col md='6'>
              <span className="contact-name">Github: </span><a href={data.site.siteMetadata.externalLinks.github}>lxieyang</a><br/>
              <span className="contact-name">Facebook: </span><a href={data.site.siteMetadata.externalLinks.facebook}>Xieyang Liu (Michael Liu)</a><br/>
              <span className="contact-name">Instagram: </span><a href={data.site.siteMetadata.externalLinks.instagram}>xieyangl</a><br/>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>

    <br/><hr/><br/>


    <Row>
      <Col md='6'>  
        <h2>News</h2>
        <ul>
          {
            NewsList.map((newsItem, idx) => (
              <li 
                key={idx} 
                className={newsItem.shouldDisplay === false ? 'old-news' : null}
                dangerouslySetInnerHTML={{
                  __html: newsItem.content
                }}></li>
            ))
          }
        </ul>

      </Col>
      <Col md='6'>
        <h2>Travel</h2>
          {
            TravelList.map((travelItem, idx) => {
              const YearGap = 2.0;
              let diff = ((new Date()) - new Date(travelItem.date)) / (YearGap*365*24*60*60*1000);

              return (
                <div 
                  key={idx}
                  className={['travel',
                    diff <= 0
                    ? 'travel-upcoming'
                    : diff <= 1
                      ? 'travel-past'
                      : 'travel-old'
                  ].join(' ')}
                >
                  <Row>
                    <Col>{travelItem.date}</Col>
                    <Col><a href={travelItem.url}>{travelItem.event}</a></Col>
                    <Col>{travelItem.location}</Col>
                  </Row>
                </div>
              );
            })
          }
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
          github
          facebook
          instagram
        }
      }
    }
  }
`;

export default IndexPage;
