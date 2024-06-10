import React from 'react';
import LineChartComponent from '../../../Components/Elements/Chart/Chart';

const SalesSummary = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px' }}>
        <div className="col-md-12">
          <div className="card mt-3 justify-content-center">
            <div className="card-body">
              <LineChartComponent/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesSummary;
