import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Common/SideBar';
import UpBar from './Components/Common/UpBar';
import Main from './Components/Main/Main';
import SalesSummary from './Pages/Reports/SalesSummary';
function App() {
  return (
    <Router>
      <div>
        <UpBar />
        <Sidebar />
        <Main>
          <Routes>
            <Route path="/sales-summary" element={<SalesSummary />} />
          </Routes>
        </Main>
      </div>
    </Router>
  );
}

export default App;
