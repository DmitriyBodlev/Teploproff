import React from "react";
import styled from "styled-components";
import { top, width, height, margin, display } from "styled-system";

const LogoBox = styled.div`
width: 180px;
height: 200px;
display: block;
margin: 55px auto 0 auto;
background-position: center;
background-repeat: no-repeat;
background-image: url("/static/logo.png")
  `;

export function Logo(props) {
  return <LogoBox style={props.style}/>;
}
