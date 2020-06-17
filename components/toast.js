import React from "react";
import { Toast, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { toastState } from "../redux/actions/toastActions";

const Toasts = props => {
  const { toast } = props;

  return (
    <Col
      md={6}
      style={{
        position: "relative"
      }}
    >
      <Toast
        show={toast.toastOpen}
        style={{
          position: "absolute",
          top: 0,
          left: "20%"
        }}
        autohide
      >
        <Toast.Body className={toast.name}>{toast.message}</Toast.Body>
      </Toast>
    </Col>
  );
};

const mapStateToProps = state => ({
  toast: state.toast
});



export default connect(
  mapStateToProps
)(Toasts);
