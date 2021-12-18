import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
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
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/product/:id">
            <Header />
            <SingleProduct />
            <Footer />
          </Route>
          <Route path="/products">
            <Header />
            <Products />
            <Footer />
          </Route>
          <Route path="/stansmith">
            <Header />
            <StanSmith />
            <Footer />
          </Route>
          <Route path="/superstar">
            <Header />
            <SuperStar />
            <Footer />
          </Route>
          <Route path="/ultraboost">
            <Header />
            <Ultraboost />
            <Footer />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login">
            <Header/>
            <Login />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
