import React from 'react';
import { Box, Typography, Button, SvgIcon } from '@mui/material';
import Ferrari from '../../assets/How2.jpg';
import '../../index.css';
import { ReactComponent as Two } from '../../assets/two.svg';

const howAbout2 = () => {
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
          sx={{
            color: 'white',
            textAlign: 'left',
            width: '100%',
            fontFamily: 'Lemon',
            fontSize: { xl: '24px', lg: '28px', md: '38px' },
          }}
        >
          Driver Asigned
        </Typography>
        <Typography
          sx={{
            color: 'white',
            textAlign: 'left',
            width: '100%',
            fontSize: { xl: '22px', lg: '16px', md: '38px' },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          consectetur consectetur dictum. Vestibulum mauris ante, ornare sed
          pulvinar quis, ultrices sit amet dui.{' '}
        </Typography>
        <Typography
          sx={{
            color: 'white',
            textAlign: 'left',
            width: '100%',
            fontSize: { xl: '22px', lg: '16px', md: '38px' },
          }}
        >
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
            '&:hover': { backgroundColor: 'grey' },
          }}
        >
          {' '}
          Start Today!
        </Button>
      </Box>
      <Box
        sx={{
          height: '400px',
          width: '400px',
          background: `url(${Ferrari})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow:
            'rgba(225, 225, 225, 0.4) -5px 5px, rgba(225, 225, 225, 0.3) -10px 10px, rgba(225, 225, 225, 0.2) -15px 15px, rgba(225, 225, 225, 0.1) -20px 20px, rgba(225, 225, 225, 0.05) -25px 25px',
        }}
      />
    </Box>
  );
};

export default howAbout2;
