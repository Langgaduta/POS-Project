import React, { useState } from 'react';
import { TablePagination, TableRow, Box, TableContainer, TableCell, TableBody, Table, TableHead } from '@mui/material';
import NoData from '../NoData/NoData';
import { Link } from 'react-router-dom';

function createData(Date, GrossSales, Refunds, Discounts, NetSales, CostOfGoods, GrossProfi) {
  return { Date, GrossSales, Refunds, Discounts, NetSales, CostOfGoods, GrossProfi };
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
  createData('KitKat', 518, 26.0, 65, 7.0, 89, "contoh"),
  createData('Frozen yoghurt', "jj", 6.0, 24, 4.0, 98, "contoh"),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 98, "contoh"),
  createData('Eclair', 262, 16.0, 24, 6.0, 98, "contoh"),
  createData('Cupcake', 305, 3.7, 67, 4.3, 98, "contoh"),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 98, "contoh"),
  createData('Jelly Bean', 375, 0, 94, 0, 98, "contoh"),
  createData('Lollipop', 392, 0.2, 98, 0, 98, "contoh"),
  createData('Honeycomb', 408, 3.2, 87, 6.5, 98, "contoh"),
];

export default function BasicTable(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Gross sales</TableCell>
              <TableCell align="right">Refunds&nbsp;</TableCell>
              <TableCell align="right">Discounts&nbsp;</TableCell>
              <TableCell align="right">Net sales&nbsp;</TableCell>
              <TableCell align="right">Cost of goods&nbsp;</TableCell>
              <TableCell align="right">Gross profit&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.length > 0 ? (
              paginatedRows.map((row) => (
                <TableRow
                  key={row.Date}
                  component={Link}
                  to={props.link}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    textDecoration: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.08)',
                    },
                  }}
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
              <NoData />
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </>
  );
}
