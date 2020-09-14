import React from "react";
import styled, { css, keyframes } from "styled-components";

export const WorkerBox = styled.a`
    color: black;
    width: 280px;
    border: none;
    height: 400px;
    display: flex;
    cursor: pointer
    flex-flow: column;
    margin-left: 10px;
    margin-right: 10px;
    justify-content: center;
    background-color: white;
    padding: 4px 4px 4px 4px;
    &:hover {
      color: white;
      background-color: #F59708;
    };
    &:active {
      opacity: 0.9;
    };
    @media (max-width: 900px) {
      width: 140px;
      height: 200px
    }
  `;

const WorkerPhotoBox = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  background-size: cover;
  justify-content: center;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
`;

export function Worker(props) {
  return <WorkerBox style={props.style}>{props.children}</WorkerBox>;
}

export function WorkerPhoto(props) {
  let adr = props.url;
  return <WorkerPhotoBox style={{ backgroundImage: "url(" + adr + ")" }} />;
}
