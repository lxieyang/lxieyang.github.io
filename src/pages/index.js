import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <h1>Home</h1>
    <p>Michael Xieyang Liu (刘燮洋) speaking.</p>
    <p>Welcome to my new Gatsby site.</p>
    <Link to="/projects/">Go to Projects page</Link><br/>
    <Link to="/publications/">Go to Publications</Link><br/>
    <Link to="/blogs/">Go to Blogs page</Link><br/>
    <Link to="/about/">Go to About page</Link><br/>
  </Layout>
)

export default IndexPage;
