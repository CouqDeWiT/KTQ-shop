import React from "react";
import { useStateValue } from "../../StateProvider";
import  { useEffect } from "react";
import { auth } from "../../firebase";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
import { useState } from 'react';
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

    const [info , setInfo] = useState([]);

    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
    });

    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        db.collection("comment").get().then((querySnapshot) => {
            
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr , data]);
                
            });
        })
    }
    const Frame = ({comment , name , phone}) => {
        console.log(comment + " " + name + " " + phone);
        return (
            <center>
        <div className="div">
                        
        <p>Name : {name}</p>
        
                        
        <p>Phone : {phone}</p>
        
                        
        <p>Comment : {comment}</p>
        
                    </div>
                </center>
            );
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
        <div>
            <center>
            <h2>Student Details</h2>
            </center>     
        {
            info.map((data) => (
            <Frame course={data.CourseEnrolled} 
                    name={data.Nane} 
                    phone={data.Phone}
                    comment={data.Comment}
                    />
            ))
        }
        </div>
    </div>
    )
}
export default Admin;