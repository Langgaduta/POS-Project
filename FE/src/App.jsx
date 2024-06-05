// eslint-disable-next-line no-unused-vars
import React from 'react';
import Register from './Components/Sign/Register/Register';
import AlredySign from './Components/Sign/AlredySign/AlredySign';
import Login from './Components/Sign/Login/Login';
import ResetPass from './Components/Sign/ResetPass/ResetPass';
import Sidebar from './Components/Common/SideBar';
import UpBar from './Components/Common/UpBar';

function App() {
  return (
    <div className="App">
      {/* <AlredySign/> */}
      <ResetPass/>
      {/* <Login/> */}
      {/* <Register /> */}
      {/* <UpBar />
      <Sidebar /> */}
    </div>
  );
}

export default App;
