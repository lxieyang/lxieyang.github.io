import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import { Link } from 'gatsby';
import { Row, Col } from 'reactstrap';

import styled from 'styled-components';

import GoogleScholarLogo from '../../images/footer/googleScholar-icon.png';
import GithubLogo from '../../images/footer/github-icon.png';
import FacebookLogo from '../../images/footer/facebook-icon.png';
import InstagramLogo from '../../images/footer/instagram-icon.png';
import TwitterLogo from '../../images/footer/twitter-icon.png';
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

const SocialMediaIconsContainer = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const SourceCodeInfoContainer = styled.div`
  margin: 0px 0;
  display: flex;
  align-items: center;
`;

const CommitBadgeCard = styled.div`
  border: 1px solid #eaecef;
  padding: 0px;
  /* padding: 8px 10px;
  display: flex;
  align-items: center; */
`;

const CommitBadgeLeftContainer = styled.div`
  /* margin-right: 8px; */
  display: flex;
  align-items: stretch;
`;

const SourceCodeIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 6px;
`;

/* Functional Components */
const CopyrightSection = ({
  googleScholarProfile,
  facebook,
  github,
  instagram,
  twitter
}) => (
  <React.Fragment>
    <div>
      <div>
        <Link to="/">Michael Xieyang Liu</Link> © {new Date().getFullYear()}.
        Built with{' '}
        <a href="https://gatsbyjs.org" id="gatsby">
          Gatsby
        </a>
        ,{' '}
        <a href="https://reactjs.org" id="react">
          React
        </a>{' '}
        and{' '}
        <a href="https://getbootstrap.com/" id="bootstrap">
          Bootstrap
        </a>
        .
      </div>
      <div>
        <SocialMediaIconsContainer>
          <a href={googleScholarProfile} id="google-scholar-logo">
            <SocialMediaIcon alt="googleScholar" src={GoogleScholarLogo} />
          </a>
          <a href={github} id="github-logo">
            <SocialMediaIcon alt="github" src={GithubLogo} />
          </a>
          <a href={facebook} id="facebook-logo">
            <SocialMediaIcon alt="facebook" src={FacebookLogo} />
          </a>
          <a href={instagram} id="instagram-logo">
            <SocialMediaIcon alt="instagram" src={InstagramLogo} />
          </a>
          <a href={twitter} id="twitter-logo">
            <SocialMediaIcon alt="twitter" src={TwitterLogo} />
          </a>
        </SocialMediaIconsContainer>
      </div>
    </div>
  </React.Fragment>
);

const CodeCommitSection = ({ gitDataFromGithub }) => (
  <React.Fragment>
    <SourceCodeInfoContainer>
      {gitDataFromGithub !== null ? (
        <CommitBadgeCard>
          <CommitBadgeLeftContainer>
            <SourceCodeIconContainer>
              <a
                href="https://github.com/lxieyang/lxieyang.github.io"
                target="_blank"
                rel="noopener noreferrer"
                title="Website Source Code"
                style={{
                  color: 'inherit'
                }}
              >{`</>`}</a>
            </SourceCodeIconContainer>

            <div
              style={{
                padding: '8px 10px'
              }}
            >
              <div
                style={{
                  color: '#444d56',
                  fontWeight: '600',
                  fontSize: '14px',
                  lineHeight: '21px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <a
                  href={gitDataFromGithub.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={gitDataFromGithub.commit.message}
                  style={{ color: 'inherit' }}
                >
                  {gitDataFromGithub.commit.message}
                </a>{' '}
                &nbsp;
                <a
                  href="https://travis-ci.org/lxieyang/lxieyang.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={'View build status on Travis CI'}
                >
                  <img
                    src="https://travis-ci.org/lxieyang/lxieyang.github.io.svg?branch=gatsby-dev"
                    alt="build status"
                    style={{ height: '18px' }}
                  />
                </a>{' '}
                &nbsp;
                <a
                  href="https://codeclimate.com/github/lxieyang/lxieyang.github.io/maintainability"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={'View maintainability on Code Climate'}
                >
                  <img
                    src="https://api.codeclimate.com/v1/badges/04e11d27938adef6dd80/maintainability"
                    alt="maintainability"
                    style={{ height: '18px' }}
                  />
                </a>
              </div>
              <div>
                <a
                  href={gitDataFromGithub.committer.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${
                    gitDataFromGithub.commit.committer.name
                  }'s Github Profile`}
                  style={{
                    color: '#586069',
                    fontWeight: '600',
                    fontSize: '12px'
                  }}
                >
                  <img
                    alt={gitDataFromGithub.committer.login}
                    src={gitDataFromGithub.committer.avatar_url}
                    width="20"
                    height="20"
                    style={{ borderRadius: '2px' }}
                  />{' '}
                  <span>{gitDataFromGithub.commit.committer.name}</span>
                </a>{' '}
                <span
                  style={{
                    color: '#586069',
                    fontWeight: '400',
                    fontSize: '12px'
                  }}
                >
                  committed{' '}
                  {moment(gitDataFromGithub.commit.committer.date).fromNow()}
                </span>
              </div>
            </div>
          </CommitBadgeLeftContainer>
        </CommitBadgeCard>
      ) : null}
    </SourceCodeInfoContainer>
  </React.Fragment>
);

class Footer extends Component {
  state = {
    lastUpdated: null,
    gitDataFromGithub: null
  };

  componentDidMount() {
    let lastUpdated = document.lastModified;
    this.setState({ lastUpdated });

    axios
      .get(
        'https://api.github.com/repos/lxieyang/lxieyang.github.io/commits/gatsby-dev'
      )
      .then(({ data }) => {
        this.setState({ gitDataFromGithub: data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const {
      googleScholarProfile,
      facebook,
      github,
      instagram,
      twitter
    } = this.props.links;
    const { gitDataFromGithub } = this.state;

    return (
      <div>
        <br />
        <hr />
        <FooterContainer>
          <Row>
            <Col lg="7">
              <CopyrightSection
                googleScholarProfile={googleScholarProfile}
                facebook={facebook}
                github={github}
                instagram={instagram}
                twitter={twitter}
              />
            </Col>

            <Col lg="5" className="text-left">
              <CodeCommitSection gitDataFromGithub={gitDataFromGithub} />
            </Col>
          </Row>
        </FooterContainer>
        <br />
      </div>
    );
  }
}

export default Footer;
