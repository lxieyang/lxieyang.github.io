import React, { Component } from 'react';
import {
  Row, Col
} from 'reactstrap';

import GithubLogo from '../../images/footer/github-icon.png';
import FacebookLogo from '../../images/footer/facebook-icon.png';
import InstagramLogo from '../../images/footer/instagram-icon.png';

import './footer.css';

class Footer extends Component {

  state = {
    startYear: 2013
  }

  render () {
    const { facebook, github, instagram } = this.props.links;

    return (
      <div>
        <br/><hr/>

        <footer>
          <Row>
            <Col style={{color: 'gray'}}>
              Copyright © {this.props.siteTitle} {this.state.startYear} - {(new Date()).getFullYear()}
            </Col>
            <Col className="text-right">
              <a className="footer-logo-wrapper" href={ github }>
                <img alt="github" src={ GithubLogo } className="footer-logo" />
              </a>
              <a className="footer-logo-wrapper" href={ facebook }>
                <img alt="facebook" src={ FacebookLogo } className="footer-logo" />
              </a>
              <a className="footer-logo-wrapper" href={ instagram }>
                <img alt="instagram" src={ InstagramLogo } className="footer-logo" />
              </a>
            </Col>
          </Row>
        </footer>   
        
        <br/>
      </div>
    );
  }
}

export default Footer;
