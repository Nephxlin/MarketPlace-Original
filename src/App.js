import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/styles/global.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ModalCart from "./components/ModalCart";

import Shoes from "./pages/Shoes";
import ProductPreview from "./pages/ProductPreview";

import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./components/Login";
import Payment from "./Payment";
import Orders from "./Orders";

import { auth } from "./firebase";
import { useStateValue } from "./provider/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HTj2eE4T67ek4evbTiPQ3zSXs43TsdhzvjngWh1P5Hi4uO9mGAAUu6j8is7ChrO034RXGecizcTdQvQb5cIYfuf00LsvymIeb"
);

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  const [modalCart, setModalCart] = useState("modal-cart-content-disable");

  //Open / Close Modal
  const [modal, setModal] = useState("modal-add-card-disable");

  function handleModal(props) {
    setModal(props);
  }

  function handleModalCart(props) {
    setModalCart(props);
    setModal("modal-add-card-disable");
  }

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Orders">
            <Header openModalCart={handleModalCart} />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header openModalCart={handleModalCart} />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/shoes">
            <Header openModalCart={handleModalCart} />
            <Shoes />
          </Route>

          <Route path="/preview">
            <Header openModalCart={handleModalCart} />
            <ProductPreview />
          </Route>

          <Route path="/">
            <Header openModalCart={handleModalCart} />
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />

      <ModalCart modalStatus={modalCart} openModalCart={handleModalCart} />
    </Router>
  );
}

export default App;
