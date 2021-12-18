import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Register from "./Register";
import Forgot from "./Forgot";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Products from "./Products";
import Footer from "./Footer";
import SingleProduct from "./SingleProduct";
import Admin from "./Components/Admin/Admin";
import StanSmith from "./Components/Products/StanSmith";
import SuperStar from "./Components/Products/SuperStar";
import Ultraboost from "./Components/Products/Ultraboost"
const promise = loadStripe(
  "pk_test_51K7MqtLxgqhGphg2CgYlj2QpHRcJsgn4cN0w93dHhvfQ9x1cFmd6g3eGOiKncKvKStCu9NKVUStcZVzRx2A87crB00sWUB15Kc"
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/product/:id">
            <SingleProduct />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgot">
            <Forgot />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/stansmith">
            <StanSmith />
          </Route>
          <Route path="/superstar">
            <SuperStar />
          </Route>
          <Route path="/ultraboost">
            <Ultraboost />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
