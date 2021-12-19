import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth.user.email == "nquocn2402@gmail.com") {
          alert("hello admin");
          history.push("/admin");
        } else {
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
          <h1>Sign-in</h1>

          <form>
            <h5>E-mail</h5>
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

            <button
              type="submit"
              onClick={signIn}
              className="login__signInButton"
              style={{}}
            >
              Sign In
            </button>
          </form>

          <Link to="/register">
              <br/>
              <p>
                Do not have an account?
                <p1 class="text"> Register</p1>
              </p>
            </Link>

          <Link to="/forgot">
            <p class="text">Forgot your password?</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
