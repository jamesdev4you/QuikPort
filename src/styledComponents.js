import Button from '@mui/material/Button';

const MyStyledButton = (props) => (
  <Button
    variant='contained'
    sx={{
      paddingBottom: '5px',
      width: '200px',
      height: '30px',
      background: `#1B1E1E`,
      color: '#F5DE6D',
      '&:hover': {
        color: 'black',
        background: 'gold',
        border: '2px solid #5B5C50',
        fontWeight: 'bold',
      },
      border: '2px solid #F5DE6D',
      marginTop: 'auto',
    }}
  >
    Book Today!
  </Button>
);

export { MyStyledButton };
