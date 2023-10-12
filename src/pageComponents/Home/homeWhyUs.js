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
      color: 'red',
      button: <MyStyledButton />,
    },
    {
      title: 'Car Gets Shipped',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ultrices orci, ut vulputate augue. Phasellus tincidunt enim at augue tempor finibus. Nulla at luctus libero, in pharetra.',
      icon: Two,
      color: 'gold',
      button: <MyStyledButton />,
    },
    {
      title: 'Car Gets Delivered',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ultrices orci, ut vulputate augue. Phasellus tincidunt enim at augue tempor finibus. Nulla at luctus libero, in pharetra.',
      icon: Three,
      color: 'green',
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
          width: '40%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant='h1'
          sx={{
            color: 'white',
          }}
        >
          How It All Works
        </Typography>
        <Box
          sx={{
            height: '3px',
            width: '90%',
            display: 'flex',
          }}
        >
          <Box
            sx={{
              height: '4px',
              width: '4%',
              backgroundColor: 'yellow',
              display: 'flex',
            }}
          />
          <Box
            sx={{
              height: '3px',
              width: '3%',
              backgroundColor: 'black',
              display: 'flex',
            }}
          />
          <Box
            sx={{
              height: '4px',
              width: '4%',
              backgroundColor: 'yellow',
              display: 'flex',
            }}
          />
          <Box
            sx={{
              height: '3px',
              width: '4%',
              backgroundColor: 'black',
              display: 'flex',
            }}
          />
          <Box
            sx={{
              height: '4px',
              width: '5%',
              backgroundColor: 'yellow',
              display: 'flex',
            }}
          />
          <Box
            sx={{
              height: '4px',
              width: '4%',
              backgroundColor: 'black',
              display: 'flex',
            }}
          />
          <Box
            sx={{
              height: '4px',
              width: '80%',
              backgroundColor: 'yellow',
              display: 'flex',
            }}
          />
        </Box>
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
              padding: '1em',
              height: '60vh',
              backgroundColor: '#ffffff',
              borderRadius: '15px',
              boxShadow:
                'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
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
                height: '100px',
                width: '100px',
                color: '#000000',
                color: { color },
              }}
            />
            <Typography
              variant='h4'
              sx={{
                color: 'black',
                paddingTop: '.5em',
                paddingBottom: '.2em',
                width: '90%',
                textAlign: 'center',
                borderBottom: '3px solid black',
              }}
            >
              {title}
            </Typography>
            <Typography
              variant='p'
              sx={{
                color: 'black',
                paddingTop: '.5em',
                paddingBottom: '.2em',
                width: '90%',
                textAlign: 'left',
              }}
            >
              {desc}
            </Typography>
            <Typography
              variant='p'
              sx={{
                color: 'black',
                paddingTop: '.5em',
                paddingBottom: '.2em',
                width: '90%',
                textAlign: 'left',
              }}
            >
              {desc}
            </Typography>
            <Typography
              variant='p'
              sx={{
                color: 'black',
                paddingTop: '.5em',
                paddingBottom: '.2em',
                width: '90%',
                textAlign: 'left',
              }}
            >
              {desc}
            </Typography>
            <Typography
              variant='p'
              sx={{
                color: 'black',
                paddingTop: '.5em',
                paddingBottom: '.2em',
                width: '90%',
                textAlign: 'left',
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
