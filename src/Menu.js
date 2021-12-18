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
                        <li className="dropdown" ><a className="hyper "><Link to="/" ><span >Home</span></Link></a></li>              
                        <li className="dropdown"><a  className="hyper" data-toggle="dropdown" ><span >Products<b class="caret"></b></span></a>
                        <ul class="dropdown-menu multi">
									<div class="row">
										<div class="col-sm-3">
											<ul class="multi-column-dropdown">
												<Link to="/stansmith"><li><a href="kitchen.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Stan Smith</a></li></Link>
												<Link to="/superstar"><li><a href="kitchen.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Supser Star</a></li></Link>
												<Link to="/ultraboost"><li><a href="kitchen.html"> <i class="fa fa-angle-right" aria-hidden="true"></i>Ultraboost</a></li></Link>
												<Link to="/products"><li><a href="kitchen.html"><i class="fa fa-angle-right" aria-hidden="true"></i>All products</a></li></Link>
										
											</ul>
										
										</div>
										<div class="clearfix"></div>
									</div>	
								</ul>                                                        
                        </li>                   
                        <li className="dropdown"><a className="hyper "><Link to="/about" ><span >About</span></Link></a></li>              
                        <li className="dropdown"><a  className="hyper "><Link to="/contact" ><span >Contact</span></Link></a></li>              
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