import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from '../src/pageComponents/Home/home.js';
import Contact from '../src/pageComponents/Contact/contact.js';
import Howitworks from '../src/pageComponents/HowItWorks/howitworks.js';
import CostAmount from '../src/pageComponents/CostAmount/costAmount.js';
import { Routes, Route } from 'react-router-dom';

const theme = createTheme({
  shape: {
    pillRadius: 50,
  },
  palette: {
    primary: { main: '#ffffff' },
    secondary: {
      main: '#ffffff',
    },
    error: { main: '#000000' },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/howitworks' element={<Howitworks />} />
        <Route path='/costamount' element={<CostAmount />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
