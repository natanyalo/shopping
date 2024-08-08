import React from 'react';
import './App.css';
import Header from './header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Products from './components/product/products';


const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
