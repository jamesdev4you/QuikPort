import React from 'react';
import { Box, Typography, SvgIcon } from '@mui/material';
import { ReactComponent as CustomerService } from '../../assets/customer-support.svg';
import { ReactComponent as Email } from '../../assets/email.svg';
import { ReactComponent as Question } from '../../assets/question.svg';
import { ReactComponent as Telephone } from '../../assets/telephone.svg';

const contactInfo = () => {
  const contactOptions = [
    {
      title: 'Call us',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non commodo risus. Morbi cursus lobortis enim rutrum cursus.',
      logo: Telephone,
    },
    {
      title: 'Our Email',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non commodo risus. Morbi cursus lobortis enim rutrum cursus.',
      logo: Email,
    },
    {
      title: '24/7 Support',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non commodo risus. Morbi cursus lobortis enim rutrum cursus.',
      logo: CustomerService,
    },
    {
      title: 'Questions?',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non commodo risus. Morbi cursus lobortis enim rutrum cursus.',
      logo: Question,
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

export default contactInfo;
