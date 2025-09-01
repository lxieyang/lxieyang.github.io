import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import GoogleScholarLogo from '../../images/footer/googleScholar-icon.png';
import GithubLogo from '../../images/footer/github-icon.png';
import FacebookLogo from '../../images/footer/facebook-icon.png';
import XLogo from '../../images/footer/x-icon.svg';
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

/* Functional Components */
const CopyrightSection = ({
  googleScholarProfile,
  facebook,
  github,
  twitter,
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
          <a href={twitter} id="x-logo">
            <SocialMediaIcon alt="X" src={XLogo} style={{ borderRadius: 0 }} />
          </a>
        </SocialMediaIconsContainer>
      </div>
    </div>
  </React.Fragment>
);

class Footer extends Component {
  render() {
    const { googleScholarProfile, facebook, github, instagram, twitter } =
      this.props.links;

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
          </Row>
        </FooterContainer>
        <br />
      </div>
    );
  }
}

export default Footer;
