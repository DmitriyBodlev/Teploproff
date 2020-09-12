import React from "react";
import { Nav, Logo, Footer, Social, FooterContacts } from "../components/index";

export function Foot(props) {
  return (
    <Footer>
      <Logo
        style={{
          height: "88px",
          width: "168px",
          backgroundImage: "url(/static/logo2.png)",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <Nav
        white="1"
        style={{
          marginBottom: "35px",
          marginTop: "30px",
          marginLeft: "auto",
          marginRight: "auto",
          color: "white",
          width: "40%",
        }}
      />
      <Social style={{marginLeft: "auto", marginRight:"auto",}}/>
      <FooterContacts />
    </Footer>
  );
}
