import React from 'react';
import { Box, Typography } from '@mui/material';
import HowHeaderImage from '../../assets/howheader.jpg';
import '../../index.css';

const howHeader = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: {
          xl: '65vh',
          lg: '65vh',
          md: '65vh',
          sm: '45vh',
          xs: '45vh',
        },
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
            fontSize: {
              xl: '64px',
              lg: '68px',
              md: '38px',
              sm: '38px',
              xs: '22px',
            },
            color: '#ECF1F2',
            width: '90%',
            fontFamily: 'Lemon',
            textAlign: 'center',
            paddingTop: {
              xl: '64px',
              lg: '.5em',
              md: '38px',
              sm: '70px',
              xs: '150px',
            },
            borderBottom: '1px solid gold',
          }}
        >
          Transportation Done Right
        </Typography>
        <Typography
          sx={{
            color: '#ECF1F2',
            width: '88%',
            fontFamily: 'Lemon',
            fontSize: {
              xl: '64px',
              lg: '56px',
              md: '38px',
              sm: '38px',
              xs: '20px',
            },
            textAlign: 'center',
          }}
        >
          Secure your vehicle shipping today!
        </Typography>
      </Box>
    </Box>
  );
};

export default howHeader;
