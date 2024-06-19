import React from 'react';
import Seting from '../../Components/Elements/Setting/Setting';
import List from '../../Components/Elements/List/List';


const Pos = () => {
  return (
    <>
    <div className="" style={{ minHeight: 'auto', backgroundColor: '#e8e7e9', marginLeft: '57px', overflowX: 'hidden' }}>
        <div className='d-flex'>
            <Seting/>
            {/* <Subscription/> */}
        
        <div className="container-fluid">
        <div className="row justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px', overflowX: 'hidden' }}>
        <div className="col-md-12">
            <div style={{ maxWidth: '760px' }}>
            <div className="card mt-3 shadow" style={{ overflowX: 'hidden' }}>
                <div className="card-body">
                <List link="/categories/add-category" headList1="Name" headList2="Status" headList3="Number of POS"/>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  </>
        //   <List/>
  );
}

export default Pos;
