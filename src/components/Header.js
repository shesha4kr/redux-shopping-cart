import React from "react";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = ({ displayHome, totalItems }) => {
  return (
    <div className="header">
      <div className="heading">Dummy Shopping Website</div>

      <div className="home-icon">
        <Link to="/">{displayHome ? <FaHome /> : ""}</Link>
      </div>

      <div className="cart-icon">
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
      </div>

      <div className="number-of-items">
        {totalItems === 0 ? "" : totalItems}
      </div>
    </div>
  );
};
