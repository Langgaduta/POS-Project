import React from 'react';
import LineChartComponent from '../../../../Components/Elements/Chart/Chart';
import CustomDatePicker from '../../../../Components/Elements/Calendar/DatePicker';
import ComplexButton from '../../../../Components/Elements/ComplexButton/ComplexButton';
import TimePicker from '../../../../Components/Elements/TimePicker.js/TimePicker';
import BasicTable from '../../../../Components/Elements/TableExport/Tableexport';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';

const NetSales = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px', overflowX: 'hidden' }}>
        <div className="col-md-12">
          <div className='d-flex flex-wrap' style={{ width: '100%', overflowX: 'hidden' }}>
            <CustomDatePicker /> 
            <TimePicker />
          </div>
          <div className="card mt-3 shadow" style={{ overflowX: 'hidden' }}>
            <div className="card-body justify-content-center"> {/* Modifikasi di sini */}
              <div className="d-flex justify-content-center align-items-center mb-3"> {/* Modifikasi di sini */}
                <ComplexButton />
              </div>
              <p className='ms-3'>Net Sales</p>
              <LineChartComponent />
            </div>
          </div>
          <div className="card mt-3 justify-content-center shadow" style={{ overflowX: 'hidden' }}>
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <p className='ms-1' style={{ fontFamily: "'Roboto', sans-serif", fontSize: "18px", fontWeight: "600", lineHeight: "20px" }}>Export</p>
                <FontAwesomeIcon icon={faTable} className='text-body-secondary me-2' />
              </div>
              <BasicTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetSales;
