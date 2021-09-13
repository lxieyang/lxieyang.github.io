import React from 'react';
import Email from '../ObfuscatedEmail/ObfuscatedEmail';

const ContactInfo = () => (
  <React.Fragment>
    <strong>Address:</strong> <br />
    {/*Human-Computer Interaction Institute, <br/>
    School of Computer Science <br/>*/}
    Carnegie Mellon University <br />
    5000 Forbes Avenue <br />
    Pittsburgh, PA 15213 <br />
    <strong>Office:</strong>{' '}
    <a
      href="https://www.google.com/maps/place/Newell-Simon+Hall/@40.443428,-79.9478021,17z/data=!3m1!4b1!4m5!3m4!1s0x8834f2216b3de60b:0x9dc3e7773e241828!8m2!3d40.443428!4d-79.9456134"
      target="_blank"
      rel="noopener noreferrer"
    >
      Newell-Simon Hall 4405
    </a>{' '}
    <br />
    <strong>Email:</strong> <Email /> <br />
    <strong>Phone:</strong> +1 (734) 741-3585 <br />
  </React.Fragment>
);

export default ContactInfo;
