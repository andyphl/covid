import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import styled from "./Header.module.scss";
import classNames from "classnames";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" fixed="top" className="shadow">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className={classNames("fs-1", styled.logo)}>
            COVID
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
