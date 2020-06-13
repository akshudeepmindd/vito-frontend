import React, { Component } from "react";
import { connect } from "react-redux"
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { UserSignUp } from "../redux/actions/userActions"
class Signup extends Component{

  state = {
    email: "",
    userName:"",
    firstName:"",
    lastName:"",
    password: ""
  }

  onHandleChange = e => {
    console.log(e, "login")
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onHandleSubmit = async (e)=>{
    e.preventDefault()
    const { email, password, userName, firstName, lastName } = this.state
    const { UserSignUp } = this.props
    const params = {
      email,
      password,
      userName,
      firstName,
      lastName
    }
    const User = await UserSignUp(params)
  }
  // ({ showModal, handleClose, closeModal }) => {
    render(){
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Username or Email" name="email" onChange={(e)=>this.onHandleChange(e)}/>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
      <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" name="userName" onChange={(e)=>this.onHandleChange(e)}/>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
      <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="First Name" name="firstName" onChange={(e)=>this.onHandleChange(e)}/>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
      <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" name="lastName" onChange={(e)=>this.onHandleChange(e)}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" onChange={(e)=>this.onHandleChange(e)}/>
      </Form.Group>
      <Button variant="warning" type="Login" className="large__button" onClick={this.onHandleSubmit}>
        Submit
      </Button>
    </Form>
  );
};
}

const mapDispatchToProps = {
  UserSignUp
}

export default connect(null, mapDispatchToProps)(Signup)

