import React, { useState } from 'react';
import Button from '../../../../Components/Elements/Button/Button';
import BasicTextField from '../../../../Components/Elements/TextField/TextField';
import { Link } from 'react-router-dom';

const Import = () => {
  // const [selectedColor, setSelectedColor] = useState('');
  // const [showSelectedColor, setShowSelectedColor] = useState(false);

  // const handleColorSelect = (color) => {
  //   setSelectedColor(color);
  // };

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
                  <h5>Import Items</h5>
                  <p style={{ fontSize: '13px'}}><span style={{ color: '#7e148f', textDecoration: 'none' }}>Download the template file </span>and fill in with the items information.</p>
                  {/* <Link to="/categories">
                    <Button>Cancel</Button>
                  </Link>
                  <Button className="btn me-2" style={{ color: '#7e148f', textDecoration: 'none' }} onClick={handleSave}>Save</Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Import;
