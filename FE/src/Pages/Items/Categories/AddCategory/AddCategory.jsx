import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../Components/Elements/Button/Button';
import SelectVariant from '../../../../Components/Elements/Select/Select';
import BasicTextField from '../../../../Components/Elements/TextField/TextField';
import CheckBox from '../../../../Components/CheckBox/CheckBox';
import RadioGroup from '../../../../Components/RadioGroup/RadioGroup';
import FormControlLabelPosition from '../../../../Components/Switch/Switch';

const AddCategory = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px', overflowX: 'hidden' }}>
        <div className="col-md-12">
          <div style={{ maxWidth: '1300px' }}>
            <div className="card mt-3 shadow" style={{ overflowX: 'hidden' }}>
              <div className="card-body">
                <div className="container justify-content-center">
                <BasicTextField label="Name" variant="standard" style={{ width: '100%' }} />
                <Button >Cancel</Button>
                <Button className="btn me-2 " style={{ color: '#7e148f', textDecoration: 'none' }}>Save</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
