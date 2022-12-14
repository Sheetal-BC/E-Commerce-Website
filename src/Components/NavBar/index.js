import React from "react";

import HeaderCartButton from "../Layout/HeaderCartButton";
import { Nav, NavLink, NavMenu, NavGen } from "./NavbarElement";

const Navbar = (props) => {
  return (
    <header>
      <Nav>
        <NavMenu>
          <NavLink to="/Home">HOME</NavLink>
          <NavLink to="/Store">STORE</NavLink>
          <NavLink to="/About">ABOUT</NavLink>
          <NavLink to="/Contact">CONTACT US</NavLink>
          <NavLink to="/Auth">LOGIN</NavLink>
        </NavMenu>
        <HeaderCartButton onClick={props.onShowCart}/>
      </Nav>
      <NavGen>
        <h1>The Generics</h1>
      </NavGen>
    </header>
  );
};

export default Navbar;
