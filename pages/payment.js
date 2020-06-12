import React, {Component} from "react";
import Layout from "../components/common/layout";
import "../static/scss/index.sass";
import { connect } from "react-redux";
import { ListGroup, Container, Table, Button } from "react-bootstrap";
import { PlaneList } from "../redux/actions/planActions"
import { getCookie } from "../utils/cookies";
import  Paypal  from "./Paypal"


class Payment extends Component{
    
    render(){

        return(
            <div>
            <h3>Payment Page</h3>
            <script src="https://www.paypal.com/sdk/js?client-id=sb"></script>
             <Paypal />
            </div>
            
        )
    }
}


export default Payment;