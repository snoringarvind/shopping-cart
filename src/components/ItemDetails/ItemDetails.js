import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./ItemDetails.css";
const ItemDetails = ({ location }) => {
  const { cartValue, dataValue } = useContext(CartContext);
  const [cart, setCart] = cartValue;
  const [data] = dataValue;

  // console.log(viewItem);
  let card = "";
  data.forEach((val, index) => {
    if (val.src === location.state) {
      // console.log(val.src, location.state);
      card = data[index];
      // console.log(card);
    }
  });
  console.log(card);

  const addCartHandler = () => {
    const duplicate = cart.some((item, i) => {
      if (item.label === card.label) {
        let newArr = [...cart];
        newArr[i].quantity = Number(newArr[i].quantity) + 1;
        setCart(newArr);
      }
      return item.label === card.label;
    });

    if (!duplicate) {
      const cartItems = { ...card, quantity: 1 };
      setCart((prev) => [...prev, cartItems]);
    }
  };

  return (
    <div className="ItemDetails">
      <div className="item-details-img">
        <img src={location.state} alt={location.state}></img>
      </div>
      <div className="item-details-description">
        <div>
          <p>
            Description:-
            <br /> {card.label}
          </p>
          <p>
            Price:-
            <br /> Rs. {card.price}
          </p>
          <p className="item-details-description-button">
            <button type="button" onClick={addCartHandler}>
              Add to cart
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
