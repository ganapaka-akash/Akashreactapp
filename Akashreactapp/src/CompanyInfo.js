// src/CompanyInfo.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function CompanyInfo() {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h2>Company Info</h2>
                    <p><strong>Company:</strong> Goekiynergy Technologies Pvt Ltd</p>
                    <p><strong>Address:</strong> Sanjayanagar, Bengaluru-56</p>
                    <p><strong>Phone:</strong> XXXXXXXXXXXXXX09</p>
                    <p><strong>Email:</strong> XXXXXX@gmail.com</p>
                </Col>
            </Row>
        </Container>
    );
}

export default CompanyInfo;
