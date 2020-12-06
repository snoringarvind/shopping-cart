import React, { useContext, useEffect, useState } from "react";
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

  const [currentLocation, setCurrentLocation] = useState(
    window.location.pathname
  );

  const handleShopClick = () => {
    setCurrentLocation(window.location.pathname);
    console.log(currentLocation);
    // console.log(window.location);
  };
  return (
    <div className="Nav">
      <div>
        <div className="nav-links">
          <div className="nav-item1" onClick={handleShopClick}>
            <Link to="/shoppingapp/" className="nav-Link">
              <div>Home</div>
            </Link>
          </div>
          <div className="nav-item2" onClick={handleShopClick}>
            <Link to="/shoppingapp/shop" className="nav-Link">
              <div>Shop</div>
            </Link>
          </div>
          {currentLocation === "/shoppingapp/shop" ? <SearchBar /> : ""}
          <div className="nav-item3" onClick={handleShopClick}>
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
