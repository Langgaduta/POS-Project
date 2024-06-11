// src/components/DatePicker.js

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import './DatePicker.css';
// import { format } from 'date-fns';

const CustomDatePicker = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;

  const handleDateChange = dates => {
    const [start, end] = dates;
    setDateRange([start, end]);
  };

  // const handleDateChangeEnd = date => {
  //   setEndDate(date);
  // };

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
            <span className="input-group-text py-2 px-2" style={{ borderRadius: '0' }}>
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
      <div className="d-flex ">
        {/* <div>Start Date: {startDate ? startDate.toLocaleDateString() : 'None'}</div><p> - </p>
        <div>End Date: {endDate ? endDate.toLocaleDateString() : 'None'}</div> */}
      </div>
    </div>
  );
  // const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  // const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  // return (
  //   <>
  //     <DatePicker
  //       selected={startDate}
  //       onChange={(date) => setStartDate(date)}
  //       selectsStart
  //       startDate={startDate}
  //       endDate={endDate}
  //     />
  //     <DatePicker
  //       selected={endDate}
  //       onChange={(date) => setEndDate(date)}
  //       selectsEnd
  //       startDate={startDate}
  //       endDate={endDate}
  //       minDate={startDate}
  //     />
  //   </>
  // );
};

export default CustomDatePicker;
