import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

export default function SelectVariants({ label = 'Category', options = [], style }) {
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={style}>
      {/* <Typography variant="subtitle2" gutterBottom>
        {label}
      </Typography> */}
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200, ...style }}>
        <InputLabel id="select-variants-label">{label}</InputLabel>
        <Select
          labelId="select-variants-label"
          id="select-variants"
          value={selectedOption}
          onChange={handleChange}
          label={label}
          fullWidth
          sx={{ ...style }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
