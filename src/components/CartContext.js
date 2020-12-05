import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  // const [quantity, setQuantity] = useState("3");

  // const setQuantityHandler = (e) => {
  //   console.log(e.target.value);
  //   setQuantity(e.target.value);
  // };

  return (
    <CartContext.Provider
      value={{
        cartValue: [cart, setCart],
        // quantityValue: [quantity, setQuantity],
        // setQuantityHandlerValue: setQuantityHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
