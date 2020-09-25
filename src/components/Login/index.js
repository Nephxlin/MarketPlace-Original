import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { auth } from "../../firebase";

import logo from "../../assets/images/logo.svg";

import { LoginPage } from "./styles";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <LoginPage>
      <Link to="/">
        <img className="login_logo" src={logo} alt="Original Logo" />
      </Link>

      <div className="login_container">
        <h1>Sing-in</h1>

        <form action="">
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={singIn} className="login_signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Original.io MarketPlace ('FAKE !')
          Conditions of Use & Sale, Please See our Privacy Notice, our Cookies
          Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login_registerButton">
          Create Your Original Account
        </button>
      </div>
    </LoginPage>
  );
}
