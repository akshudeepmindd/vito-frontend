import React, { useState, useRef, useEffect , Component} from "react";
// import Layout from "../components/common/layout";
// import "../static/scss/index.sass";
// import { connect } from "react-redux";
// import { ListGroup, Container, Table, Button } from "react-bootstrap";
// import { PlaneList } from "../redux/actions/planActions"
// import { getCookie } from "../utils/cookies";


// class Paypal extends Component{
//     render(){
//         return(
//             <div>
//             <script src="https://www.paypal.com/sdk/js?client-id=sb"></script>
//             {/* <script>paypal.Buttons().render('body');</script> */}
//             </div>
//             )
//     }
// }
// export default Paypal;

// export default function Paypal({ props }) {
  
//     const [paidFor, setPaidFor] = useState(false);
//     const [error, setError] = useState(null);
//     const paypalRef = useRef();
//     console.log("hello123")
  
//     useEffect(() => {
//      return window.paypal
//         .Buttons({
//           createOrder: (data, actions) => {
//             return actions.order.create({
//               purchase_units: [
//                 {
//                   amount: {
//                     currency_code: 'USD',
//                     value: props.package.price,
//                   },
//                 },
//               ],
//             });
//           },

//           onApprove: async (data, actions) => {
//             const order = await actions.order.capture();
//             setPaidFor(true);
//             console.log(order);
//           },

//           onError: err => {
//             setError(err);
//             console.error(err);
//           },
//         })
//         .render(paypalRef.current);
//     }, [props]);
  
//     if (paidFor) {
//       return (
//         <div>
//           <h1>Congrats, you just bought {props.package.price}!</h1>
//           <div ref={paypalRef}/>
//         </div>
//       );
//     }
// }

import { PayPalButton } from "react-paypal-button-v2";
 
export default class Paypal extends Component {
  render() {
    return (
      <PayPalButton
        options={{vault: true}}
        createSubscription={(data, actions) => {
          return actions.subscription.create({
            plan_id: 'P-XXXXXXXXXXXXXXXXXXXXXXXX'
          });
        }}
        onApprove={(data, actions) => {
          // Capture the funds from the transaction
          return actions.subscription.get().then(function(details) {
            // Show a success message to your buyer
            alert("Subscription completed");
 
            // OPTIONAL: Call your server to save the subscription
            return fetch("/paypal-subscription-complete", {
              method: "post",
              body: JSON.stringify({
                orderID: data.orderID,
                subscriptionID: data.subscriptionID
              })
            });
          });
        }}
      />
    );
  }
}
