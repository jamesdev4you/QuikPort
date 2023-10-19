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
        height: '95vh',
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
          width: '40%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant='h2'
          sx={{
            color: 'white',
            fontFamily: 'Lemon',
            paddingBottom: '.2em',
            borderBottom: '3px solid gold',
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
            height: '400px',
            width: '400px',
            backgroundImage: `url(${ContactCarLeft})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            marginBottom: '6em',
            boxShadow:
              'rgba(225, 225, 225, 0.4) 5px 5px, rgba(225, 225, 225, 0.3) 10px 10px, rgba(225, 225, 225, 0.2) 15px 15px, rgba(225, 225, 225, 0.1) 20px 20px, rgba(225, 225, 225, 0.05) 25px 25px',
          }}
        />

        <Box sx={{ height: '75vh', width: '35%' }}>
          <ContactForm />
        </Box>

        <Box
          sx={{
            height: '400px',
            width: '400px',
            backgroundImage: `url(${ContactCarRight})`,
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
