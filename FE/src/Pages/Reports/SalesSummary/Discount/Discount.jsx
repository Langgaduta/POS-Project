import React from 'react';
import LineChartComponent from '../../../../Components/Elements/Chart/Chart';
import CustomDatePicker from '../../../../Components/Elements/Calendar/DatePicker';
import ComplexButton from '../../../../Components/Elements/ComplexButton/ComplexButton';

const Discount = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px' }}>
        <div className="col-md-12">
          <CustomDatePicker />
          <div className="card mt-3 justify-content-center shadow">
            <div className="card-body">
              <ComplexButton/>
              <p className='ms-3'>Discounts</p>
              <LineChartComponent />
            </div>
          </div>
          <div className="card mt-3 justify-content-center shadow">
            <div className="card-body">
            <p>Export</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
