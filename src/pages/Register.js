import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'

export default function Register(){
    // State hooks to store the values of the input fields
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    //State to determine whether the submit button is enabled or not
    const [isActive, setIsActive] = useState(false);
    //State to determine if a registration has been made
    const [register, setRegister] = useState(false);

   console.log(email);
   console.log(password1);
   console.log(password2);

   //Function to simulate user registration
   function registerUser(e){
       e.preventDefault();
       
       setEmail('');
       setPassword1('');
       setPassword2('');

       alert('Thank you for registering!')
       setRegister( true );
   }

   useEffect(() => {
        //Validate to enable submit button when all fields are populated and both passwords match
        if((email !== '' && password1 !== '' && password2 !== '') && (password1 === password2))
        {
            setIsActive(true);
        }
        else{
            setIsActive(false);
        } 
   }, [email, password1, password2])

    return(
        (register === true) ?
            <Redirect to="/login" />
            :
            <Form onSubmit={(e) => registerUser(e)}>
                {/* Bind the input states via 2-way binding */}
                <h1>Register</h1>
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
                    <Button variant="warning" type="submit" id="submitBtn" disabled>
                        Submit
                    </Button>
                }
                
            </Form>
    )
}
