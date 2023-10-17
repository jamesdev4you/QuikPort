import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Ferr from '../../assets/homeabout3.jpg';
import '../../index.css';

const homeAbout3 = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        height: '60vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15em',
      }}
    >
      <Box
        sx={{
          height: '400px',
          width: '400px',
          background: `url(${Ferr})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow:
            'rgba(0, 0, 0, 0.4) 5px 5px, rgba(0, 0, 0, 0.3) 10px 10px, rgba(0, 0, 0, 0.2) 15px 15px, rgba(0, 0, 0, 0.1) 20px 20px, rgba(0, 0, 0, 0.05) 25px 25px',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          flexDirection: 'column',
          height: '400px',
          width: '30vw',
          gap: '1em',
        }}
      >
        <Typography
          variant='h4'
          sx={{ textAlign: 'left', width: '100%', fontFamily: 'Lemon' }}
        >
          More About QuikPort
        </Typography>
        <Typography variant='h6' sx={{ textAlign: 'left', width: '100%' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          consectetur consectetur dictum. Vestibulum mauris ante, ornare sed
          pulvinar quis, ultrices sit amet dui.{' '}
        </Typography>
        <Typography variant='h6' sx={{ textAlign: 'left', width: '100%' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          consectetur consectetur dictum. Vestibulum mauris ante, ornare sed
          pulvinar quis, ultrices sit amet dui.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam consectetur consectetur dictum.{' '}
        </Typography>
        <Button
          variant='contained'
          sx={{
            backgroundColor: 'black',
            color: 'white',
            marginRight: 'auto',
            '&:hover': { color: 'black' },
          }}
        >
          {' '}
          Start Today!
        </Button>
      </Box>
    </Box>
  );
};

export default homeAbout3;
