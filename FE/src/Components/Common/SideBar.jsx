import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Sidebar = () => {
  const toggleSidebar = () => {
    document.querySelector('#sidebar').classList.toggle('expand');
  };

  return (
    <div className="wrapper">
      <aside id="sidebar">
        <div className="d-flex">
          <button className="toggle-btn" type="button" onClick={toggleSidebar}>
            <i className="lni lni-grid-alt"></i>
          </button>
          <div className="sidebar-logo">
            <a href="#">TokoKu</a>
          </div>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse" data-bs-target=".auth" aria-expanded="false" aria-controls="auth">
              <i className="lni lni-agenda"></i>
              <span>Reports</span>
            </a>
            <ul className="sidebar-dropdown list-unstyled collapse auth">
              <li className="sidebar-item">
                <Link to="/sales-summary" className="sidebar-link text-white">
                  Sales Summary
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/sales-by-item" className="sidebar-link text-white">
                  Sales By Item
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/sales-by-employee" className="sidebar-link text-white">
                  Sales By Employee
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/sales-by-category" className="sidebar-link text-white">
                  Sales By Category
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/sales-by-payment-type" className="sidebar-link text-white">
                  Sales By Payment Type
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/receipts" className="sidebar-link text-white">
                  Receipts
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/sales-by-modifier" className="sidebar-link text-white">
                  Sales By Modifier
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/discounts" className="sidebar-link text-white">
                  Discounts
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/taxes" className="sidebar-link text-white">
                  Taxes
                </Link>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse" data-bs-target=".items" aria-expanded="false" aria-controls="items">
              <i className="lni lni-briefcase"></i>
              <span>Items</span>
            </a>
            <ul className="sidebar-dropdown list-unstyled collapse items">
              <li className="sidebar-item">
                <a href="#" className="sidebar-link  text-white">
                  Items List
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link  text-white">
                  Categories
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link  text-white">
                  Modifier
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link  text-white">
                  Discounts
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-cart-full"></i>
              <span>Inventory Management</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse" data-bs-target=".employees" aria-expanded="false" aria-controls="employees">
              <i className="lni lni-layout"></i>
              <span>Employees</span>
            </a>
            <ul className="sidebar-dropdown list-unstyled collapse employees">
              <li className="sidebar-item">
                <a href="#" className="sidebar-link  text-white">
                  Employee List
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link text-white">
                  Access Rights
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-customer"></i>
              <span>Customers</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse" data-bs-target=".integrations" aria-expanded="false" aria-controls="integrations">
              <i className="lni lni-popup"></i>
              <span>Integrations</span>
            </a>
            <ul className="sidebar-dropdown list-unstyled collapse integrations">
              <li className="sidebar-item">
                <a href="#" className="sidebar-link text-dark">
                  Apps
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link text-dark">
                  Access Token
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="lni lni-cog"></i>
              <span>Settings</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="fa-regular fa-circle-question"></i>
              <span>Help</span>
            </a>
          </li>
        </ul>
      </aside>
      <div className="main p-3">
        <div className="text-center">
          <h1>Home</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
