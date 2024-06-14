import React, { useState } from 'react';
import Button from '../../../../Components/Elements/Button/Button';
import BasicTextField from '../../../../Components/Elements/TextField/TextField';
import { Link } from 'react-router-dom';

const AddCategory = () => {
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
          <div style={{ maxWidth: '760px' }}>
            <div className="card mt-3 shadow" style={{ overflowX: 'hidden' }}>
              <div className="card-body">
                <div className="container justify-content-center">
                  <BasicTextField label="Name" variant="standard" style={{ width: '100%' }} />
                  <div className="mt-3">
                    <label>Pilih Warna:</label>
                    <div className="d-flex flex-wrap mt-2">
                      {['gray', 'red', 'pink', 'orange', 'yellow', 'lime', 'green', 'lightblue', 'purple'].map(color => (
                        <div
                          key={color}
                          onClick={() => handleColorSelect(color)}
                          style={{
                            backgroundColor: color,
                            width: '65px',
                            height: '65px',
                            margin: '5px',
                            cursor: 'pointer',
                            border: selectedColor === color ? '2px solid black' : ''
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <Link to="/categories">
                    <Button>Cancel</Button>
                  </Link>
                  <Button className="btn me-2" style={{ color: '#7e148f', textDecoration: 'none' }} onClick={handleSave}>Save</Button>
                  {/* <Button >Save</Button> */}
                  {showSelectedColor && (
                    <div className="mt-3">
                      <p>Warna yang dipilih: {selectedColor}</p>
                    </div>
                  )}
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
