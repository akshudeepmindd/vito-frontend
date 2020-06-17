import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { connect } from 'react-redux'
import "react-toastify/dist/ReactToastify.css";
import { modalState } from "../redux/actions/modalActions"
import SignIn from "./sigin";

import SignUp from "./signupmodal";
const ModalComponent = (props) => {
  console.log(props.modal?.show)
  const modalRender = props.modal?.name == "signin" || props.modal?.name == "signup" ?  <Modal
  show={props.modal.show}
  onHide={() => props.modalState(null)}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Header closeButton>
    <Modal.Title className="text-center font-weight-bold">
      {props.modal.name == "signin"
        ? "Login with your site account"
        : "Signup with your site account"}
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>{props.modal.name == "signin" ? <SignIn /> : <SignUp />}</Modal.Body>
</Modal> :""
  
  return modalRender
}

const mapStateToProps = (state) => ({
  modal: state.modal
})

const mapDispatchToProps = {
  modalState
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalComponent);
