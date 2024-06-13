import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Grid, Paper, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Dropzone = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={10} sm={8} md={6}>
        <Paper variant="outlined" elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <Typography variant="h5" gutterBottom>
                Drop the files here
              </Typography>
            ) : (
              <Typography variant="h5" gutterBottom>
                Drag 'n' drop some files here, or click to select files
              </Typography>
            )}
            <Button
              variant="contained"
              color="primary"
              component="span"
              startIcon={<CloudUploadIcon />}
              style={{ marginTop: '20px' }}
            >
              Upload Files
            </Button>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dropzone;
