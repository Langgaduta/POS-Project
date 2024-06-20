// eslint-disable-next-line no-unused-vars
import React from 'react';
import PaymentIcon from '@mui/icons-material/Payment';
import BasicTextFields from '../../../../Components/Elements/TextField/TextField';
import Button from '../../../../Components/Elements/Button/Button';
import RadioGroup from '../../../../Components/RadioGroup/RadioGroup';
import FormControlLabelPosition from '../../../../Components/Switch/Switch';
import { Link } from 'react-router-dom';

const AddDiscounts = () => {
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
                      <PaymentIcon style={{ fontSize: 100 }} />
                    </div>
                    <div className="col-md-12">
                      <BasicTextFields label="Name" variant="standard" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 ms-2 mt-4">
                      <RadioGroup
                        label="Type"
                        options={[
                          { value: 'Percentage', label: 'Percentage' },
                          { value: 'Amount', label: 'Amount' },
                        ]}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <BasicTextFields label="value" variant="standard" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <p className="ms-2 mt-2" style={{ fontSize: '11px' }}>
                        Leave the field blank to indicate the value upon sale
                      </p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-8">
                      <p className='fw-bold' style={{ fontSize: '13px' }}>Restricted Access</p>
                      <p style={{ fontSize: '13px' }}>Only employees with appropriate access right are able to apply this discount</p>
                    </div>
                    <div className="col-md-4 text-end">
                    <FormControlLabelPosition value="" label="" labelPlacement="start" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-end">
              <Link to="/discounts">
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

export default AddDiscounts;
