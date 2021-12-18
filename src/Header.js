import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Menu from "./Menu";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
  <div  >
    <div className="header">
        <div className="container">
          <div className="logo">
          <h1 ><a href="/">
              <b>T<br></br>H<br></br>E<br></br></b>
              KTQ
              <span>The Best OnlineShoes</span></a>
          </h1>
          </div>
          <div className="head-t">
              <ul className="card">
                  <li><a href="wishlist.html" ><i className="fa fa-heart" aria-hidden="true" ></i>Wishlist</a></li>
                  <Link to={!user && '/login'}>
                  <li onClick={handleAuthenticaton}><a href="" ><i className="fa fa-user" aria-hidden="true" ></i>{user ? 'Sign Out' : 'Sign In'}</a>
                  </li></Link>
                  <li><a href="about.html" ><i className="fa fa-file-text-o" aria-hidden="true" ></i>Order History</a></li>
                  <li><a href="shipping.html" ><i className="fa fa-ship" aria-hidden="true" ></i>Shipping</a></li>
              </ul>
          </div>
          <div className="header-ri">
          <ul className="social-fo">
              <li>
                <a href="https://fb.com" className=" face">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className=" twi">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" className=" dri">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
        </div>
        <Menu />
      </div>
    </div>
  </div >
  );
}

export default Header;
