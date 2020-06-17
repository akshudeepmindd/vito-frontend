import React, { Component } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { UserLogin } from "../redux/actions/userActions"
import { connect } from "react-redux";
import { setCookie } from "../utils/cookies";
import { ToastContainer, toast } from "react-toastify"
import { modalState } from "../redux/actions/modalActions"
import { toastState } from "../redux/actions/toastActions";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  
  onHandleChange = e => {
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
      await toast.success("Login Succfull.");
      await this.props.modalState(null)
    }
    toast.error(User.message);
    // await AuthService.storeToken(token, "/dashboard");
  }
  render(){
    return (
      <>
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

      </>
    );
  }
  
};



const mapDispatchToProps = {
UserLogin,
modalState,
toastState
}

export default connect(null, mapDispatchToProps)(SignIn)

