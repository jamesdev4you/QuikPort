import React from 'react';
import { Box, Typography } from '@mui/material';
import RangeRover from '../../assets/rangerover.png';
import '../../index.css';

const contactHeader = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '65vh',
        backgroundImage: `url(${RangeRover})`,
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
            fontSize: '104px',
            color: '#ECF1F2',
            textAlign: 'left',
            width: '90%',
            fontFamily: 'Lemon',
            textAlign: 'center',
          }}
        >
          Transportation Done Right
        </Typography>
        <Typography
          sx={{
            fontSize: '64px',
            color: '#ECF1F2',
            textAlign: 'left',
            width: '88%',
            fontFamily: 'Lemon',
            textAlign: 'center',
          }}
        >
          Secure your vehicle shipping today!
        </Typography>
      </Box>
    </Box>
  );
};

export default contactHeader;
