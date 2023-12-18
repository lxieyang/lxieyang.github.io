import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { sortBy, reverse } from 'lodash';
import jsonQuery from 'json-query';
import {
  // Container,
  Row,
  Col,
} from 'reactstrap';

import { BsDownload as DownloadIcon } from '@react-icons/all-files/bs/BsDownload';

import Layout from '../../components/layout/layout';
import { CVPath } from '../../utils/constants';
import ContactInfo from '../../components/UI/ContactInfo/ContactInfo';
import { publicationsData, pubFilePathPrefix } from '../../utils/publications';

const CVNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem 1rem 0rem;
`;

const CVName = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
`;

const CVButton = styled.a`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 0.25rem 0.5rem;
  /* border: 1px solid #c1000f; */
  border: 1px solid #01751e;
  /* background-color: #c1000f; */
  /* color: #fff; */
`;

const CVContactsInfoContainer = styled.div`
  color: #666;
  font-size: 1rem;
`;

const CVSectionContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const CVSectionTitle = styled.div`
  font-family: sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
`;

const CVSectionSubTitle = styled.div`
  font-family: sans-serif;
  font-weight: 500;
  font-style: italic;
  color: #666;
  font-size: 1.1rem;
`;

const CV = ({ data }) => {
  let pubsInfo = [
    {
      prompt: 'Peer-reviewed Conference Papers',
      prefix: 'C',
      data: jsonQuery('publications[*type=conference]', {
        data: publicationsData,
      }).value.filter((p) => p.showOnWebCV !== false),
    },
    // {
    //   prompt: 'Posters',
    //   prefix: 'P',
    //   data: jsonQuery('publications[*type=poster]', {
    //     data: publicationsData,
    //   }).value,
    // },
    {
      prompt: 'Workshop Papers & Posters',
      prefix: 'W',
      data: jsonQuery('publications[*type=workshop]', {
        data: publicationsData,
      }).value,
    },
    {
      prompt: 'Patent',
      prefix: 'P',
      data: jsonQuery('publications[*type=patent]', {
        data: publicationsData,
      }).value,
    },
  ];

  return (
    <Layout pathName="CV">
      <div
      // style={{
      //   fontFamily: `'Linux Libertine', sans-serif`,
      // }}
      >
        <CVNameContainer>
          <CVName>Michael Xieyang Liu</CVName>
          <CVButton className="button" href={CVPath}>
            <DownloadIcon className="icon" style={{ marginRight: '0.5rem' }} />{' '}
            Download CV
          </CVButton>
        </CVNameContainer>

        <Row>
          <Col xs="12" sm="6">
            <CVContactsInfoContainer>
              People + AI Research (PAIR) <br />
              Google
              {/* Human-Computer Interaction Institute, School of Computer Science{' '}
              <br />
              Carnegie Mellon University <br />
              5000 Forbes Avenue <br />
              Pittsburgh, PA 15213 */}
            </CVContactsInfoContainer>
          </Col>
          <Col xs="12" sm="6">
            <ContactInfo data={data} inCVPage={true} />
          </Col>
        </Row>

        <CVSectionContainer>
          <CVSectionTitle>Research Focus</CVSectionTitle>
          My research is at the intersection of Human-computer Interaction
          (HCI), programming tools, sensemaking, intelligent user interfaces,
          and human-AI interaction, where I design and build systems that
          accelerate online sensemaking for developers and facilitate human-AI
          interactions for end-users.
        </CVSectionContainer>

        <CVSectionContainer>
          <CVSectionTitle>Professional Experience</CVSectionTitle>
          <CVEntryWithDateOnTheLeft
            dateString={'Aug. 2023 - present'}
            content={
              <>
                <strong>Google PAIR</strong>, Research Scientist
              </>
            }
          />
          <CVEntryWithDateOnTheLeft
            dateString={'May - Aug. 2022'}
            content={
              <>
                <strong>Microsoft Research</strong>, Research Intern
                <br />
                <em>
                  with{' '}
                  <a href="https://advait.org/" target="_blank">
                    Advait Sarkar
                  </a>
                  ,{' '}
                  <a
                    href="https://www.microsoft.com/en-us/research/people/cnegreanu/"
                    target="_blank"
                  >
                    Carina Negreanu
                  </a>
                  ,{' '}
                  <a
                    href="https://www.microsoft.com/en-us/research/people/johnwilliams/"
                    target="_blank"
                  >
                    Jack Williams
                  </a>
                  ,{' '}
                  <a
                    href="https://www.microsoft.com/en-us/research/people/adg/"
                    target="_blank"
                  >
                    Andy Gordon
                  </a>{' '}
                  &{' '}
                  <a
                    href="https://www.microsoft.com/en-us/research/people/zorn/"
                    target="_blank"
                  >
                    Ben Zorn
                  </a>
                </em>
                <br />
                Natural language interactions for end-user programmers using
                code-generating LLMs.
              </>
            }
          />
          <CVEntryWithDateOnTheLeft
            dateString={'May - Aug. 2020'}
            content={
              <>
                <strong>Google</strong>, Research Intern
                <br />
                <em>with Dustin Smith, Todd Kulesza, & Sarah D'Angelo</em>
                <br />
                Go developers' refactoring practices and engagement with
                refactoring tools
              </>
            }
          />
          <CVEntryWithDateOnTheLeft
            dateString={'May - Aug. 2019'}
            content={
              <>
                <strong>Bosch Research</strong>, Research Intern
                <br />
                <em>
                  with{' '}
                  <a
                    href="https://sites.google.com/view/lisayu/home"
                    target="_blank"
                  >
                    Lisa Yu
                  </a>
                  ,{' '}
                  <a
                    href="https://www.bosch-ai.com/research/researcher-pages/t_overviewpage_100.html"
                    target="_blank"
                  >
                    Wan-Yi Lin
                  </a>{' '}
                  &{' '}
                  <a
                    href="https://www.bosch.com/research/know-how/research-experts/alessandro-oltramari-ph-d/"
                    target="_blank"
                  >
                    Alessandro Oltramari
                  </a>
                </em>
                <br />
                Crowdsourcing & AI techniques for improving the safety and
                performance of autonomous vehicles.
              </>
            }
          />
        </CVSectionContainer>

        <CVSectionContainer>
          <CVSectionTitle>Education</CVSectionTitle>
          <CVEntryWithDateOnTheLeft
            dateString={'2017 - 2023'}
            content={
              <>
                <strong>Ph.D.</strong> in{' '}
                <strong>Human-Computer Interaction</strong>
                <br />
                Carnegie Mellon University, Pittsburgh, PA, USA <br />
                Thesis: Tool Support for Knowledge Foraging, Structuring, and
                Transfer during Online Sensemaking <br />
                Advisors:{' '}
                <a href="https://www.cs.cmu.edu/~bam/" target="_blank">
                  Brad A. Myers
                </a>{' '}
                &{' '}
                <a href="https://kittur.org/" target="_blank">
                  Aniket Kittur
                </a>
                <br />
                Committee:{' '}
                <a
                  href="https://www.thecoalalab.com/kenholstein"
                  target="_blank"
                >
                  Kenneth Holstein
                </a>
                ,{' '}
                <a
                  href="https://sites.google.com/site/dmrussell/"
                  target="_blank"
                >
                  Daniel M. Russell
                </a>{' '}
              </>
            }
          />
          <CVEntryWithDateOnTheLeft
            dateString={'2017 - 2021'}
            content={
              <>
                <strong>M.S.</strong> in{' '}
                <strong>Human-Computer Interaction</strong>
                <br />
                Carnegie Mellon University, Pittsburgh, PA, USA <br />
              </>
            }
          />
          <CVEntryWithDateOnTheLeft
            dateString={'2013 - 2017'}
            content={
              <>
                <strong>B.S.</strong> in <strong>Computer Science</strong>
                <br />
                University of Michigan, Ann Arbor, MI, USA <br />
              </>
            }
          />
          {/* <CVEntryWithDateOnTheLeft
            dateString={'2013 - 2017'}
            content={
              <>
                <strong>B.S.E.</strong> in{' '}
                <strong>Electrical and Computer Engineering</strong>
                <br />
                University of Michigan–Shanghai Jiao Tong University Joint
                Institute, Shanghai, China
                <br />
              </>
            }
          /> */}
        </CVSectionContainer>

        <CVSectionContainer>
          <CVSectionTitle>Publications</CVSectionTitle>
          {pubsInfo.map((pubCategory, pubCategoryIdx) => {
            return (
              <div key={pubCategoryIdx}>
                <CVSectionSubTitle>{pubCategory.prompt}</CVSectionSubTitle>
                {reverse(sortBy(pubCategory.data, ['year', 'month'])).map(
                  (pub, pubIdx) => {
                    return (
                      <CVEntryWithIndexOnTheLeft
                        indexString={
                          <>
                            {pubCategory.prefix}
                            {pubCategory.data.length - pubIdx}.
                            {/* <br />
                            {pub.conferenceTag} */}
                          </>
                        }
                        key={pubIdx}
                      >
                        {pub.authors.map((author, authorIdx) => (
                          <React.Fragment key={authorIdx}>
                            <span
                              key={authorIdx}
                              style={{
                                fontWeight: author.bold ? '500' : '300',
                              }}
                            >
                              {author.name}
                            </span>
                            {authorIdx === pub.authors.length - 1 ? '. ' : ', '}
                          </React.Fragment>
                        ))}
                        {pub.type !== 'patent' ? (
                          <a
                            style={{
                              // color: 'rgb(166, 38, 27)',
                              color: '#005f18',
                              fontWeight: 500,
                            }}
                            href={`${pubFilePathPrefix}/${pub.codename}/${pub.codename}.pdf`}
                          >
                            {pub.title}
                          </a>
                        ) : (
                          <span style={{ fontWeight: 500 }}>{pub.title}</span>
                        )}
                        .{' '}
                        <span style={{ fontStyle: 'italic', fontWeight: 300 }}>
                          {pub.conferenceFullName}, <span>{pub.year}</span>
                        </span>
                        <br />
                        {pub.type !== 'patent' && (
                          <>
                            <span style={{ textDecoration: 'underline' }}>
                              {pub.conferenceTag}{' '}
                            </span>
                            <br />
                          </>
                        )}
                        {pub.award && (
                          <div style={{ fontWeight: 600 }}>
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
                      </CVEntryWithIndexOnTheLeft>
                    );
                  }
                )}
              </div>
            );
          })}
        </CVSectionContainer>

        <CVSectionContainer>
          <CVSectionTitle>Invited Talks & Guest Lectures</CVSectionTitle>
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={'Dec. 2023'}>
            <strong>
              <a href="https://youtu.be/CqtRFZGYfks" target="_blank">
                Building AI Sensemaking Systems
              </a>
            </strong>
            , University of Zürich
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={100}
            indexString={'Sept. 2023'}
          >
            <strong>
              Bridging the Abstraction Gap Between End-User Programmers and
              Code-Generating Large Language Models
            </strong>
            , Viginia Tech
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={'Mar. 2023'}>
            <strong>
              Accelerating Programming Sensemaking with Human-Centered
              Interactive Systems
            </strong>
            , Microsoft Research
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={'Mar. 2023'}>
            <strong>
              Accelerating Programming Sensemaking with Human-Centered
              Interactive Systems
            </strong>
            , Apple AI/ML
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={'Feb. 2023'}>
            <strong>
              Accelerating Sensemaking with Human-Centered Interactive Systems
            </strong>
            , Google Research
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={'Feb. 2023'}>
            <strong>
              Accelerating Sensemaking with Human-Centered Interactive Systems
            </strong>
            , Allen Institute for Artificial Intelligence (AI2)
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={'Aug. 2022'}>
            <strong>
              Bridging the Abstration Gap Between End-User Programmers and
              LLM-backed Code-Generating Models
            </strong>
            , Microsoft Research
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={'Aug. 2020'}>
            <strong>Understanding Refactoring with Golang</strong>, Google Cloud
            DevEx Presentation
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={100}
            indexString={'April 2018'}
          >
            <strong>
              Supporting Knowledge Acceleration for Programming from a
              Sensemaking Perspective
            </strong>
            , Sensemaking Workshop at CHI Conference on Human Factors in
            Computing Systems
          </CVEntryWithIndexOnTheLeft>
        </CVSectionContainer>

        <CVSectionContainer>
          <CVSectionTitle>Open-source Experience</CVSectionTitle>
          <CVEntryWithDateOnTheLeft
            dateString={'2019 - present'}
            content={
              <>
                <strong>
                  <a
                    href="https://chrome.google.com/webstore/detail/vertical-tabs/pddljdmihkpdfpkgmbhdomeeifpklgnm"
                    target={'_blank'}
                  >
                    Vertical Tabs Chrome Extension
                  </a>
                </strong>
                <br />
                <a
                  href="https://chrome.google.com/webstore/detail/vertical-tabs/pddljdmihkpdfpkgmbhdomeeifpklgnm"
                  target={'_blank'}
                >
                  36k users
                </a>{' '}
                on Chrome Web Store;{' '}
                <a
                  href="https://github.com/lxieyang/vertical-tabs-chrome-extension"
                  target={'_blank'}
                >
                  400+ stars
                </a>{' '}
                on GitHub (as of Oct. 2023)
              </>
            }
          />
          <CVEntryWithDateOnTheLeft
            dateString={'2019 - present'}
            content={
              <>
                <strong>
                  <a
                    href="https://github.com/lxieyang/chrome-extension-boilerplate-react/"
                    target={'_blank'}
                  >
                    Chrome extension boilerplate (w/ React & Webpack)
                  </a>
                </strong>
                <br />
                <a
                  href="https://github.com/lxieyang/chrome-extension-boilerplate-react/stargazers"
                  target={'_blank'}
                >
                  2.8k stars
                </a>
                ,{' '}
                <a
                  href="https://github.com/lxieyang/chrome-extension-boilerplate-react/forks"
                  target={'_blank'}
                >
                  900+ forks
                </a>{' '}
                on GitHub (as of Oct. 2023)
              </>
            }
          />
        </CVSectionContainer>

        <CVSectionContainer>
          <CVSectionTitle>Research Experience</CVSectionTitle>
          <CVEntryWithDateOnTheLeft
            dateString={'2023 - present'}
            content={
              <>
                <strong>Research Scientist</strong>
                <br />
                <em>People + AI Research, Google</em>
                <br />
              </>
            }
          />
          <CVEntryWithDateOnTheLeft
            dateString={'2017 - 2023'}
            content={
              <>
                <strong>Graduate Research Assistant</strong> (advised by{' '}
                <a href="http://www.cs.cmu.edu/~bam/" target="_blank">
                  Brad A. Myers
                </a>{' '}
                &{' '}
                <a href="http://kittur.org/" target="_blank">
                  Aniket Kittur)
                </a>
                <br />
                <em>
                  Human-Computer Interaction Institute, Carnegie Mellon
                  University
                </em>
                <br />
                Working on prototype systems that scaffold developers in making
                decisions using information from various web sources and enable
                subsequent developers to learn, understand, and reuse those
                decisions and rationales.
              </>
            }
          />
          <CVEntryWithDateOnTheLeft
            dateString={'2020 - 2021'}
            content={
              <>
                <strong>Research Assistant</strong> (with{' '}
                <a href="http://jodiforlizzi.com/" target="_blank">
                  Jodi Forlizzi
                </a>
                ,{' '}
                <a href="http://www.cs.cmu.edu/~roni/" target="_blank">
                  Roni Rosenfeld
                </a>{' '}
                &{' '}
                <a href="http://www.stat.cmu.edu/~ryantibs/" target="_blank">
                  Ryan Tibshirani
                </a>
                )
                <br />
                <em>
                  <a href="https://delphi.cmu.edu/" target="_blank">
                    Delphi Research Group
                  </a>
                  , Carnegie Mellon University
                </em>
                <br />
                Working on the visualization team of the{' '}
                <a href="https://delphi.cmu.edu/covidcast/" target="_blank">
                  COVIDcast system
                </a>
                , which displays indicators related to COVID-19 activity level
                across the U.S. These indicators are derived from a variety of
                anonymized, aggregated data sources made available by multiple
                partners, including Facebook, Google, and Quidel.{' '}
                <a
                  href={
                    'https://www.cmu.edu/news/stories/archives/2020/april/cmu-unveils-covidcast-maps.html'
                  }
                  target="_blank"
                >
                  [Press coverage]
                </a>
              </>
            }
          />
          <CVEntryWithDateOnTheLeft
            dateString={'2016 - 2017'}
            content={
              <>
                <strong>Undergraduate Researcher</strong>
                <br />
                <em>
                  Crowds and Machines Lab, University of Michigan, Ann Arbor
                </em>
                <br />
                Worked on crowd & AI-powered interdisciplinary projects that
                address novel and promising research questions.
              </>
            }
          />
          <CVEntryWithDateOnTheLeft
            dateString={'2015 - 2016'}
            content={
              <>
                <strong>Research Assistant</strong> (advised by{' '}
                <a
                  href="https://www.cs.princeton.edu/~jiadeng/"
                  target="_blank"
                >
                  Jia Deng
                </a>
                )
                <br />
                <em>
                  Vision & Learning Lab, University of Michigan, Ann Arbor
                </em>
                <br />
                Worked on a computer vision based toolkit that boosts
                performance on human-object interaction detection by exploiting
                human-object spatial relations.
              </>
            }
          />
        </CVSectionContainer>

        <CVSectionContainer>
          <CVSectionTitle>
            Selected Honors, Grants, Awards & Coverage
          </CVSectionTitle>
          <CVEntryWithIndexOnTheLeft
            indexSpace={100}
            indexString={'April 2023'}
          >
            <strong>🏅 Best Paper Honorable Mention Award</strong>, ACM CHI
            Conference on Human Factors in Computing Systems (CHI 2023)
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={'Nov. 2022'}>
            <strong>Special Recognitions for Outstanding Reviews</strong>, ACM
            CHI Conference on Human Factors in Computing Systems (CHI 2023)
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={'Nov. 2021'}>
            <strong>CMU SCS News Coverage on our CSCW 2021 Best Paper</strong>:{' '}
            <a
              href="https://www.cs.cmu.edu/news/2021/reuse-content-tool"
              target="_blank"
            >
              "CMU Researchers Develop Tool To Help Determine When To Reuse
              Content"
            </a>
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={'Oct. 2021'}>
            <strong>🏆 Best Paper Award</strong>, 24th ACM Conference on
            Computer-Supported Cooperative Work and Social Computing (CSCW 2021)
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={'June 2021'}>
            <strong>Special Recognitions for Outstanding Reviews</strong>, 34th
            Annual ACM Symposium on User Interface Software and Technology (UIST
            2021)
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={100}
            indexString={'April 2020'}
          >
            <strong>CMU News Coverage on COVIDcast</strong>:{' '}
            <a
              href="https://www.cmu.edu/news/stories/archives/2020/april/cmu-unveils-covidcast-maps.html"
              target="_blank"
            >
              "Carnegie Mellon Unveils Five Interactive COVID-19 Maps"
            </a>
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={'Oct. 2019'}>
            <strong>🏅 Best Paper Honorable Mention Award</strong>, 32nd Annual
            ACM Symposium on User Interface Software and Technology (UIST 2019)
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={'June 2018'}>
            <strong>
              <a
                href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1814826"
                target="_blank"
              >
                SHF: Small: Knowledge Acceleration for Programming ($500,000
                over 3 years)
              </a>
            </strong>
            , NSF
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={100}
            indexString={'March 2017'}
          >
            <strong>James B. Angell Scholar</strong>, 94th Annual Honors
            Convocation, University of Michigan
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={100}
            indexString={'March 2017'}
          >
            <strong>EECS Scholar Award</strong>, 2017 EECS Honors & Awards
            Reception, University of Michigan
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={'May 2016'}>
            <strong>
              Summer Undergraduate Research Experience (SURE) program
            </strong>
            , University of Michigan
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={100}
            indexString={'July 2015, July 2016'}
          >
            <strong>Tang-Junyuan Fellowship (Top 2/250, $50,000)</strong>,
            UM-SJTU Joint Institute
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={100}
            indexString={'Dec. 2015, April 2016'}
          >
            <strong>Dean's List</strong>, University of Michigan
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={'Aug. 2015'}>
            <strong>Basic Teaching Assistant Certificate</strong>, Center for
            Learning and Teaching, UM-SJTU Joint Institute
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={100}
            indexString={'Dec. 2013, Aug. 2014, Dec. 2014'}
          >
            <strong>Dean's List</strong>, UM-SJTU Joint Institute
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={'June 2015'}>
            <strong>Fellowship for Outstanding Academic Performance</strong>,
            Shanghai Jiao Tong University
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={100}
            indexString={'April 2015'}
          >
            <strong>
              <a
                href="https://www.comap-math.com/mcm/2015Certs/33804.pdf"
                target="_blank"
              >
                Meritorious Winner (Acceptance: 9%)
              </a>
            </strong>
            , COMAP Mathematical Contest in Modeling
          </CVEntryWithIndexOnTheLeft>
        </CVSectionContainer>

        <CVSectionContainer>
          <CVSectionTitle>Teaching Experience</CVSectionTitle>
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={`Fall 2020`}>
            <strong>
              Teaching Assistant – 05-410/05-610 User-Centered Research &
              Evaluation
            </strong>{' '}
            <br />
            Human-Computer Interaction Institute, Carnegie Mellon University
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={`Fall 2020`}>
            <strong>
              Teaching Assistant –{' '}
              <a
                href="https://www.cs.cmu.edu/~bam/uicourse/05631fall2020/"
                target="_blank"
              >
                05-431/05-631 Software Structures for User Interfaces
              </a>
            </strong>{' '}
            <br />
            Human-Computer Interaction Institute, Carnegie Mellon University
          </CVEntryWithIndexOnTheLeft>{' '}
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={`Fall 2019`}>
            <strong>
              Teaching Assistant – 05-430/05-630 Programming Usable Interfaces
            </strong>{' '}
            <br />
            Human-Computer Interaction Institute, Carnegie Mellon University
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={100}
            indexString={`Winter 2017`}
          >
            <strong>
              Instructional Aide –{' '}
              <a
                href="https://docs.google.com/document/d/1tn3SMN37z4f_Q8Sey-oe9LuZKh9AMctI7B4HO-zs-F4/edit?usp=sharing"
                target="_blank"
              >
                EECS484 Database Management Systems
              </a>
            </strong>{' '}
            <br />
            University of Michigan, Ann Arbor
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft indexSpace={100} indexString={`Fall 2016`}>
            <strong>
              Instructional Aide –{' '}
              <a
                href="http://web.eecs.umich.edu/~aprakash/eecs484/index.html"
                target="_blank"
              >
                EECS484 Database Management Systems
              </a>
            </strong>{' '}
            <br />
            University of Michigan, Ann Arbor
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={100}
            indexString={`Summer 2015`}
          >
            <strong>Teaching Assistant – Vv255 Multivariate Calculus</strong>{' '}
            <br />
            University of Michigan – Shanghai Jiao Tong University Joint
            Institute
          </CVEntryWithIndexOnTheLeft>
        </CVSectionContainer>

        <CVSectionContainer>
          <CVSectionTitle>Mentoring</CVSectionTitle>
          <CVEntryWithIndexOnTheLeft
            indexSpace={120}
            indexString={'2018 - 2019'}
          >
            <strong>
              <a href="https://janeon.github.io/" target="_blank">
                Jane Hsieh
              </a>
            </strong>{' '}
            <br />
            <em>
              Oberlin College Student (Currently a CMU S3D Ph.D. Candidate)
            </em>{' '}
            <br />
            Studied programmers' web-foraging behaviors. Contributed to the
            development of the Unakite system.
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={120}
            indexString={'2017 - 2018'}
          >
            <strong>Emily Deng</strong> <br />
            <em>CMU Master's Student</em> <br />
            Designed and carried out interview studies with programmers that
            probe their programming behaviors and needs.
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={120}
            indexString={'2017 - 2018'}
          >
            <strong>Shaun Burley</strong> <br />
            <em>CMU Master's Student</em> <br />
            Designed and carried out interview studies with programmers that
            probe their programming behaviors and needs.
          </CVEntryWithIndexOnTheLeft>
        </CVSectionContainer>

        <CVSectionContainer>
          <CVSectionTitle>Service</CVSectionTitle>
          <CVSectionSubTitle>Academic Service</CVSectionSubTitle>
          <CVEntryWithIndexOnTheLeft
            indexSpace={160}
            indexString={
              <strong style={{ fontStyle: 'normal' }}>Associate Chair</strong>
            }
          >
            {' '}
            <u>ACM CHI</u> 2024{' '}
            <a
              target="_blank"
              href="https://chi2024.acm.org/subcommittees/selecting-a-subcommittee/"
            >
              Computational Interaction subcommittee
            </a>
            <br />
            <u>ACM CHI</u> 2020 Late Breaking Work Track
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={160}
            indexString={
              <strong style={{ fontStyle: 'normal' }}>Paper Reviewing</strong>
            }
          >
            <strong>Conferences</strong>: <u>CHI</u> (2019 - 2024), <u>CSCW</u>{' '}
            (2019 - 2023), <u>UIST</u> (2019 - 2022), <u>IUI</u> (2020),{' '}
            <u>VAST</u> (2020)
            <strong>Journal</strong>: <u>TOCHI</u> (2022) <br />
            <strong>Special Recognitions for Outstanding Reviews</strong>:{' '}
            <u>UIST</u> (2021), <u>CHI</u> (2023)
          </CVEntryWithIndexOnTheLeft>

          <CVSectionSubTitle>
            Departmental & Community Service
          </CVSectionSubTitle>
          <CVEntryWithIndexOnTheLeft
            indexSpace={160}
            indexString={
              <strong style={{ fontStyle: 'normal' }}>Committee Member</strong>
            }
          >
            Ph.D. Admission Committee (2022-2023)
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={160}
            indexString={
              <strong style={{ fontStyle: 'normal' }}>Committee Member</strong>
            }
          >
            REU (Research Experience for Undergraduate) Admissions Committee
            (2021-2022)
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={160}
            indexString={
              <strong style={{ fontStyle: 'normal' }}>Committee Member</strong>
            }
          >
            CMU HCII Faculty Lunch Organization Committee (2019-2020)
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={160}
            indexString={
              <strong style={{ fontStyle: 'normal' }}>Committee Member</strong>
            }
          >
            CMU HCII Ph.D. Student Lounge Committee (2019-2020)
          </CVEntryWithIndexOnTheLeft>
        </CVSectionContainer>

        <CVSectionContainer>
          <CVSectionTitle>Languages, Technical Skills & Courses</CVSectionTitle>
          <CVEntryWithIndexOnTheLeft
            indexSpace={160}
            indexString={
              <strong style={{ fontStyle: 'normal' }}>Languages</strong>
            }
          >
            <strong>English, Chinese (Mandarin)</strong> - Native or bilingual
            proficiency, <strong>German</strong> - Limited working proficiency
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={160}
            indexString={
              <strong style={{ fontStyle: 'normal' }}>Programming</strong>
            }
          >
            HTML/Javascript/CSS, Python, SQL, C/C++, Swift, Java, LaTeX, etc.
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={160}
            indexString={
              <strong style={{ fontStyle: 'normal' }}>
                Web & App Development
              </strong>
            }
          >
            React.js, Angular, Redux, Bootstrap, Node.js, PHP, Ionic Framework,
            etc.
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={160}
            indexString={
              <strong style={{ fontStyle: 'normal' }}>
                Deep Learning & AI
              </strong>
            }
          >
            PyTorch, Tensorflow, ml5.js
          </CVEntryWithIndexOnTheLeft>
          <CVEntryWithIndexOnTheLeft
            indexSpace={160}
            indexString={
              <strong style={{ fontStyle: 'normal' }}>Courses</strong>
            }
          >
            Machine Learning, Deep Learning, Advanced User Interfaces, Database
            Management Systems, Information Security, Web Development
          </CVEntryWithIndexOnTheLeft>
        </CVSectionContainer>
      </div>
    </Layout>
  );
};

const LeftIndex = styled.span`
  /* font-style: italic; */
  font-weight: 300;

  @media (max-width: 768px) {
    font-style: normal;
    font-weight: 600;
    color: #c1000f;
  }
`;

const CVEntryWithDateOnTheLeft = ({ dateString, content, indexSpace = 2 }) => (
  <Row style={{ marginBottom: '0.45rem' }}>
    <Col xs="12" sm={indexSpace}>
      <LeftIndex>{dateString}</LeftIndex>
    </Col>
    <Col xs="12" sm={12 - indexSpace} style={{ fontWeight: 300 }}>
      {content}
    </Col>
  </Row>
);

const CVEntryWithIndexOnTheLeft = ({
  indexString,
  children,
  indexSpace = 40,
}) => (
  <div style={{ marginBottom: '0.5rem', display: 'flex', fontWeight: 300 }}>
    <div
      style={{
        fontStyle: 'italic',
        width: indexSpace,
        flexShrink: 0,
        marginRight: '0.5rem',
      }}
    >
      {indexString}
    </div>
    <div style={{ flex: 1 }}>{children}</div>
  </div>
);

export const query = graphql`
  query CVPageQuery {
    site {
      siteMetadata {
        title
        nameEnglish
        nameChinese
        externalLinks {
          googleScholarProfile
          github
          facebook
          instagram
          linkedin
          twitter
        }
      }
    }
  }
`;

export default CV;
