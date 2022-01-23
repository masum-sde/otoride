import React from "react";
import logo from "../../image/logo.png";
import "./TopBar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
const TopBar = () => {
  return (
    <Navbar expand="lg" className="bg-nav">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#product" className="text-nav">
              Product
            </Nav.Link>
            <Nav.Link href="#features" className="text-nav">
              Features
            </Nav.Link>
            <Nav.Link href="#contact">
              <span className="contact-us">Contact Us</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
