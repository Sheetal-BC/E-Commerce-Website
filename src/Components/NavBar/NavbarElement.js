
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid white;
  position: fixed;
  width: 100%;

  padding: 1rem calc((140vw - 1000px) / 2);
  
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  padding-left: 30px;
 padding-right: 60px;
  height: 100%;
  cursor: pointer;
  font-size: 20px;
  &.active {
    color: #15cdfc;
  }
`;


export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  border-radius: 5px;
  background: black;
  width:150px;
  margin-top:10px;
  padding: 15px;
  height: 40px;
  float:right;
  color: white;
  font-size: 25px;
  border: 2px solid aqua;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    
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
export const styles = styled.div`
  fontSize: 14,
  color: "#4a54f1",
  textAlign: "center",
  paddingTop: "100px",
`;

export const Navbadge = styled.div`
 font-size: 30px;
 color: aqua;

`;