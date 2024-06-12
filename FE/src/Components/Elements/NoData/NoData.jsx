import React, { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';


export default function NoData() {

  return (
    <>
            <TableRow>
              <TableCell colSpan={7} align="center">
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" py={5}>
                  <FontAwesomeIcon icon={faTable} size="5x" className='text-secondary' />
                  <Typography variant="h6" component="div" mt={2} className='text-secondary' style={{ fontSize: "24px" }}>
                    No data to display
                  </Typography>
                  <Typography variant="body2" component="div" mt={2} className='text-secondary' style={{ fontSize: "14px" }}>
                    There are no sales in the selected time period
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
      </>
    
  );
}
