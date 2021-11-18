import { useContext, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import UserContext from '../UserContext';

export default function Logout(){
    const { unsetUser, setUser } = useContext(UserContext);
    
    unsetUser();

    useEffect(() => {
        //Set the user state to its original value
        setUser({id: null});
    })

    //Redirect back to login
    return(
        <Redirect to="./login" />
    )
}