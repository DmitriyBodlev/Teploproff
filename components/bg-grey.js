import React from "react";
import styled from "styled-components";

const BgGreyDiv = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  position: fixed;
  background-color: black;
`;

export function BgGrey(props) {
  return <BgGreyDiv onClick={props.onClick} />;
}
