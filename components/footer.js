import React from "react";
import styled from "styled-components";

//Footer wrapper styles
const FooterBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  background-color: #f59708;
`;

//contacts wrapper styles
const FooterContactsBox = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  flex-flow: row;
  margin-top: 30px;
  vertical-align: bottom;
  background-color: #f06000;
`;


//Footer function
export function Footer(props) {
  return <FooterBox style={props.style}>{props.children}</FooterBox>;
}

//Contacts function
export function FooterContacts(props) {
  return (
    <FooterContactsBox style={props.style}>{props.children}</FooterContactsBox>
  );
}
