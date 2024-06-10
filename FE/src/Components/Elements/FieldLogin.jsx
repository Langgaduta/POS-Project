/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const FieldL = (props) => {
  return (
    <div className={props.mb}>
        <label className="text-body-secondary" style={{ fontWeight: "400", lineHeight: "20px", fontSize: "13px" }}>{ props.label }</label>
        <input type={ props.type } className="form-control border-end-0 border-top-0 border-start-0 border"  style={{fontWeight: "400"}} placeholder={props.placeholder} required />
    </div>
  );
};

export default FieldL;
