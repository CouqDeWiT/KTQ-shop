import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from './axios';
import { db } from "./firebase";
import { Input } from '@material-ui/icons';
import Product from './Components/Products/Product';
import { useParams } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
function Payment({ id, title, image, price,discount, rating,specification,detail }) {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    toast.configure();

    const stripe = useStripe();
    const elements = useElements();

    return (
    <>
        <div>
        </div>
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>
                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <input type='text' />
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                        <div className="payment__details">
                            {/* Stripe magic will go */}

                            <form  >
                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                </div>
                            </form>
                            <StripeCheckout
                                stripeKey="pk_test_51K7kqoIcuazq9BbEsK1ki5mmKR4YCbsDeJjwG3lNPMXqNoXJSAWuX6qGd3EPpGUH1s4kOHItMuLpWdVTBddILWM600SdZwq7hl"
                                token
                                billingAddress
                                shippingAddress
                                name="All products"
                                amount={getBasketTotal(basket)*100}

                            />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Payment
