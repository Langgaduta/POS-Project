import React from 'react';
import { Box, Button, Typography, Avatar } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import { Link } from 'react-router-dom';

function Apps() {
  return (
    

    <div className="container-fluid">
      <div className="row justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px', overflowX: 'hidden' }}>
        <div className="col-md-12">
          <div style={{ maxWidth: '600px' }}>
            <div className="card mt-3 shadow" style={{ overflowX: 'hidden' }}>
              <div className="card-body">
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" maxHeight="" className="p-5" >
                    <Avatar sx={{ bgcolor: '#e0e0e0', width: 72, height: 72, mb: 2 }}>
                      <AppsIcon sx={{ fontSize: 40 }} />
                    </Avatar>
                    <Typography variant="h5" component="div" gutterBottom>
                      Apps
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center" sx={{ maxWidth: 300, mb: 2 }}>
                      Connect accounting, ecommerce, marketing and other apps to your Loyverse account
                    </Typography>
                    <Link to="">
                      <Button variant="contained" style={{ backgroundColor: '#580865' }}>
                      GO TO APP MARKETPLACE
                      </Button>
                    </Link>
                  </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Apps;
