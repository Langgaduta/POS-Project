import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FormControlLabelPosition({ label, value, labelPlacement }) {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value={value}
          control={<Switch color="secondary" />}
          label={label}
          labelPlacement={labelPlacement}
        />
      </FormGroup>
    </FormControl>
  );
}
