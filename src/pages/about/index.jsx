import React from 'react';
import { Link } from 'gatsby';
import appRoutes from '../../utils/appRoutes';
import {
  // Container,
  Row,
  Col
} from 'reactstrap';

import Layout from '../../components/layout/layout';
import HeadshotTooltip from '../../components/UI/HeadshotTooltip/HeadshotTooltip';
import BradImg from '../../images/people/bradmyers.jpg';
import NikiImg from '../../images/people/nikikittur.jpg';
import WalterImg from '../../images/people/walterlasecki.jpg';

import styles from './about.module.css';

const AboutPage = () => (
  <Layout pathName="About">
    <Row>
      <Col md="9" sm="12">
        <div>
          {/* eslint-disable-next-line */}
          <a className="anchor" name="bio" />
          <h2>Bio.</h2>
          <p>
            <strong>Michael Xieyang Liu</strong> is a 2nd year Ph.D. student at{' '}
            <a href="http://www.hcii.cmu.edu">
              Human Computer Interaction Institute
            </a>{' '}
            @ <a href="http://www.cmu.edu">Carnegie Mellon University</a>, where
            he is co-advised by{' '}
            <a href="http://www.cs.cmu.edu/~bam/" id="brad-myers">
              Dr. Brad A. Myers
            </a>{' '}
            and{' '}
            <a href="http://kittur.org/" id="niki-kittur">
              Dr. Niki Kittur
            </a>
            . Michael's current research interests include human-computer
            interaction, hybrid intelligent systems, user interface development,
            and sensemaking. He obtained his two B.S. degrees at University of
            Michigan and Shanghai Jiao Tong University. He worked as an
            undergraduate researcher with{' '}
            <a href="https://web.eecs.umich.edu/~wlasecki/" id="walter-lasecki">
              Dr. Walter S. Lasecki
            </a>{' '}
            in the{' '}
            <a href="http://web.eecs.umich.edu/~wlasecki/croma.html">
              Crowds + Machines Lab (Croma Lab)
            </a>{' '}
            during his time in Michigan.
          </p>

          <HeadshotTooltip target="brad-myers" headshotPath={BradImg} />
          <HeadshotTooltip target="niki-kittur" headshotPath={NikiImg} />
          <HeadshotTooltip target="walter-lasecki" headshotPath={WalterImg} />
        </div>

        <hr />

        <div>
          {/* eslint-disable-next-line */}
          <a className="anchor" name="education" />
          <h2>Education</h2>

          <table border="0" id="edu-table">
            <tbody>
              <tr>
                <td>08/2017 - </td>
                <td>
                  <strong>Carnegie Mellon University</strong>, Pittsburgh, PA
                </td>
              </tr>
              <tr>
                <td />
                <td>Ph.D. in Human Computer Interaction</td>
              </tr>
              <tr>
                <td />
                <td>
                  - Advisors:{' '}
                  <a href="http://www.cs.cmu.edu/~bam/" id="brad-myers-2">
                    Dr. Brad A. Myers
                  </a>{' '}
                  and{' '}
                  <a href="http://kittur.org/" id="niki-kittur-2">
                    Dr. Niki Kittur
                  </a>
                </td>
              </tr>
              <tr>
                <td>09/2015 - 04/2017</td>
                <td>
                  <strong>University of Michigan</strong>, Ann Arbor, MI, US
                </td>
              </tr>
              <tr>
                <td />
                <td>B.S. in Computer Science</td>
              </tr>
              <tr>
                <td />
                <td>
                  - Advisor:{' '}
                  <a
                    href="https://web.eecs.umich.edu/~wlasecki/"
                    id="walter-lasecki-2"
                  >
                    Dr. Walter Lasecki
                  </a>
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  - Undergraduate Researcher at the{' '}
                  <a href="http://web.eecs.umich.edu/~wlasecki/croma.html">
                    Crowds + Machines Lab
                  </a>
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  - Research Assistant at the{' '}
                  <a href="http://c4e.engin.umich.edu">Center for Ergonomics</a>
                </td>
              </tr>
              <tr>
                <td />
                <td>- Teaching Assistant for Database Management Systems</td>
              </tr>
              <tr>
                <td />
                <td>- Received Dean's List (2015 - 2016)</td>
              </tr>

              <tr>
                <td />
                <td />
              </tr>
              <tr>
                <td />
                <td />
              </tr>

              <tr>
                <td>09/2013 - 08/2015</td>
                <td>
                  <strong>Shanghai Jiao Tong University</strong>, Shanghai,
                  China
                </td>
              </tr>
              <tr>
                <td />
                <td>B.S.E in Electrical and Computer Engineering</td>
              </tr>
              <tr>
                <td />
                <td>- Received Tang-Junyuan Fellowship (top 2)</td>
              </tr>
              <tr>
                <td />
                <td>
                  - Won Meritorious Winner prize in 2015 COMAP - The
                  Mathematical Contest in Modeling (MCM) (Acceptance: 9%)
                </td>
              </tr>
              <tr>
                <td />
                <td>- Teaching Assistant for Multivariate Calculus</td>
              </tr>
            </tbody>
          </table>

          <HeadshotTooltip target="brad-myers-2" headshotPath={BradImg} />
          <HeadshotTooltip target="niki-kittur-2" headshotPath={NikiImg} />
          <HeadshotTooltip target="walter-lasecki-2" headshotPath={WalterImg} />
        </div>

        <hr />

        <div>
          {/* eslint-disable-next-line */}
          <a className="anchor" name="misc" />
          <h2>Misc.</h2>

          <ul>
            <li>
              My Chinese name is 刘燮洋. I was born in an amazing city,{' '}
              <a href="https://goo.gl/maps/V6MFTpQe3Un">Wuxi</a>, where I was
              brought up with by lots of love from my family and friends.
            </li>
            <li>
              My motto has always been: “Be the change you want to see in the
              world.” (by Mahatma Gandhi)
            </li>
            <li>
              I love driving. I love the feeling behind the wheels. No
              particular reason, just love it. There's also a clue about how
              much I love being on the road through this site's{' '}
              <Link to={appRoutes.notfound}>404 NOT FOUND</Link> page.
            </li>
            <li>
              My favorite song and favorite album of all time are both{' '}
              <a href="https://en.wikipedia.org/wiki/Hotel_California">
                Hotel California
              </a>
              . It is the only song that I can’t get tired of. And I’m pretty
              sure I never will.
            </li>
            <li>
              I play the guitar, mostly acoustic, from age 16. Though recently I
              started teaching myself to play the electric ones. I even made my
              own <a href="/projects/laserguitar.html">portable laser guitar</a>{' '}
              during freshmen year. Believe it or not, I can play Hotel
              California with that :-)
            </li>
            <li>
              I enjoy reading. My favorite magazine is{' '}
              <a href="https://www.scientificamerican.com">
                Scientific American
              </a>
              . I also like watching TV series and movies, especially thrillers.
              I love{' '}
              <a href="https://en.wikipedia.org/wiki/24_(TV_series)">24</a> and{' '}
              <a href="http://www.fox.com/prisonbreak">Prison Break</a>. Really
              can’t tell which is better. I mean Jack Bauer saves the world and
              Michael Scofield saves the family!
            </li>
            <li>
              I’m a gym worm. I like the saying{' '}
              <a href="https://translate.google.com/#auto/en/自律给我自由">
                “自律给我自由”
              </a>
              . I believe regular work out is the only way towards a healthy and
              prosperous life.
            </li>
          </ul>
        </div>
      </Col>

      {/* https://getbootstrap.com/docs/4.1/utilities/display/ */}
      <Col
        md={{ size: 3, offset: 8 }}
        className="d-none d-sm-none d-md-block"
        style={{ position: 'fixed' }}
      >
        <ul className={styles.NavUL}>
          <li>
            <a href="#bio">Bio.</a>
          </li>
          <li>
            <a href="#education">Eduction</a>
          </li>
          <li>
            <a href="#misc">Misc.</a>
          </li>
        </ul>
      </Col>
    </Row>
  </Layout>
);

export default AboutPage;
