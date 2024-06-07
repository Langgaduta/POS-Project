import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Elements/Navbar/Navbar';
import Sidebar from './Components/Elements/Sidebar/SideBar';
import SalesSummary from './Pages/Reports/SalesSummary/SalesSummary';
import SalesByItem from './Pages/Reports/SalesByItem/SalesByItem';
import SalesByEmployee from './Pages/Reports/SalesByEmployee/SalesByEmployee';
import SalesByCategory from './Pages/Reports/SalesByCategory/SalesByCategory';
import SalesByPaymentType from './Pages/Reports/SalesByPaymentType/SalesByPaymentType';
import Receipts from './Pages/Reports/Receipts/Receipts';
import SalesByModifier from './Pages/Reports/SalesByModifier/SalesByModifier';
import Discounts from './Pages/Reports/Discounts/Discounts';
import Taxes from './Pages/Reports/Taxes/Taxes';


const App = () => {
  return (
    <Router>
      <Navbar />  
      <Sidebar />
      <Routes>
        <Route path="/sales-summary" element={<SalesSummary />} />
        <Route path="/sales-by-item" element={<SalesByItem />} />
        <Route path="/sales-by-employee" element={<SalesByEmployee />} />
        <Route path="/sales-by-category" element={<SalesByCategory />} />
        <Route path="/sales-by-payment-type" element={<SalesByPaymentType />} />
        <Route path="/receipts" element={<Receipts />} />
        <Route path="/sales-by-modifier" element={<SalesByModifier />} />
        <Route path="/discounts" element={<Discounts />} />
        <Route path="/taxes" element={<Taxes />} />
      </Routes>
    </Router>

  
  );
}

export default App;