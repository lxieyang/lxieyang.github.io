import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { Container } from 'reactstrap';

import LyricsOne from '../../images/xuexuemaimai/那时正好的时光.png';
import LyricsTwo from '../../images/xuexuemaimai/爱上刚好的对方.png';

import EggImg from '../../images/xuexuemaimai/egg.jpg';
import SongshuImg from '../../images/xuexuemaimai/songshu.jpg';
import MeimeiImg from '../../images/xuexuemaimai/meimei.jpg';
import YodaImg from '../../images/xuexuemaimai/yoda.jpg';

import sgzh from '../../assets/audios/sgzh.mp3';

import './index.css';

const Motivation = () => {
  useEffect(() => {
    document
      .getElementById('backgroundMusic')
      .play()
      .catch((error) => {
        document.addEventListener(
          'click',
          () => {
            document.getElementById('backgroundMusic').play();
          },
          { once: true }
        );
      });
  }, []);

  return (
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

      <audio id="backgroundMusic">
        <source src={sgzh} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Motivation;
