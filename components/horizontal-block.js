import React from "react";
import styled, { css, keyframes } from "styled-components";

//additional wrapper for horizontal flow 
const HorBlockBox = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  
  @media (max-width: 900px) {
    flex-flow: column;
    justify-content: center;
  }
`;

export function HorBlock(props) {
  return <HorBlockBox >{props.children}</HorBlockBox>;
}
