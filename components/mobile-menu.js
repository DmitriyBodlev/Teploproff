import React from "react";
import styled from "styled-components";
import { NavVertical, BgGrey, Logo } from "./index";

const MobileMenuModal = styled.div`
  right: 0;
  top: 2px;
  width: 300px;
  z-index: 500;
  height: 91.5%;
  display: flex;
  max-width: 80%;
  position: fixed;
  flex-flow: column;
  justify-content: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 30px 0 0 30px;
  padding: 30px 30px 30px 0px;
`;

const MobileMenuButton = styled.button`
  top: 10px;
  width: 40px;
  height: 40px;
  display: none;
  padding: 0 0 0 0;
  border: none;
  background-color: #464646;
  background-image: url("/static/mobile-menu.png");
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 900px) {
    display: block;
    position: fixed;
    right: 10px;
  }
`;

export class MobileMenu extends React.Component {
  state = {
    modalIsOpen: false,
  };
  modalHandle = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };
  render() {
    return (
      <div>
        <MobileMenuButton onClick={this.modalHandle} />
        {this.state.modalIsOpen && <BgGrey onClick={this.modalHandle}/>}
        {this.state.modalIsOpen && (
          <MobileMenuModal>
            <Logo/>
            <NavVertical modalHandle={this.modalHandle} />
          </MobileMenuModal>
        )}
      </div>
    );
  }
}
