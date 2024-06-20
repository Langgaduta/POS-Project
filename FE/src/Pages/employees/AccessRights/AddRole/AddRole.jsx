// eslint-disable-next-line no-unused-vars
import React from 'react';
import PaymentIcon from '@mui/icons-material/Payment';
import FormControlLabelPosition from '../../../../Components/Switch/Switch';
import BasicTextFields from '../../../../Components/Elements/TextField/TextField';
import Button from '../../../../Components/Elements/Button/Button';
import { Link } from 'react-router-dom';

const AddRole = () => {
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
                    <div className="col-md-12 mb-3">
                      <BasicTextFields label=" Name" variant="standard" style={{ width: '100%'}} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <p className="fw-bold" style={{ fontSize: '13px' }}>
                        POS
                      </p>
                      <p style={{ fontSize: '13px' }}>Employees can log in to the app using personal PIN code</p>
                    </div>
                    <div className="col-md-4 text-end">
                      <FormControlLabelPosition value="" label="" labelPlacement="start" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <p className="fw-bold" style={{ fontSize: '13px' }}>
                        Back Office
                      </p>
                      <p style={{ fontSize: '13px' }}>Employees can log in to the back office using their email and password</p>
                    </div>
                    <div className="col-md-4 text-end">
                      <FormControlLabelPosition value="" label="" labelPlacement="start" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-end">
              <Link to="/access-rights">
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

export default AddRole;
