import React, {Component} from "react";
import Layout from "../components/common/layout";
import "../static/scss/index.sass";
import { connect } from "react-redux";
import { ListGroup, Container, Table, Button } from "react-bootstrap";
import { PlaneList } from "../redux/actions/planActions"
import { getCookie } from "../utils/cookies";
import  Paypal  from "./Paypal"
import { createRef } from "react";


class Payment extends Component{
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
                            value: '0.01'
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

        return(
            <div>
            <h3>Payment Page</h3>
            <script src="https://www.paypal.com/sdk/js?client-id=sb"></script>
             <div ref={this.payref}></div>
            </div>
            
        )
    }
}


export default Payment;