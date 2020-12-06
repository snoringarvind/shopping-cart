import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartLogo from "../cartLogo3.png";
import { CartContext } from "./CartContext";
import SearchBar from "./SearchBar";

const Nav = () => {
  const { cartValue } = useContext(CartContext);
  const [cart] = cartValue;
  let sum = 0;
  cart.forEach((item, index) => {
    sum = sum + Number(item.quantity);
  });
  return (
    <div className="Nav">
      <div className="nav-links">
        <div className="item1">
          <Link to="/shoppingapp/" className="link">
            <div>Home</div>
          </Link>
        </div>
        <div className="item2">
          <Link to="/shoppingapp/shop" className="link">
            <div>Shop</div>
          </Link>
        </div>
        <SearchBar />
        <div className="item3">
          <Link to="/shoppingapp/cart" className="link">
            <div>
              <div className="cartLogo-div">
                <img src={cartLogo} alt="cartLogo" id="cartLogo" />
                <div className="cart-quantity">{sum > 0 ? "+" + sum : ""}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
