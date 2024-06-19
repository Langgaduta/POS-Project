import React from 'react';
import BasicTable from '../../../Components/Elements/TableExport/Tableexport';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { Button, Grid } from '@mui/material';

const SalesSummary = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px', overflowX: 'hidden' }}>
        <div className="col-md-12">
          <div className="card mt-3 justify-content-center shadow" style={{ overflowX: 'hidden', maxWidth: "1300px" }}>
            <div className="card-body">
              <div className='d-flex justify-content-between'>
              <Grid item>
                <Button variant="contained" style={{ backgroundColor: '#580865' }}>
                  + ADD EMPLOYEE
                </Button>
              </Grid>
              </div>
              <BasicTable />
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesSummary;
