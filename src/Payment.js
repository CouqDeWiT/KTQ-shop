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


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])
    const [name  , Setname] = useState("");
    const [title  , Settitle] = useState("");
    const [image , Setimage] = useState("");
    const [age , Setage] = useState("");
    const [value  , SetValue] = useState("");
    const [course , Setcourse] = useState("");
    const sub = (e) => {
            e.preventDefault();
            
            // Add data to the store
            db.collection("data").add({
                Nane: name,
                Age: age,
                Value: value,
                CourseEnrolled: course,
            
            })
            .then((docRef) => {
                alert("Data Successfully Submitted");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }
    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])



    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    const [state, setState] = useState(0);
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
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
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
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Payment
