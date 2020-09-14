import React from "react";
import styled from "styled-components";

//navigation item regular styles
const NavIt = styled.a`
  color: #444446;
  text-decoration: none;
  &:hover {
    opacity: 80%;
  }
  &:active {
    color: #f59708;
  }
  margin-top: 20px;
`;

//navigation item white styles
const NavItWhite = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    opacity: 80%;
  }

  &:active {
    color: black;
  }
`;

//navigation item regular function
export function NavItem(props) {
  return (
    <NavIt onClick={props.onClick} href={props.link}>
      {props.title} 
    </NavIt>
  );
}

//navigation item white function
export function NavItemWhite(props) {
  return (
    <NavItWhite style={props.style} href={props.link}>
      {props.title}
    </NavItWhite>
  );
}

export default NavItem;
