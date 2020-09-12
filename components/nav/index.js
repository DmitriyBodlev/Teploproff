export * from "./nav-item";
import React from "react";
import styled from "styled-components";
import { width, height, display, justifyContent } from "styled-system";
import NavItem, { NavItemWhite } from "./nav-item";

//wrapper navigation menu styles
const NavBox = styled.div`
  width: 35%;
  display: flex;
  min-width: 500px;
  margin-left: 15%;
  justify-content: space-between;
  @media (max-width: 900px) {
    display: none;
  }
`;

const NavVerticalBox = styled.div`
  width: 100px;
  height: 400px;
  display: flex;
  flex-flow: column;
  margin-left: auto;
  margin-right: auto;
`;

const navBoxStyle = {
  width: "35%",
  display: "flex",
  justifyContent: "space-between",
};

export function NavVertical(props) {
  return (
    <NavVerticalBox>
      <NavItem onClick={props.modalHandle} title="HOME" link="#home" />
      <NavItem onClick={props.modalHandle} title="ABOUT US" link="#about" />
      <NavItem onClick={props.modalHandle} title="TEAM" link="#team" />
      <NavItem onClick={props.modalHandle} title="PRINCING PLAN" link="#prices" />
    </NavVerticalBox>
  );
}

//navigation menu function
export function Nav(props) {
  let styleToUse = { ...navBoxStyle, ...props.style };
  if (props.white != 1) {
    //regular color
    return (
      <NavBox>
        <NavItem title="HOME" link="#home" />
        <NavItem title="ABOUT US" link="#about" />
        <NavItem title="TEAM" link="#team" />
        <NavItem title="PRINCING PLAN" link="#prices" />
      </NavBox>
    );
  }
  if (props.white == 1) {
    //white color
    return (
      <NavBox style={props.style}>
        <NavItemWhite title="HOME" link="#home" />
        <NavItemWhite title="ABOUT US" link="#about" />
        <NavItemWhite title="TEAM" link="#team" />
        <NavItemWhite title="PRINCING PLAN" link="#prices" />
      </NavBox>
    );
  }
}

export default Nav;
