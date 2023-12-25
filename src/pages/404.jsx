import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout/layout';
import I404Img from '../images/i404.png';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const PromptWrapper = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  /* font-weight: bold; */
  display: flex;
  justify-content: space-around;
`;

const NotFoundPage = () => (
  <Layout>
    <ImageWrapper>
      <img
        src={I404Img}
        alt="404 NOT FOUND"
        style={{ width: '60%', height: '60%' }}
      />
    </ImageWrapper>

    <PromptWrapper>
      <p>
        Sorry, the route you are looking for does NOT exist. Head back{' '}
        <Link exact to="/">
          home
        </Link>
        ?
      </p>
    </PromptWrapper>
  </Layout>
);

export default NotFoundPage;
