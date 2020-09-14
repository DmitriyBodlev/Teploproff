import React from "react";
import styled from "styled-components";

const ProductBox = styled.div`
  width: 100%;
  height: 340px;
  display: flex;
  flex-flow: column;
  margin-bottom: 50px;
`;

const ProductPicBox = styled.div`
  height: 60px;
  display: block;
  background-position: center;
  background-repeat: no-repeat;
`;

export function Product(props) {
  return <ProductBox style={props.style}>{props.children}</ProductBox>;
}

export function ProductPic(props) {
  let adr = props.url;
  return <ProductPicBox style={{ backgroundImage: "url(" + adr + ")" }} />;
}
