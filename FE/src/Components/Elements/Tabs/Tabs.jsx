import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Tabs = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(getInitialTab(location.pathname));

  function getInitialTab(pathname) {
    return pathname.split('/')[2] || 'gross-sales'; // Default to 'gross-sales'
  }

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <ul className="nav nav-underline">
        <li className="nav-item">
          <NavLink 
            className="nav-link" 
            to="/sales-summary/gross-sales" 
            isActive={() => activeTab === 'gross-sales'} 
            onClick={() => handleTabClick('gross-sales')}
            style={{ borderBottom: activeTab === 'gross-sales' ? '2px solid #580865' : 'none', color: '#000' }}
          >
            Gross Sales <br />
            Rp.0 <br />
            Rp.0 (0%)
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className="nav-link" 
            to="/sales-summary/refunds" 
            isActive={() => activeTab === 'refunds'} 
            onClick={() => handleTabClick('refunds')}
            style={{ borderBottom: activeTab === 'refunds' ? '2px solid #580865' : 'none', color: '#000' }}
          >
            Refunds<br />
            Rp.0 <br />
            Rp.0 (0%)
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className="nav-link" 
            to="/sales-summary/discount" 
            isActive={() => activeTab === 'discount'} 
            onClick={() => handleTabClick('discount')}
            style={{ borderBottom: activeTab === 'discount' ? '2px solid #580865' : 'none', color: '#000'}}
          >
            Discounts<br />
            Rp.0 <br />
            Rp.0 (0%)
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className="nav-link" 
            to="/sales-summary/net-sales" 
            isActive={() => activeTab === 'net-sales'} 
            onClick={() => handleTabClick('net-sales')}
            style={{ borderBottom: activeTab === 'net-sales' ? '2px solid #580865' : 'none', color: '#000'}}
          >
            Net Sales<br />
            Rp.0 <br />
            Rp.0 (0%)
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className="nav-link" 
            to="/sales-summary/gross-profit" 
            isActive={() => activeTab === 'gross-profit'} 
            onClick={() => handleTabClick('gross-profit')}
            style={{ borderBottom: activeTab === 'gross-profit' ? '2px solid #580865' : 'none', color: '#000'}}
          >
            Gross Profit<br />
            Rp.0 <br />
            Rp.0 (0%)
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
