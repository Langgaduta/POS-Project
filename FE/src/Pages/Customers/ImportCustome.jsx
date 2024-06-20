import React, { useState } from 'react';
import Button from '../../Components/Elements/Button/Button';
import BasicTextField from '../../Components/Elements/TextField/TextField';
import { Link } from 'react-router-dom';

// import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
const ImportCustomers = () => {const [isDragging, setIsDragging] = useState(false);

    // const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = [...e.dataTransfer.files];
    console.log('Dropped files:', files);
    // Handle dropped files here, e.g., upload to server or process locally
  };

  const handleClick = () => {
    // Trigger input click programmatically
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log('Selected files:', files);
    // Handle selected files here, e.g., upload to server or process locally
  };

  const inputRef = React.createRef();
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
                  <p style={{ fontSize: '13px'}}><Link><span style={{ color: '#7e148f', textDecoration: 'none' }}>Download the template file </span></Link>and fill in with the items information.</p>
                  {/* <Link to="/categories">
                    <Button>Cancel</Button>
                  </Link>
                  <Button className="btn me-2" style={{ color: '#7e148f', textDecoration: 'none' }} onClick={handleSave}>Save</Button> */}
<Card
className='d-flex align-items-center justify-content-center'
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      variant="outlined"
      style={{ cursor: 'pointer', minHeight: '200px', backgroundColor: isDragging ? 'white' : '#f0f0f0' }}
      onClick={handleClick}
    >
      <CardContent>
        <input
          ref={inputRef}
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,image/*,.zip,.rar"
        />
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} textAlign="center">
            <InsertDriveFileIcon fontSize="large" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" align="center">
              {isDragging ? 'Lepaskan file di sini' : 'Drag & Drop file di sini atau klik untuk memilih file'}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
                </div>
                <div className="text-end mt-3">
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
      </div>
    </div>
  );
};

export default ImportCustomers;
