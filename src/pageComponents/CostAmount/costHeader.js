import React from 'react';
import Box from '@mui/material/Box';
import CostHeader from '../../assets/costHeader.jpg';
import { Typography, TextField, Grid, Button } from '@mui/material';
import '../../index.css';

const costHeader = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: {
          xl: '65vh',
          lg: '65vh',
          md: 'auto',
          sm: 'auto',
          xs: 'auto',
        },
        paddingBottom: '15px',
        backgroundImage: `url(${CostHeader})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        flexDirection: {
          xl: 'row',
          lg: 'row',
          md: 'column',
          sm: 'column',
          xs: 'column',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          flexDirection: 'column',
          width: {
            xl: '65%',
            lg: '65%',
            md: '100%',
            sm: '100%',
            xs: '100%',
          },
          height: {
            xl: '17em',
            lg: '17em',
            md: '10em',
            sm: '10em',
            xs: '10em',
          },
          marginTop: {
            xl: '80px',
            lg: '80px',
            md: '100px',
            sm: '100px',
            xs: '130px',
          },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xl: '58px',
              lg: '44px',
              md: '38px',
              sm: '26px',
              xs: '26px',
            },
            color: '#ECF1F2',
            textAlign: {
              xl: 'left',
              lg: 'left',
              md: 'center',
              sm: 'center',
              xs: 'center',
            },
            width: '90%',
            fontFamily: 'Lemon',
          }}
        >
          Transportation Done Right
        </Typography>
        <Typography
          sx={{
            color: '#ECF1F2',
            fontSize: {
              xl: '44px',
              lg: '30px',
              md: '22px',
              sm: '26px',
              xs: '18px',
            },
            textAlign: {
              xl: 'left',
              lg: 'left',
              md: 'center',
              sm: 'center',
              xs: 'center',
            },
            display: {
              xl: 'inline',
              lg: 'inline',
              md: 'inline',
              sm: 'inline',
              xs: 'none',
            },
            width: '88%',
            fontFamily: 'Lemon',
          }}
        >
          Secure your vehicle shipping today!
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: 'black',
          border: '2px solid gold',
          padding: '15px',
          borderRadius: '15px',
          width: { xl: '23%', lg: '30%', md: '80%', sm: '90%', xs: '90%' },
          height: { xl: '35vh', lg: '35vh' },
          marginTop: {
            xl: '60px',
            lg: '60px',
            md: '0px',
            sm: '0px',
            xs: '0px',
          },
          boxShadow:
            'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
        }}
      >
        <Typography
          sx={{
            fontSize: { xl: '30px', lg: '30px', md: '22px' },
            color: 'white',
            width: '100%',
            textAlign: 'left',
            fontFamily: 'Lemon',
          }}
        >
          Get a FREE Quote
        </Typography>
        <Typography
          sx={{
            width: '100%',
            textAlign: 'left',
            color: 'white',
            marginBottom: '15px',
            ffontFamily: 'Lemon',
            fontSize: { xl: '16px', lg: '12px', md: '22px' },
          }}
        >
          <span style={{ color: 'red' }}>*</span> INDICATES REQUIRED FIELD!
        </Typography>
        <form>
          <Grid container spacing={1}>
            <Grid xs={12} item sx={{ marginRight: 'auto' }}>
              <TextField
                label='Transport car FROM'
                placeholder='Zip code'
                variant='filled'
                fullWidth
                required
                color='secondary'
                sx={{
                  '& .MuiFilledInput-root': {
                    backgroundColor: 'white',
                    height: '50px',
                    paddingBottom: '5px',
                    borderRadius: '5px',
                  },
                  '& label.Mui-focused': {
                    color: '#1B1E1E',
                  },
                  '& .MuiFormLabel-root': {
                    color: 'grey',
                  },
                  '& .MuiFormLabel-root.Mui-focused': {
                    color: 'grey',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'yellow',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'grey',
                    },
                    '&:hover fieldset': {
                      borderColor: '#ECF1F2',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'yellow',
                    },
                  },
                  '& .MuiInputBase-root': {
                    color: 'grey',
                  },
                }}
              />
            </Grid>
            <Grid xs={12} item sx={{ marginRight: 'auto' }}>
              <TextField
                label='Transport car TO'
                placeholder='Zip code'
                variant='filled'
                fullWidth
                required
                color='secondary'
                sx={{
                  '& .MuiFilledInput-root': {
                    backgroundColor: 'white',
                  },
                  '& label.Mui-focused': {
                    color: '#1B1E1E',
                  },
                  '& .MuiFormLabel-root': {
                    color: 'grey',
                  },
                  '& .MuiFormLabel-root.Mui-focused': {
                    color: 'black',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'yellow',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'black',
                    },
                    '&:hover fieldset': {
                      borderColor: '#ECF1F2',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'yellow',
                    },
                  },
                  '& .MuiInputBase-root': {
                    color: 'grey',
                    height: '50px',
                    paddingBottom: '5px',
                    borderRadius: '5px',
                  },
                }}
              />
            </Grid>
            <Grid xs={12} item sx={{ marginRight: 'auto' }}>
              <TextField
                label='Phone Number'
                placeholder='Phone'
                variant='filled'
                fullWidth
                required
                color='secondary'
                sx={{
                  '& .MuiFilledInput-root': {
                    backgroundColor: 'white',

                    height: '50px',
                    paddingBottom: '5px',
                    borderRadius: '5px',
                  },
                  '& label.Mui-focused': {
                    color: '#1B1E1E',
                  },
                  '& .MuiFormLabel-root': {
                    color: 'grey',
                  },
                  '& .MuiFormLabel-root.Mui-focused': {
                    color: 'black',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'yellow',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'black',
                    },
                    '&:hover fieldset': {
                      borderColor: '#ECF1F2',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'yellow',
                    },
                  },
                  '& .MuiInputBase-root': {
                    color: 'grey',
                  },
                }}
              />
            </Grid>
            <Grid xs={12} item sx={{ marginRight: 'auto' }}>
              <Button
                type='submit'
                value='Send'
                variant='contained'
                fullWidth
                color='primary'
                sx={{
                  height: '30px',
                  paddingBottom: '5px',
                  borderRadius: '5px',
                  backgroundColor: 'gold',
                  '&:hover': {
                    backgroundColor: '#e7c300',
                  },
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default costHeader;
