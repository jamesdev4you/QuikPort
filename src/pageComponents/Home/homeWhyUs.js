import React from 'react';
import { Box, Typography, SvgIcon } from '@mui/material';
import { ReactComponent as One } from '../../assets/one.svg';
import { ReactComponent as Two } from '../../assets/two.svg';
import { ReactComponent as Three } from '../../assets/three.svg';
import { MyStyledButton } from '../../styledComponents.js';

const homeWhyUs = () => {
  const steps = [
    {
      title: 'Fill Out Form',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ultrices orci, ut vulputate augue. Phasellus tincidunt enim at augue tempor finibus. Nulla at luctus libero, in pharetra.',
      icon: One,
      color: 'black',
      button: <MyStyledButton />,
    },
    {
      title: 'Car Gets Shipped',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ultrices orci, ut vulputate augue. Phasellus tincidunt enim at augue tempor finibus. Nulla at luctus libero, in pharetra.',
      icon: Two,
      color: 'black',
      button: <MyStyledButton />,
    },
    {
      title: 'Car Gets Delivered',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ultrices orci, ut vulputate augue. Phasellus tincidunt enim at augue tempor finibus. Nulla at luctus libero, in pharetra.',
      icon: Three,
      color: 'black',
      button: <MyStyledButton />,
    },
  ];
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundColor: 'black',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          color: 'white',
          height: '30vh',
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
            fontSize: {xl: '64px', lg: '58px', md: '38px'},
          }}
        >
          How It All Works
        </Typography>
      </Box>
      <Box
        sx={{
          height: '70vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '50px',
        }}
      >
        {steps.map(({ title, desc, icon, color, button }) => (
          <Box
            sx={{
              width: '28%',
              padding: '.5em',
              height: '60vh',
              backgroundColor: '#ffffff',
              borderRadius: '15px',
              border: '3px solid gold',
              boxShadow:
                'rgba(11, 15, 13, 0.48) 6px 2px 16px 0px, rgba(212, 215, 213, 0.8) -6px -2px 16px 0px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'start',
            }}
          >
            <SvgIcon
              component={icon}
              inheritViewBox
              sx={{
                height: {xl: '100px', lg:'70px'},
                width: {xl: '100px', lg:'70px'},
                color: '#000000',
              }}
            />
            <Typography
              
              sx={{
                color: 'black',
                paddingTop: '.5em',
                paddingBottom: '.2em',
                width: '90%',
                textAlign: 'center',
                borderBottom: '3px solid black',
                fontFamily: 'Lemon',
                fontSize: {xl: '64px', lg: '28px', md: '38px'},
              }}
            >
              {title}
            </Typography>
            <Typography
              
              sx={{
                color: 'black',
                paddingTop: '.5em',
                paddingBottom: '.2em',
                width: '90%',
                textAlign: 'left',
                fontSize: {xl: '24px', lg: '16px', md: '38px'},
              }}
            >
              {desc}
            </Typography>
            <Typography
              
              sx={{
                color: 'black',
                paddingTop: { xl: '.5em', lg: '.2px',},
                paddingBottom:{ xl: '.2em', lg: '.2px',},
                width: '90%',
                textAlign: 'left',
                fontSize: {xl: '24px', lg: '16px', md: '38px'},
              }}
            >
              {desc}
            </Typography>
            <Typography
              
              sx={{
                color: 'black',
                paddingTop: '.5em',
                paddingBottom: '.2em',
                width: '90%',
                textAlign: 'left',
                display: {xl: 'inline', lg: 'none'},
                fontSize: {xl: '24px', lg: '16px', md: '38px'},
              }}
            >
              {desc}
            </Typography>
            <Typography
              
              sx={{
                fontSize: {xl: '24px', lg: '16px', md: '38px'},
                color: 'black',
                paddingTop: '.5em',
                paddingBottom: '.2em',
                width: '90%',
                textAlign: 'left',
                display: {xl: 'inline', lg: 'none'}
              }}
            >
              {desc}
            </Typography>
            {button}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default homeWhyUs;
