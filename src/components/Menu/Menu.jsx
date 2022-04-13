import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaVirus } from "react-icons/fa";
import styled from "./Menu.module.scss";
import classNames from "classnames";

const Menu = () => {
  return (
    <Navbar
      expand="lg"
      className="shadow border-3 border-bottom border-primary bg-white"
    >
      <Container className="">
        <LinkContainer to="/">
          <Navbar.Brand
            className={classNames(
              "fs-1 d-inline-flex items-center",
              styled.logo
            )}
          >
            <FaVirus /> <h1 className="m-0 ms-1">COVID</h1>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
