import React from "react";
import { useStateValue } from "../../StateProvider";
import  { useEffect } from "react";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

const Admin =() =>{
        const [{ basket, user }, dispatch] = useStateValue();

        useEffect(() => {
        // will only run once when the app component loads...
    
        auth.onAuthStateChanged((authUser) => {    
            if (authUser) {
            // the user just logged in / the user was logged in
    
            dispatch({
                type: "SET_USER",
                user: authUser,
            });
            } else {
            // the user is logged out
            dispatch({
                type: "SET_USER",
                user: null,
            });
            }
        });
    }, []);
        const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
            
        }
        }
    return(
    <div>
    <div className="header__nav">
            <li className="header__option" onClick={handleAuthenticaton}>
                <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                <span   className="header__optionLineOne">{user ? 'Sign Out' : 'Sign In'}</span>
                <Link to="/"><button>Go back</button></Link>
            </li>
        </div>
    </div>
    )
}
export default Admin;