import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import StoreIcon from '@mui/icons-material/Store';
import PaymentIcon from '@mui/icons-material/Payment';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import TaxIcon from '@mui/icons-material/AccountBalance';

const menuItems = [
  { text: 'Features', icon: <SettingsIcon />, link: '/Settings/Features' },
  { text: 'Billing & subscriptions', icon: <SubscriptionIcon />, link: '/Settings/Billing-subscriptions' },
  { text: 'Payment types', icon: <PaymentIcon />, link: '/Settings/Payment' },
  { text: 'Loyalty', icon: <LoyaltyIcon />, link: '/Settings/Loyalty' },
  { text: 'Taxes', icon: <TaxIcon />, link: '/Settings/Taxes' },
  { text: 'Receipt', icon: <ReceiptIcon />, link: '/Settings/Receipt' },
];

const storeItems = [
  { text: 'Stores', icon: <StoreIcon />, link: '/Settings/Stores' },
  { text: 'POS devices', icon: <StoreIcon />, link: '/Settings/Pos-devices' },
];

const Seting = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="">
      <div className="row justify-content-center" style={{ marginLeft: '10px', marginRight: '10px', overflowX: 'hidden' }}>
        <div className="col-md-12">
          <div style={{ maxWidth: '400px' }}>
            <div className="" style={{ overflowX: 'hidden' }}>
              <Box sx={{ width: '400px', margin: '20px auto', bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 1 }}>
                <Typography variant="h6" sx={{ padding: '16px' }}>
                  Settings
                </Typography>
                <List>
                  {menuItems.map((item, index) => (
                    <ListItem
                      key={item.text}
                      button
                      component={Link}
                      to={item.link}
                      onClick={() => handleClick(index)}
                      sx={{
                        backgroundColor: selectedItem === index ? 'grey.300' : 'transparent',
                        '&:hover': { backgroundColor: 'grey.100' }
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
                <Typography variant="h6" sx={{ padding: '16px' }}>
                  Stores
                </Typography>
                <List>
                  {storeItems.map((item, index) => (
                    <ListItem
                      key={item.text}
                      button
                      component={Link}
                      to={item.link}
                      onClick={() => handleClick(index + menuItems.length)}
                      sx={{
                        backgroundColor: selectedItem === index + menuItems.length ? 'grey.300' : 'transparent',
                        '&:hover': { backgroundColor: 'grey.100' }
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seting;
 