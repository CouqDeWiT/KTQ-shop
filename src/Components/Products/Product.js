import React from "react";
import "../Products/Product.css";
import { useStateValue } from "../../StateProvider";
import { PayPalButton } from "react-paypal-button-v2";
import { Link } from "react-router-dom";
const Product =({ id, title, image, price,discount, rating,specification,detail }) =>{
    const [{ basket }, dispatch] = useStateValue()
    const addToBasket = () => {
        // dispatch the item into the data layer
            dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
            });
            alert("Added successfully")
    };
    return(
    <div class="col-md-3 m-wthree"  style={{marginTop:'20px',backgroundColor:''}}>
        <div className="col-m">        
            <img src={image} alt="" style={{width:'100%', height:'100%'}}/>   
            <div className="mid-1">
            <Link to={`/product/${id}`}><div className="women">            
                    <p>{title}</p>
                </div></Link>
                <div className="mid-2">
                    <p ><em className="item_price">${price}</em></p>
                        <div className="block">
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
            <button className="btn btn-danger my-cart-btn my-cart-b" onClick={addToBasket}>Add to Basket</button>

        </div>
    </div>
    )
}
export default Product