

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import './DatePicker.css';


const CustomDatePicker = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;

  const handleDateChange = dates => {
    const [start, end] = dates;
    setDateRange([start, end]);
  };


  const handlePrevDay = () => {
    if (startDate) {
      const prevDay = new Date(startDate);
      prevDay.setDate(startDate.getDate() - 1);
      setDateRange([prevDay, endDate]);
    }
  };

  const handleNextDay = () => {
    if (endDate) {
      const nextDay = new Date(endDate);
      nextDay.setDate(endDate.getDate() + 1);
      setDateRange([startDate, nextDay]);
    }
  };

  return (
    <div className=" mt-4">
      <div className="d-flex align-items-center mb-2">
        <div className="input-group">
        <button className="btn text-black py-1 bg-white border border-1" style={{ borderRadius: '4px  0px 0px 4px' }} onClick={handlePrevDay}>{'<'}</button>
        <div className="input-group-prepend">
            <span className="input-group-text p-2" style={{ borderRadius: '0' }}>
            <FaCalendarAlt selectsRange/>
            </span>
          </div>
          <DatePicker
            
          selected={startDate}
          onChange={(dates) => handleDateChange(dates)}
          startDate={startDate}
          endDate={endDate}
          maxDate={new Date()}
          selectsRange
          dateFormat="dd/MM/yyyy"
          className="py-1 px-3 border-1 border"
          style={{ }}
          />
        <button className="btn text-black py-1 bg-white border border-1" style={{ borderRadius: '0px  4px 4px 0px' }} onClick={handleNextDay}>{'>'}</button>
        </div>
      </div>
    </div>
  );

};

export default CustomDatePicker;
