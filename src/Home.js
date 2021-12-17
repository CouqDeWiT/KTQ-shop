import React,{useState} from "react";
import Footer from "./Footer";
import "./Home.css";
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Powerrslap from "../src/video/video.mp4";
import {products} from "./data";
import Product from "./Components/Products/Product"
function Home() {
  // exclude column list from filter
  const[searchTerm, setSearchTerm] = useState('')
  //


  return (
  <div>
    <div className="home_container">
    <video autoPlay loop muted style={{width:"100%",margin:'auto'}}>
          <source src={Powerrslap} type="video/mp4" />
        </video>
      <div class="container" >
        <div class="banner-info" style={{color:"black"}}>
          <h3  style={{color:'black'}}>It is a long established fact that a reader will be distracted by 
          the readable </h3>	
          <div class="search-form">
              <input  style={{border: "1px solid black",color: "black"}} type="text" 
                onChange={(e) =>{setSearchTerm(e.target.value)}}
              />
              <input type="submit" value=" " />
          </div>		
        </div>	
      </div>
    </div>

    <div className="content-top ">
      <div className="container">
          <div className="spec ">
              <h3>Special Offers</h3>
              <div className="ser-t">
                  <b></b>
                  <span><i></i></span>
                  <b className="line"></b>
              </div>
          </div>
          <div className="products">
          {products.filter((val)=>{
                if(searchTerm == ""){
                  return val
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
                }
              }).slice(0,4).map((val,key) =>{
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
        <div className="content-mid">
        <div className="container">
            
            <div className="col-md-4 m-w3ls">
                <div className="col-md1 ">
                    <Link to="/products" ><a href="">
                        <img src="./assets/images/img11.jpg" className="img-responsive img" alt="" />
                    </a></Link>
                </div>
            </div>
            <div className="col-md-4 m-w3ls1">
                <div className="col-md ">
                <Link to="/products" ><a href="">
                        <img src="./assets/images/img12.jpg" className="img-responsive img" alt="" />
                        <div className="big-sale">
                        </div>
                    </a></Link>
                </div>
            </div>
            <div className="col-md-4 m-w3ls">
                <div className="col-md2 ">
                <Link to="/products" ><a href="">
                        <img src="./assets/images/img13.jpg" className="img-responsive img1" alt="" />
                    </a></Link>
                </div>
                <div className="col-md3 ">
                <Link to="/products" ><a href="">
                        <img src="./assets/images/img14.jpg" className="img-responsive img1" alt="" />
                    </a></Link>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    </div>

      <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
              <div className="item active">
              <a href="kitchen.html"> <img className="first-slide" src="./assets/images/img7.jpg" alt="First slide" /></a>
          
              </div>
              <div className="item">
              <a href="care.html"> <img className="second-slide " src="./assets/images/img6.jpg" alt="Second slide" /></a>
              
              </div>
              <div className="item">
              <a href="hold.html"><img className="third-slide " src="./assets/images/img8.jpg" alt="Third slide" /></a>
              
              </div>
              <div className="clearFix"></div>
          </div>
          <div className="clearFix"></div>
      </div>
      <Footer />
  </div>
  );
}

export default Home;
