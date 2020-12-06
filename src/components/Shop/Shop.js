import React, { useContext } from "react";
import Card from "./Card";
import uniqid from "uniqid";
import { CartContext } from "../CartContext";
import "./Shop.css";

const Shop = () => {
  // console.log(rf.kibmkaqf);
  const { cartValue, dataValue, filterTextValue } = useContext(CartContext);
  const [cart, setCart] = cartValue;
  const [data] = dataValue;
  const [filterText] = filterTextValue;

  const Mapping = (card) => {
    let text = filterText;
    text = text.toLowerCase();

    let label = card.label;
    label = label.toLowerCase();
    console.log(label.indexOf(text));
    if (label.indexOf(text) === -1) {
      return;
    } else {
      return <Card card={card} key={uniqid()} cart={cart} setCart={setCart} />;
    }
  };

  return <div className="Shop">{data.map((card) => Mapping(card))}</div>;
};

export default Shop;

// const data= () => {
//   return [
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./ankleLengthSkinFitJeans.jpg"],
//         label: "Ankle Length Skin Fit Jeans",
//         price: 1200,
//       },
//     },
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./casualPants.jpg"],
//         label: " Casual Pants",
//         price: 1500,
//       },
//     },
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./casualTop.jpg"],
//         label: "Casual Top",
//         price: 800,
//       },
//     },
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./cropTurtleNeckTshirt.jpg"],
//         label: " Turtle Neck Crop T-shirt",
//         price: 750,
//       },
//     },
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./denimShirt.jpg"],
//         label: "Denim Shirt",
//         price: 1300,
//       },
//     },
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./floralDress.jpg"],
//         label: "Floral Printed Dress",
//         price: 1900,
//       },
//     },
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./floralTop.jpg"],
//         label: "Floral Top",
//         price: 700,
//       },
//     },
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./fullLengthScarf.jpg"],
//         label: "Full Length Woolen Scarf",
//         price: 2499,
//       },
//     },
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./jumpSuit.jpg"],
//         label: "Denim Jump Suit",
//         price: 2999,
//       },
//     },
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./overCoat.jpg"],
//         label: "Over Coat",
//         price: 2599,
//       },
//     },
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./overSizedSweater.jpg"],
//         label: " Over Sized Sweater",
//         price: 899,
//       },
//     },
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./regularFitJeans.jpg"],
//         label: "Women Regular Fit Jeans",
//         price: 1999,
//       },
//     },
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./solidHoodie.jpg"],
//         label: "Solid Hoodie",
//         price: 800,
//       },
//     },
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./solidVneckLongSleevTshirt.jpg"],
//         label: "Solid V-neck Long Sleeve T-shirt",
//         price: 1800,
//       },
//     },
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./stripedTshirt.jpg"],
//         label: "Striped T-shirt",
//         price: 399,
//       },
//     },
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./sweatShirt.jpg"],
//         label: "Sweat Shirt",
//         price: 1300,
//       },
//     },
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./tankTop.jpg"],
//         label: "Tank Top",
//         price: 900,
//       },
//     },
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./vNeckTop.jpg"],
//         label: "V-neck Top",
//         price: 699,
//       },
//     },
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./yellowSweatShirt.jpg"],
//         label: "Yellow Sweat Shirt",
//         price: 700,
//       },
//     },
//     {
//       id: uniqid(),
//       data: {
//         src: cache["./yellowTankTop.jpg"],
//         label: "Solid Tank Top",
//         price: 299,
//       },
//     },
//   ];
// };

// const file = data();
