import React from "react";
import "./CartItem.css";
import uniqid from "uniqid";

const CartItem = ({ item, cart, setCart }) => {
  const deleteItemHandler = () => {
    cart.forEach((val, index) => {
      if (val.label === item.label) {
        const a = cart.slice();
        const b = a.splice(index, 1);
        console.log(b);
        console.log(a);
        setCart(a);
        console.log(cart);
      }
    });
  };

  const xr = (e) => {
    // console.log(e.target.value);
    cart.forEach((val, i) => {
      if (item.label === val.label) {
        // console.log(item.label, val.label);
        console.log(e.target.value);
        const newArr = [...cart];
        newArr[i].quantity = e.target.value;
        setCart(newArr);
      }
    });
  };

  const yz = () => {
    let x = "";
    cart.forEach((val, i) => {
      if (item.label === val.label) {
        x = cart[i].quantity;
      }
    });
    console.log(x);
    return x;
  };

  const amount = item.quantity * item.price;

  return (
    <tr>
      <td>{item.label}</td>
      <td>{item.price}</td>
      <td className="cart-item-setQuantity">
        {item.quantity}
        <form>
          <select name="quantity" onChange={xr} value={yz()} key={uniqid()}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </form>
      </td>
      <td>{amount}</td>
      <td
        type="button"
        className="cart-item-delete-btn"
        onClick={deleteItemHandler}
      >
        X
      </td>
    </tr>
  );
};

export default CartItem;
