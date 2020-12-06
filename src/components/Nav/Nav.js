import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartLogo from "./cartLogo3.png";
import { CartContext } from "../CartContext";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.css";

const Nav = () => {
  const { cartValue } = useContext(CartContext);
  const [cart] = cartValue;
  let sum = 0;
  cart.forEach((item) => {
    sum = sum + Number(item.quantity);
  });
  return (
    <div className="Nav">
      <div>
        <div className="nav-links">
          <div className="nav-item1">
            <Link to="/shoppingapp/" className="nav-Link">
              <div>Home</div>
            </Link>
          </div>
          <div className="nav-item2">
            <Link to="/shoppingapp/shop" className="nav-Link">
              <div>Shop</div>
            </Link>
          </div>
          <SearchBar />
          <div className="nav-item3">
            <Link to="/shoppingapp/cart" className="nav-Link">
              <div className="nav-item3-div">
                <div className="nav-cartLogo">
                  <img src={cartLogo} alt="cartLogo" />
                  <div className="nav-cart-quantity">
                    <span>{sum > 0 ? "+" + sum : ""}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
