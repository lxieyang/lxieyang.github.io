import React from "react";
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout/layout";
import { DiscussionEmbed } from 'disqus-react';

const Navigations = ({ previous, next}) => {
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: 0,
      }}
    >
      {previous && (
        <li>
          <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        </li>
      )}

      {next && (
        <li>
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        </li>
      )}
    </ul>
  );
}

export default (props) => {
  const post = props.data.markdownRemark;
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const siteDescription = post.excerpt;
  const { previous, next } = props.pageContext;
  const disqusConfig = {
    url: `https://lxieyang.github.io${props.location.pathname}`,
    identifier: `${props.location.pathname}`,
    title: post.frontmatter.title,
  }

  return (
    <Layout>
      <Helmet
        meta={[{ name: 'description', content: siteDescription }]}
        title={`${post.frontmatter.title} | ${siteTitle}`}
      />

      <h1>{post.frontmatter.title}</h1>
      <h6 style={{color: '#586069'}}>{post.frontmatter.date}</h6>
      <br/>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <br/>
      <Navigations previous={previous} next={next}/>
      <hr/>
      <div>
        <DiscussionEmbed shortname="lxieyang" config={disqusConfig} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;