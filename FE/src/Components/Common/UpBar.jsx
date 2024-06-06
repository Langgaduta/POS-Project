// eslint-disable-next-line no-unused-vars
import React from 'react';

const UpBar = () => {
  return (
    <nav className="navbar pt-3 pb-3 shadow sticky-top" style={{ backgroundColor: '#ffffff' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h5 className="navbar-brand mb-0 h5 ms-4 fw-semibold" style={{ color: '#580865' }}>
          Sales Summary
        </h5>
        <div className="dropdown me-4">
          <button className="btn dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#efe9f0', borderRadius: '50px', color: '#580865' }}>
            <i className="fa-solid fa-user me-3 " style={{ color: '#580865' }}></i>
            <span className="me-4 fw-bolder" style={{ fontSize: '12px', color: '#580865' }}>
              Langga
            </span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="userDropdown" style={{ color: '#580865' }}>
            <li>
              <a className="dropdown-item" href="#">
                Account
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UpBar;
