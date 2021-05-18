import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button"
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home"><h4>COVID-19 Live Updates</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         
          <Nav className="ml-auto">
          <Button  variant="dark"  bg="dark"type="submit">CONTRIBUTE</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavBar;
