import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Form,
  FormControl,
  Row,
  Col,
  Card,
  ListGroup,
} from "react-bootstrap";
const Banner = () => {
  return (
    <>
      <div className="bg_image">
        <div className="banner-text text-center">
          <h1>Crypo Trading Course</h1>
          <p>
            This trading course is the Trade use to learn improve results. the
            Trade use to learn improve r
          </p>
          <Button variant="warning">Start your 7 day free trial
          </Button>{" "}
        </div>
        
      </div>

      <div className="clearfix"></div>
    </>
  );
};

export default Banner;
