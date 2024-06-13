import React from 'react';
// import DatePicker from '../../../Components/Elements/Calendar/DatePicker';
import CustomDatePicker from '../../../Components/Elements/Calendar/DatePicker';
import TimePicker from '../../../Components/Elements/TimePicker.js/TimePicker';
import FadeMenu from '../../../Components/Elements/FadeMenu/FadeMenu';
import BasicTable from '../../../Components/Elements/TableExport/Tableexport';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import NoData from '../../../Components/Elements/NoData/NoData';

const SalesByItem = () => {
  return (
    <div className="container-fluid">
      <div className="row" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px' }}>
        <div className="col-12">
          {/* <DatePicker /> */}
          <div className='d-flex flex-wrap' style={{ width: '100%'}}>
            <CustomDatePicker /> 
            <TimePicker />
          </div>
          <div style={{ maxWidth: "1300px" }}>
          <div className="card shadow mt-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 border-end">
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
                        <div className='d-flex justify-content-center'>
                          
                        <NoData/>
                        </div>

                  </div>
                </div>
              </div>
              {/* here */}
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
    </div>
  );
};

export default SalesByItem;
