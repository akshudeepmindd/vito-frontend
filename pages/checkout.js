import React, { Component } from "react";
import  Router  from "next/router"
import Layout from "../components/common/layout";
import { ListGroup, Container, Table, Button, Form } from "react-bootstrap";
import { createRef } from "react";
import "../static/scss/index.sass";
import { connect } from "react-redux";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.payref = createRef();
    this.state = {
      paymentMethod: "",
      pack: undefined
    };
  }
  
  async componentDidMount() {
    let pack;
    const { plan } = this.props;
    const { id } = Router.query
    pack = plan.find((item) => item._id == id)

    this.setState({pack})
    
  }


  renderPaypal = async () => {

    const packageCost = this.state.pack?.cost
    
    paypal
    .Buttons({
      // Set up the transaction
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: packageCost,  
                currency: "INR"
              },
            },
          ],
        });
      },
      style: {
        color: "gold",
        shape: "pill",
        size: "small",
        label: "pay",
        height: 34,
      },
      // Finalize the transaction
      onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
          // Show a success message to the buyer
          alert(
            "Transaction completed by " + details.payer.name.given_name + "!"
            );
          });
        },
      })
      .render(this.payref.current);
    };
    
    handelChange = (e) => {
      this.setState(
        {
          [e.target.name]: e.target.value,
        },
        () => {
          if (this.state.paymentMethod == "paypal") {
            return this.renderPaypal();
          }
        }
        );
      };
      
      render() {
        // console.log(this.state.pack?.packageName, "pack")
        return (
      <Layout title="Checkout">
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
                    You have selected the <strong>{this.state.pack?.packageName}</strong> membership
                    level.
                  </td>
                </tr>
                <tr>
                  <td>
                    The price for membership is
                    <strong> €{this.state.pack?.cost} per Month</strong>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Container>
              <Table bordered hover responsive>
                <tbody>
                  <tr>
                    <td className="">Your Complete Guide to Photography</td>
                    <td className="text-center">
                      {" "}
                      <i class="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Easy Zurb Foundation</td>
                    <td className="text-center">
                      {" "}
                      <i class="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Improve Your CSS Workflow with SASS</td>
                    <td className="text-center">
                      {" "}
                      <i class="fas fa-check"></i>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Container>
            <Table responsive bordered className="account__table">
              <thead>
                <tr>
                  <th className="">
                    ACCOUNT INFORMATION{" "}
                    <span className="text-muted f12">
                      already have an account?
                    </span>{" "}
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
            <div className="radio__button" onChange={this.handelChange}>
              <div>
                <input
                  type="radio"
                  id="male"
                  name="paymentMethod"
                  value="bitcoin"
                />
                <label for="male"> Bitcoin/Altcoin</label>
                <img
                  src="http://academy.startupdigitalnetwork.com/wp-content/plugins/gourl-bitcoin-paid-memberships-pro/images/crypto.png"
                  style={{ width: "5rem", paddingLeft: "1rem" }}
                ></img>
              </div>
              <div>
                <input
                  type="radio"
                  id="male"
                  name="paymentMethod"
                  value="paypal"
                />
                <label for="male"> PayPal Standard </label>
                <img
                  src="http://academy.startupdigitalnetwork.com/wp-content/plugins/gourl-bitcoin-paid-memberships-pro/images/paypal.png"
                  style={{ width: "5rem", paddingLeft: "1rem" }}
                ></img>
              </div>
            </div>
            {this.state.paymentMethod == "paypal" ? (
              <div
                className="text-center paypal_checkout"
                style={{ margin: "0 auto", width:"2rem" }}
              >
                <div ref={this.payref}></div>
              </div>
            ) : (
              <div
                className="bitcoin__btn"
                style={{ width: "2rem", margin: "0 auto" }}
              >
                <Button variant="warning">SUBMIT AND CHECKOUT »</Button>
              </div>
            )}
            {/* <div className="text-center paypal_checkout">
            <div ref={this.payref} style={{ width: "2rem", paddingLeft: "1rem", margin:'0 auto' }}></div>
          </div> */}
          </Container>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  plan: state.plan.allPlan || [],
});

export default connect(mapStateToProps, null)(Checkout);