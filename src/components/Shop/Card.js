import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartLogo from "./cartLogo3.png";
import "./Card.css";

const Card = ({ card, cart, setCart }) => {
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
    <div className="Card">
      <div className="card-images">
        <Link
          to={{
            pathname: `/shoppingapp/shop${card.src}`,
            state: `${card.src}`,
          }}
        >
          <img src={card.src} alt={card.src} />
        </Link>
      </div>
      <div className="card-description">
        <div className="card-add-cart-button">
          <img src={cartLogo} alt="addCart" onClick={addCartHandler} />
        </div>
        <div className="card-label">{card.label}</div>
        <div className="card-price">Rs. {card.price}</div>
      </div>
    </div>
  );
};

export default Card;
