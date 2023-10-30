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
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non commodo risus. Morbi cursus lobortis enim rutrum cursus.',
      logo: HowThree,
    },
    {
      title: 'Car gets picked up',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non commodo risus. Morbi cursus lobortis enim rutrum cursus.',
      logo: HowTwo,
    },
    {
      title: 'Routes Taken',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non commodo risus. Morbi cursus lobortis enim rutrum cursus.',
      logo: HowFour,
    },
    {
      title: 'Mint Condition',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non commodo risus. Morbi cursus lobortis enim rutrum cursus.',
      logo: HowOne,
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
      {contactOptions.map(({ title, desc, logo }) => (
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
                fontSize: { xl: '26px', lg: '20px', md: '22px' },
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
              fontSize: { xl: '20px', lg: '14px', md: '22px' },
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
