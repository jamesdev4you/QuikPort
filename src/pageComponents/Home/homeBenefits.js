import React from 'react';
import { Box, Typography, SvgIcon } from '@mui/material';
import { ReactComponent as CarWash } from '../../assets/car-wash.svg';
import { ReactComponent as Coin } from '../../assets/coin.svg';
import { ReactComponent as Delivery } from '../../assets/delivery.svg';
import { ReactComponent as Support } from '../../assets/support.svg';

const homeBenefits = () => {
  const benefitsOptions = [
    {
      title: 'Safe & Secure Care',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non commodo risus. Morbi cursus lobortis enim rutrum cursus.',
      logo: CarWash,
    },
    {
      title: 'Saving Money',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non commodo risus. Morbi cursus lobortis enim rutrum cursus.',
      logo: Coin,
    },
    {
      title: 'Quick Transport',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non commodo risus. Morbi cursus lobortis enim rutrum cursus.',
      logo: Delivery,
    },
    {
      title: 'Customer Service',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non commodo risus. Morbi cursus lobortis enim rutrum cursus.',
      logo: Support,
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        height: '32vh',
        backgroundColor: '#F1F1F1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      {benefitsOptions.map(({ title, desc, logo }) => (
        <Box
          sx={{
            width: '20%',
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
                fontSize: {xl: '54px', lg: '20px', md: '22px'},
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
              fontSize: {xl: '54px', lg: '14px', md: '22px'},
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

export default homeBenefits;
