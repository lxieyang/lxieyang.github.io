import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
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
          <Helmet
            title={`${pathName !== undefined ? pathName + ' | ' : ''}${
              data.site.siteMetadata.title
            }`}
            meta={[
              {
                name: 'description',
                content: "Michael Xieyang Liu's personal website",
              },
              {
                name: 'keywords',
                content:
                  'Human Computer Interaction, Computer Science, Researcher, Carnegie Mellon University',
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
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
