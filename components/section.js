import React from "react";
import styled from "styled-components";
import {
  width,
  display,
  padding,
  maxWidth,
  minWidth,
  flexDirection,
} from "styled-system";

const SectionBox = styled.div`
  ${width}
  ${display}
  ${padding}
  ${maxWidth}
  ${minWidth}
  ${flexDirection}
  padding-top: 50px;
  padding-bottom: 50px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  background-image: url("../static/close.png");
  margin-left: 90%;
`;

const sectionStyle = {
  display: "flex",
  flexDirection: "column",
};

export class Section extends React.Component {
  render() {
    let styleToUse = { ...sectionStyle, ...this.props.style };
    return <SectionBox style={styleToUse}>{this.props.children}</SectionBox>;
  }
}

export default Section;
