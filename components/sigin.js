import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
const SignIn = () => {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Username or Email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Row>
            <Col sm={6}>
              <Form.Check
                type="checkbox"
                className="float-left"
                label="Remember me"
              />
            </Col>
            <Col sm={6}>
              <span className="float-right F14">Remember your password</span>
            </Col>
          </Row>
        </Form.Group>
        <Button variant="warning" type="Login" className="large__button">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignIn;
