import { useEffect,useState } from "react";
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import React from 'react';
import DataProvider, { products } from "./data";
import Product from "./Components/Products/Product";
const Products=(props) =>{
    useEffect(() => {
        const unloadCallback = (event) => {
        event.preventDefault();
        event.returnValue = "";
        return "";
        };
    
        window.addEventListener("beforeunload", unloadCallback);
        return () => window.removeEventListener("beforeunload", unloadCallback);
    }, []);
    const[searchTerm, setSearchTerm] = useState('')
    return(
    <>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
            <div className="item active">
            <a href="kitchen.html"> <img className="first-slide" src="./assets/images/img9.jpg" alt="First slide" /></a>
        
            </div>
            <div className="item">
            <a href="care.html"> <img className="second-slide " src="./assets/images/img10.jpg" alt="Second slide" /></a>
            
            </div>
            <div className="item">
            <a href="hold.html"><img className="third-slide " src="./assets/images/img8.jpg" alt="Third slide" /></a>
            
            </div>
            <div className="clearFix"></div>
        </div>
        <div className="clearFix"></div>
    </div>
    <div className="clearfix"></div>
    <div className="content-top ">
        <div className="container ">
            <div className="spec ">
                <h3>Products</h3>
                <div className="ser-t">
                    <b></b>
                    <span><i></i></span>
                    <b className="line"></b>
                </div>
            </div>
            <div class="search-form">
                <input  style={{border: "1px solid black",color: "black"}} type="text" 
                    onChange={(e) =>{setSearchTerm(e.target.value)}} 
                />
                <input type="submit" value =" " />
            </div>	
            <div className="clearfix"></div>
            <div className="products">
            {products.filter((val)=>{
                    if(searchTerm == ""){
                    return val
                    }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                    }
                }).map((val,key) =>{
                    return(
                    <Product key={key}
                    key={val.id}
                    id={val.id}
                    title={val.title}
                    price={val.price}
                    rating={val.rating}
                    image={val.image}
                    specification={val.specification}
                    detail={val.detail}
                />
                    )
                })}
            </div>
        </div>
    </div>
    </>
        )
}
export default Products;