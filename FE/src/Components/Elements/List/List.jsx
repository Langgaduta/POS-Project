import React, { useState } from 'react';
import { Card, CardContent, Button, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Typography, Box } from '@mui/material';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const items = [
  { name: 'Item 1', count: 10, color: 'gray' },
  { name: 'Item 2', count: 15, color: 'red' },
  { name: 'Item 3', count: 20, color: 'pink' },
  { name: 'Item 4', count: 5, color: 'orange' },
  { name: 'Item 5', count: 12, color: 'yellow' },
  { name: 'Item 6', count: 25, color: 'lime' },
  { name: 'Item 7', count: 8, color: 'green' },
  { name: 'Item 8', count: 30, color: 'lightblue' },
  { name: 'Item 9', count: 18, color: 'purple' },
];

const List = (props) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const history = useHistory();

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      const newSelectedItems = items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item => item.name);
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
      newSelectedItems = newSelectedItems.concat(
        selectedItems.slice(0, selectedIndex),
        selectedItems.slice(selectedIndex + 1),
      );
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
      <Link to={props.link}>
            <Button variant="contained" style={{ backgroundColor: '#580865' }}>
            +Add Category
            </Button>
        </Link>
        {selectedItems.length > 0 && (
          <Button
            variant="contained"
            style={{ marginLeft: '10px', backgroundColor: 'white', color: 'black' }}
          >
            <i className="fas fa-trash-alt" style={{ marginRight: '5px' }}></i>
            Delete
          </Button>
        )}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={selectedItems.length > 0 && selectedItems.length < rowsPerPage}
                    checked={selectedItems.length === rowsPerPage}
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Item</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => {
                const isItemSelected = isSelected(item.name);
                return (
                  <TableRow key={item.name} selected={isItemSelected}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        onChange={() => handleSelectItem(item.name)}
                      />
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Box
                          sx={{
                            width: 38,
                            height: 38,
                            borderRadius: '50%',
                            backgroundColor: item.color,
                            marginRight: 2,
                          }}
                        />
                          {/* <i className="fas fa-trash-alt" style={{ marginLeft: '0px' }}></i> */}
                        <Box>
                          <Typography>{item.name}</Typography>
                          <Typography variant="body2" color="textSecondary">
                            {item.count} items
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 50]}
          component="div"
          count={items.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </CardContent>
  );
};

export default List;
