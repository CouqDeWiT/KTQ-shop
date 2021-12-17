import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import React from "react";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
const Menu =() =>{
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
        } 
    return (
        <>
        <div className="nav-top" style={{width: 'auto',margin:'auto'}}>
        <div className="navbar-header nav_2">
					
            <div class="navbar-header nav_2">
                <button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar" style={{backgroundColor:"black"} }></span>
                    <span class="icon-bar" style={{backgroundColor:"black"} }></span>
                    <span class="icon-bar" style={{backgroundColor:"black"} }></span>
                </button>
            </div> 
            </div>
            <nav className="navbar navbar-default" style={{margin:'auto'}}>
                <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                    <ul className="nav navbar-nav ">
                        <li className="" ><a className="hyper "><Link to="/" ><span >Home</span></Link></a></li>              
                        <li className=""><a  className="hyper" ><Link to="/products" ><span >Products</span></Link> </a>                                 
                        </li>                   
                        <li className=""><a className="hyper "><Link to="/about" ><span >About</span></Link></a></li>              
                        <li className=""><a  className="hyper "><Link to="/contact" ><span >Contact</span></Link></a></li>              
                    </ul>
                </div>
            </nav>
			<div className="clearFix"></div>
            <div class="cart" style={{display:'flex',width: "250px"}} >
                <li className="header__option" >
                    <strong className="header__optionLineOne" style={{fontSize: "13px"}}>Hello, {!user ? 'Guest' : user.email}</strong>
                </li>
                <div className="info-cart" style={{display: 'flex'}}>
                    <div className="cart-icon">
                    <Link to="/checkout">
                    <span class="fa fa-shopping-cart my-cart-icon"><span class="badge badge-notify my-cart-badge">{basket?.length}</span></span>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Menu;