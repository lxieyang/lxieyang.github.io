import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Container } from 'reactstrap';

import Header from '../header/header';
import Footer from '../footer/footer';
import './bootstrap.min.css';
import './layout.css';
require('prismjs/themes/prism-tomorrow.css');

const Layout = ({ children, data, pathName }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              externalLinks {
                googleScholarProfile
                github
                facebook
                instagram
                twitter
              }
            }
          }
        }
      `}
      render={(data) => (
        <div>
          <Header
            siteTitle={data.site.siteMetadata.title}
            pathName={pathName}
          />
          <Container
            style={{
              paddingTop: '5.0rem',
            }}
          >
            {children}
            <Footer
              siteTitle={data.site.siteMetadata.title}
              links={data.site.siteMetadata.externalLinks}
            />
          </Container>
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
