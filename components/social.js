import React from "react";
import styled from "styled-components";

const SocialElemBox = styled.a`
  width: 16px;
  height: 16px;
  display: flex;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10%;
`;

export function SocialElem(props) {
  let adr = props.url;
  return <SocialElemBox style={{ backgroundImage: "url(" + adr + ")" }} />;
}

export function Social(props) {
  return (
    <div
      style={{ width: "150px", marginLeft: "5%", display: "flex" }}
    >
      <SocialElem url="/static/facebook.png" />
      <SocialElem url="/static/google.png" />
      <SocialElem url="/static/twitter.png" />
      <SocialElem url="/static/youtube.png" />
      <SocialElem url="/static/linkedin.png" />
    </div>
  );
}
