import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import './footer.css';

/* Styled components */
const FooterContainer = styled.footer`
  color: #666;
`;

/* Functional Components */
const CopyrightSection = () => (
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
    </div>
  </React.Fragment>
);

class Footer extends Component {
  render() {
    return (
      <div>
        <br />
        <hr />
        <FooterContainer>
          <Row>
            <Col lg="12">
              <CopyrightSection />
            </Col>
          </Row>
        </FooterContainer>
        <br />
      </div>
    );
  }
}

export default Footer;
