import React from 'react';
import List from '../../../Components/Elements/List/List';
import Button from '../../../Components/Elements/Button/Button';
import { Link } from 'react-router-dom';

const ItemList = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px', overflowX: 'hidden' }}>
        <div className="col-md-12">
          <div style={{ maxWidth: '760px' }}>
            <div className="card mt-3 shadow" style={{ overflowX: 'hidden' }}>
              <div className="card-body">
                <Link to="/modifier/add-modifier">
                  <Button className="text-white" style={{ backgroundColor: '#7e148f', textDecoration: 'none' }}>+ Add Modifier</Button>
                </Link>
                <List link="/modifier/add-modifier" icon="fas fa-file" color="lightgreen" headList1="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
