import React from "react";
import {
  Section,
  TextTitle,
  HorBlock,
  Worker,
  WorkerPhoto,
  TextWorkersName,
  TextWorkersJob,
} from "../components/index";

export function Team() {
  return (
    <Section>
      <TextTitle>НАША КОМАНДА</TextTitle>
      <HorBlock style={{ width: "80%" }}>
        <Worker href="#">
          <WorkerPhoto url="/static/1.png" />
          <TextWorkersName>Кто-то из смешариков</TextWorkersName>
          <TextWorkersJob>Мультгерой</TextWorkersJob>
        </Worker>
        <Worker>
          <WorkerPhoto url="/static/2.jpg" />
          <TextWorkersName>Кто-то из смешариков</TextWorkersName>
          <TextWorkersJob>Мультгерой</TextWorkersJob>
        </Worker>
        <Worker>
          <WorkerPhoto url="/static/3.jpg" />
          <TextWorkersName>Кто-то из смешариков</TextWorkersName>
          <TextWorkersJob>Мультгерой</TextWorkersJob>
        </Worker>
        <Worker>
          <WorkerPhoto url="/static/4.jpg" />
          <TextWorkersName>Кто-то из смешариков</TextWorkersName>
          <TextWorkersJob>Мультгерой</TextWorkersJob>
        </Worker>
      </HorBlock>
    </Section>
  );
}
