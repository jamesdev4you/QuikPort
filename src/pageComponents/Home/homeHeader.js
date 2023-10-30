import React from 'react';
import Box from '@mui/material/Box';
import Ferrari from '../../assets/ferrari.jpg';
import {
  Typography,
  Autocomplete,
  TextField,
  Grid,
  Button,
} from '@mui/material';
import '../../index.css';

const header = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '65vh',
        backgroundImage: `url(${Ferrari})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
          width: '65%',
          height: '17em',
          marginTop: '80px',
        }}
      >
        <Typography
          sx={{
            fontSize: { xl: '64px', lg: '48px', md: '38px' },
            color: '#ECF1F2',
            textAlign: 'left',
            width: '90%',
            fontFamily: 'Lemon',
          }}
        >
          Transportation Done Right
        </Typography>
        <Typography
          sx={{
            color: '#ECF1F2',
            fontSize: { xl: '44px', lg: '30px', md: '22px' },
            textAlign: 'left',
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
          width: { xl: '23%', lg: '28%' },
          height: { xl: '35vh', lg: '40vh' },
          marginTop: '60px',
          boxShadow:
            'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
        }}
      >
        <Typography
          sx={{
            fontSize: { xl: '34px', lg: '30px', md: '22px' },
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

export default header;
