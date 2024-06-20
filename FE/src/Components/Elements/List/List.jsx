import React, { useState } from 'react';
import { CardContent, Button, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import NoData from '../NoData/NoData';

const List = (props) => {
  const headList = [props.headList1, props.headList2, props.headList3, props.headList4, props.headList5, props.headList6  ];
  const items = [
    { name: 'Item 1', categories: ['Category 1', 'Category 2'], color: props.color },
    { name: 'Item 2', categories: ['Category 3'], color: 'lightgreen' },
    { name: 'Item 3', categories: ['Category 2', 'Category 4'], color: 'lightgreen' },
    { name: 'Item 4', categories: ['Category 1'], color: 'lightgreen' },
    { name: 'Item 5', categories: ['Category 5', 'Category 6'], color: 'lightgreen' },
    { name: 'Item 6', categories: ['Category 1', 'Category 7'], color: 'lightgreen' },
    { name: 'Item 7', categories: ['Category 8'], color: 'lightgreen' },
    { name: 'Item 8', categories: ['Category 9'], color: 'lightgreen' },
    { name: 'Item 9', categories: ['Category 10'], color: 'lightgreen' },
  ];
  const [selectedItems, setSelectedItems] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      const newSelectedItems = items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => item.name);
      setSelectedItems(newSelectedItems);
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (itemName) => {
    const selectedIndex = selectedItems.indexOf(itemName);
    let newSelectedItems = [];

    if (selectedIndex === -1) {
      newSelectedItems = newSelectedItems.concat(selectedItems, itemName);
    } else if (selectedIndex === 0) {
      newSelectedItems = newSelectedItems.concat(selectedItems.slice(1));
    } else if (selectedIndex === selectedItems.length - 1) {
      newSelectedItems = newSelectedItems.concat(selectedItems.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedItems = newSelectedItems.concat(selectedItems.slice(0, selectedIndex), selectedItems.slice(selectedIndex + 1));
    }

    setSelectedItems(newSelectedItems);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (itemName) => selectedItems.indexOf(itemName) !== -1;

  return (
    <CardContent>
      {items.length === 0 ? (
        <Box display="flex" flexDirection="column" alignItems="center">
          <NoData />
          <Box mt={2}>
            {/* <Link to={props.link}>
              <Button variant="contained" style={{ backgroundColor: '#580865' }}>
                +Add Category
              </Button>
            </Link> */}
          </Box>
        </Box>
      ) : (
        <>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            {/* <Link to={props.link}>
              <Button variant="contained" style={{ backgroundColor: '#580865' }}>
                +Add Category
              </Button>
            </Link> */}
            {selectedItems.length > 0 && (
              <Button style={{ marginLeft: '10px', backgroundColor: 'white', color: 'black' }}>
                <i className="fas fa-trash-alt" style={{ marginRight: '5px' }}></i>
                Delete
              </Button>
            )}
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableCell padding="checkbox">
                  <Checkbox indeterminate={selectedItems.length > 0 && selectedItems.length < rowsPerPage} checked={selectedItems.length === rowsPerPage} onChange={handleSelectAll} />
                </TableCell>
                {headList.map((name, index) => (
                  <TableCell key={index} className="text-body-tertiary">
                    {name}
                  </TableCell>
                ))}
              </TableHead>
              <TableBody>
                {items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => {
                  const isItemSelected = isSelected(item.name);
                  return (
                    <TableRow key={item.name} selected={isItemSelected}>
                      <TableCell padding="checkbox">
                        <Checkbox checked={isItemSelected} onChange={() => handleSelectItem(item.name)} />
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Box
                            sx={{
                              width: 38, // Perbesar lingkaran
                              height: 38, // Perbesar lingkaran
                              borderRadius: '50%',
                              backgroundColor: item.color, // Ubah warna menjadi hijau muda
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginRight: 2,
                            }}
                          >
                            <i className={props.icon} style={{ color: 'white', fontSize: '18px' }}></i>
                          </Box>
                          <Box>
                            <Typography>{item.name}</Typography>
                            <Typography variant="body2" color="textSecondary">
                              {item.categories.join(', ')}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination rowsPerPageOptions={[5, 10, 20, 50]} component="div" count={items.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
        </>
      )}
    </CardContent>
  );
};

export default List;
