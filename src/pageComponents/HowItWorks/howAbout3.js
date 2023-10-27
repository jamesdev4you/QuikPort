import React from 'react';
import { Box, Typography, Button, SvgIcon } from '@mui/material';
import Ferrari from '../../assets/How3.jpg';
import '../../index.css';
import { ReactComponent as Three } from '../../assets/three.svg';

const howAbout3 = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
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
          background: `url(${Ferrari})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow:
            'rgba(225, 225, 225, 0.4) 5px 5px, rgba(225, 225, 225, 0.3) 10px 10px, rgba(225, 225, 225, 0.2) 15px 15px, rgba(225, 225, 225, 0.1) 20px 20px, rgba(225, 225, 225, 0.05) 25px 25px',
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
          sx={{ color: 'white', textAlign: 'left', width: '100%', fontFamily: 'Lemon', fontSize: {xl: '24px', lg: '28px', md: '38px'}, }}
        >
          Car Gets Delivered ASAP!
        </Typography>
        <Typography  sx={{ color: 'white',textAlign: 'left', width: '100%', fontSize: {xl: '24px', lg: '16px', md: '38px'}, }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          consectetur consectetur dictum. Vestibulum mauris ante, ornare sed
          pulvinar quis, ultrices sit amet dui.{' '}
        </Typography>
        <Typography  sx={{ color: 'white',textAlign: 'left', width: '100%',fontSize: {xl: '24px', lg: '16px', md: '38px'}, }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          consectetur consectetur dictum. Vestibulum mauris ante, ornare sed
          pulvinar quis, ultrices sit amet dui.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam consectetur consectetur dictum.{' '}
        </Typography>
        <Button
          variant='contained'
          sx={{
            backgroundColor: 'white',
            color: 'black',
            marginRight: 'auto',
            '&:hover': { color: 'grey' },
          }}
        >
          {' '}
          Start Today!
        </Button>
      </Box>
    </Box>
  );
};

export default howAbout3;
