import React from 'react';
import List from '../../../Components/Elements/List/List';

const Discountss = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px', overflowX: 'hidden' }}>
        <div className="col-md-12">
          <div style={{ maxWidth: '760px' }}>
            <div className="card mt-3 shadow" style={{ overflowX: 'hidden' }}>
              <div className="card-body">
                <List link="/categories/add-category" icon="fas fa-tags" color="#sF27BBD " headList1="Name" headList2="Value" headList3="Restricted access"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discountss;
