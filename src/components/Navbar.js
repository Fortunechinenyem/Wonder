import React from "react";
import styled from "styled-components";
import { NavLink as Link, useNavigate } from "react-router-dom";

import logo from "../images/wonderlogo.svg";
const Nav = styled("nav")`
  padding: 1rem 0;
  background-color: #95b1b0;
`;
const LinksWrapper = styled("ul")`
  background-color: #fff;
  padding: 0 5rem;
`;
const SearchNavWrapper = styled("div")``;
const ButtonWrapper = styled("div")`display: flex;justify-content: flex-end;
 @media screen and (max-width: 1024px) { justify-content: flex-end; margin-top: 0.5rem;  }`;

const LogoWrapper = styled("div")`
  margin-right: 5rem;
`;
const Logo = () => {
  const navigate = useNavigate();
  return (
    <LogoWrapper className="logo" onClick={() => navigate("/")}>
      <img src={logo} alt={logo.svg} />
    </LogoWrapper>
  );
};
const NavbarToggler = () => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

const NavLinks = () => {
  return (
    <LinksWrapper className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Home <span className="sr-only"></span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/about" style={{ color: "#268f7d" }}>
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/services" style={{ color: "#268f7d" }}>
          Services
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/training" style={{ color: "#268f7d" }}>
          Training
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/blog" style={{ color: "#268f7d" }}>
          Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact" style={{ color: "#268f7d" }}>
          Get In Touch
        </Link>
      </li>
    </LinksWrapper>
  );
};

const NavBar = () => {
  return (
    <Nav className="navbar navbar-expand-lg px-3">
      <Logo /> <NavbarToggler />
      <SearchNavWrapper
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <NavLinks />
        <ButtonWrapper></ButtonWrapper>
      </SearchNavWrapper>
    </Nav>
  );
};
export default NavBar;
