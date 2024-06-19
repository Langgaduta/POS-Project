import React from 'react';
// import TableCell from '@mui/material/TableCell';
import { Container, Grid, Typography, Button, TableCell, CardContent, CardMedia } from '@mui/material';
import { ShoppingCart, Receipt, TransferWithinAStation, Inventory, Assignment, Category, History, Description, Print } from '@mui/icons-material';

const features = [
  { icon: <Receipt fontSize="large" />, title: 'Purchase orders', description: 'Plan purchases, export records to suppliers, track stock receipts and manage vendor relationships' },
  { icon: <TransferWithinAStation fontSize="large" />, title: 'Transfer orders', description: 'Easily create transfer orders and move stock between your stores' },
  { icon: <Assignment fontSize="large" />, title: 'Stock adjustments', description: 'Increase and decrease stock levels for received items, damages and loss' },
  { icon: <Inventory fontSize="large" />, title: 'Inventory counts', description: 'Perform full or partial stocktakes with a barcode scanner or manually' },
  { icon: <Category fontSize="large" />, title: 'Production', description: 'Track stock of items produced out of ingredients' },
  { icon: <History fontSize="large" />, title: 'Inventory history', description: 'Gain insights into the flow of your inventory by viewing adjustment log' },
  { icon: <Description fontSize="large" />, title: 'Inventory valuation report', description: 'View report on the cost and potential profit of your inventory' },
  { icon: <Print fontSize="large" />, title: 'Label printing', description: 'Print barcode labels to effortlessly add items to sales, purchase orders or inventory counts' }
];

const ItemList = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px', overflowX: 'hidden' }}>
        <div className="col-md-12">
          <div style={{ maxWidth: '760px' }}>
            <div className="card mt-3 shadow" style={{ overflowX: 'hidden' }}>
              <div className="card-body">

              <Container>
      <Grid container justifyContent="center" alignItems="center" direction="column" spacing={2} style={{ textAlign: 'center', marginTop: '20px' }}>
              <TableCell colSpan={7} align="center">
        <Grid item>
          <ShoppingCart fontSize="large" style={{ fontSize: '80px' }} />
        </Grid>
        <Grid item>
          <Typography variant="h4">Advanced inventory</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">Gain deeper insight into your inventory</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" style={{ backgroundColor: '#580865' }} size="large">
            START 14 DAY FREE TRIAL
          </Button>
        </Grid>
        </TableCell>
      </Grid>
      <Grid container spacing={4} style={{ marginTop: '20px' }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            
              <CardContent style={{ textAlign: 'center' }}>
                <CardMedia>
                  {feature.icon}
                </CardMedia>
                <Typography variant="h6" component="div">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            
          </Grid>
        ))}
      </Grid>
    </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
