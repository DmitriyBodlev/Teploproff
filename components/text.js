import React from "react";
import styled, { css, keyframes } from "styled-components";

export const TextG = styled.div`
  display: block;
  font-size: 30px;
  line-height: 45px;
  margin-left: auto;
  text-align: center;
  margin-right: auto;
  margin-bottom: 50px;
`;

export const TextTtl = styled.div`
  color: #dadada;
  display: block;
  cursor: pointer;
  font-size: 50px;
  font-weight: 900;
  margin-left: auto;
  text-align: center;
  margin-right: auto;
  margin-bottom: 50px;
  &:after {
    width: 100%;
    height: 4px;
    content: "";
    display: block;
    background: linear-gradient(90.02deg, #dadada 37.51%, #ff9c07 100%);
  }
  @media (max-width: 900px) {
    font-size: 26px;
  }
`;

export const TextSlideTitleBox = styled.div`
  color: #f59708;
  display: block;
  font-size: 42px;
  max-width: 600px;
  margin-top: 30px;
  font-weight: 600;
  line-height: 50px;
  font-style: normal;
`;

export const TextSlideRegularBox = styled.div`
  display: block;
  color: #f59708;
  font-size: 18px;
  max-width: 620px;
  margin-top: 50px;
  font-family: Muli;
  line-height: 23px;
  font-style: normal;
  font-weight: normal;
`;

const TextProductTitleBox = styled.div`
  color: #2e2e30;
  font-size: 26px;
  margin-top: 20px;
  margin-left: auto;
  font-weight: bold;
  text-align: center;
  margin-right: auto;
`;

export const TextProductBox = styled.div`
  color: #6d6d6e;
  font-size: 15px;
  max-width: 326px;
  min-width: 300px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 20px;
`;

export const TextWorkersNameBox = styled.div`
  font-size: 20px;
  margin-top: 40px;
  margin-left: auto;
  text-align: center;
  margin-right: auto;
  @media (max-width: 900px) {
    font-size:10px;
    margin-top: 20px;
  }
`;

export const TextWorkersJobBox = styled.div`
  font-size: 20px;
  margin-top: 30px;
  margin-left: auto;
  text-align: center;
  margin-right: auto;
  @media (max-width: 900px) {
    font-size: 10px;
    margin-tio: 15px;
  }
`;

export function TextWorkersName(props) {
  return <TextWorkersNameBox>{props.children}</TextWorkersNameBox>;
}

export function TextWorkersJob(props) {
  return <TextWorkersJobBox>{props.children}</TextWorkersJobBox>;
}

export function TextGoal(props) {
  return <TextG style={props.style}>{props.children}</TextG>;
}

export function TextTitle(props) {
  return (
    <TextTtl onClick={props.onClick} style={props.style}>
      {props.children}
    </TextTtl>
  );
}

export function TextProductTitle(props) {
  return <TextProductTitleBox>{props.children}</TextProductTitleBox>;
}

export function TextProduct(props) {
  return <TextProductBox>{props.children}</TextProductBox>;
}

export function TextSlideTitle(props) {
  return (
    <TextSlideTitleBox style={props.style}>{props.children}</TextSlideTitleBox>
  );
}

export function TextSlideRegular(props) {
  return (
    <TextSlideRegularBox style={props.style}>
      {props.children}
    </TextSlideRegularBox>
  );
}
