import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink, useLocation } from 'react-router-dom';

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

const NavLinkButton = styled(NavLink)(({ theme }) => ({
  position: 'relative',
  height: 150, // Adjusted height
  fontSize: '0.8rem', // Adjusted font size
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.black,
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: theme.palette.grey[300],
  },
}));

const ActiveBar = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: 3,
  backgroundColor: theme.palette.secondary.main,
}));

export default function ComplexButton() {
  const location = useLocation();

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <NavLinkButton
          key={image.title}
          to={image.route}
          isActive={() => location.pathname === image.route}
        >
          <Typography component="p" variant="subtitle1" color="inherit">
            {image.title}
          </Typography>
          <Typography component="h1" variant="h5" color="inherit">
            {image.amount}
          </Typography>
          <Typography component="p" variant="body2" color="inherit">
            {image.percentage}
          </Typography>
          {location.pathname === image.route && <ActiveBar />}
        </NavLinkButton>
      ))}
    </Box>
  );
}
