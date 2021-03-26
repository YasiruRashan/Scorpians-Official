import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { firebaseAuth } from "../firebase" 

const Authenticated = (props) => {
    const [loggedIn, setloggedIn] = useState(null);
    firebaseAuth.onAuthStateChanged(user=>{
        if (user){
            setuser(true)
        }else{
            setuser(false)
        }
    });

    if(props.nonAuthenticated){
        if (loggedIn==null){
            return "Loading....";
        }else if (!loggedIn){
            return props.childern;
        }else if (loggedIn){
            return <Redirect to="/"/>;
        }
    }else{

        if (loggedIn==null){
            return "Loading....";
        }else if (loggedIn){
            return props.childern;
        }else if (!loggedIn){
            return <Redirect to="/login"/>;
        }
    }
};

export default Authenticated
