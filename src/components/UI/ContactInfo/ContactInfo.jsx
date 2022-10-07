import React from 'react';
import Email from '../ObfuscatedEmail/ObfuscatedEmail';

import { CVPath } from '../../../utils/constants';

import { MdLocationOn as LocationIcon } from '@react-icons/all-files/md/MdLocationOn';
import { MdEmail as EmailIcon } from '@react-icons/all-files/md/MdEmail';
import { FaTwitterSquare as TwitterIcon } from '@react-icons/all-files/fa/FaTwitterSquare';
import { FaGithub as GithubIcon } from '@react-icons/all-files/fa/FaGithub';
import { MdSchool as GoogleScholarIcon } from '@react-icons/all-files/md/MdSchool';
import { IoMdDocument as CVIcon } from '@react-icons/all-files/io/IoMdDocument';

const ContactInfo = ({ data }) => {
  return (
    <div className="contact-container">
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

      <div className="contact-entry">
        <EmailIcon className="icon" /> <Email />
      </div>

      <div className="contact-entry">
        <TwitterIcon className="icon" />
        <a href={data.site.siteMetadata.externalLinks.twitter}>@lxieyang</a>
      </div>

      <div className="contact-entry">
        <GithubIcon className="icon" />
        <a href={data.site.siteMetadata.externalLinks.github}>lxieyang</a>
      </div>

      <div className="contact-entry">
        <GoogleScholarIcon className="icon" />{' '}
        <a href={data.site.siteMetadata.externalLinks.googleScholarProfile}>
          Google Scholar
        </a>
      </div>

      <div className="contact-entry">
        <CVIcon className="icon" /> <a href={CVPath}>Curriculum Vitae</a>
      </div>
    </div>
  );
};

export default ContactInfo;
