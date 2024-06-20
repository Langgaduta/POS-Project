// eslint-disable-next-line no-unused-vars
import React from 'react';
// import PaymentIcon from '@mui/icons-material/Payment';
import ExtensionIcon from '@mui/icons-material/Extension';
import BasicTextFields from '../../../Components/Elements/TextField/TextField';
import Button from '../../../Components/Elements/Button/Button';
import { Link } from 'react-router-dom';
import { Typography, Switch, FormControlLabel, Box } from '@mui/material';
import CustomDatePicker from '../../../Components/Elements/Calendar/DatePicker';


const AddAccToken = () => {
  const handleSave = () => {
    setShowSelectedColor(true);
    // Lakukan logika penyimpanan data atau aksi lainnya di sini
  };
  return (
    <div className="container-fluid">
      <div className="row" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px', overflowX: 'hidden' }}>
        <div className="col-md-5">
          <div style={{ maxWidth: '760px' }}>
            <div className="card mt-3 mb-3 shadow" style={{ overflowX: 'hidden' }}>
              <div className="card-body">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 text-center d-flex justify-content-center">
                        <div className='d-flex align-items-center justify-content-center mt-4' style={{ width: "100px", height:"100px", borderRadius: '100%', background: "rgb(128, 114, 97)" }}>
                      <ExtensionIcon style={{ fontSize: 80, color:"white" }} />
                      </div>
                    </div>
                    <div className="col-md-12 mt-4">
                      <BasicTextFields label="Name" variant="standard" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div className='mt-4'>
                    <Box display="flex" alignItems="center">
                        <Typography variant="body1" style={{ marginRight: '10px' }}>
                            Token has expiration date
                        </Typography>
                                    <div className='d-flex align-items-end flex-column' style={{ width: '62%' }}>
                        <FormControlLabel
                            control={<Switch color="primary" />}
                            label=""
                            labelPlacement="end"
                        />
                        </div>
                    </Box>
                    </div>

                    <div className='d-flex flex-wrap mb-4' style={{ width: '100%'}}>
            <CustomDatePicker />
          </div>

                </div>
              </div>
            </div>
            <div className="text-end">
              <Link to="/access-token">
                <Button className="btn me-2" style={{ backgroundColor: '#ffffff', textDecoration: 'none' }}>
                  Cancel
                </Button>
              </Link>
              <Button className="btn me-2 text-white" style={{ backgroundColor: '#7e148f', textDecoration: 'none' }} onClick={handleSave}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAccToken;
