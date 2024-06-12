import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink, useLocation } from 'react-router-dom';

const images = [
  {
    title: 'Taxable sales',
    amount: 'Rp0',
    width: '20%',
  },
  {
    title: 'Non-taxable sales',
    amount: 'Rp0',
    width: '20%',
  },
  {
    title: 'Total net sales',
    amount: 'Rp0',
    width: '20%',
  },
];

const NavLinkButton = styled(NavLink)(({ theme }) => ({
  position: 'relative',
  height: 100, // Adjusted height
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.black,
  textDecoration: 'none',
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
          <Typography component="h1" variant="h4" color="inherit">
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
