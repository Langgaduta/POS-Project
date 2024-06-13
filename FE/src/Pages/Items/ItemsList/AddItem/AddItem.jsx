import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../Components/Elements/Button/Button';
import SelectVariant from '../../../../Components/Elements/Select/Select';
import BasicTextField from '../../../../Components/Elements/TextField/TextField';
import CheckBox from '../../../../Components/CheckBox/CheckBox';
import RadioGroup from '../../../../Components/RadioGroup/RadioGroup';
import FormControlLabelPosition from '../../../../Components/Switch/Switch';

const AddItem = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px', overflowX: 'hidden' }}>
        <div className="col-md-12">
          <div style={{ maxWidth: '1300px' }}>
            <div className="card mt-3 shadow" style={{ overflowX: 'hidden' }}>
              <div className="card-body">
                <div className="container justify-content-center">
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <BasicTextField label="Name" variant="standard" style={{ width: '100%' }} />
                    </div>
                    <div className="col-md-6">
                      <SelectVariant label="Category" options={[{ value: 10, label: 'No Category' }]} style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <BasicTextField label="Description" variant="outlined" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <CheckBox />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-12">
                      <RadioGroup />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <BasicTextField label="Price" variant="standard" style={{ width: '100%' }} />
                    </div>
                    <div className="col-md-6">
                      <BasicTextField label="Cost" variant="standard" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <BasicTextField label="SKU" variant="standard" style={{ width: '100%' }} />
                    </div>
                    <div className="col-md-6">
                      <BasicTextField label="Barcode" variant="standard" style={{ width: '100%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3 shadow" style={{ overflowX: 'hidden' }}>
              <div className="card-body">
                <div className="container justify-content-center">
                  <h5 className="fw-light mb-4">Inventory</h5>
                  <div className="row">
                    <div className="col-md-12">
                      <FormControlLabelPosition value="Composite Item" label="Composite Item" labelPlacement="start" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <FormControlLabelPosition value="Trock Stock" label="Trock Stock" labelPlacement="start" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3 shadow" style={{ overflowX: 'hidden' }}>
              <div className="card-body">
                <div className="container justify-content-center">
                  <h5 className="fw-light mb-4">Variants</h5>
                  <div className="row">
                    <div className="col-md-12">
                      <p>Use variants if an items has different sizes, colors or other otions</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <Button className="btn mt-3" style={{ color: '#7e148f' }}>
                        + Add Variant
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3 shadow" style={{ overflowX: 'hidden' }}>
              <div className="card-body">
                <div className="container justify-content-center">
                  <h5 className="fw-light mb-4">Representation on Pos</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <FormControlLabelPosition value="Color and Shape" label="Color and Shape" labelPlacement="start" />
                    </div>
                    <div className="col-md-6 text-end">
                      <FormControlLabelPosition value="Image" label="Image" labelPlacement="start" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
