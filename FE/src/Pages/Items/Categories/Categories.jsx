import React from 'react';
// import { Link } from 'react-router-dom';
// import Button from '../../../Components/Elements/Button/Button';
// import SelectVariant from '../../../../Components/Elements/Select/Select';
import BasicTable from '../../../Components/Elements/TableExport/Tableexport';
import List from '../../../Components/Elements/List/List';
import { Link } from 'react-router-dom';

const ItemList = () => {
  return (
      <div className="container-fluid">
        <div className="row justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px', overflowX: 'hidden' }}>
          <div className="col-md-12">
            <div style={{ maxWidth: '760px' }}>
              <div className="card mt-3 shadow" style={{ overflowX: 'hidden' }}>
                <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/categories/add-category" className="btn text-white mt-3 me-2 shadow" style={{ backgroundColor: '#7e148f', textDecoration: 'none' }}>
                          + Add Categories
                        </Link>
                    </div>
                  </div>
                  <List color="red" headList1="item"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ItemList;
