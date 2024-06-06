import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Common/SideBar';
import UpBar from './Components/Common/UpBar';
import Main from './Components/Main/Main';
import SalesSummary from './Pages/Reports/SalesSummary';
import SalesItem from './Pages/Reports/SalesByItem';
import SalesEmployee from './Pages/Reports/SalesByEmployee';
import SalesCategory from './Pages/Reports/SalesByCategory';

const App = () => {
  return (
    <Router>
      <UpBar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/salesSummary" element={<SalesSummary />} />
        <Route path="/sales-by-item" element={<SalesItem />} />
        <Route path="/sales-by-employee" element={<SalesEmployee />} />
        <Route path="/sales-by-category" element={<SalesCategory />} />
      </Routes>
    </Router>
  );
}

export default App;