import React,{useContext} from "react";
import { NavLink } from "react-router-dom";

import CartContext from "../../Store/CartContext";

import './NavbarElement.css';

import HeaderCartButton from "../Layout/HeaderCartButton";
import AuthContext from "../../Store/AuthContext";


const Navbar = (props) => {
  const authCntxt = useContext(AuthContext);
  const cartCtx = useContext(CartContext)
  const email=localStorage.getItem('Email');
  
  console.log(email)
  if(!email === null)
   email.replace( /[^\w]/g, '');
 
  const isLoggedIn = authCntxt.isLoggedIn;

  const logoutHandler = async () =>{
   
    authCntxt.logout();
   
    const response = await fetch(
      "https://userdetails-bc548-default-rtdb.firebaseio.com/Contacts.json",
      {
        method: "POST",
        body: JSON.stringify(cartCtx.items),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <header>
      <nav className="header_part" >
        <ul className="name_link">
  
        <li>
          <NavLink to="/Home">HOME</NavLink>
          </li>
  
       
          <li>
          <NavLink to="/Store">STORE</NavLink>
          </li>
  
          <li>
          <NavLink to="/About">ABOUT</NavLink>
          </li>
  
       <li>
          <NavLink to="/Contact">CONTACT US</NavLink>
         </li>

        {!isLoggedIn && (
         <li>
          <NavLink to="/Auth">LOGIN</NavLink>
         </li>
        )}
        {isLoggedIn && (
         <li>
            <button onClick={logoutHandler}>LOGOUT</button>
          </li>
        )}
        </ul>
        <HeaderCartButton onClick={props.onShowCart}/>
      </nav>
      <div className="generic">
        <h1>The Generics</h1>
      </div>
    </header>
  );
};

export default Navbar;
