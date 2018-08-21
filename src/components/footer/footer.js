import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import { Link } from 'gatsby';
import {
  Row, Col,
  UncontrolledTooltip
} from 'reactstrap';

import styled from 'styled-components';

import Aux from '../../hoc/Aux/Aux';

// import Map from '../../components/UI/Map/Map';
import ContactInfo from '../../components/UI/ContactInfo/ContactInfo';
import GithubLogo from '../../images/footer/github-icon.png';
import FacebookLogo from '../../images/footer/facebook-icon.png';
import InstagramLogo from '../../images/footer/instagram-icon.png';
import GatsbyLogo from '../../images/gatsby-icon.png';
import ReactLogo from '../../images/react-icon.jpg';
import BootstrapLogo from '../../images/bootstrap-icon.png';
import './footer.css';


/* Styled components */
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

const CommitBadgeCard = styled.div`
  border: 1px solid #eaecef;
  padding: 8px 10px;
  display: flex;
  align-items: center;
`;

const CommitBadgeLeftContainer = styled.div`
  /* margin-right: 8px; */
`;

// const CommitBadgeRightContainer = styled.div`

// `;

/* Functional Components */
const ContactSection = () => (
  <Aux>
    <Row><Col><h4>Contact Me</h4></Col></Row>
    {/* <Row><Col><Map /></Col></Row> */}
    <Row><Col><ContactInfo /></Col></Row>
  </Aux>
);

const CopyrightTechnologySection = ({startYear, facebook, github, instagram, gitDataFromGithub}) => (
  <Aux>
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
      Copyright © {startYear} - {(new Date()).getFullYear()}
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
    {
      gitDataFromGithub !== null
      ? <CommitBadgeCard>
          <CommitBadgeLeftContainer>
            <div style={{
              color: '#444d56',
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '21px',
              display: 'flex',
              alignItems: 'center'
            }}>
              {gitDataFromGithub.commit.message} &nbsp; 
              <a href="https://github.com/lxieyang/lxieyang.github.io" target="_blank" rel="noopener noreferrer"><img src="https://travis-ci.org/lxieyang/lxieyang.github.io.svg?branch=gatsby-dev" alt="build status" style={{height: '18px'}}/></a>
            </div>
            <div>
              <img alt={gitDataFromGithub.committer.login} src={gitDataFromGithub.committer.avatar_url} width="20" height="20" style={{borderRadius: '2px'}}/> <span style={{
                color: '#586069',
                fontWeight: '600',
                fontSize: '12px',
              }}>
                {gitDataFromGithub.commit.committer.name}
              </span> <span style={{
                color: '#586069',
                fontWeight: '400',
                fontSize: '12px'
              }}>
                committed {moment(gitDataFromGithub.commit.committer.date).fromNow()}
              </span> 
            </div>
          </CommitBadgeLeftContainer>
        </CommitBadgeCard>
      : null
    }
    </SourceCodeInfoContainer>  
  </Aux>
);



class Footer extends Component {

  state = {
    startYear: 2013,
    lastUpdated: null,
    gitDataFromGithub: null
  }

  componentDidMount () {
    let lastUpdated = document.lastModified;
    this.setState({lastUpdated});

    axios.get('https://api.github.com/repos/lxieyang/lxieyang.github.io/commits/gatsby-dev')
      .then(({ data }) => {
        this.setState({gitDataFromGithub: data});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render () {
    const { startYear, facebook, github, instagram } = this.props.links;
    const { gitDataFromGithub } = this.state;

    return (
      <div>
        <br/><hr/>
        <FooterContainer>
          <Row>
            <Col md='6'>
              <ContactSection />
            </Col>

            <Col md='6' className="text-left">
              <CopyrightTechnologySection 
                startYear={startYear}
                facebook={facebook} 
                github={github} 
                instagram={instagram} 
                gitDataFromGithub={gitDataFromGithub}/>        
            </Col>
          </Row>
        </FooterContainer>   
        <br/>
      </div>
    );
  }
}

export default Footer;
