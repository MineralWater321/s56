import { Redirect } from "react-router-dom";

export default function Logout(){
    localStorage.clear();

    //Redirect back to login
    return(
        <Redirect to="./login" />
    )
}
