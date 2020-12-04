import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import Pay from "./components/Pay";
import { CartProvider } from "./components/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/cart/checkout" exact component={Pay} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
