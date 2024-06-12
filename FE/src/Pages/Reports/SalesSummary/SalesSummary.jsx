import React from 'react';
import LineChartComponent from '../../../Components/Elements/Chart/Chart';
import CustomDatePicker from '../../../Components/Elements/Calendar/DatePicker';
import ComplexButton from '../../../Components/Elements/ComplexButton/ComplexButton';
import TimePicker from '../../../Components/Elements/TimePicker.js/TimePicker';
import BasicTable from '../../../Components/Elements/TableExport/Tableexport';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';

const SalesSummary = () => {
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
              <p className='ms-3'>Gross Sales</p>
              <LineChartComponent />
            </div>
          </div>
          <div className="card mt-3 justify-content-center shadow">
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <p className='ms-1' style={{fontFamily: "'Roboto', sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "20px" }}>Export</p>
                <FontAwesomeIcon icon={faTable} className='text-body-secondary me-2'/>
              </div>
              <BasicTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesSummary;
