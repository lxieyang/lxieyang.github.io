import React, { Component } from 'react';
import { Link } from 'gatsby';
import './header.css';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  // NavLink
} from 'reactstrap';
import HeaderImg from '../../images/lxieyang-avatar-yellowstone.jpg';

class Header extends Component {
  constructor (props) {
    super(props);
    this.toggle = this.toggleNavbar.bind(this);
  }

  state = {
    isOpen: false
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    // active class name
    // https://spectrum.chat/thread/b698900b-cea6-44f8-8f35-d7015365ff18
    // reactstrap navbar
    // https://codepen.io/FreeClimb/pen/evVJzo?editors=0110
    // https://reactstrap.github.io/components/navbar/
    return (
      <div style={{fontSize: '1.2rem'}}>
        <Navbar color="light" light expand="md" fixed="top"> 
          <Container>
            <div className="navbarbrand">
              <Link to="/">
                <img src={HeaderImg} width="30" height="30" className="d-inline-block align-top" alt="profile" style={{marginBottom: '0'}}/> &nbsp;
                {this.props.siteTitle}
              </Link>
            </div>
            <NavbarToggler className="mr-2" onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem style={{marginBottom: '0'}}>
                  <div className="navlink">
                    <Link exact to="/" activeClassName="active">Home</Link>
                  </div>
                </NavItem>
                <NavItem style={{marginBottom: '0'}}>
                  <div className="navlink">
                    <Link exact to="/research" activeClassName="active">Research</Link>
                  </div>
                </NavItem>
                <NavItem style={{marginBottom: '0'}}>
                  <div className="navlink">
                    <Link exact to="/experiences" activeClassName="active">Experiences</Link>
                  </div>
                </NavItem>
                <NavItem style={{marginBottom: '0'}}>
                  <div className="navlink">
                    <Link exact to="/blogs" activeClassName="active">Blogs</Link>
                  </div>
                </NavItem>
                <NavItem style={{marginBottom: '0'}}>
                  <div className="navlink">
                    <Link exact to="/about" activeClassName="active">About</Link>
                  </div>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
