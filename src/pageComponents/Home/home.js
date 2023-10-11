import React from 'react';
import Menu from '../Menu/menu.js';
import HomeHeader from '../Home/homeHeader.js';
import HomeBenefits from '../Home/homeBenefits.js';

export default function home() {
  return (
    <div>
      <Menu />
      <HomeHeader />
      <HomeBenefits />
    </div>
  );
}
