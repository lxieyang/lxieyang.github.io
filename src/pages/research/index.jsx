import React, { Component } from 'react';
import styled from 'styled-components';
import mobile from 'is-mobile';
import {
  // Container,
  Row,
  Col,
  UncontrolledCollapse,
} from 'reactstrap';

import { sortBy, reverse } from 'lodash';
import jsonQuery from 'json-query';
import { publicationsData, pubFilePathPrefix } from '../../utils/publications';
import Layout from '../../components/layout/layout';
import ProgrammingImg from '../../images/research/research-statement-bg.png';

import UnakitePreview from '../../images/research/projects/kap/unakite-v2-preview.png';

import GistIcon from '../../images/gist-icon.jpg';
import ACMDLIcon from '../../images/acmdl-icon.jpg';
import VideoIcon from '../../images/video-icon.png';
import DocumentIcon from '../../images/document-icon.png';
import ArxivIcon from '../../images/arxiv.jpg';
import PosterIcon from '../../images/poster-icon.png';
import IEEEIcon from '../../images/ieee-icon.png';
import CMUSCSIcon from '../../images/cmu-scs-logo.png';

import { FaAward, FaTrophy } from 'react-icons/fa';

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

const ProjectNamePromptContainer = styled.h3`
  /* opacity: 0.7; */
`;

const PreviewImg = styled.img`
  /* max-width: 95%; */
  /* max-height: 90%; */
  /* max-height: 95%; */
  opacity: 0.8;
`;

const ConferenceTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.25rem;
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
    currentYear: new Date().getFullYear(),
  };

  render() {
    let pubsInfo = [
      {
        prompt: 'Conferences',
        data: jsonQuery('publications[*type=conference]', {
          data: publicationsData,
        }).value,
      },
      {
        prompt: 'Posters',
        data: jsonQuery('publications[*type=poster]', {
          data: publicationsData,
        }).value,
      },
      {
        prompt: 'Workshops',
        data: jsonQuery('publications[*type=workshop]', {
          data: publicationsData,
        }).value,
      },
    ];

    console.log(pubsInfo[0]);

    return (
      <Layout pathName="Research">
        <a href="#research"></a>
        <h1>Research</h1>

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

        <a href="#publications"> </a>
        <h1>Publications</h1>

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
                      <Row key={pubIdx} style={{ marginBottom: '25px' }}>
                        {/* eslint-disable-next-line */}
                        <a className="anchor" name={pub.codename} />
                        <Col
                          md="4"
                          lg="3"
                          className="d-none d-sm-none d-md-block d-lg-block"
                        >
                          <PreviewImg
                            src={pub.previewImgLink}
                            alt={pub.codename}
                            className="img-fluid"
                          />
                          <ConferenceTag>{pub.conferenceTag}</ConferenceTag>
                        </Col>
                        <Col md="8" lg="9">
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
                          {pub.award && (
                            <div className="awards pub-element">
                              {pub.award.honorableMention && (
                                <span className="honorable">
                                  <FaAward style={{ marginRight: 4 }} /> Best
                                  Paper Honorable Mention Award
                                </span>
                              )}
                              {pub.award.bestPaper && (
                                <span className="best-paper">
                                  <FaTrophy style={{ marginRight: 4 }} /> Best
                                  Paper Award
                                </span>
                              )}
                            </div>
                          )}
                          <div className="data pub-element">
                            <span>
                              <a
                                href={`#${pub.codename}`}
                                id={`${pub.codename}-abstract`}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <img
                                  src={GistIcon}
                                  alt="video"
                                  style={{
                                    marginRight: 3,
                                    width: 20,
                                    height: 20,
                                  }}
                                />
                                Abstract
                              </a>
                            </span>

                            {pub.ieeexplore !== undefined && (
                              <span>
                                <a
                                  href={pub.ieeexplore}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                  }}
                                >
                                  <img
                                    src={IEEEIcon}
                                    alt="ieee"
                                    style={{
                                      marginRight: 3,
                                      width: 20,
                                      height: 20,
                                    }}
                                  />
                                  IEEE Digital Library
                                </a>
                              </span>
                            )}
                            {pub.acmdl !== undefined && (
                              <span>
                                {pub.acmdl_available === false ? (
                                  <React.Fragment>
                                    <em>Available soon!</em>
                                  </React.Fragment>
                                ) : (
                                  <a
                                    href={pub.acmdl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                    }}
                                  >
                                    <img
                                      src={ACMDLIcon}
                                      alt="acmdl"
                                      style={{
                                        marginRight: 3,
                                        width: 20,
                                        height: 20,
                                      }}
                                    />
                                    ACM Digital Library
                                  </a>
                                )}
                              </span>
                            )}
                            {pub.arxiv !== undefined && (
                              <span>
                                <a
                                  href={pub.arxiv}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                  }}
                                >
                                  <img
                                    src={ArxivIcon}
                                    alt="ieee"
                                    style={{
                                      marginRight: 3,
                                      width: 20,
                                      height: 20,
                                    }}
                                  />
                                  arxiv.org
                                </a>
                              </span>
                            )}
                            {pub.shouldShowLocalPaperLink !== false ? (
                              pub.type === 'poster' ? (
                                <React.Fragment>
                                  <span>
                                    <a
                                      href={`${pubFilePathPrefix}/${pub.codename}/${pub.codename}-paper.pdf`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                      }}
                                    >
                                      <img
                                        src={DocumentIcon}
                                        alt="video"
                                        style={{
                                          marginRight: 3,
                                          width: 20,
                                          height: 20,
                                        }}
                                      />
                                      Extended Abstract
                                    </a>
                                  </span>
                                  <span>
                                    <a
                                      href={`${pubFilePathPrefix}/${pub.codename}/${pub.codename}-poster.pdf`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                      }}
                                    >
                                      <img
                                        src={PosterIcon}
                                        alt="video"
                                        style={{
                                          marginRight: 3,
                                          width: 20,
                                          height: 20,
                                        }}
                                      />
                                      Poster
                                    </a>
                                  </span>
                                </React.Fragment>
                              ) : (
                                <span>
                                  <a
                                    href={`${pubFilePathPrefix}/${pub.codename}/${pub.codename}.pdf`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                    }}
                                  >
                                    <img
                                      src={DocumentIcon}
                                      alt="video"
                                      style={{
                                        marginRight: 3,
                                        width: 20,
                                        height: 20,
                                      }}
                                    />
                                    Local PDF
                                  </a>
                                </span>
                              )
                            ) : null}
                            {pub.conferenceTalkVideo !== undefined && (
                              <span>
                                <a
                                  href={pub.conferenceTalkVideo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                  }}
                                >
                                  <img
                                    src={VideoIcon}
                                    alt="video"
                                    style={{
                                      marginRight: 3,
                                      width: 20,
                                      height: 20,
                                    }}
                                  />
                                  Conference Talk
                                </a>
                              </span>
                            )}
                            {pub.cmuSCSMedia !== undefined && (
                              <span>
                                <a
                                  href={pub.cmuSCSMedia}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                  }}
                                >
                                  <img
                                    src={CMUSCSIcon}
                                    alt="video"
                                    style={{
                                      marginRight: 3,
                                      width: 20,
                                      height: 20,
                                    }}
                                  />
                                  CMU SCS News
                                </a>
                              </span>
                            )}
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
                            // defaultOpen={!mobile()}
                            defaultOpen={false}
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

        {/* <a href="#projects"> </a>
        <h1>Projects</h1>

        <PublicationContainer>
          <PubCategoryContainer>
            <ProjectNamePromptContainer>Unakite</ProjectNamePromptContainer>
            <Row style={{ marginBottom: '10px' }}>
              <Col
                lg="2"
                md="6"
                // className="d-none d-sm-none d-md-block d-lg-block"
              >
                <PreviewImg
                  src={UnakitePreview}
                  alt={'unakite'}
                  className="img-fluid"
                />
              </Col>
              <Col lg="10" md="6">
                <p>
                  The{' '}
                  <a
                    href="https://unakite.info"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Unakite Chrome extension
                  </a>{' '}
                  is designed to help developers organize information forgaged
                  from the web so that they can make better-informed programming
                  decisions.{' '}
                </p>
                <p>
                  You can use Unakite's{' '}
                  <a
                    href="https://unakite.info/docs/features/collecting"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    light-weight clipping tool
                  </a>{' '}
                  to quickly snip any information into a{' '}
                  <a
                    href="https://unakite.info/docs/components/sidebar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    sidebar
                  </a>
                  . You can then start{' '}
                  <a
                    href="https://unakite.info/docs/features/organizing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    organizing the information
                  </a>{' '}
                  into a comparison table directly in the sidebar. After you
                  make a decision, you can get a{' '}
                  <a
                    href="https://unakite.info/docs/features/sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    sharable link
                  </a>{' '}
                  to the table and the snippets and embed it in your code or
                  share it with your friends or colleagues.
                </p>
                <p>
                  <strong>Unakite</strong> stands for{' '}
                  <em>
                    <u>U</u>sers <u>N</u>eed <u>A</u>ccelerators for <u>K</u>
                    nowledge for <u>I</u>mplementations in <u>T</u>echnology{' '}
                    <u>E</u>nvironments
                  </em>
                  . And unakite is a{' '}
                  <a
                    href="https://www.cs.cmu.edu/~bam/acronyms.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    semiprecious gemstone
                  </a>
                  .
                </p>
              </Col>
            </Row>
          </PubCategoryContainer>
        </PublicationContainer> */}
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
