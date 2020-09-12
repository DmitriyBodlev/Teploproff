import React from "react";
import styled from "styled-components";
import { width, margin, height, display } from "styled-system";

const Line = styled.div`
  width: 35%;
  height: 0.5px;
  display: flex;
  min-width: 500px;
  margin-top: 10px;
  margin-left: 15%;
  margin-bottom: 50px
  background-color: #747474
  @media (max-width: 900px) {
    display: none;
  }
`;

const TitleLineBox = styled.div`
  width: 440px;
  height: 4px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(90.02deg, #dadada 37.51%, #ff9c07 100%);
  @media (max-width: 600px) {
    display: none;
  }
`;

export function NavLine(props) {
  return <Line />;
}

export function TitleLine(props) {
  return <TitleLineBox style={props.style} />;
}
