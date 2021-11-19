import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Login(){
    // State hooks to store the values of the input fields
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    //State to determine whether the submit button is enabled or not
    const [isActive, setIsActive] = useState(false);

   console.log(email);
   console.log(password1);

   //Function to simulate user login
   function loginUser(e){
       e.preventDefault();
       
       setEmail('');
       setPassword1('');

       alert('You are now logged in.')
   }

   useEffect(() => {
        //Validate to enable submit button when all fields are populated and both passwords match
        if((email !== '' && password1 !== ''))
        {
            setIsActive(true);
        }
        else{
            setIsActive(false);
        } 
   }, [email, password1])

    return(
        <Form onSubmit={(e) => loginUser(e)}>
            <h1>Login</h1>
            {/* Bind the input states via 2-way binding */}
            <Form.Group controlId="userEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange = { e => setEmail(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="password1" className="pb-2">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    value={password1}
                    onChange={ e => setPassword1(e.target.value)} 
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
