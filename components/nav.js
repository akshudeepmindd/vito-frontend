import React, { useState, Component } from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import ModalComponent from "../components/modal";

class NavTop extends Component {
  state = { className: "", showModal: false };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 20) {
      if (!this.state.className) {
        this.setState({ className: "white" });
      }
    } else {
      if (this.state.className) {
        this.setState({ className: "transparent" });
      }
    }
  };

  handleShow = () => {
    this.setState({
      showModal: !this.state.showModal,
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
                <Nav.Link className="pt-3" href="">
                  Search Icon
                </Nav.Link>
                <Nav.Link className="">
                  <Button variant="warning" onClick={this.handleShow}>
                    Login
                  </Button>
                </Nav.Link>
                <Nav.Link href="">
                  <Button variant="warning">Free Trial</Button>{" "}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <ModalComponent
          showModal={this.state.showModal}
          closeModal={this.handleShow}
        />
      </>
    );
  }
}

export default NavTop;
