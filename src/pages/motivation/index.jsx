import React from 'react';
import { Container, Row, Column } from 'reactstrap';

import SeattleImg from '../../images/motivation/seattle.jpg';
import ModelYImg from '../../images/motivation/model-y.jpg';
import CybertruckImg from '../../images/motivation/cybertruck.jpg';
import SolarHouseImg from '../../images/motivation/solar-house.jpg';

import './index.css';

const Motivation = (props) => (
  <div className="PageContainer">
    <div className="Background">
      <div className="BgImage">
        <img src={SeattleImg} alt="Seattle" />
      </div>
      <div className="BgImage">
        <img src={ModelYImg} alt="Model Y" />
      </div>
      <div className="BgImage">
        <img src={CybertruckImg} alt="Cybertruck" />
      </div>
      <div className="BgImage">
        <img src={SolarHouseImg} alt="Solar house" />
      </div>
    </div>
  </div>
);
export default Motivation;
