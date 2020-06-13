import React, { Component } from "react";
import Layout from "../components/common/layout";
import "../static/scss/index.sass";
import { ListGroup, Container, Table, Button, Form } from "react-bootstrap";
import { createRef } from "react";

class Checkout extends Component{
  constructor(props){
    super(props)
    this.payref = createRef()
  }


  componentDidMount(){
    paypal.Buttons({

        // Set up the transaction
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '500'
                    }
                }]
            });
        },

        // Finalize the transaction
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                // Show a success message to the buyer
                alert('Transaction completed by ' + details.payer.name.given_name + '!');
            });
        }


    }).render(this.payref.current);
}
  render(){
  return (
    <Layout>
      <div className="black__banner">
        <h1>Membership checkout</h1>
      </div>
      <div className="listing">
        <Container>
          <ListGroup horizontal>
            <ListGroup.Item>Home</ListGroup.Item>
            <ListGroup.Item>Membership Account</ListGroup.Item>
            <ListGroup.Item>Membership Checkout</ListGroup.Item>
          </ListGroup>
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th className="" style={{ width: "30%" }}>
                  MEMBERSHIP LEVEL<span className="">Change</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="" style={{ width: "50%" }}>
                  You have selected the <strong>Standard</strong> membership
                  level.
                </td>
              </tr>
              <tr>
                <td>
                  The price for membership is
                  <strong> €100.00 per Month</strong>
                </td>
              </tr>
            </tbody>
          </Table>
          <Container>
            <Table bordered hover responsive>
              <tbody>
                <tr>
                  <td className="">Your Complete Guide to Photography</td>
                  <td>check</td>
                </tr>
                <tr>
                  <td>Easy Zurb Foundation</td>
                  <td>check</td>
                </tr>
                <tr>
                  <td>Improve Your CSS Workflow with SASS</td>
                  <td>check</td>
                </tr>
              </tbody>
            </Table>
          </Container>
          <Table responsive bordered className="account__table">
            <thead>
              <tr>
                <th className="">
                  ACCOUNT INFORMATION{" "}
                  <span className="text-muted f12">already have an account?</span>{" "}
                  <span className="text-warning">Log in here</span>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="" style={{ width: "50%" }}>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder=" " />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>E-mail Address</Form.Label>
                      <Form.Control type="password" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Confirm E-mail Address</Form.Label>
                      <Form.Control type="password" placeholder="" />
                    </Form.Group>
                  </Form>
                </td>
                <td style={{ width: "50%" }}></td>
              </tr>
            </tbody>
          </Table>
          <div className="payment__method pb-3">
            <h4 className="font-weight-bold">Choose your payment method -</h4>{" "}
          </div>
          <div className="radio__button">
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male"> Bitcoin/Altcoin</label>
            <img
              src="http://academy.startupdigitalnetwork.com/wp-content/plugins/gourl-bitcoin-paid-memberships-pro/images/crypto.png"
              style={{ width: "5rem", paddingLeft: "1rem" }}
            ></img>
          </div>
          <div className="radio__button">
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male"> PayPal Standard </label>
            <img
              src="http://academy.startupdigitalnetwork.com/wp-content/plugins/gourl-bitcoin-paid-memberships-pro/images/paypal.png"
              style={{ width: "5rem", paddingLeft: "1rem" }}
            ></img>
          </div>
          <div className="text-center paypal_checkout">
            <div ref={this.payref} style={{ width: "2rem", paddingLeft: "1rem", margin:'0 auto' }}></div>
          </div>
        </Container>
      </div>
    </Layout>
  );
  }
};

export default Checkout;
