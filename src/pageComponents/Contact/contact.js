import React from 'react';
import Menu from '../Menu/menu.js';
import ContactHeader from './contactHeader.js';
import ContactInfo from './contactInfo.js';
import ContactPage from './contactPage.js';

const contact = () => {
  return (
    <div>
      <Menu />
      <ContactHeader />
      <ContactInfo /> 
      <ContactPage />
    </div>
  );
};

export default contact;
