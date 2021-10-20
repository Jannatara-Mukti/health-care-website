import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Registration = () => {

    const { handleRegistration, handleEmailChange, handlePasswordChange, handleNameChange, error } = useAuth();

    return (
        <div className="m-5 p-5" id="register">
            <Form onSubmit={handleRegistration}>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Name
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control onBlur={handleNameChange} type="name" placeholder="Name" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                    </Col>
                </Form.Group>

                <div className="text-danger ms-5 p-3 ps-5">{error}</div>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Register</Button>
                    </Col>
                </Form.Group>
            </Form>
            <div><p className="text-primary ps-5 ms-5">ALready have an account? <Link to="/login">Please Login</Link></p> </div>
        </div>
    );
};

export default Registration;