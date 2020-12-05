import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const ItemDetails = ({ location }) => {
  const { cartValue } = useContext(CartContext);
  const [cart, setCart] = cartValue;

  return (
    <div className="ItemDetails">
      <div className="item-img">
        <img src={location.state} alt={location.state}></img>
      </div>
      <div>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
