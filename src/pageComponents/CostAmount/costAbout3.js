import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Ferrari from '../../assets/About3.jpg';
import '../../index.css';

const costAbout3 = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        height: {
          xl: '60vh',
          lg: '60vh',
          md: 'auto',
          sm: 'auto',
          xs: 'auto',
        },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: {
          xl: 'row',
          lg: 'row',
          md: 'column',
          sm: 'column',
          xs: 'column',
        },
        gap: {
          xl: '15em',
          lg: 'none',
          md: '6em',
          sm: 'none',
          xs: '45px',
        },
        paddingTop: {
          xl: '0px',
          lg: '0px',
          md: '0px',
          sm: '45px',
          xs: '45px',
        },
        paddingBottom: {
          xl: '0px',
          lg: '0px',
          md: '0px',
          sm: '45px',
          xs: '45px',
        },
      }}
    >
      <Box
        sx={{
          height: {
            xl: '400px',
            lg: '400px',
            md: '400px',
            sm: '400px',
            xs: '250px',
          },
          width: {
            xl: '400px',
            lg: '400px',
            md: '400px',
            sm: '400px',
            xs: '250px',
          },
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
          height: {
            xl: '400px',
            lg: '400px',
            md: 'auto',
            sm: 'auto',
            xs: 'auto',
          },
          width: {
            xl: '30vw',
            lg: '30vw',
            md: '80%',
            sm: '80%',
            xs: '80%',
          },
          gap: '1em',
        }}
      >
        <Typography
          variant='h4'
          sx={{
            textAlign: 'left',
            width: '100%',
            fontFamily: 'Lemon',
            color: 'white',
            fontSize: { xl: '24px', lg: '28px', md: '24px' },
          }}
        >
          Weight
        </Typography>
        <Typography
          sx={{
            textAlign: 'left',
            width: '100%',
            color: 'white',
            fontSize: {
              xl: '22px',
              lg: '16px',
              md: '14px',
              sm: '18px',
              xs: '14px',
            },
          }}
        >
          The weight of your vehicle is a crucial factor in determining transportation costs. Heavier cars require more fuel and may necessitate specialized equipment for safe and secure transport, which can lead to higher expenses.
        </Typography>
        <Typography
          sx={{
            textAlign: 'left',
            width: '100%',
            color: 'white',
            fontSize: {
              xl: '22px',
              lg: '16px',
              md: '14px',
              sm: '18px',
              xs: '14px',
            },
          }}
        >
          We're here to make your car transport experience hassle-free and cost-effective. Choose Quick Wheels for a smooth journey, no matter the weight of your vehicle.
        </Typography>
        <Button
          variant='contained'
          sx={{
            backgroundColor: 'white',
            color: 'black',
            marginRight: 'auto',
            '&:hover': { color: 'white' },
          }}
        >
          {' '}
          Start Today!
        </Button>
      </Box>
    </Box>
  );
};

export default costAbout3;
