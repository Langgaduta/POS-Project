import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Switch, Typography, Button } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AlarmIcon from '@mui/icons-material/Alarm';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
// import PrinterIcon from '@mui/icons-material/Printer';
import TvIcon from '@mui/icons-material/Tv';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MailIcon from '@mui/icons-material/Mail';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import BarcodeIcon from '@mui/icons-material/QrCode';

const features = [
  { text: 'Shifts', icon: <AccessTimeIcon />, description: 'Track cash that goes in and out of your drawer.' },
  { text: 'Time clock', icon: <AlarmIcon />, description: 'Track employees\' clock in/out time and calculate their total work hours.' },
  { text: 'Open tickets', icon: <ReceiptLongIcon />, description: 'Allow to save and edit orders before completing a payment.' },
  { text: 'Kitchen printers', description: 'Send orders to kitchen printer or display.' },
  { text: 'Customer displays', icon: <TvIcon />, description: 'Display order information to customers at the time of purchase.' },
  { text: 'Dining options', icon: <RestaurantIcon />, description: 'Mark orders as dine in, takeout or for delivery.' },
  { text: 'Low stock notifications', icon: <MailIcon />, description: 'Get daily email on items that are low or out of stock.' },
  { text: 'Negative stock alerts', icon: <ReportProblemIcon />, description: 'Warn cashiers attempting to sell more inventory than available in stock.' },
  { text: 'Weight embedded barcodes', icon: <BarcodeIcon />, description: 'Allow to scan barcodes with embedded weight.' },
];

const Feature = () => {
  const [checked, setChecked] = React.useState(Array(features.length).fill(false));

  const handleToggle = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  return (
    <div className="" style={{ marginLeft: '10px' }}>
      {/* <div className="row justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', overflowX: 'hidden' }}> */}
        <div className="col-md-12">
          {/* <div style={{ maxWidth: '400px' }}> */}
            <div className="" style={{ overflowX: 'hidden' }}>
              <div className="card-body">
                <Box sx={{ width: '800px', margin: '20px auto', bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 1 }}>
                <Typography variant="h6" sx={{ padding: '16px' }}>
                    Features
                </Typography>
                <List>
                    {features.map((feature, index) => (
                    <ListItem key={feature.text} sx={{ display: 'flex', alignItems: 'center' }}>
                        <ListItemIcon>{feature.icon}</ListItemIcon>
                        <Box sx={{ flexGrow: 1 }}>
                        <ListItemText primary={feature.text} secondary={feature.description} />
                        <Typography variant="body2" color="primary">
                            Learn more
                        </Typography>
                        </Box>
                        <Switch
                        edge="end"
                        onChange={() => handleToggle(index)}
                        checked={checked[index]}
                        inputProps={{ 'aria-labelledby': `switch-list-label-${feature.text}` }}
                        />
                    </ListItem>
                    ))}
                </List>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
                    <Button variant="outlined" style={{ marginRight: '8px', borderColor:'#580865', color: '#580865' }}>CANCEL</Button>
                    <Button variant="contained" style={{ backgroundColor: '#580865' }}>SAVE</Button>
                </Box>
                </Box>
                </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    // </div>
  );
};

export default Feature;
