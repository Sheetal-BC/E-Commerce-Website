
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
 
 padding:15px;
 overflow:hidden;
 background-color:black;
 height: 50px;
 position:fixed;
 top:0;
 width:100%;
 @media screen and (max-width: 580px) {
  #navbar {
    padding: 20px 10px !important; 
  }

  
`;

export const NavLink = styled(Link)`
color:white;
text-decoration:none;
  cursor: pointer;
  padding-left:50px;
  font-size: 15px;
  &.active {
    color: #15cdfc;
  }
`;


export const NavMenu = styled.div`
 padding-left:30%;

  }
`;

export const NavGen = styled.div`
  background: grey;
  text-align: center;
  color: white;
  padding: 100px;
  font-size: 50px;
  font-family:'Times New Roman'; 
`;

export const style = styled.div`
  fontSize: 14,
  color: "#4a54f1",
  textAlign: "center",
  paddingTop: "100px",
`;

