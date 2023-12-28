import React from 'react';
import { Box, Typography, SvgIcon } from '@mui/material';
import { ReactComponent as HowOne } from '../../assets/howOne.svg';
import { ReactComponent as HowTwo } from '../../assets/howTwo.svg';
import { ReactComponent as HowThree } from '../../assets/howThree.svg';
import { ReactComponent as HowFour } from '../../assets/howFour.svg';

const howInfo = () => {
  const contactOptions = [
    {
      title: 'Fill Out Form',
      desc: 'Complete Quick Wheels easy form for stress-free vehicle transport across the USA. Just enter your details and let us handle the rest. Safe, reliable, quick!',
      logo: HowThree,
    },
    {
      title: 'Car gets picked up',
      desc: 'Quick Wheels ensures a smooth pickup of your car for USA-wide transport. Rely on us for efficient, secure, and timely vehicle collection. Your journey starts here!',
      logo: HowTwo,
    },
    {
      title: 'Routes Taken',
      desc: 'Quick Wheels carefully selects optimal routes for transporting your vehicle across the USA, guaranteeing efficiency and safety in every journey. Your car is in good hands!',
      logo: HowFour,
    },
    {
      title: 'Mint Condition',
      desc: 'Discover the magic of Quick Wheels! We ensure your car arrives in mint condition, making your journey unforgettable. Travel with confidence.',
      logo: HowOne,
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        height: {
          xl: '32vh',
          lg: '32vh',
          md: 'auto',
          sm: 'auto',
          xs: 'auto',
        },
        gap: {
          xl: 'none',
          lg: 'none',
          md: '25px',
          sm: '25px',
          xs: '25px',
        },
        marginTop: {
          xl: '0px',
          lg: '0px',
          md: '25px',
          sm: '25px',
          xs: '25px',
        },
        marginBottom: {
          xl: '0px',
          lg: '0px',
          md: '25px',
          sm: '25px',
          xs: '25px',
        },
        backgroundColor: '#F1F1F1',
        display: 'flex',
        flexDirection: {
          xl: 'row',
          lg: 'row',
          md: 'column',
          sm: 'column',
          xs: 'column',
        },
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      {contactOptions.map(({ title, desc, logo }) => (
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '65%',
              sm: '80%',
              xs: '90%',
            },
            height: '27vh',
            backgroundColor: 'black',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '1em',
            boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SvgIcon
              component={logo}
              inheritViewBox
              sx={{
                height: '40px',
                width: '40px',
                color: 'gold',
              }}
            />
            <Typography
              sx={{
                fontSize: {
                  xl: '26px',
                  lg: '20px',
                  md: '32px',
                  sm: '32px',
                  xs: '20px',
                },
                color: 'gold',
                borderBottom: '1px solid gold',
                width: '100%',
                textAlign: 'center',
                paddingBottom: '.3em',
                paddingTop: '.3em',
                fontFamily: 'Lemon',
              }}
            >
              {title}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: 'white',
              fontSize: {
                xl: '18px',
                lg: '16px',
                md: '22px',
                sm: '20px',
                xs: '14px',
              },
              width: '100%',
              textAlign: 'center',
              marginTop: '.3em',
            }}
          >
            {desc}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default howInfo;
