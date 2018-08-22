import React, { Component } from 'react';
import { Link } from 'gatsby';
import { css } from "react-emotion"

import Layout from '../../components/layout/layout';


const ChronologicalBlogList = ({ allMarkdownRemark }) => {
  if (allMarkdownRemark === null) {
    return null;
  }

  return (
    <div>
      {
        allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h3>
                  {node.frontmatter.title}{" "}
                  <span
                    className={css`
                      color: #bbb
                    `}
                  >
                    — {node.frontmatter.date}
                  </span>
                </h3>
              </Link>
              <p>{node.excerpt}</p>
            </div>
          );
        })
      }
    </div>
  );
}


const Banner = ({ allMarkdownRemark }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div>
        <h1>Blogs</h1>
      </div>
      <div style={{fontStyle: 'italic'}}>
        {
          allMarkdownRemark === null 
          ? <h5>Diligently writing...</h5>
          : <h5>
              {allMarkdownRemark.totalCount} Post{
                allMarkdownRemark.totalCount > 1 ? 's' : null
              }
            </h5>
        }
      </div>
    </div>
  );
}

class BlogsPage extends Component {
  render () {
    const { data } = this.props;
    const { allMarkdownRemark } = data;

    return (
      <Layout pathName="Blogs">
        <Banner allMarkdownRemark={allMarkdownRemark}/>
        <br/>
        <ChronologicalBlogList allMarkdownRemark={allMarkdownRemark}/>
      </Layout>
    );
  }
}

export default BlogsPage;


export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            published
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`