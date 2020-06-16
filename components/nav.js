import React, { useState, Component } from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import ModalComponent from "../components/modal";
import SignupComponent from "../components/signupmodal";

class NavTop extends Component {
  state = { className: "", showModal: false, formType: "" };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 20) {
        this.setState({ className: "bgwhite" });
    } 
    if(window.pageYOffset <= 0){
      this.setState({className: "transparent"})
    }
  };

  handleShow = (type) => {
    this.setState({
      showModal: !this.state.showModal,
      formType: type,
    });
  };

  render() {
    return (
      <>
        <div className="topnav">
          <Navbar
            className={`navbar navbar-expand-lg navbar-light navbar-top ${this.state.className}`}
            collapseOnSelect
            expand="lg"
            variant="dark"
          >
            <Navbar.Brand href="#home">EDUMA</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#features">Contact Us</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Demos" id="collasible-nav-dropdown">
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
                <NavDropdown title="Courses" id="collasible-nav-dropdown">
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
                <NavDropdown title="Featers" id="collasible-nav-dropdown">
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
                <Nav.Link href="#pricing">Blog</Nav.Link>

                <Nav.Link href="#pricing">Contact </Nav.Link>
                <Nav.Link href="/plan">PLans</Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link className="pt-3 right_border" href="">
                  <i class="fas fa-search"></i>
                </Nav.Link>
                <Nav.Link className="">
                  <Button
                    variant="warning"
                    onClick={() => this.handleShow("signin")}
                  >
                    Login
                  </Button>
                </Nav.Link>
                <Nav.Link href="">
                  
                  <Button
                    variant="warning"
                    onClick={() => this.handleShow("signup")}
                  >
                    Free Trial 
                  </Button>{" "}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <ModalComponent
          showModal={this.state.showModal}
          closeModal={this.handleShow}
          formType={this.state.formType}
        />
      </>
    );
  }
}

export default NavTop;
