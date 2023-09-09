import React from 'react';
import Helmet from 'react-helmet';
import { Container } from 'reactstrap';

import LyricsOne from '../../images/xuexuemaimai/那时正好的时光.png';
import LyricsTwo from '../../images/xuexuemaimai/爱上刚好的对方.png';

import EggImg from '../../images/xuexuemaimai/egg.jpg';
import SongshuImg from '../../images/xuexuemaimai/songshu.jpg';
import MeimeiImg from '../../images/xuexuemaimai/meimei.jpg';
import YodaImg from '../../images/xuexuemaimai/yoda.jpg';

import './index.css';

const Motivation = () => (
  <div className="PageContainer">
    <Helmet title={'❄️🍐🐱😉'}>
      <meta name="robots" content="noindex" />
    </Helmet>
    <div className="Background">
      <div className="BgImage">
        <img src={EggImg} alt="Seattle" />
      </div>
      <div className="BgImage">
        <img src={SongshuImg} alt="Model Y" />
      </div>
      <div className="BgImage">
        <img src={MeimeiImg} alt="Cybertruck" />
      </div>
      <div className="BgImage">
        <img src={YodaImg} alt="Solar house" />
      </div>
    </div>

    <div className="Foreground">
      <div className="Banner">
        <img src={LyricsOne} alt="那时正好的时光" />
        <img src={LyricsTwo} alt="爱上刚好的对方" />
      </div>
    </div>
  </div>
);
export default Motivation;
