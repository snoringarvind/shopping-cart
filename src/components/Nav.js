import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartLogo from "../cartLogo3.png";
import { CartContext } from "./CartContext";

const Nav = () => {
  const { cartValue } = useContext(CartContext);
  const [cart] = cartValue;
  let sum = 0;
  cart.forEach((item, index) => {
    sum = sum + Number(item.quantity);
  });
  return (
    <div className="Nav">
      <ul className="nav-links">
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to="/shop" className="link">
          <li>Shop</li>
        </Link>
        <Link to="/cart" className="link">
          <li>
            <div className="cartLogo-div">
              <img src={cartLogo} alt="cartLogo" id="cartLogo" />
              <div className="cart-quantity">{sum > 0 ? "+" + sum : ""}</div>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
