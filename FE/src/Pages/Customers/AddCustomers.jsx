// eslint-disable-next-line no-unused-vars
import React from 'react';
import BasicTextFields from '../../Components/Elements/TextField/TextField';
import Button from '../../Components/Elements/Button/Button';
import { Link } from 'react-router-dom';
import SelectVariant from '../../Components/Elements/Select/Select';
import { TextField, InputAdornment } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import QrCodeIcon from '@mui/icons-material/QrCode';
import TextsmsIcon from '@mui/icons-material/Textsms';

const AddCustomer = () => {
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
                    <div className="col-md-12 text-center">
                      {/* <PaymentIcon style={{ fontSize: 100 }} /> */}
                      <i className="fa-solid fa-user me-3 mt-4" style={{ color: '#580865', fontSize: 90 }}></i>
                    </div>
                    <div className="col-md-12 mt-4">
                    <TextField
                        label="Name"
                        variant="standard"
                        style={{ width: '100%' }}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                            ),
                        }}
                    />
                    </div>
                    <div className="col-md-12 mt-4">
                    <TextField
                        label="Email"
                        variant="standard"
                        style={{ width: '100%' }}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                            ),
                        }}
                    />
                    </div>
                    <div className="col-md-12 mt-4">
                    <TextField
                        label="Phone"
                        variant="standard"
                        style={{ width: '100%' }}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <PhoneIcon />
                            </InputAdornment>
                            ),
                        }}
                    />
                    </div>
                    <div className='d-flex'>
                        <div className="col-md-12" style={{ width: '50%' }}>
                        <BasicTextFields label="City" variant="standard" style={{ width: '90%' }} />
                        </div>
                        <div className="col-md-12">
                        <BasicTextFields label="Province" variant="standard" style={{ width: '45%' }} />
                        </div>
                    </div>

                    <div className='d-flex'>
                        <div className="col-md-12" style={{ width: '50%' }}>
                        <BasicTextFields label="Postal code" variant="standard" style={{ width: '90%' }} />
                        </div>
                        <div className="col-md-12" style={{ width: '50%' }}>
                        <SelectVariant
                            label="Select Role"
                            options={[
                            { value: 10, label: 'Indonesia' },
                            { value: 20, label: 'Malaysia' },
                            { value: 20, label: 'Jepang' },
                            ]}
                            style={{ width: '96%' }}
                        />
                        </div>
                    </div>
                    
                    <div className="col-md-12 mt-4">
                    <TextField
                        label="Customer Code"
                        variant="standard"
                        style={{ width: '100%' }}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <QrCodeIcon />
                            </InputAdornment>
                            ),
                        }}
                    />
                    </div>
                    <div className="col-md-12 mt-4 mb-5">
                    <TextField
                        label="Note"
                        variant="standard"
                        style={{ width: '100%' }}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <TextsmsIcon />
                            </InputAdornment>
                            ),
                        }}
                    />
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
            <div className="text-end">
              <Link to="/customers">
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

export default AddCustomer;
