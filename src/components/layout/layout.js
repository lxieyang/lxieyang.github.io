import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import {
  Container
} from 'reactstrap';

import Favicon from '../../images/hcii-logo-big.jpg';

import Header from '../header/header';
import './bootstrap.min.css';
import './layout.css'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Michael Xieyang Liu\'s personal website' },
            { name: 'keywords', content: 'HCI, Computer Science, Researcher, Carnegie Mellon University' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/jpeg', href: `${Favicon}` }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container 
          style={{
            paddingTop: '5.0rem',
          }}>
          {children}
        </Container>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
