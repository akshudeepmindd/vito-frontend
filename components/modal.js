import React, {Component} from "react";
import { Button, Modal, Form , Row, Col} from "react-bootstrap";
import { UserLogin } from "../redux/actions/userActions"
import { connect } from "react-redux";
import { setCookie } from "../utils/cookies";

class  ModalComponent extends Component{

  // showModal, handleClose, closeModal
  state = {
    email: "",
    password: ""
  };

  onHandleChange = e => {
    console.log(e, "login")
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onHandleSubmit = async (e)=>{
    e.preventDefault()
    const { email , password } = this.state
    const { UserLogin, Cookies } = this.props
    const params = {
      email,
      password
    }
    const User = await UserLogin(params)
    console.log(User, "User")
    if(User.is_success){
      // const { message: token  } = User
      setCookie("token", User.token, { path: "/" });
    }
    // await AuthService.storeToken(token, "/dashboard");
  }
  render(){
    const { showModal, handleClose, closeModal } = this.props
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
          Login with your account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Username or Email" name="email" onChange={(e)=>this.onHandleChange(e)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" name="password" onChange={(e)=>this.onHandleChange(e)} />
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
          <Button variant="warning" type="Login" className="large__button" onClick={this.onHandleSubmit}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
}

const mapDispatchToProps = {
  UserLogin
}

export default connect(null, mapDispatchToProps)(ModalComponent);
