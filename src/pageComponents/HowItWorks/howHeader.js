import React from 'react';
import { Box, Typography } from '@mui/material';
import HowHeaderImage from '../../assets/howheader.jpg';
import '../../index.css';

const howHeader = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '65vh',
        backgroundImage: `url(${HowHeaderImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          flexDirection: 'column',
          width: '100%',
          height: '17em',
        }}
      >
        <Typography
            sx={{
              color: 'white',
              fontFamily: 'Lemon',
              paddingTop: {xl:'none', lg: '1em'},
              fontSize: {xl: '64px', lg: '68px', md: '38px'},
              paddingBottom: '.2em',
              borderBottom: {xl:'3px solid gold', lg: 'none'}
          }}
        >
          HOW IT ALL WORKS
        </Typography>
        <Typography
          sx={{
            color: '#ECF1F2',
            width: '88%',
            fontFamily: 'Lemon',
            fontSize: {xl: '64px', lg: '40px', md: '38px'},
            textAlign: 'center',
          }}
        >
          See how we securely ship your vehicle today!
        </Typography>
      </Box>
    </Box>
  );
};

export default howHeader;
