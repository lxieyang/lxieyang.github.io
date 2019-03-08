import React from 'react';
import {
  UncontrolledTooltip
} from 'reactstrap';

const HeadshotTooltip = ({target, headshotPath}) => (
  <UncontrolledTooltip 
    placement="bottom" autohide={false} hideArrow={true} target={ target }
    style={{backgroundColor: 'transparent', color: 'black', width: '250px'}}>
    <img alt={ target } src={ headshotPath } style={{width: '100%'}}/>
  </UncontrolledTooltip>
);

export default HeadshotTooltip;