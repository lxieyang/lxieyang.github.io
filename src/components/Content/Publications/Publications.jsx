import React, { Component } from 'react';
import styled from 'styled-components';
import {
  // Container,
  Row,
  Col,
  UncontrolledCollapse,
} from 'reactstrap';

import { sortBy, reverse } from 'lodash';
import jsonQuery from 'json-query';
import {
  publicationsData,
  pubFilePathPrefix,
} from '../../../utils/publications';

import GistIcon from '../../../images/gist-icon.jpg';
import ACMDLIcon from '../../../images/acmdl-icon.jpg';
import VideoIcon from '../../../images/video-icon.png';
import DocumentIcon from '../../../images/document-icon.png';
import ArxivIcon from '../../../images/arxiv.jpg';
import PosterIcon from '../../../images/poster-icon.png';
import IEEEIcon from '../../../images/ieee-icon.png';
import CMUSCSIcon from '../../../images/cmu-scs-logo.png';

import { FaAward, FaTrophy } from 'react-icons/fa';

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
  font-size: 0.9rem;
  opacity: 0.8;

  .tag-inner {
    margin-top: 0.125rem;
    padding: 0.05rem 0.25rem;
    border-radius: 0.3rem;
    background-color: #333;
    color: #fff;
  }
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

class Publications extends Component {
  state = {
    currentYear: new Date().getFullYear(),
  };

  render() {
    let pubsInfo = [
      {
        prompt: 'Conferences',
        data: jsonQuery('publications[*type=conference]', {
          data: publicationsData,
        }).value.filter((p) => p.showInResearchPage !== false),
      },
      // {
      //   prompt: 'Posters',
      //   data: jsonQuery('publications[*type=poster]', {
      //     data: publicationsData,
      //   }).value,
      // },
      {
        prompt: 'Workshop Papers & Posters',
        data: jsonQuery('publications[*type=workshop]', {
          data: publicationsData,
        }).value.filter((p) => p.showInResearchPage !== false),
      },
    ];

    return (
      <React.Fragment>
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
                          xs="5"
                          md="4"
                          lg="3"
                          className="d-md-block d-lg-block"
                        >
                          <PreviewImg
                            src={pub.previewImgLink}
                            alt={pub.codename}
                            className="img-fluid pub-image-preview"
                          />
                          <ConferenceTag className="conference-tag d-inline-block d-sm-flex">
                            <div className="tag-inner">{pub.conferenceTag}</div>
                          </ConferenceTag>
                        </Col>
                        <Col xs="12" md="8" lg="9">
                          <a
                            className="paper-title pub-element"
                            href={`${pubFilePathPrefix}/${pub.codename}/${pub.codename}.pdf`}
                          >
                            {pub.title}
                          </a>
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
                                  {/* <FaAward style={{ marginRight: 4 }} /> */}
                                  🏅&nbsp;Best Paper Honorable Mention Award
                                </span>
                              )}
                              {pub.award.bestPaper && (
                                <span className="best-paper">
                                  {/* <FaTrophy style={{ marginRight: 4 }} /> */}
                                  🏆&nbsp;Best Paper Award
                                </span>
                              )}
                            </div>
                          )}
                          <div className="data pub-element">
                            <span>
                              [
                              <a
                                href={`#${pub.codename}`}
                                id={`${pub.codename}-abstract`}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                {/* <img
                                  src={GistIcon}
                                  alt="video"
                                  style={{
                                    marginRight: 3,
                                    width: 20,
                                    height: 20,
                                  }}
                                /> */}
                                Abstract
                              </a>
                              ]
                            </span>

                            {pub.ieeexplore !== undefined && (
                              <span>
                                [
                                <a
                                  href={pub.ieeexplore}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                  }}
                                >
                                  {/* <img
                                    src={IEEEIcon}
                                    alt="ieee"
                                    style={{
                                      marginRight: 3,
                                      width: 20,
                                      height: 20,
                                    }}
                                  /> */}
                                  IEEE Digital Library
                                </a>
                                ]
                              </span>
                            )}
                            {pub.acmdl !== undefined && (
                              <span>
                                {pub.acmdl_available === false ? (
                                  <React.Fragment>
                                    <em>Available soon!</em>
                                  </React.Fragment>
                                ) : (
                                  <>
                                    [
                                    <a
                                      href={pub.acmdl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                      }}
                                    >
                                      {/* <img
                                      src={ACMDLIcon}
                                      alt="acmdl"
                                      style={{
                                        marginRight: 3,
                                        width: 20,
                                        height: 20,
                                      }}
                                    /> */}
                                      ACM DL
                                    </a>
                                    ]
                                  </>
                                )}
                              </span>
                            )}
                            {pub.pnasdl !== undefined && (
                              <span>
                                {pub.pnasdl_available === false ? (
                                  <React.Fragment>
                                    <em>Available soon!</em>
                                  </React.Fragment>
                                ) : (
                                  <>
                                    [
                                    <a
                                      href={pub.pnasdl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                      }}
                                    >
                                      {/* <img
                                      src={ACMDLIcon}
                                      alt="acmdl"
                                      style={{
                                        marginRight: 3,
                                        width: 20,
                                        height: 20,
                                      }}
                                    /> */}
                                      PNAS
                                    </a>
                                    ]
                                  </>
                                )}
                              </span>
                            )}
                            {pub.arxiv !== undefined && (
                              <span>
                                [
                                <a
                                  href={pub.arxiv}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                  }}
                                >
                                  {/* <img
                                    src={ArxivIcon}
                                    alt="ieee"
                                    style={{
                                      marginRight: 3,
                                      width: 20,
                                      height: 20,
                                    }}
                                  /> */}
                                  arxiv
                                </a>
                                ]
                              </span>
                            )}
                            {pub.shouldShowLocalPaperLink !== false ? (
                              pub.type === 'poster' ? (
                                <React.Fragment>
                                  <span>
                                    [
                                    <a
                                      href={`${pubFilePathPrefix}/${pub.codename}/${pub.codename}-paper.pdf`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                      }}
                                    >
                                      {/* <img
                                        src={DocumentIcon}
                                        alt="video"
                                        style={{
                                          marginRight: 3,
                                          width: 20,
                                          height: 20,
                                        }}
                                      /> */}
                                      Extended Abstract
                                    </a>
                                    ]
                                  </span>
                                  <span>
                                    [
                                    <a
                                      href={`${pubFilePathPrefix}/${pub.codename}/${pub.codename}-poster.pdf`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                      }}
                                    >
                                      {/* <img
                                        src={PosterIcon}
                                        alt="video"
                                        style={{
                                          marginRight: 3,
                                          width: 20,
                                          height: 20,
                                        }}
                                      /> */}
                                      Poster
                                    </a>
                                    ]
                                  </span>
                                </React.Fragment>
                              ) : (
                                <span>
                                  [
                                  <a
                                    href={`${pubFilePathPrefix}/${pub.codename}/${pub.codename}.pdf`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                    }}
                                  >
                                    {/* <img
                                      src={DocumentIcon}
                                      alt="video"
                                      style={{
                                        marginRight: 3,
                                        width: 20,
                                        height: 20,
                                      }}
                                    /> */}
                                    Paper PDF
                                  </a>
                                  ]
                                </span>
                              )
                            ) : null}
                            {pub.conferenceTalkVideo !== undefined && (
                              <span>
                                [
                                <a
                                  href={pub.conferenceTalkVideo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                  }}
                                >
                                  {/* <img
                                    src={VideoIcon}
                                    alt="video"
                                    style={{
                                      marginRight: 3,
                                      width: 20,
                                      height: 20,
                                    }}
                                  /> */}
                                  Talk Video
                                </a>
                                ]
                              </span>
                            )}
                            {pub.cmuSCSMedia !== undefined && (
                              <span>
                                [
                                <a
                                  href={pub.cmuSCSMedia}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                  }}
                                >
                                  CMU SCS News
                                </a>
                                ]
                              </span>
                            )}
                            {pub.msrblog !== undefined && (
                              <span>
                                [
                                <a
                                  href={pub.msrblog}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                  }}
                                  title={pub.msrblogTitle}
                                >
                                  Microsoft Research Blog
                                </a>
                                ]
                              </span>
                            )}
                            {pub.website !== undefined && (
                              <span>
                                [
                                <a
                                  href={pub.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                  }}
                                >
                                  {/* <img
                                    src={CMUSCSIcon}
                                    alt="video"
                                    style={{
                                      marginRight: 3,
                                      width: 20,
                                      height: 20,
                                    }}
                                  /> */}
                                  Project Website
                                </a>
                                ]
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
                        {pubCategory.data.length - 1 !== pubIdx && (
                          <Col xs="12" className="d-sm-none">
                            <div
                              style={{
                                height: 20,
                                borderBottom: '1px solid #eee',
                              }}
                            ></div>
                          </Col>
                        )}
                      </Row>
                    );
                  }
                )}
              </PubCategoryContainer>
            );
          })}
        </PublicationContainer>
      </React.Fragment>
    );
  }
}

export default Publications;
