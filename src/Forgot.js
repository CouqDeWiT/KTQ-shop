import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Forgot() {
  // const history = useNavigate ();
  const [email, setEmail] = useState("");

  const forgot = (e) => {
    e.preventDefault();

    auth
      .sendPasswordResetEmail(email)
      .then((auth) => {
          alert("Email has been sent to you. Please check and verify!");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div class="background">
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
          <h1>Forgot Password</h1>

          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              onClick={forgot}
              className="login__signInButton"
            >
              Submit
            </button>
          </form>

          <div>
            <Link to="/login">
              <br />
              <p>
                Do you already have an account.
                <p1 class="text"> Sign In</p1>
              </p>
            </Link>
            <Link to="/register">
              <p>
                Do not have an account?
                <p1 class="text"> Register</p1>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
