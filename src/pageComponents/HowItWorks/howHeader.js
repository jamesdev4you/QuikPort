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
            fontSize: '124px',
            color: '#ECF1F2',
            width: '90%',
            fontFamily: 'Lemon',
            textAlign: 'center',
          }}
        >
          HOW IT ALL WORKS
        </Typography>
        <Typography
          sx={{
            fontSize: '44px',
            color: '#ECF1F2',
            width: '88%',
            fontFamily: 'Lemon',
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
