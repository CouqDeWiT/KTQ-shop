import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
const Footer = () => {
  return (
    <>
      <div className="footer" style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="col-md-3 footer-grid">
            <h3>About Us</h3>
            <a
              href="https://www.facebook.com/trankhoa269"
              className=" face"
            >
              <p>Trần Đoàn Đăng Khoa</p>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100057321264321"
              className=" face"
            >
              <p>Võ Phúc Thiện</p>
            </a>
            <a
              href="https://www.facebook.com/nthn1907"
              className=" face"
            >
              <p>Trương Nguyễn Phúc</p>
            </a>

            <a
              href="https://www.facebook.com/qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqp"
              className=" face"
            >
              <p>Nguyễn Lê Anh Quốc</p>
            </a>
          </div>
          <div className="col-md-3 footer-grid ">
            <h3>Menu</h3>
            <ul>
              <li className="">
                <a className=" ">
                  <Link to="/">
                    <span>Home</span>
                  </Link>
                </a>
              </li>
              <li className=" ">
                <a className=" ">
                  <Link to="/products">
                    <span>Products</span>
                  </Link>
                </a>
              </li>
              <li className="">
                <a className=" ">
                  <Link to="/about">
                    <span>About</span>
                  </Link>
                </a>
              </li>
              <li className="">
                <a className=" ">
                  <Link to="/contact">
                    <span>Contact</span>
                  </Link>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-grid ">
            <h3>Customer Services</h3>
            <ul>
              <li>
                <a href="shipping.html">Shipping</a>
              </li>
              <li>
                <a href="terms.html">Terms & Conditions</a>
              </li>
              <li>
                <a href="faqs.html">Faqs</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <a href="offer.html">Online Shopping</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-grid">
            <h3>My Account</h3>
            <ul>
              <li>
                <a href="login">Login</a>
              </li>
              <li>
                <a href="register">Register</a>
              </li>
              <li>
                <a href="forgot">Forgot</a>
              </li>
            </ul>
          </div>
          <div className="clearfix"></div>
          <div className="footer-bottom">
            <h2>
              <a href="index.html">
                <b>
                  T<br></br>H<br></br>E<br></br>
                </b>
                KTQ<span>The Best OnlineShoes</span>
              </a>
            </h2>
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
            <div className=" address">
              <div className="col-md-4 fo-grid1">
                <p>
                  <i className="fa fa-home" aria-hidden="true"></i>280 An Dương
                  Vương
                </p>
              </div>
              <div className="col-md-4 fo-grid1">
                <p>
                  <i className="fa fa-phone" aria-hidden="true"></i>+84902687911
                </p>
              </div>
              <div className="col-md-4 fo-grid1">
                <p>
                  <a href="mailto:info@example.com">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    testtran123@gmail.com
                  </a>
                </p>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="copy-right">
            <p> &copy; 2016 Big store. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
