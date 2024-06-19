import React from 'react';
import List from '../../../Components/Elements/List/List';

const AccessToken = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px', overflowX: 'hidden' }}>
        <div className="col-md-12">
          <div style={{ maxWidth: '760px' }}>
            <div className="card mt-3 shadow" style={{ overflowX: 'hidden' }}>
              <div className="card-body">
                <List link="/categories/add-category" color="" headList1="Name" headList2="Expiration date" headList3="Detail"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessToken;
