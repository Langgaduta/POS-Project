import React from 'react';
import List from '../../../Components/Elements/List/List';
import { Link } from 'react-router-dom';
import Button from '../../../Components/Elements/Button/Button';

const EmployeeList = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#e8e7e9', marginLeft: '57px', overflowX: 'hidden' }}>
        <div className="col-md-12">
          <div style={{ maxWidth: '760px' }}>
            <div className="card mt-3 shadow" style={{ overflowX: 'hidden' }}>
              <div className="card-body">
                <Link to="/employee-list/add-employee">
                  <Button className="text-white" style={{ backgroundColor: '#7e148f', textDecoration: 'none' }}>
                    + Add Employee
                  </Button>
                </Link>
                <List link="/categories/add-category" icon="fas fa-tags" color="#sF27BBD " headList1="Name" headList2="Email" headList3="Phone" headList4="Role"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
