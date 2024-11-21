import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componenets/Navbar/Navbar';
import Home from './componenets/Home/Home';
import Favourite from './pages/Favourite/Favourite';
import Cart from './pages/Cart/Cart';
import Queries from './pages/Queries/Queries';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favourite" element={<Favourite />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Queries" element={<Queries />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
