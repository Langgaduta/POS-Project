import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../Components/Elements/Button/Button';
import SelectVariant from '../../../Components/Elements/Select/Select';
import BasicTable from '../../../Components/Elements/TableExport/Tableexport';

const ItemList = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px', overflowX: 'hidden' }}>
        <div className="col-md-12">
          <div style={{ maxWidth: '1300px' }}>
            <div className="card mt-3 shadow" style={{ overflowX: 'hidden' }}>
              <div className="card-body">
                <h5 className="fw-light">Item List</h5>
                <div className="">
                  <div className="row">
                    <div className="col-md-6">
                        <Link to="/item-list/add-item" className="btn text-white mt-3 me-2 shadow" style={{ backgroundColor: '#7e148f', textDecoration: 'none' }}>
                          + Add Item
                        </Link>
                      <Link to="/item-list/import" className="btn mt-3 me-2 " style={{textDecoration: 'none' }}>
                        Import
                      </Link>
                      <Button className="btn mt-3">Export</Button>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end text-center mt-4">
                      <SelectVariant
                        label="Category"
                        options={[
                          { value: 10, label: 'All Items' },
                          { value: 20, label: 'No Category' },
                        ]}
                      />
                      <SelectVariant
                        label="Stok Alert"
                        options={[
                          { value: 10, label: 'All Items' },
                          { value: 20, label: 'Low Stock' },
                          { value: 20, label: 'Out Of Stock' },
                        ]}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <BasicTable />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
