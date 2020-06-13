import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import SignIn from "./sigin";
import SignUp from "./signupmodal";
const ModalComponent = ({ showModal, handleClose, closeModal, formType }) => {
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
          {formType == "signin"
            ? "Login with your site account"
            : "Signup with your site account"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{formType == "signin" ? <SignIn /> : <SignUp />}</Modal.Body>
    </Modal>
  )
}


const mapDispatchToProps = {
  UserLogin
}

export default connect(null, mapDispatchToProps)(ModalComponent);
