import React from "react";
import MainHead from "../common/mainhead";
import Nav from "../nav";
import Footer from "../footer";
import "react-toastify/dist/ReactToastify.min.css";
export default (props) => {
  return (
    <>
      <MainHead title={props.title} />
      <Nav />

      {props.children}
      <Footer />
    </>
  );
};
