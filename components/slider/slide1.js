import React from "react";
import styled from "styled-components";
import { Slide } from "./slide";
import { Logo, TextSlideTitle, TextSlideRegular } from "../index";

const Heater = styled.img`
  right: 20%;
  top: 35%;
  width: 200px;
  height: 500px;
  display: flex;
  position: absolute;
  @media (max-width: 900px) {
    position: inherit;
    margin-right: auto;
    margin-left: auto;
  }
`;

export function Slide1(props) {
  return (
    <Slide>
      <Logo style={{ marginLeft: "0" }} />
      <TextSlideTitle>Напольные отопительные котлы</TextSlideTitle>
      <TextSlideRegular>
        Это самый массовый вид тепловых генераторов. По мощности, от 4 до
        нескольких сот кВт, они перекрывают весь диапазон возможных потребностей
        в отоплении индивидуальных домов.
      </TextSlideRegular>
      <Heater src="/static/hiter.png" />
    </Slide>
  );
}
