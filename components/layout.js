import React from "react";
import ReactDOM from "react-dom";
import styled, { css, keyframes } from "styled-components";

//Full page wrapper for download fonts & other downloads

//Page wrapper styles
const LayoutBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  font-family: "Poppins", sans-serif;
`;

//page wrapper function
export function Layout(props) {
  return (
    <LayoutBox>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {props.children}
    </LayoutBox>
  );
}
