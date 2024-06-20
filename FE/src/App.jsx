// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Elements/Navbar/Navbar';
import Sidebar from './Components/Elements/Sidebar/SideBar';
import SalesSummary from './Pages/Reports/SalesSummary/SalesSummary';
import GrossSales from './Pages/Reports/SalesSummary/GrossSales/GrossSales';
import Refunds from './Pages/Reports/SalesSummary/Refunds/Refunds';
import Discount from './Pages/Reports/SalesSummary/Discount/Discount';
import NetSales from './Pages/Reports/SalesSummary/NetSales/NetSales';
import GrossProfit from './Pages/Reports/SalesSummary/GrossProfit/GrossProfit';
import SalesByItem from './Pages/Reports/SalesByItem/SalesByItem';
import SalesByEmployee from './Pages/Reports/SalesByEmployee/SalesByEmployee';
import SalesByCategory from './Pages/Reports/SalesByCategory/SalesByCategory';
import SalesByPaymentType from './Pages/Reports/SalesByPaymentType/SalesByPaymentType';
import Receipts from './Pages/Reports/Receipts/Receipts';
import SalesByModifier from './Pages/Reports/SalesByModifier/SalesByModifier';
import Discounts from './Pages/Reports/Discounts/Discounts';
import Discountss from './Pages/Items/Discounts/Discounts';
import Subscription from './Pages/Settings/Subscription';
import Taxes from './Pages/Reports/Taxes/Taxes';
import ItemList from './Pages/Items/ItemsList/ItemList';
import AddItem from './Pages/Items/ItemsList/AddItem/AddItem';
import Import from './Pages/Items/ItemsList/Import/Import';
import Categories from './Pages/Items/Categories/Categories';
import AddCategory from './Pages/Items/Categories/AddCategory/AddCategory';
import Modifier from './Pages/Items/Modifier/Modifier';
import AddModifier from './Pages/Items/Modifier/AddModifier';
import InventoryManagement from './Pages/InventoryManagement/InventoryManagement';
import AccessRights from './Pages/employees/AccessRights/AccessRights';
import EmployeeList from './Pages/employees/EmployeeList/EmployeeList';
import Customers from './Pages/Customers/Customers';
import CustomerDetail from './Pages/Customers/CustomerDetail';
import AccessToken from './Pages/Integrations/AccessToken/AccessToken';
import Apps from './Pages/Integrations/Apps/Apps';
import Features from './Pages/Settings/Features';
import Payment from './Pages/Settings/Payment';
import Takes from './Pages/Settings/Takes';
import Store from './Pages/Settings/Store';
import Pos from './Pages/Settings/Pos';
import Help from './Pages/Help/Help';
// import AddCategory from './Pages/Items/Categories/AddCategory/AddCategory';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/sales-summary" element={<SalesSummary />} />
        <Route path="/sales-summary/gross-sales" element={<GrossSales />} />
        <Route path="/sales-summary/refunds" element={<Refunds />} />
        <Route path="/sales-summary/discount" element={<Discount />} />
        <Route path="/sales-summary/net-sales" element={<NetSales />} />
        <Route path="/sales-summary/gross-profit" element={<GrossProfit />} />
        <Route path="/sales-by-item" element={<SalesByItem />} />
        <Route path="/sales-by-employee" element={<SalesByEmployee />} />
        <Route path="/sales-by-category" element={<SalesByCategory />} />
        <Route path="/sales-by-payment-type" element={<SalesByPaymentType />} />
        <Route path="/receipts" element={<Receipts />} />
        <Route path="/sales-by-modifier" element={<SalesByModifier />} />
        <Route path="/discounts" element={<Discountss />} />
        <Route path="/taxes" element={<Taxes />} />
        <Route path="/item-list" element={<ItemList />} />
        <Route path="/item-list/add-item" element={<AddItem />} />
        <Route path="/item-list/import" element={<Import />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/add-category" element={<AddCategory />} />
        <Route path="/modifier" element={<Modifier />} />
        <Route path="/modifier/add-modifier" element={<AddModifier />} />
        <Route path="/discounts" element={<Discounts />} />
        <Route path="/inventory-management" element={<InventoryManagement />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="/access-rights" element={<AccessRights />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customer/Customer-Info" element={<CustomerDetail />} />
        <Route path="/access-token" element={<AccessToken />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/Settings/Features" element={<Features />} />
        <Route path="/Settings/Billing-subscriptions" element={<Subscription />} />
        <Route path="/Settings/Payment" element={<Payment />} />
        <Route path="/Settings/Taxes" element={<Takes />} />
        <Route path="/Settings/Stores" element={<Store />} />
        <Route path="/Settings/Pos-devices" element={<Pos />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
};

export default App;
