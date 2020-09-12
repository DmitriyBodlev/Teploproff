import React from "react";
import styled from "styled-components";

const ModalDiv = styled.div`
  top: 5%;
  left: 15%;
  width: 65%;
  height: 85%;
  overflow: auto;
  position: fixed;
  background: white;
  border: 1px solid black;
  
`;

const ModalCloseButton = styled.button`
  right: 0px;
  width: 40px;
  height: 40px;
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/static/close.png");
`;

export class Modal extends React.Component {
  render() {
    return (
      <ModalDiv>
        <ModalCloseButton onClick={this.props.modalClose} />
        {this.props.children}
      </ModalDiv>
    );
  }
}
