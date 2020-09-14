import React from "react";
import {
  Head,
  Social,
  Section,
  Nav,
  NavLine,
  MobileMenu,
  MySlider
} from "../components/index";

export function Home() {
  return (
    <div>
      <Head> 
        <Social />
        <MobileMenu/>
      </Head>
      <Section>
        <Nav />
        <NavLine />
        <MySlider/>
      </Section>
    </div>
  );
}
