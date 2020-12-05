import React from "react";

const CartItem = ({ item, cart, setCart }) => {
  const amount = item.quantity * item.price;

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

  const setQuantityHandler = (e) => {};

  return (
    <tr>
      <td>{item.label}</td>
      <td>{item.price}</td>
      <td className="setQuantity">
        {item.quantity}
        <form>
          <select id="quantity" name="quantity" onChange={setQuantityHandler}>
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
        className="delete"
        onClick={deleteItemHandler}
        style={{ cursor: "pointer", color: "red" }}
      >
        X
      </td>
    </tr>
  );
};

export default CartItem;
