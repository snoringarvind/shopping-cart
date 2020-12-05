import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const [dropDownQuantity, setDropDownQuantity] = useState("");

  // const [quantity, setQuantity] = useState(1);
  // console.log(cart);

  return (
    <CartContext.Provider value={{ cartValue: [cart, setCart] }}>
      {props.children}
    </CartContext.Provider>
  );
};
