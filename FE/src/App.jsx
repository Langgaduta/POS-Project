// eslint-disable-next-line no-unused-vars
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
import ItemList from './Pages/Items/ItemsList/ItemList';
import Categories from './Pages/Items/Categories/Categories';
import Modifier from './Pages/Items/Modifier/Modifier';
import Discountss from './Pages/Items/Discounts/Discounts';
import InventoryManagement from './Pages/InventoryManagement/InventoryManagement';
import AccessRights from './Pages/employees/AccessRights/AccessRights';
import EmployeeList from './Pages/employees/EmployeeList/EmployeeList';
import Customers from './Pages/Customers/Cutomers';
import AccessToken from './Pages/Integrations/AccessToken/AccessToken';
import Apps from './Pages/Integrations/Apps/Apps';
import Settings from './Pages/Settings/Settings';
import Help from './Pages/Help/Help';


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
        <Route path="/item-list" element={<ItemList />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/modifier" element={<Modifier />} />
        <Route path="/discountss" element={<Discountss />} />
        <Route path="/inventory-management" element={<InventoryManagement />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="/access-rights" element={<AccessRights />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/access-token" element={<AccessToken />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>

  
  );
}

export default App;