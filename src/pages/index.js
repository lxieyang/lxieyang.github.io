import React from 'react';
// import { Link } from 'gatsby';
import {
  // Container, 
  Row, Col
} from 'reactstrap';

import Layout from '../components/layout/layout';
import ProfileImg from '../images/lxieyang-avatar.jpg';
import CMUAvatar from '../images/cmu.png';
import HCIIAvatar from '../images/hcii-logo-big.jpg';
import CVFile from '../assets/files/jobs/cv_Xieyang_Liu.pdf';
import './index.css';

const IndexPage = () => (
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
            My current advisors are <a href="http://www.cs.cmu.edu/~bam/">Dr. Brad A. Myers</a> and <a href="http://kittur.org/">Dr. Niki Kittur</a>. <br/>
            I obtained my two B.S. degrees at <a href="https://www.umich.edu">University of Michigan, Ann Arbor</a> and <a href="http://en.sjtu.edu.cn">Shanghai Jiao Tong University</a>. I worked as an undergraduate researcher with <a href="https://web.eecs.umich.edu/~wlasecki/">Dr. Walter S. Lasecki</a> in the <a href="http://web.eecs.umich.edu/~wlasecki/croma.html">Crowds + Machines Lab (Croma Lab)</a> during my time in Michigan.
          </p>
          <Row className="contacts">
            <Col md='6'>
              <span className="contact-name">Curriculum Vitae: [</span><a href={ CVFile }>pdf</a><span className="contact-name">]</span> (September 2017)<br/>
              <span className="contact-name">Email: </span><a href="mailto:xieyangl@cs.cmu.edu"><span className="obfuscate">ude.umc.sc@lgnayeix</span></a>
              
            </Col>
            <Col md='6'>
              <span className="contact-name">Github: </span><a href="{{ site.github.homepage }}">lxieyang</a><br/>
              <span className="contact-name">Facebook: </span><a href="{{ site.facebook }}">Xieyang Liu (Michael Liu)</a><br/>
              <span className="contact-name">Instagram: </span><a href="{{ site.instagram }}">xieyangl</a><br/>
              <span className="contact-name">LinkedIn: </span><a href="{{ site.linkedin }}">Xieyang Liu</a><br/>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage;
