import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
function Product({ id, title, image, price,discount, rating }) {


  return (
  <>
	<div class="col-md-3 m-wthree"  style={{marginTop:'20px'}}>
  <Link to={`/product/${id}`}>
      <div className="col-m">
        <img src={image} alt="" style={{width:'100%', height:'100%'}}/>
            <div className="mid-1">
              <div className="women">
                    <h6><a href="single.html">{title}</a></h6>							
                </div>
                <div className="mid-2">
                    <p ><em className="item_price">${price}</em></p>
                        <div className="block">
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="add">
                    <button className="btn btn-danger my-cart-btn my-cart-b" 
                    >Add to Cart</button>
                </div>
            </div>
        </div>
        </Link>
    </div>
  </>
  );
}

export default Product;
