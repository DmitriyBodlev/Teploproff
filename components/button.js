import React from "react";
import styled from "styled-components";
import { createStore, bindActionCreators } from "redux";
import { connect, Provider } from "react-redux";

//Button styles
const ButtonBox = styled.button`
  width: 300px;
  height: 50px;
  color: #f59708;
  display: block;
  cursor: pointer;
  font-size: 12px;
  margin-left: 20px;
  margin-right:20px;
  text-align: center;
  margin-bottom:20px;
  vertical-align: middle;
  border: 2px solid #f59708;
  &:hover {
    color: white;
    background-color: #f59708;
  }
`;

//Button function
export function Button(props) {
  return (
    <ButtonBox onClick={props.onClick} style={props.style} href={props.link}>
      {props.children}
    </ButtonBox>
  );
}
