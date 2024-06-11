import React from 'react';
import DatePicker from '../../../Components/Elements/Calendar/DatePicker';
import FadeMenu from '../../../Components/Elements/FadeMenu/FadeMenu';

const SalesByItem = () => {
  return (
    <div className="container-fluid">
      <div className="row" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px' }}>
        <div className="col-12">
          <DatePicker />
          <div className="card shadow mt-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="ms-3">Top 5 Items</p>
                    </div>
                    <div className="col-md-6">
                      <p className="ms-3 " style={{ fontSize: '14px', color: 'gray' }}>Net Sales</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="ms-3">Sales By Item Chart</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                      <div className="me-3">
                        <FadeMenu buttonLabel="Line" menuItems={['Bar', 'Pie']} />
                      </div>
                      <FadeMenu buttonLabel="Days" menuItems={['Days', 'Week']} />
                    </div>
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

export default SalesByItem;
