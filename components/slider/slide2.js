import React from "react";
import styled from "styled-components";
import { Slide } from "./slide";
import { Logo, TextSlideTitle, TextSlideRegular } from "../index";


export function Slide2(props) {
  return (
    <Slide style={{backgroundColor: "black"}}>
      <Logo style={{ marginLeft: "0" }} />
      <TextSlideTitle>Второй слайд</TextSlideTitle>
      <TextSlideRegular>
        Тут может быть текст второго слайда
      </TextSlideRegular>
    </Slide>
  );
}
