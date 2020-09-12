import React from "react";
import {
  Modal,
  Button,
  BgGrey,
  Product,
  Section,
  HorBlock,
  TextTitle,
  ProductPic,
  TextProduct,
  TextProductTitle,
} from "../components/index";

export class PricesHouses extends React.Component {
  state = {
    modalIsOpen: false,
  };
  modalOpen = () => {
    this.setState({ modalIsOpen: true });
  };
  modalClose = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <Section>
        {this.state.modalIsOpen && <BgGrey onClick={this.modalClose}/>}
        {this.state.modalIsOpen && (
          <Modal modalClose={this.modalClose}>
            <Section>
              <TextTitle onClick={this.modalOpen}>
                ПРОДУКТЫ (по домам)
              </TextTitle>
              <HorBlock >
                <Product>
                  <ProductPic url="/static/podomam.png" />
                  <TextProductTitle>Название</TextProductTitle>
                  <TextProduct>
                    texttexttext texttextte ttex tt exttextt ext texttexttextt
                    extt extt exttexttexttex ttexttext texttexttext texttextte
                    ttex tt exttextt ext texttexttextt extt extt exttexttexttex
                    ttexttext texttexttext texttextte ttex tt exttextt ext
                    texttexttextt extt extt exttexttexttex ttexttext
                  </TextProduct>
                  <Button
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      fontSize: "27px",
                      width: "250px",
                    }}
                  >
                    1000 РУБЛЕЙ
                  </Button>
                </Product>
                <Product>
                  <ProductPic url="/static/podomam.png" />
                  <TextProductTitle>Название</TextProductTitle>
                  <TextProduct>
                    texttexttext texttextte ttex tt exttextt ext texttexttextt
                    extt extt exttexttexttex ttexttext texttexttext texttextte
                    ttex tt exttextt ext texttexttextt extt extt exttexttexttex
                    ttexttext texttexttext texttextte ttex tt exttextt ext
                    texttexttextt extt extt exttexttexttex ttexttext
                  </TextProduct>
                  <Button
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      fontSize: "27px",
                      width: "250px",
                    }}
                  >
                    1000 РУБЛЕЙ
                  </Button>
                </Product>
                <Product>
                  <ProductPic url="/static/podomam.png" />
                  <TextProductTitle>Название</TextProductTitle>
                  <TextProduct>
                    texttexttext texttextte ttex tt exttextt ext texttexttextt
                    extt extt exttexttexttex ttexttext texttexttext texttextte
                    ttex tt exttextt ext texttexttextt extt extt exttexttexttex
                    ttexttext texttexttext texttextte ttex tt exttextt ext
                    texttexttextt extt extt exttexttexttex ttexttext
                  </TextProduct>
                  <Button
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      fontSize: "27px",
                      width: "250px",
                    }}
                  >
                    1000 РУБЛЕЙ
                  </Button>
                </Product>
              </HorBlock>
              <Button
                style={{
                  marginRight: "auto",
                  marginLeft: "auto",
                  marginTop: "80px",
                  fontSize: "20px"
                }}
              >
                ВАШ ВАРИАНТ
              </Button>
            </Section>
          </Modal>
        )}
        <TextTitle onClick={this.modalOpen}>ПРОДУКТЫ (по домам)</TextTitle>
        <HorBlock style={{ width: "80%" }}>
          <Product>
            <ProductPic url="/static/podomam.png" />
            <TextProductTitle>Название</TextProductTitle>
            <TextProduct>
              texttexttext texttextte ttex tt exttextt ext texttexttextt extt
              extt exttexttexttex ttexttext texttexttext texttextte ttex tt
              exttextt ext texttexttextt extt extt exttexttexttex ttexttext
              texttexttext texttextte ttex tt exttextt ext texttexttextt extt
              extt exttexttexttex ttexttext
            </TextProduct>
            <Button
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: "27px",
                width: "250px",
              }}
            >
              1000 РУБЛЕЙ
            </Button>
          </Product>
          <Product>
            <ProductPic url="/static/podomam.png" />
            <TextProductTitle>Название</TextProductTitle>
            <TextProduct>
              texttexttext texttextte ttex tt exttextt ext texttexttextt extt
              extt exttexttexttex ttexttext texttexttext texttextte ttex tt
              exttextt ext texttexttextt extt extt exttexttexttex ttexttext
              texttexttext texttextte ttex tt exttextt ext texttexttextt extt
              extt exttexttexttex ttexttext
            </TextProduct>
            <Button
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: "27px",
                width: "250px",
              }}
            >
              1000 РУБЛЕЙ
            </Button>
          </Product>
          <Product>
            <ProductPic url="/static/podomam.png" />
            <TextProductTitle>Название</TextProductTitle>
            <TextProduct>
              texttexttext texttextte ttex tt exttextt ext texttexttextt extt
              extt exttexttexttex ttexttext texttexttext texttextte ttex tt
              exttextt ext texttexttextt extt extt exttexttexttex ttexttext
              texttexttext texttextte ttex tt exttextt ext texttexttextt extt
              extt exttexttexttex ttexttext
            </TextProduct>
            <Button
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: "27px",
                width: "250px",
              }}
            >
              1000 РУБЛЕЙ
            </Button>
          </Product>
        </HorBlock>
      </Section>
    );
  }
}
