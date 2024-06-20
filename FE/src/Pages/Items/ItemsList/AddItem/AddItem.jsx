import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../Components/Elements/Button/Button';
import SelectVariant from '../../../../Components/Elements/Select/Select';
import BasicTextField from '../../../../Components/Elements/TextField/TextField';
import CheckBox from '../../../../Components/CheckBox/CheckBox';
import RadioGroup from '../../../../Components/RadioGroup/RadioGroup';
import FormControlLabelPosition from '../../../../Components/Switch/Switch';

const AddItem = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [showSelectedColor, setShowSelectedColor] = useState(false);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSave = () => {
    setShowSelectedColor(true);
    // Lakukan logika penyimpanan data atau aksi lainnya di sini
  };

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
                      <RadioGroup label="Sold By" options={[
                        { value: 'Each', label: 'Each' },
                        { value: 'Weight/Volume', label: 'Weight/Volume' }
                      ]}/>
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
                      <FormControlLabelPosition value="Track Stock" label="Track Stock" labelPlacement="start" />
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
                      <p>Use variants if an item has different sizes, colors, or other options</p>
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
                  <h5 className="fw-light mb-4">Representation on POS</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <FormControlLabelPosition value="Color and Shape" label="Color and Shape" labelPlacement="start" />
                    </div>
                    <div className="col-md-6 text-end">
                      <FormControlLabelPosition value="Image" label="Image" labelPlacement="start" />
                    </div>
                    <div className="d-flex flex-wrap mt-2">
                      {['gray', 'red', 'pink', 'orange', 'yellow', 'lime', 'green', 'lightblue', 'purple'].map((color) => (
                        <div
                          key={color}
                          onClick={() => handleColorSelect(color)}
                          style={{
                            backgroundColor: color,
                            width: '65px',
                            height: '65px',
                            margin: '5px',
                            cursor: 'pointer',
                            border: selectedColor === color ? '2px solid black' : '',
                          }}
                        ></div>
                      ))}
                    </div>
                    {showSelectedColor && (
                      <div className="mt-3">
                        <p>Selected Color: {selectedColor}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 text-end shadow">
              <Link to="/item-list">
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

export default AddItem;
