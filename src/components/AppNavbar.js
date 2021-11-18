import { Fragment, useContext } from 'react';
//Import necessary components from react-bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext';

//AppNavbar component
export default function AppNavbar(){
    //State to store the user information stored in the login page
    // const [user, setUser] = useState(localStorage.getItem("email"));
    // console.log(user);

    const {user} = useContext(UserContext);

    return(
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">PieZada</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ml-auto">
                    <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/courses" exact>Courses</Nav.Link>
                    (user.id !== null) ? 
                        <Nav.Link as={NavLink} to="/logout" exact>Logout</Nav.Link>
                        :
                        <Fragment>
                            <Nav.Link as={NavLink} to="/login" exact>Login</Nav.Link>
                            <Nav.Link as={NavLink} to="/register" exact>Register</Nav.Link>
                        </Fragment>                    
                </Nav>
            </Navbar.Collapse>      
        </Navbar>
    )
}
/*
- The "as" prop allows components to be treated as if they are a different component gaining access to it's properties and functionalities.
- The "to" prop is used in place of the "href" prop for providing the URL for the page.
- The "exact" prop is used to highlight the active NavLink component that matches the URL.
*/
