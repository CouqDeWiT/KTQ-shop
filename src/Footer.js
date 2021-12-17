import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import React from 'react';
const Footer=() =>{
    return(
<>
<div className="footer" style={{marginTop:'100px'}}>
	<div className="container">
		<div className="col-md-3 footer-grid">
			<h3>About Us</h3>
			<p>Nam libero tempore, cum soluta nobis est eligendi 
				optio cumque nihil impedit quo minus id quod maxime 
				placeat facere possimus.</p>
		</div>
		<div className="col-md-3 footer-grid ">
			<h3>Menu</h3>
			<ul>
			<li className=""><a className=" "><Link to="/" ><span>Home</span></Link></a></li>              
			<li className=" "><a  className=" "><Link to="/products" ><span>Products</span></Link></a></li>                        
			<li className=""><a className=" "><Link to="/about" ><span>About</span></Link></a></li>              
			<li className=""><a  className=" "><Link to="/contact" ><span>Contact</span></Link></a></li>    
			</ul>
		</div>
		<div className="col-md-3 footer-grid ">
			<h3>Customer Services</h3>
			<ul>
				<li><a href="shipping.html">Shipping</a></li>
				<li><a href="terms.html">Terms & Conditions</a></li>
				<li><a href="faqs.html">Faqs</a></li>
				<li><a href="contact.html">Contact</a></li>
				<li><a href="offer.html">Online Shopping</a></li>						 	 
			</ul>
		</div>
		<div className="col-md-3 footer-grid">
			<h3>My Account</h3>
			<ul>
				<li><a href="login.html">Login</a></li>
				<li><a href="register.html">Register</a></li>
				<li><a href="wishlist.html">Wishlist</a></li>
				
			</ul>
		</div>
		<div className="clearfix"></div>
			<div className="footer-bottom">
				<h2 ><a href="index.html"><b>T<br></br>H<br></br>E<br></br></b>
                    KTQ<span>The Best OnlineShoes</span></a></h2>
				<ul className="social-fo">
					<li><a href="#" className=" face"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
					<li><a href="#" className=" twi"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
					<li><a href="#" className=" pin"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
					<li><a href="#" className=" dri"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
				</ul>
				<div className=" address">
					<div className="col-md-4 fo-grid1">
							<p><i className="fa fa-home" aria-hidden="true"></i>280 An Dương Vương</p>
					</div>
					<div className="col-md-4 fo-grid1">
							<p><i className="fa fa-phone" aria-hidden="true"></i>+84902687911</p>	
					</div>
					<div className="col-md-4 fo-grid1">
						<p><a href="mailto:info@example.com"><i className="fa fa-envelope-o" aria-hidden="true"></i>testtran123@gmail.com</a></p>
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
    )
}
export default Footer;