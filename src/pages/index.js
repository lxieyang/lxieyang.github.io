import React from 'react';
import { Link, graphql } from 'gatsby';
import {
  // Container, 
  Row, Col
} from 'reactstrap';

import Layout from '../components/layout/layout';
import Email from '../components/UI/ObfuscatedEmail/ObfuscatedEmail';
import ContactInfo from '../components/UI/ContactInfo/ContactInfo';
import Map from '../components/UI/Map/Map';

import ProfileImg from '../images/lxieyang-avatar.jpg';
import CMUAvatar from '../images/cmu.png';
import HCIIAvatar from '../images/hcii-logo-big.jpg';
import HeadshotTooltip from '../components/UI/HeadshotTooltip/HeadshotTooltip';
import BradImg from '../images/people/bradmyers.jpg';
import NikiImg from '../images/people/nikikittur.jpg';
import WalterImg from '../images/people/walterlasecki.jpg';

import CVFile from '../assets/files/jobs/cv_Xieyang_Liu.pdf';
// import SensemakingWorkshopPaperLocalFile from '../assets/files/pubs/kap/Liu-SupportingKnowledgeAccelerationForProgramming.pdf';

import './index.css';

const IndexPage = ({data}) => (
  <Layout>
    <Row>
      <Col lg='4' md='6'>
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

      <Col lg='8' md='6'>
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
          <p style={{fontSize: '1.1rem'}}>
            My current research interests include <strong>human-computer interaction</strong>, <strong>user interface development</strong>, and  <strong>sensemaking</strong>. <br/>
            My current advisors are <a href="http://www.cs.cmu.edu/~bam/" id="brad-myers">Dr. Brad A. Myers</a> and <a href="http://kittur.org/" id="niki-kittur">Dr. Niki Kittur</a>. <br/>

            <HeadshotTooltip target="brad-myers" headshotPath={ BradImg }/>
            <HeadshotTooltip target="niki-kittur" headshotPath={ NikiImg }/>

            I obtained my two B.S. degrees at <a href="https://www.umich.edu">University of Michigan, Ann Arbor</a> and <a href="http://en.sjtu.edu.cn">Shanghai Jiao Tong University</a>. I worked as an undergraduate researcher with <a href="https://web.eecs.umich.edu/~wlasecki/" id="walter-lasecki">Dr. Walter S. Lasecki</a> in the <a href="http://web.eecs.umich.edu/~wlasecki/croma.html">Crowds + Machines Lab (Croma Lab)</a> during my time in Michigan.

            <HeadshotTooltip target="walter-lasecki" headshotPath={ WalterImg }/>
          </p>
          <Row className="contacts">
            <Col md='6'>
              <span className="contact-name">Curriculum Vitae: [</span><a href={ CVFile }>pdf</a><span className="contact-name">]</span> (September 2017)<br/>
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
          <li>
            I will present our position paper <span className="paper-title">Supporting Knowledge Acceleration for Programming from a Sensemaking Perspective</span> at <a href="https://sensemakingchi2018.com/" target="_blank" rel="noopener noreferrer">CHI 2018 Sensemaking Workshop</a>. Check it out <Link to="/research/#kap">here</Link>.
          </li>
          <li>
              Our paper <span className="paper-title">Learning to Detect Human-Object Interactions</span> is accepted to <a href="http://wacv18.uccs.us" target="_blank" rel="noopener noreferrer">WACV 2018</a>. Check it out <Link to="/research/#hico">here</Link>.
          </li>
          <li>
            Check out my Paper Reader app to support better reading experience of <strong>pdf</strong> documents (especially research papers) on mobile phones!
          </li>
          <li>
            <a href="http://www.cs.cmu.edu/~bam/">Dr. Brad A. Myers</a> and <a href="http://kittur.org/">Dr. Niki Kittur</a> are my advisors here at <a href="http://www.hcii.cmu.edu">CMU HCII</a>.
          </li>
          <li>
            I started as a <strong>Ph.D.</strong> student at <a href="http://www.hcii.cmu.edu">Human-Computer Interaction Institute</a> @ <a href="http://www.cmu.edu">Carnegie Mellon University</a> in August 2017!
          </li>
          <li className="old-news">
            I got my <strong>B.S. in Electrical and Computer Engineering</strong> from <a href="http://en.sjtu.edu.cn">Shanghai Jiao Tong University</a> in August 2017.
          </li>
          <li className="old-news">
            I got my <strong>B.S. in Computer Science</strong> from <a href="https://www.umich.edu">University of Michigan, Ann Arbor</a> in April 2017.
          </li>
        </ul>

      </Col>
      <Col md='6'>
        <h2>Travel</h2>
          <div className="travel travel-past">
            <Row>
              <Col>April 21, 2018</Col>
              <Col><a href="https://chi2018.acm.org/">CHI 2018</a></Col>
              <Col>Montréal, Canada</Col>
            </Row>
          </div>

          <div className="travel travel-past">
            <Row>
              <Col>March 28, 2017</Col>
              <Col><a href="https://www.harvard.edu/">Harvard Open House</a></Col>
              <Col>Cambridge, MA, US</Col>
            </Row>
          </div>

          <div className="travel travel-past">
            <Row>
              <Col>March 25, 2017</Col>
              <Col><a href="http://www.cmu.edu/">CMU HCII Open House</a></Col>
              <Col>Pittsburgh, PA, US</Col>
            </Row>
          </div>

          <div className="travel travel-past">
            <Row>
              <Col>March 18, 2017</Col>
              <Col><a href="https://vt.edu/">VT Open House</a></Col>
              <Col>Blacksburg, VA, US</Col>
            </Row>
          </div>

          <div className="travel travel-past">
            <Row>
              <Col>March 15, 2017</Col>
              <Col><a href="https://ucsd.edu/">UCSD Open House</a></Col>
              <Col>San Diego, CA, US</Col>
            </Row>
          </div>

          <div className="travel travel-past">
            <Row>
              <Col>March 13, 2017</Col>
              <Col><a href="http://www.washington.edu/">UW Open House</a></Col>
              <Col>Seattle, WA, US</Col>
            </Row>
          </div>
      </Col>
    </Row>


    <br/><hr/><br/>


    <Row>
      {/* contact */}
      <Col sm='6'>
        <h2>Contact</h2>
        <ContactInfo />
      </Col>

      {/* map */}
      <Col sm='6'>
        <h2>Location</h2>
        <Map />
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
