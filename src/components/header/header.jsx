import React, { Component } from 'react';
import { Link } from 'gatsby';
import appRoutes from '../../utils/appRoutes';
import './header.css';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
// import HeaderImg from '../../images/lxieyang-avatar-yellowstone.jpg';
// import Favicon from '../../../static/cmu-favicon.png';
import Favicon from '../../../static/pair-logo-152.png';

// https://reach.tech/router/api/Link
// https://github.com/gatsbyjs/gatsby/issues/7526#issuecomment-414858689
// this link will be active when itself or deeper routes
// are current
const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: 'active' } : null;
};

const ExactNavLink = (props) => <Link getProps={isActive} {...props} />;

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: 'active' } : null;
};

const PartialNavLink = (props) => (
  <Link getProps={isPartiallyActive} {...props} />
);

const ListLink = (props) => {
  if (props.isPurelink !== undefined && props.isPurelink === true) {
    return (
      <NavItem style={{ marginBottom: '0' }}>
        <div className="navlink">
          {props.external === true ? (
            <a href={props.route} target="_blank" rel="noopener noreferrer">
              {props.routeName}
            </a>
          ) : (
            <a href={props.route}>{props.routeName}</a>
          )}
        </div>
      </NavItem>
    );
  } else {
    return (
      <NavItem style={{ marginBottom: '0' }}>
        <div className="navlink">
          {props.exact === true ? (
            <ExactNavLink to={props.route}>{props.routeName}</ExactNavLink>
          ) : (
            <PartialNavLink to={props.route}>{props.routeName}</PartialNavLink>
          )}
        </div>
      </NavItem>
    );
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggleNavbar.bind(this);

    // https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
    if (typeof window !== 'undefined') {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        let currentScrollPos = window.pageYOffset;
        if (
          (maxScroll > 0 &&
            prevScrollpos > currentScrollPos &&
            prevScrollpos <= maxScroll) ||
          (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
          (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
          document.getElementById('navbar').style.top = '0';
        } else {
          document.getElementById('navbar').style.top = '-5.0rem';
        }
        prevScrollpos = currentScrollPos;
      };
    }
  }

  state = {
    isOpen: false,
  };

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { pathName } = this.props;
    const isHome = pathName === 'Home';
    // active class name
    // https://spectrum.chat/thread/b698900b-cea6-44f8-8f35-d7015365ff18
    // reactstrap navbar
    // https://codepen.io/FreeClimb/pen/evVJzo?editors=0110
    // https://reactstrap.github.io/components/navbar/
    return (
      <div style={{ fontSize: '1.2rem' }}>
        <Navbar id="navbar" color="light" light expand="md" fixed="top">
          <Container className="d-flex align-items-center">
            <div className="navbarbrand">
              <Link to={appRoutes.home} id="SiteTitle">
                <img
                  src={Favicon}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="profile"
                  style={{
                    marginBottom: '0',
                    borderRadius: !isHome ? '50%' : null,
                  }}
                />{' '}
                &nbsp;
                <span>{this.props.siteTitle}</span>
              </Link>
            </div>
            <NavbarToggler className="ml-auto mr-2" onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <ListLink
                  exact={true}
                  route={appRoutes.home}
                  routeName={'Home'}
                />
                <ListLink route={appRoutes.cv} routeName={'CV'} />
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
