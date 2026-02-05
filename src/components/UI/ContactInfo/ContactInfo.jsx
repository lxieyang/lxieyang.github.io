import React, { useState } from 'react';
import Email from '../ObfuscatedEmail/ObfuscatedEmail';

import { CVPath, DissertationPath } from '../../../utils/constants';

import { MdEmail as EmailIcon } from '@react-icons/all-files/md/MdEmail';
// Replacing Twitter icon with X icon asset
import XLogo from '../../../images/footer/x-icon.svg';
import { FaGithub as GithubIcon } from '@react-icons/all-files/fa/FaGithub';
import { MdSchool as GoogleScholarIcon } from '@react-icons/all-files/md/MdSchool';
import { IoMdDocument as CVIcon } from '@react-icons/all-files/io/IoMdDocument';
import { TiDocumentText as ThesisIcon } from '@react-icons/all-files/ti/TiDocumentText';

let showThesisTimeout = undefined;

const ContactInfo = ({
  data,
  inCVPage,
  showEmail = true,
  showTwitter = true,
  showGithub = true,
  showScholar = true,
  showCV = true,
  showThesis = true,
}) => {
  const [showThesisVisible, setShowThesisVisible] = useState(false);

  return (
    <div
      className="contact-container"
      role="button"
      tabIndex={0}
      onDoubleClick={() => {
        setShowThesisVisible(!showThesisVisible);
        if (showThesisTimeout) {
          clearTimeout(showThesisTimeout);
        }
        showThesisTimeout = setTimeout(() => {
          setShowThesisVisible(false);
        }, 3000);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          setShowThesisVisible(!showThesisVisible);
          if (showThesisTimeout) {
            clearTimeout(showThesisTimeout);
          }
          showThesisTimeout = setTimeout(() => {
            setShowThesisVisible(false);
          }, 3000);
        }
      }}
    >
      {/* {inCVPage !== true && (
        <div className="contact-entry">
          <LocationIcon className="icon" />{' '}
          <a
            href="https://www.google.com/maps/place/Newell-Simon+Hall/@40.443428,-79.9478021,17z/data=!3m1!4b1!4m5!3m4!1s0x8834f2216b3de60b:0x9dc3e7773e241828!8m2!3d40.443428!4d-79.9456134"
            target="_blank"
            rel="noopener noreferrer"
          >
            Newell-Simon Hall 4611
          </a>
        </div>
      )} */}

      {showEmail && (
        <div className="contact-entry">
          <EmailIcon className="icon" /> <Email />
        </div>
      )}

      {showScholar && (
        <div className="contact-entry">
          <GoogleScholarIcon className="icon" />{' '}
          <a href={data.site.siteMetadata.externalLinks.googleScholarProfile}>
            Google Scholar
          </a>
        </div>
      )}

      {showGithub && (
        <div className="contact-entry">
          <GithubIcon className="icon" />
          <a href={data.site.siteMetadata.externalLinks.github}>Github</a>
        </div>
      )}

      {showCV && inCVPage !== true && (
        <div className="contact-entry">
          <CVIcon className="icon" />{' '}
          <a href={CVPath}>Curriculum Vitae (PDF)</a>
        </div>
      )}

      {showTwitter && (
        <div className="contact-entry">
          <img
            src={XLogo}
            alt="X"
            className="icon"
            style={{ width: '1.1rem', height: '1.1rem' }}
          />
          <a href={data.site.siteMetadata.externalLinks.twitter}>X</a>
        </div>
      )}

      {/* <div className="contact-entry">
        <LinkedInIcon className="icon" />
        <a href={data.site.siteMetadata.externalLinks.linkedin}>LinkedIn</a>
      </div> */}

      {showThesis && (
        <div
          className="contact-entry"
          style={{
            display: showThesisVisible ? 'block' : 'none',
            transition: 'all 0.1s ease-in-out',
          }}
        >
          <ThesisIcon className="icon" />
          <a href={DissertationPath} target="_blank" rel="noopener noreferrer">
            Dissertation
          </a>{' '}
        </div>
      )}

      <div style={{ width: '100%', height: '20px' }}></div>
    </div>
  );
};

export default ContactInfo;
