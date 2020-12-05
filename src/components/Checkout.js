import React from "react";
import { Link } from "react-router-dom";

const Checkout = ({ cart }) => {
  let totalItems = 0;
  let totalAmount = 0;
  cart.forEach((item, index) => {
    totalItems += Number(item.quantity);
    totalAmount += Number(item.quantity) * Number(item.price);
  });

  return (
    <div className="Checkout">
      <div className="checkout-div1">
        <div>
          <h2 className="checkout-header">Checkout</h2>
          <div className="checkout-table">
            <table>
              <thead>
                <tr>
                  <th>Items</th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{totalItems}</td>
                  <td>{totalAmount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="pay-btn">
        <Link to="/cart/checkout">
          <button type="button">Pay</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
