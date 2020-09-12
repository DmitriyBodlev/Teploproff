import React from "react";
import styled from "styled-components";
import { Slide1 } from "./slide1";
import { Slide2 } from "./slide2";
import { Slide } from "./slide";
import { Button } from "react-bootstrap";

const MySliderBox = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  @media (max-width: 900px) {
    height: 100%
  }
`;

const ButtonNext = styled.img`
  top: 50%;
  right: 15%;
  width: 40px;
  height: 40px;
  position: absolute;
  @media (max-width: 900px) {
    top: 80%;
  }
`;
const ButtonPrevious = styled.img`
  top: 50%;
  left: 15%;
  width: 40px;
  height: 40px;
  position: absolute;
  @media (max-width: 900px) {
    top: 80%;
  }
`;

export class MySlider extends React.Component {
  state = {
    slideNum: 1,
  };
  nextSlide = () => {
    let newSlideNum = this.state.slideNum + 1;
    this.setState({ slideNum: newSlideNum });
    if (this.state.slideNum == 2) {
      this.setState({ slideNum: 1 });
    }
    console.log(this.state);
  };
  previousSlide = () => {
    let newSlideNum = this.state.slideNum - 1;
    this.setState({ slideNum: newSlideNum });
    if (this.state.slideNum == 1) {
      this.setState({ slideNum: 2 });
    }
    console.log(this.state);
  };
  render() {
    return (
      <MySliderBox>
        {this.state.slideNum == 1 && <Slide1 />}
        {this.state.slideNum == 2 && <Slide2 />}
        <ButtonPrevious
          onClick={this.previousSlide}
          src="/static/slider-button-left.png"
        />
        <ButtonNext
          onClick={this.nextSlide}
          src="/static/slider-button-right.png"
        />
      </MySliderBox>
    );
  }
}
