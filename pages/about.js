import React from "react";
import { Section, TextGoal, HorBlock, Button } from "../components/index";

export function About() {
  return (
    <Section>
      <TextGoal style={{ maxWidth: "885px" }}>
        Миссия "ТеплоПрофф" - дать тепло во всякое жилище, куда ступала нога
        человека.
      </TextGoal>
      <TextGoal style={{ maxWidth: "1070px" }}>
        Цель ТеплоПрофф (Основополагающее действие) - 10 000 довольных клиентов
        до 2022 года.
      </TextGoal>
      <HorBlock>
        <Button>УЗНАТЬ ЦЕНУ</Button>
        <Button>ПОЛУЧИ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</Button>
      </HorBlock>
    </Section>
  );
}
