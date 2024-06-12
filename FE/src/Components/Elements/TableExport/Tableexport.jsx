import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead;
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

function createData(Date, GrossSales, Refunds, Discounts, NetSales, CostOfGoods, GrossProfi) {
  return { Date, GrossSales, Refunds, Discounts, NetSales, CostOfGoods, GrossProfi};
}

// Ubah ini untuk menguji jika ada data atau tidak
const rows = [
  createData('Frozen yoghurt', "jj", 6.0, 24, 4.0, 98, "contoh"),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 98, "contoh"),
  createData('Eclair', 262, 16.0, 24, 6.0, 98, "contoh"),
  createData('Cupcake', 305, 3.7, 67, 4.3, 98, "contoh"),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 98, "contoh"),
  createData('Jelly Bean', 375, 0, 94, 0, 98, "contoh"),
  createData('Lollipop', 392, 0.2, 98, 0, 98, "contoh"),
  createData('Honeycomb', 408, 3.2, 87, 6.5, 98, "contoh"),
  createData('Donut', 452, 25.0, 51, 4.9, 98, "contoh"),
  createData('KitKat', 518, 26.0, 65, 7.0, 89, "contoh")
];

export default function BasicTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleNextPage = () => {
    if ((page + 1) * rowsPerPage < rows.length) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {/* <TableHead> */}
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Gross sales</TableCell>
            <TableCell align="right">Refunds&nbsp;</TableCell>
            <TableCell align="right">Discounts&nbsp;</TableCell>
            <TableCell align="right">Net sales&nbsp;</TableCell>
            <TableCell align="right">Cost of goods&nbsp;</TableCell>
            <TableCell align="right">Gross profit&nbsp;</TableCell>
          </TableRow>
        {/* </TableHead> */}
        <TableBody>
          {paginatedRows.length > 0 ? (
            paginatedRows.map((row) => (
              <TableRow
                key={row.Date}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Date}
                </TableCell>
                <TableCell align="right">{row.GrossSales}</TableCell>
                <TableCell align="right">{row.Refunds}</TableCell>
                <TableCell align="right">{row.Discounts}</TableCell>
                <TableCell align="right">{row.NetSales}</TableCell>
                <TableCell align="right">{row.CostOfGoods}</TableCell>
                <TableCell align="right">{row.GrossProfi}</TableCell>
              </TableRow>
            ))
          ) : (
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
          )}
        </TableBody>
      </Table>
      </TableContainer>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <Button  
            variant="contained"
            onClick={handlePreviousPage}
            disabled={page === 0}
            sx={{ backgroundColor: '#580865', '&:hover': { backgroundColor: '#580865' } }}>
            {'<'}
        </Button>
        <Typography variant="body1">
          Page {page + 1} of {Math.ceil(rows.length / rowsPerPage)}
        </Typography>
        <Button 
            variant="contained" 
            onClick={handleNextPage} 
            disabled={(page + 1) * rowsPerPage >= rows.length}
            sx={{ backgroundColor: '#580865', '&:hover': { backgroundColor: '#580865' } }}>
          {'>'}
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" p={2}>
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel id="rows-per-page-label">Rows per page</InputLabel>
          <Select
            labelId="rows-per-page-label"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            label="Rows per page"
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
      </Box>
      </>
    
  );
}
