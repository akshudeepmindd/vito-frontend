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
  ListGroup,
  Card,
} from "react-bootstrap";

const TopNav = () => {
  return (
    <>
      <div className="nav-logo">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">EDUMA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Contact Us</Nav.Link>
              <NavDropdown title="Demos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Demos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Demos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Blog</Nav.Link>
              <Nav.Link href="#home">Contact</Nav.Link>
              <Nav.Link href="#home">Plans</Nav.Link>
            </Nav>
            <Form inline>
              <div className="rightlinks">
                <span className="search-profile">SearchIcon</span>
                <span className="search-profile">Profile</span>
                <span className="search-profile">Logout</span>
              </div>
              <Button variant="warning">Free Trial</Button>{" "}
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className="clearfix"></div>
    </>
  );
};

export default TopNav;
