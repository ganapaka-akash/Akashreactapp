// src/Signup.js
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
        phone: '',
        profession: 'Developer'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userData', JSON.stringify(formData));
        alert('Signup successful');
        window.location.href = '/login';
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="text-center">Signup</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter name" onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Enter password" onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group controlId="formPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel" name="phone" placeholder="Enter phone number" onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group controlId="formProfession">
                            <Form.Label>Profession</Form.Label>
                            <Form.Control as="select" name="profession" onChange={handleChange}>
                                <option value="Developer">Developer</option>
                                <option value="Designer">Designer</option>
                                <option value="Manager">Manager</option>
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mt-3">
                            Signup
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;
