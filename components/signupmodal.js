import React from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
const Signup = ({ showModal, handleClose, closeModal }) => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Username or Email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
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
  );
};

export default Signup;
