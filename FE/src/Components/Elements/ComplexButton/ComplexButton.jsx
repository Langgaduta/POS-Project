import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const images = [
  {
    title: 'Gross Sales',
    amount: 'Rp. 0',
    percentage: 'Rp. 0 (0%)',
    width: '20%',
    route: '/sales-summary/gross-sales', // Define route for each title
  },
  {
    title: 'Refunds',
    amount: 'Rp. 0',
    percentage: 'Rp. 0 (0%)',
    width: '20%',
    route: '/sales-summary/refunds',
  },
  {
    title: 'Discounts',
    amount: 'Rp. 0',
    percentage: 'Rp. 0 (0%)',
    width: '20%',
    route: '/sales-summary/discount',
  },
  {
    title: 'Net Sales',
    amount: 'Rp. 0',
    percentage: 'Rp. 0 (0%)',
    width: '20%',
    route: '/sales-summary/net-sales',
  },
  {
    title: 'Gross Profit',
    amount: 'Rp. 0',
    percentage: 'Rp. 0 (0%)',
    width: '20%',
    route: '/sales-summary/gross-profit',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  backgroundColor: theme.palette.common.white,
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    backgroundColor: theme.palette.grey[300],
  },
  [theme.breakpoints.down('sm')]: {
    width: '100% !important',
    height: 100,
  },
}));

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.black,
}));

export default function ComplexButton() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleClick = (route) => {
    navigate(route); // Navigate to the desired route
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title + Math.random()}
          style={{
            width: image.width,
          }}
          onClick={() => handleClick(image.route)} // Pass the route to the handleClick function
        >
          <Image>
            <Typography component="p" variant="subtitle1" color="inherit">
              {image.title}
            </Typography>
            <Typography component="h1" variant="h5" color="inherit">
              {image.amount}
            </Typography>
            <Typography component="p" variant="body2" color="inherit">
              {image.percentage}
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
