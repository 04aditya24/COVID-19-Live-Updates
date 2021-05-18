import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <NavLink to="/">
          <Navbar.Brand>
            <h4 style={{ marginTop: "10px" }}>
              <span className="font-weight-bold">COVID-19 Live Updates</span>
            </h4>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/">
              <Button style={{ marginRight: "10px" }} variant="dark" bg="dark">
                Home
              </Button>
            </NavLink>{" "}
            <NavLink to="/data">
              <Button
                style={{ marginRight: "10px" }}
                variant="dark"
                bg="dark"
                type="submit"
              >
                India States Data
              </Button>
            </NavLink>{" "}
            <Button
              variant="dark"
              style={{ marginRight: "10px" }}
              href="https://github.com/04aditya24/COVID-19-Live-Updates"
              bg="dark"
              type="submit"
            >
              CONTRIBUTE
            </Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
