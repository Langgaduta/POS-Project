// eslint-disable-next-line no-unused-vars
import React from 'react';
import BasicTextFields from '../../../../Components/Elements/TextField/TextField';
import Button from '../../../../Components/Elements/Button/Button';
import { Link } from 'react-router-dom';
import SelectVariant from '../../../../Components/Elements/Select/Select';

const AddEmployee = () => {
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
                      <i className="fa-solid fa-user me-3 " style={{ color: '#580865', fontSize: 90 }}></i>
                    </div>
                    <div className="col-md-12">
                      <BasicTextFields label="Name" variant="standard" style={{ width: '100%' }} />
                    </div>
                    <div className="col-md-12">
                      <BasicTextFields label="Email" variant="standard" style={{ width: '100%' }} />
                    </div>
                    <div className="col-md-12">
                      <BasicTextFields label="Phone" variant="standard" style={{ width: '100%' }} />
                    </div>
                    <div className="col-md-12">
                    <SelectVariant
                        label="Select Role"
                        options={[
                          { value: 10, label: 'Administrator' },
                          { value: 20, label: 'Manager' },
                          { value: 20, label: 'Cashier' },
                        ]}
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-end">
              <Link to="/employee-list">
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

export default AddEmployee;
