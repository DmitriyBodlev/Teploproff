import React from "react";
import styled from "styled-components";
import { width, height, display, padding } from "styled-system";

//Header styles
const HeaderBox = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  padding-top: 0;
  background-color: #4e4e4e;
  justify-content: space-between;
`;

//Header function
export function Head(props) {
  return <HeaderBox>{props.children}</HeaderBox>;
}

export default Head;
