
import React from 'react';
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
                <a href="#" className="sidebar-link text-dark">
                  Sales Summary
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link text-dark">
                  Sales By Item
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link text-dark">
                  Sales By Employee
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link text-dark">
                  Sales By Category
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link text-dark">
                  Sales By Payment Type
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link text-dark">
                  Receipts
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link text-dark">
                  Sales By Modifier
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link text-dark">
                  Discounts
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link text-dark">
                  Taxes
                </a>
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
                <a href="#" className="sidebar-link text-dark">
                  Items List
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link text-dark">
                  Categories
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link text-dark">
                  Modifier
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link text-dark">
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
                <a href="#" className="sidebar-link text-dark">
                  Employee List
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#" className="sidebar-link text-dark">
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
          <h1>home</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
