import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({ label, style, variant = 'standard' }) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch', ...style },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label={label} variant={variant} />
    </Box>
  );
}
