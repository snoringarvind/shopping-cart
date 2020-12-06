import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import CartItem from "./CartItem";
import uniqid from "uniqid";
import Checkout from "./Checkout";
import "./Cart.css";

const Cart = () => {
  const { cartValue } = useContext(CartContext);

  const [cart, setCart] = cartValue;

  return (
    <div className="Cart">
      <Checkout cart={cart} />
      <div className="CartItem">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <CartItem
                item={item}
                key={uniqid()}
                cart={cart}
                setCart={setCart}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
