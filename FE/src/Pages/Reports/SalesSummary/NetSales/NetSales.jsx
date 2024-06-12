import React from 'react';
import LineChartComponent from '../../../../Components/Elements/Chart/Chart';
import CustomDatePicker from '../../../../Components/Elements/Calendar/DatePicker';
import ComplexButton from '../../../../Components/Elements/ComplexButton/ComplexButton';
import TimePicker from '../../../../Components/Elements/TimePicker.js/TimePicker';

const NetSales = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px' }}>
        <div className="col-md-12">
        <div className='d-flex'>
          <CustomDatePicker /> 
          <TimePicker />
          </div>
          <div className="card mt-3 justify-content-center shadow">
            <div className="card-body">
              <ComplexButton/>
              <p className='ms-3'>Net Sales</p>
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

export default NetSales;
