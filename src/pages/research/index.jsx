import React, { Component } from 'react';
import styled from 'styled-components';
import {
  // Container,
  Row,
  Col,
  UncontrolledCollapse
} from 'reactstrap';

import { sortBy, reverse } from 'lodash';
import jsonQuery from 'json-query';
import { publicationsData, pubFilePathPrefix } from '../../utils/publications';
import Layout from '../../components/layout/layout';
import ProgrammingImg from '../../images/research/research-statement-bg.png';

const ResearchStatementContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 10px 3px;
  margin-bottom: 15px;

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.03;
    background-image: url(${ProgrammingImg});
    background-blend-mode: lighten;
  }
`;

const PublicationContainer = styled.div``;

const PubCategoryContainer = styled.div`
  margin-bottom: 15px;
`;

const PubCategoryPromptContainer = styled.h4`
  opacity: 0.7;
`;

const PreviewImg = styled.img`
  max-width: 95%;
  max-height: 90%;
  /* max-height: 95%; */
  opacity: 0.8;
`;

// const NewTag = styled.span`
//   padding: 0.1em 0.3em;
//   font-size: 75%;
//   font-weight: 700;
//   color: #fff;
//   text-align: center;
//   white-space: nowrap;
//   border-radius: 0.25em;
//   background-color: #5cb85c;
// `

class ResearchPage extends Component {
  state = {
    currentYear: new Date().getFullYear()
  };

  render() {
    let pubsInfo = [
      {
        prompt: 'Conferences',
        data: jsonQuery('publications[*type=conference]', {
          data: publicationsData
        }).value
      },
      {
        prompt: 'Posters',
        data: jsonQuery('publications[*type=poster]', {
          data: publicationsData
        }).value
      },
      {
        prompt: 'Workshops',
        data: jsonQuery('publications[*type=workshop]', {
          data: publicationsData
        }).value
      }
    ];

    return (
      <Layout pathName="Research">
        <h2>Research</h2>
        <ResearchStatementContainer>
          <p>
            <strong>Overview:</strong> I research programming support largely
            from a sensemaking perspective. My current work is in studying
            sensemaking activities in programming practices, and how sensemaking
            results could be effectively shared among programmers. I aim to
            design tools to better support programming activities, both for
            professional programmers and end-user programmers.
          </p>
          <p>
            <strong>Background:</strong> Programmers spend a significant
            proportion of their time searching for and making sense of complex
            information in order to accomplish their goals, whether choosing
            among between different APIs, adapting code snippets found on the
            Internet to meet their needs, or trying to learn unfamiliar code to
            fix an error or add a new feature. When performing tasks like these,
            programmers continually are making hypotheses, proposing questions,
            and discovering answers. However, after each sensemaking episode in
            which a programmer gains knowledge for themselves, their work is
            essentially lost, with no one else benefiting. Although there are
            many tools to help programmers find the answers, there are very few
            tools to help programmers make use of the knowledge gained
            performing the task, or share that knowledge with others. We aim to
            help the initial programmer collect, navigate, and organize
            knowledge to meet their goals, while capturing this knowledge and
            making it useful for later programmers with similar needs.
          </p>
        </ResearchStatementContainer>

        <h2>Publications</h2>
        <PublicationContainer>
          {pubsInfo.map((pubCategory, pubCategoryIdx) => {
            return (
              <PubCategoryContainer key={pubCategoryIdx}>
                <PubCategoryPromptContainer>
                  {pubCategory.prompt}
                </PubCategoryPromptContainer>
                {reverse(sortBy(pubCategory.data, ['year', 'month'])).map(
                  (pub, pubIdx) => {
                    return (
                      <Row key={pubIdx} style={{ marginBottom: '10px' }}>
                        {/* eslint-disable-next-line */}
                        <a className="anchor" name={pub.codename} />
                        <Col
                          lg="3"
                          className="d-none d-sm-none d-md-none d-lg-block"
                        >
                          <PreviewImg
                            src={pub.previewImgLink}
                            alt={pub.codename}
                            className="img-fluid"
                          />
                        </Col>
                        <Col lg="9">
                          <div className="paper-title pub-element">
                            {pub.title}
                          </div>
                          <div className="authors pub-element">
                            {pub.authors.map((author, authorIdx) => (
                              <React.Fragment key={authorIdx}>
                                <span
                                  key={authorIdx}
                                  className={
                                    author.bold ? 'author-important' : null
                                  }
                                >
                                  {author.name}
                                </span>
                                {authorIdx === pub.authors.length - 1
                                  ? '. '
                                  : ', '}
                              </React.Fragment>
                            ))}
                          </div>
                          <div className="publication-location pub-element">
                            <span className="conference">
                              {pub.conferenceFullName}
                            </span>
                            ,{' '}
                            <span className="conference-year">{pub.year}</span>.
                          </div>
                          <div className="data pub-element">
                            [
                            <a
                              href={`#${pub.codename}`}
                              id={`${pub.codename}-abstract`}
                            >
                              Abstract
                            </a>
                            ]
                            {pub.ieeexplore !== undefined ? (
                              <React.Fragment>
                                [
                                <a
                                  href={pub.ieeexplore}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  IEEE Digital Library
                                </a>
                                ]
                              </React.Fragment>
                            ) : null}
                            {pub.shouldShowLocalPaperLink !== false ? (
                              pub.type === 'poster' ? (
                                <React.Fragment>
                                  [
                                  <a
                                    href={`${pubFilePathPrefix}/${
                                      pub.codename
                                    }/${pub.codename}-paper.pdf`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Extended Abstract
                                  </a>
                                  ][
                                  <a
                                    href={`${pubFilePathPrefix}/${
                                      pub.codename
                                    }/${pub.codename}-poster.pdf`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Poster
                                  </a>
                                  ]
                                </React.Fragment>
                              ) : (
                                <React.Fragment>
                                  [
                                  <a
                                    href={`${pubFilePathPrefix}/${
                                      pub.codename
                                    }/${pub.codename}.pdf`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Local Paper
                                  </a>
                                  ]
                                </React.Fragment>
                              )
                            ) : null}
                          </div>
                          {/*
                            <div className="pub-element">
                              {
                                pub.year >= this.state.currentYear
                                ? <NewTag>new</NewTag>
                                : null
                              }
                            </div>
                            */}
                          <UncontrolledCollapse
                            toggler={`#${pub.codename}-abstract`}
                            className="paper-abstract publication-collapse"
                          >
                            {pub.abstract}
                          </UncontrolledCollapse>
                        </Col>
                      </Row>
                    );
                  }
                )}
              </PubCategoryContainer>
            );
          })}
        </PublicationContainer>
      </Layout>
    );
  }
}

// export const query = graphql`
//   query ResearchPageQuery {
//     allFile(filter: { extension: { eq: "pdf" } }) {
//       edges {
//         node {
//           publicURL
//           extension
//           dir
//           modifiedTime
//         }
//       }
//     }
//   }
// `;

export default ResearchPage;
