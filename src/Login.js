import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
    toast.configure();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const successLogin = () => toast.success("Login successfully");
    const successRegister = () => toast.success("Register successfully");
    const info = () => toast.info("Hello Amin");
    const fail = () => toast.error("Please check again!");
    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                if(auth.user.email=="testtran12@gmail.com"){
                history.push('/admin')
                }else{
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
                successRegister()
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login' >
            <Link to='/'>
            <div className="logo" style={{textAlign: 'center'}}>
                <h1 ><a href="" >
                    <b>T<br></br>H<br></br>E<br></br></b>
                    KTQ
                    <span>The Best OnlineShoes</span></a>
                </h1>
            </div>
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton' style={{}}>Sign In</button>
                </form>

                <p>
                    Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice before signing up.
                </p>
                <Link to="/register">
                <button onClick={register} className='login__registerButton'>Create your Account</button>
                </Link>
            </div>
        </div>
    )
}

export default Login
