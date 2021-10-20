import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Login = () => {
  // const [isLogin, setIsLogin] = useState(false);

  const { signInUsingGoogle, handleLogin, error, handleEmailChange, handlePasswordChange} = useAuth();
  const location = useLocation();
  console.log("came from", location.state?.from);

    return (
        <div className="p-5" id="login">
            <h2>Please Login</h2>

            <Form onSubmit={handleLogin}>
              
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required/>
                </Form.Group>

                <p>New User? Please <Link to="/registration"> Create an account </Link> </p>
                <div className="text-danger">{error}</div>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div>------------------------------</div>
            <p className="text-secondary">If you want to sign in with google, you can click the button below.</p>
            <Button onClick={signInUsingGoogle} variant="dark">Google SignIn</Button>
        </div>
         
       
    );
};

export default Login;