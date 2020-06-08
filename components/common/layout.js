import React from "react";
import MainHead from "../common/mainhead";
import Nav from "../nav";
import Footer from "../footer";
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
