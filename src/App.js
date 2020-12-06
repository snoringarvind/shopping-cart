import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import Nav from "./components/Nav/Nav";
import Pay from "./components/Pay/Pay";
import { CartProvider } from "./components/CartContext";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import React from "react";

const App = () => {
  console.log(window.location);
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={ItemDetails} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/cart/checkout" exact component={Pay} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
