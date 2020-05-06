import React from "react";
import styled from "styled-components";
import Text from "../../styled_components/Text";

const Container = styled.div`
  width: 100%;
  height: 50px;
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 252px;
  height: 50px;
  border: none;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const ButtonCheap = styled(Button)`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: ${(props) =>
    props.isActiveBtn === "cheap" ? "#2196f3" : "#fff"};
`;

const ButtonFast = styled(Button)`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${(props) =>
    props.isActiveBtn === "fast" ? "#2196f3" : "#fff"};
`;

const TextBtnCheap = styled(Text)`
  color: ${(props) => (props.isActiveBtn === "cheap" ? "#fff" : "#000")};
`;

const TextBtnFast = styled(Text)`
  color: ${(props) => (props.isActiveBtn === "fast" ? "#fff" : "#000")};
`;

const CheapFast = (props) => {
  return (
    <Container>
      <ButtonCheap isActiveBtn={props.isActiveBtn} onClick={props.btnCheap}>
        <TextBtnCheap isActiveBtn={props.isActiveBtn}>
          Самый дешевый
        </TextBtnCheap>
      </ButtonCheap>
      <ButtonFast isActiveBtn={props.isActiveBtn} onClick={props.btnFast}>
        <TextBtnFast isActiveBtn={props.isActiveBtn}>Самый быстрый</TextBtnFast>
      </ButtonFast>
    </Container>
  );
};

export default CheapFast;
