import React from "react";
import { Button, Modal, Form , Row, Col} from "react-bootstrap";
const ModalComponent = ({ showModal, handleClose, closeModal }) => {
  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-center font-weight-bold">
          Login with your site account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
