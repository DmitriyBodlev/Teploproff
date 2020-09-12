import React from "react";
import styled from "styled-components";

const SlideBox = styled.div`
  width: 60%;
  display: flex;
  height: 100%;
  flex-flow: column;
  padding: 0px 20px 20px 50px;
  margin: 20px auto 20px auto;
`;

export class Slide extends React.Component {
  render() {
    return <SlideBox style={this.props.style}>{this.props.children}</SlideBox>;
  }
}
