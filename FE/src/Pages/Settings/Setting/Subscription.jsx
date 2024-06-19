import React from 'react';
import { Card, CardContent, Typography, Divider, Button, Grid, IconButton } from '@mui/material';
import { BarChart, Tv, ShoppingCart, CreditCard } from '@mui/icons-material';

const SubscriptionCard = () => {
  return (
    <div className="" style={{ marginLeft: '10px', marginTop: '20px' }}>
      {/* <div className="row justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', overflowX: 'hidden' }}> */}
        <div className="col-md-12">
          {/* <div style={{ maxWidth: '400px' }}> */}
            <div className="" style={{ overflowX: 'hidden' }}>
              <div className="card-body">
              <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Subscriptions
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={1}>
            <BarChart />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1">Unlimited sales history</Typography>
            <Typography variant="body2" color="textSecondary">
              View sales reports for any time period and export data to spreadsheets.
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2" color="textSecondary">
              14 day free trial
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button variant="outlined" style={{ color: '#580865', borderColor: 'transparent' }}>
              TRY FOR FREE
            </Button>
          </Grid>
        </Grid>
        
        <Divider style={{ margin: '16px 0' }} />

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={1}>
            <Tv />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1">Employee management</Typography>
            <Typography variant="body2" color="textSecondary">
              Manage access rights, track timecards and sales by employee.
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2" color="textSecondary">
              14 day free trial
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button variant="outlined" style={{ color: '#580865', borderColor: 'transparent' }}>
              TRY FOR FREE
            </Button>
          </Grid>
        </Grid>
        
        <Divider style={{ margin: '16px 0' }} />

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={1}>
            <ShoppingCart />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1">Advanced inventory</Typography>
            <Typography variant="body2" color="textSecondary">
              Create purchase orders, view inventory valuation report and manage stock.
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2" color="textSecondary">
              14 day free trial
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button variant="outlined" style={{ color: '#580865', borderColor: 'transparent' }}>
              TRY FOR FREE
            </Button>
          </Grid>
        </Grid>
        
        <Divider style={{ margin: '16px 0', height: '1px', backgroundColor: 'black' }} />

        <Typography variant="h6" component="div" gutterBottom>
          Payment method
        </Typography>
        
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={1}>
            <CreditCard />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="body1">No card currently on file</Typography>
          </Grid>
          <Grid item xs={2}>
            <Button variant="outlined" style={{ color: '#580865', borderColor: 'transparent' }}>
              ADD PAYMENT METHOD
            </Button>
          </Grid>
        </Grid>
        
        <Divider style={{ margin: '10px 0' }} />

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={10} >
            <Typography variant="body1" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
              Edit your business name, add a billing contact or other information you want to include on your invoices
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button variant="outlined" style={{ color: '#580865', borderColor: 'transparent' }}>
              EDIT BILLING DETAILS
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
                </div>
            </div>
          </div>
        {/* </div> */}
      </div>
  );
};

export default SubscriptionCard;
