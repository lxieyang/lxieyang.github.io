import React, { Component } from 'react';
import { Link } from 'gatsby';
import {
  Row, Col,
  UncontrolledTooltip
} from 'reactstrap';

import styled from 'styled-components';

// import Map from '../../components/UI/Map/Map';
import ContactInfo from '../../components/UI/ContactInfo/ContactInfo';
import GithubLogo from '../../images/footer/github-icon.png';
import FacebookLogo from '../../images/footer/facebook-icon.png';
import InstagramLogo from '../../images/footer/instagram-icon.png';
import GatsbyLogo from '../../images/gatsby-icon.png';
import ReactLogo from '../../images/react-icon.jpg';
import BootstrapLogo from '../../images/bootstrap-icon.png';
import './footer.css';

const FooterContainer = styled.footer`
  color: #666;
`;

const SocialMediaIcon = styled.img`
  display: inline-block;
  filter: grayscale(1);
  opacity: 0.7;
  border-radius: 50%;
  max-width: 30px;
  margin-right: 10px;

  transition: 0.1s all ease-in;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
    filter: grayscale(0);
  }
`;

const CopyrightParagraphContainer = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const SocialMediaIconsContainer = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const BuildInfoContainer = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const CompanyIcon = styled.img`
  display: inline-block;
  filter: grayscale(1);
  border-radius: 50%;
  max-width: 30px;
  margin: 0 5px;
  opacity: 0.7;

  transition: 0.1s all ease-in;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
    filter: grayscale(0);
  }
`;

const SourceCodeInfoContainer = styled.div`
  margin: 0px 0;
  display: flex;
  align-items: center;
`;

class Footer extends Component {

  state = {
    startYear: 2013
  }

  render () {
    const { facebook, github, instagram } = this.props.links;

    return (
      <div>
        <br/><hr/>

        <FooterContainer>
          <Row>
            <Col md='8'>
              <Row><Col><h4>Contact Me</h4></Col></Row>
              {/* <Row><Col><Map /></Col></Row> */}
              <Row><Col><ContactInfo /></Col></Row>
            </Col>

            <Col md='4' className="text-left">

              <div>Designed by <Link to="/">Michael Xieyang Liu</Link>.</div>

              <SocialMediaIconsContainer>
                <a href={ github } id="github-logo">
                  <SocialMediaIcon alt="github" src={ GithubLogo }  />
                </a>
                <a href={ facebook } id="facebook-logo">
                  <SocialMediaIcon alt="facebook" src={ FacebookLogo }  />
                </a>
                <a href={ instagram } id="instagram-logo">
                  <SocialMediaIcon alt="instagram" src={ InstagramLogo }  />
                </a>

                <UncontrolledTooltip placement="bottom" target="github-logo">
                  Github
                </UncontrolledTooltip>
                <UncontrolledTooltip placement="bottom" target="facebook-logo">
                  Facebook
                </UncontrolledTooltip>
                <UncontrolledTooltip placement="bottom" target="instagram-logo">
                  Instagram
                </UncontrolledTooltip>
              </SocialMediaIconsContainer>

              <CopyrightParagraphContainer>
                Copyright © {this.state.startYear} - {(new Date()).getFullYear()}
              </CopyrightParagraphContainer>

              <BuildInfoContainer>
                Built with <a href="https://gatsbyjs.org" id="gatsby"><CompanyIcon src={ GatsbyLogo } alt="gatsby"/></a>, <a href="https://reactjs.org" id="react"><CompanyIcon src={ ReactLogo } alt="react"/></a> and <a href="https://getbootstrap.com/" id="bootstrap"><CompanyIcon src={ BootstrapLogo } alt="react"/></a>.
                <UncontrolledTooltip placement="bottom" target="gatsby">
                  Gatsby v2
                </UncontrolledTooltip>
                <UncontrolledTooltip placement="bottom" target="react">
                  React v16
                </UncontrolledTooltip>
                <UncontrolledTooltip placement="bottom" target="bootstrap">
                  Bootstrap v4
                </UncontrolledTooltip>
              </BuildInfoContainer>

              <SourceCodeInfoContainer>
                <p>Last updated: {document.lastModified}</p>
              </SourceCodeInfoContainer>
              <SourceCodeInfoContainer>
                <a href="https://github.com/lxieyang/lxieyang.github.io/tree/gatsby-dev" target="_blank" rel="noopener noreferrer"><img src="https://travis-ci.org/lxieyang/lxieyang.github.io.svg?branch=gatsby-dev" alt="build"/></a>
              </SourceCodeInfoContainer>              
            </Col>

            
          </Row>
        </FooterContainer>   
        
        <br/>
      </div>
    );
  }
}

export default Footer;
