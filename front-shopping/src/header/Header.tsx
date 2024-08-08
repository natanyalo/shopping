// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // optional for styling

const Header: React.FC = () => {
    console.log("Header")
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
