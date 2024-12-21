import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navbar from './components/Navbar/Navbar'; // Make sure paths are correct
import Sidebar from './components/Sidebar/Sidebar'; // Make sure paths are correct
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
//, toast
import 'react-toastify/dist/ReactToastify.css'




const App = () => {
  const url = "http://localhost:4000"

  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add url={url}/>}/>
          <Route path='/list' element={<List url={url}/>}/>
          <Route path='/orders' element={<Orders url={url}/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
