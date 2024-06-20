// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const toggleSidebar = () => {
    document.querySelector('#sidebar').classList.toggle('expand');
  };

  const collapseSidebar = () => {
    document.querySelector('#sidebar').classList.remove('expand');
  };

  return (
    <div className="wrapper">
      <aside id="sidebar">
        <div className="d-flex">
          <button className="toggle-btn" type="button" onClick={toggleSidebar}>
            <i className="lni lni-grid-alt"></i>
          </button>
          <div className="sidebar-logo">
            <Link to="/">TokoKu</Link>
          </div>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <Link to="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse" data-bs-target=".auth" aria-expanded="false" aria-controls="auth">
              <i className="lni lni-agenda"></i>
              <span>Reports</span>
            </Link>
            <ul className="sidebar-dropdown list-unstyled collapse auth px-4 mx-2">
              <li className="sidebar-item">
                <Link to="/sales-summary" className="sidebar-link text-white" onClick={collapseSidebar}>
                  Sales Summary
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/sales-by-item" className="sidebar-link text-white" onClick={collapseSidebar}>
                  Sales By Item
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/sales-by-category" className="sidebar-link text-white" onClick={collapseSidebar}>
                  Sales By Category
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/sales-by-employee" className="sidebar-link text-white" onClick={collapseSidebar}>
                  Sales By Employee
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/sales-by-payment-type" className="sidebar-link text-white" onClick={collapseSidebar}>
                  Sales By Payment Type
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/receipts" className="sidebar-link text-white" onClick={collapseSidebar}>
                  Receipts
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/sales-by-modifier" className="sidebar-link text-white" onClick={collapseSidebar}>
                  Sales By Modifier
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/discounts" className="sidebar-link text-white" onClick={collapseSidebar}>
                  Discounts
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/taxes" className="sidebar-link text-white" onClick={collapseSidebar}>
                  Taxes
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <Link to="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse" data-bs-target=".items" aria-expanded="false" aria-controls="items">
              <i className="lni lni-briefcase"></i>
              <span>Items</span>
            </Link>
            <ul className="sidebar-dropdown list-unstyled collapse items px-4 mx-2">
              <li className="sidebar-item">
                <Link to="item-list" className="sidebar-link text-white" onClick={collapseSidebar}>
                  Items List
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="categories" className="sidebar-link text-white" onClick={collapseSidebar}>
                  Categories
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="modifier" className="sidebar-link text-white" onClick={collapseSidebar}>
                  Modifier
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="discounts" className="sidebar-link text-white" onClick={collapseSidebar}>
                  Discounts
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <Link to="inventory-management" className="sidebar-link" onClick={collapseSidebar}>
              <i className="lni lni-cart-full"></i>
              <span>Inventory Management</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse" data-bs-target=".employees" aria-expanded="false" aria-controls="employees">
              <i className="lni lni-layout"></i>
              <span>Employees</span>
            </Link>
            <ul className="sidebar-dropdown list-unstyled collapse employees px-4 mx-2">
              <li className="sidebar-item">
                <Link to="employee-list" className="sidebar-link text-white" onClick={collapseSidebar}>
                  Employee List
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="Access-rights" className="sidebar-link text-white" onClick={collapseSidebar}>
                  Access Rights
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <Link to="customers" className="sidebar-link" onClick={collapseSidebar}>
              <i className="lni lni-customer"></i>
              <span>Customers</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse" data-bs-target=".integrations" aria-expanded="false" aria-controls="integrations">
              <i className="lni lni-popup"></i>
              <span>Integrations</span>
            </Link>
            <ul className="sidebar-dropdown list-unstyled collapse integrations px-4 mx-2">
              <li className="sidebar-item">
                <Link to="apps" className="sidebar-link text-white" onClick={collapseSidebar}>
                  Apps
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="access-token" className="sidebar-link text-white" onClick={collapseSidebar}>
                  Access Token
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <Link to="/Settings/Features" className="sidebar-link" onClick={collapseSidebar}>
              <i className="lni lni-cog"></i>
              <span>Settings</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="help" className="sidebar-link" onClick={collapseSidebar}>
              <i className="fa-regular fa-circle-question"></i>
              <span>Help</span>
            </Link>
            {/* <ul className="sidebar-dropdown list-unstyled collapse employees px-4 mx-2">
              <li className="sidebar-item">
                <Link to="employee-list" className="sidebar-link text-white">
                  Help Center
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="Access-rights" className="sidebar-link text-white">
                  Community
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="Access-rights" className="sidebar-link text-white">
                  Access Rights
                </Link>
              </li>
            </ul> */}
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
