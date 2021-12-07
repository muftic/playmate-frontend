import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import "../../App.css";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand
        className="navbarTitle"
        as={NavLink}
        to="/"
        style={{
          fontFamily: "sans serif ",
          fontStyle: "oblique",
          paddingLeft: 20,
        }}
      >
        <img src="tinpetfinal.png" alt="" style={{ width: 180 }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav bg="light" style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          <NavbarItem path="/profile" linkText="Profile" />
          <NavbarItem path="/finder" linkText="Finder" />
          <NavbarItem path="/chat" linkText="Chat" />

          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
