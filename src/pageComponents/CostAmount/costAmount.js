import React from 'react';
import Menu from '../Menu/menu';
import CostHeader from './costHeader';
import CostInfo from './costInfo';
import CostAbout1 from './costAbout1';
import CostAbout2 from './costAbout2';
import CostAbout3 from './costAbout3';
import CostAbout4 from './costAbout4';
import CostAbout5 from './costAbout5';

const costAmount = () => {
  return (
    <div>
      <Menu />
      <CostHeader />
      <CostInfo />
      <CostAbout1 />
      <CostAbout2 />
      <CostAbout3 />
      <CostAbout4 />
      <CostAbout5 />
    </div>
  );
};

export default costAmount;
