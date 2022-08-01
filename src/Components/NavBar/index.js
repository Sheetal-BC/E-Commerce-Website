import React, {} from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavGen,
  Navbadge

} from './NavbarElement';

const Navbar = (props) => {
  return (
    <header>
      <Nav>
        <NavMenu>
          <NavLink to='/Home'>
            HOME
          </NavLink>
          <NavLink to='/Store'>
            STORE
          </NavLink>
          <NavLink to='/about'>
           ABOUT
          </NavLink>
         </NavMenu>
    
         <NavBtn  onClick={props.Cart}>
          cart 
        </NavBtn>
        <Navbadge>0</Navbadge>
      
      </Nav>
      <NavGen>
        <h1>The Generics</h1>
      </NavGen>
    </header>
  );
};

export default Navbar; 