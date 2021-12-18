import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="background">
      <div className="login">
        <Link to="/">
          <div className="logo" style={{ textAlign: "center" }}>
            <h1>
              <a href="">
                <b>
                  T<br></br>H<br></br>E<br></br>
                </b>
                KTQ
                <span>The Best OnlineShoes</span>
              </a>
            </h1>
          </div>
        </Link>

        <div className="login__container">
          <h1>Register</h1>

          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Pasword</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              onClick={register}
              className="login__signInButton"
            >
              Register
            </button>
          </form>
          <p>
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice before register.
          </p>

          <div>
            <Link to="/login">
              <br />
              <p>
                Do you already have an account.
                <p1 class="text"> Sign In</p1>
              </p>
            </Link>
            <Link to="/forgot">
              <p class="text">Forgot your password?</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
