import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState(file);
  const [filterText, setFilterText] = useState("");

  return (
    <CartContext.Provider
      value={{
        cartValue: [cart, setCart],
        dataValue: [data, setData],
        filterTextValue: [filterText, setFilterText],
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

const cache = {};

const importAll = (r) => {
  r.keys().forEach((key) => {
    cache[key] = r(key).default;
  });
};

importAll(require.context("../Images/woman", false, /\.jpg/));
const data = () => {
  return [
    {
      src: cache["./ankleLengthSkinFitJeans.jpg"],
      label: "Ankle Length Skin Fit Jeans",
      price: 1200,
    },
    {
      src: cache["./casualPants.jpg"],
      label: " Casual Pants",
      price: 1500,
    },
    {
      src: cache["./casualTop.jpg"],
      label: "Casual Top",
      price: 800,
    },
    {
      src: cache["./cropTurtleNeckTshirt.jpg"],
      label: " Turtle Neck Crop T-shirt",
      price: 750,
    },
    {
      src: cache["./denimShirt.jpg"],
      label: "Denim Shirt",
      price: 1300,
    },
    {
      src: cache["./floralTop.jpg"],
      label: "Floral Top",
      price: 700,
    },
    {
      src: cache["./fullLengthScarf.jpg"],
      label: "Full Length Woolen Scarf",
      price: 2499,
    },
    {
      src: cache["./jumpSuit.jpg"],
      label: "Denim Jump Suit",
      price: 2999,
    },
    {
      src: cache["./overCoat.jpg"],
      label: "Over Coat",
      price: 2599,
    },
    {
      src: cache["./overSizedSweater.jpg"],
      label: " Over Sized Sweater",
      price: 899,
    },
    {
      src: cache["./regularFitJeans.jpg"],
      label: "Women Regular Fit Jeans",
      price: 1999,
    },
    {
      src: cache["./solidHoodie.jpg"],
      label: "Solid Hoodie",
      price: 800,
    },
    {
      src: cache["./solidVneckLongSleevTshirt.jpg"],
      label: "Solid V-neck Long Sleeve T-shirt",
      price: 1800,
    },
    {
      src: cache["./stripedTshirt.jpg"],
      label: "Striped T-shirt",
      price: 399,
    },
    {
      src: cache["./sweatShirt.jpg"],
      label: "Sweat Shirt",
      price: 1300,
    },
    {
      src: cache["./tankTop.jpg"],
      label: "Tank Top",
      price: 900,
    },
    {
      src: cache["./vNeckTop.jpg"],
      label: "V-neck Top",
      price: 699,
    },
    {
      src: cache["./yellowSweatShirt.jpg"],
      label: "Yellow Sweat Shirt",
      price: 700,
    },
    {
      src: cache["./yellowTankTop.jpg"],
      label: "Solid Tank Top",
      price: 299,
    },
    {
      src: cache["./casualOfficeWear.jpg"],
      label: " Causal Office Wear",
      price: 1300,
    },
    {
      src: cache["./summerDress.jpg"],
      label: "Summer Dress",
      price: 1249,
    },

    {
      src: cache["./lightBlueDress.jpg"],
      label: "Light Blue Dress",
      price: 1399,
    },

    {
      src: cache["./lightPinkTop.jpg"],
      label: "Light Pink Top",
      price: 1799,
    },

    {
      src: cache["./overSizedShirt.jpg"],
      label: "Over Sized Shirt",
      price: 800,
    },
  ];
};

const file = data();
