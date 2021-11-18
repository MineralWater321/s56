import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';

export default function Register(){
    // State hooks to store the values of the input fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setmobileNo] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    //State to determine if a registration has been made
    const [register, setRegister] = useState(false);
    const {user} = useContext(UserContext);
    //State to determine whether the submit button is enabled or not
    const [isActive, setIsActive] = useState(false);

   console.log(email);
   console.log(password1);
   console.log(password2);
   console.log(mobileNo.length);
   console.log(register);
   //Function to simulate user registration
   function registerUser(e){
       e.preventDefault();
       //fetch for checking for duplicate email
       fetch('http://localhost:3000/users/checkEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email
                })
            })
            .then(res => res.json())
            .then(confirm => {
                console.log(confirm)
                if(confirm === true){
                    Swal.fire({
                        title:'Duplicate email found',
                        icon: 'error',
                        text: 'Please provide a different email.'
                    })
                }
                else{
                    //fetch for Registration
                    fetch('http://localhost:3000/users/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            mobileNo: mobileNo,
                            password: password1
                        })
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        //If no user information is found, the "access" property will not be available and will return udefined
                        if(data === true){
                            //The token will be used to retrieve user information across the whole frontend application and storing it in the localStorage to allow ease of access to the user's information
                            
                            Swal.fire({
                                title: 'Registration Successful',
                                icon: "success", 
                                text: 'Welcome to Zuitt!'
                            })                          
                            
                            setRegister( true );
                        }
                        else{
                            Swal.fire({
                                title:'Registration failed',
                                icon: 'error',
                                text: 'Check your login details and try again.'
                            })
                        }
                    })
                }
            })
       
       setEmail('');
       setPassword1('');
       setPassword2('');   
   }

   useEffect(() => {
        //Validate to enable submit button when all fields are populated and both passwords match
        if((email !== '' && password1 !== '' && password2 !== '' && firstName !== '' && lastName !== '' && mobileNo.length > 10) && (password1 === password2))
        {
            setIsActive(true);
        }
        else{
            setIsActive(false);
        } 
   }, [email, password1, password2, firstName, lastName, mobileNo])

    return(
        (user.id !== null) ?
            <Redirect to="/courses" />
            :
            (register === true) ?
            <Redirect to="/login" />
            :
            <Form onSubmit={(e) => registerUser(e)}>
                {/* Bind the input states via 2-way binding */}
                <h1>Register</h1>
                <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter first name" 
                        value={firstName}
                        onChange = { e => setFirstName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter last name" 
                        value={lastName}
                        onChange = { e => setLastName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="userEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange = { e => setEmail(e.target.value)}
                        required
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="mobileNo">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter Mobile Number" 
                        value={mobileNo}
                        onChange = { e => setmobileNo(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="password1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        value={password1}
                        onChange={ e => setPassword1(e.target.value)} 
                        required
                    />
                </Form.Group>
                <Form.Group controlId="password2">
                    <Form.Label>Verify Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Verify Password" 
                        value={password2}
                        onChange={ e => setPassword2(e.target.value)}
                        required
                    />
                </Form.Group>
                {/* Conditionally render the submit button based on the isActive state */}
                { isActive ? 
                    <Button variant="primary" type="submit" id="submitBtn">
                        Submit
                    </Button>
                    :
                    <Button variant="danger" type="submit" id="submitBtn" disabled>
                        Submit
                    </Button>
                }
                
            </Form>
    )
}