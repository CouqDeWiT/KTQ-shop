import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();
    const successremove = () => toast.success("Remove successfully");

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
        successremove();
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />
        
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove </button>
                )}
                <ToastContainer />
            </div>
        </div>
    )
}

export default CheckoutProduct
