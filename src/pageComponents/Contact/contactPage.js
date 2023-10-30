import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactForm from './contactForm.js';
import ContactCarLeft from '../../assets/contactcarleft.jpg';
import ContactCarRight from '../../assets/contactcarright.jpg';

const contactPage = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xl: '95vh', lg: '110vh' },
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          color: 'white',
          height: '20vh',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            color: 'white',
            fontFamily: 'Lemon',
            paddingBottom: '.2em',
            borderBottom: '3px solid gold',
            fontSize: {
              xl: '56px',
              lg: '46px',
              md: '46px',
              sm: '46px',
              xs: '28px',
            },
          }}
        >
          Contact Us Today!
        </Typography>
      </Box>
      <Box
        sx={{
          height: '75vh',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'start',
          justifyContent: 'center',
          gap: '100px',
        }}
      >
        <Box
          sx={{
            height: { xl: '400px', lg: '200px' },
            width: { xl: '400px', lg: '200px' },
            backgroundImage: `url(${ContactCarLeft})`,
            display: {
              xl: 'flex',
              lg: 'flex',
              md: 'flex',
              sm: 'none',
              xs: 'none',
            },
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            marginBottom: '6em',
            boxShadow:
              'rgba(225, 225, 225, 0.4) 5px 5px, rgba(225, 225, 225, 0.3) 10px 10px, rgba(225, 225, 225, 0.2) 15px 15px, rgba(225, 225, 225, 0.1) 20px 20px, rgba(225, 225, 225, 0.05) 25px 25px',
          }}
        />

        <Box sx={{ height: '75vh', width: 'auto%' }}>
          <ContactForm />
        </Box>

        <Box
          sx={{
            height: { xl: '400px', lg: '200px' },
            width: { xl: '400px', lg: '200px' },
            backgroundImage: `url(${ContactCarRight})`,
            display: {
              xl: 'flex',
              lg: 'flex',
              md: 'flex',
              sm: 'none',
              xs: 'none',
            },
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginBottom: '6em',
            boxShadow:
              'rgba(225, 225, 225, 0.4) -5px 5px, rgba(225, 225, 225, 0.3) -10px 10px, rgba(225, 225, 225, 0.2) -15px 15px, rgba(225, 225, 225, 0.1) -20px 20px, rgba(225, 225, 225, 0.05) -25px 25px',
          }}
        />
      </Box>
    </Box>
  );
};

export default contactPage;
