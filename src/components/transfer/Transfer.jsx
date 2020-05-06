import React from "react";
import styled from "styled-components";

import Text from "../../styled_components/Text";
import Checkbox from "../../styled_components/Checkbox";

const ContainerTransfer = styled.div`
  height: 252px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  grid-area: 1 / 1 / 3 / 2;
  padding: 20px;
  box-sizing: border-box;
`;

const LabelTransfer = styled.label`
  align-items: center;
  display: flex;
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
`;

const TextTransfer = styled(Text)`
  margin-left: 8px;
`;

const Transfer = (props) => {
  return (
    <ContainerTransfer>
      <Text style={{ marginTop: 0 }}>Количество пересадок</Text>
      <List>
        <li>
          <LabelTransfer>
            <Checkbox
              checked={props.objTransfer.all_transfer}
              onChange={props.btnAllTransfer}
            />
            <TextTransfer>Все</TextTransfer>
          </LabelTransfer>
        </li>
        <li>
          <LabelTransfer>
            <Checkbox
              checked={props.objTransfer.no_transfer}
              onChange={props.btnNoTransfer}
            />
            <TextTransfer>Без пересадок</TextTransfer>
          </LabelTransfer>
        </li>
        <li>
          <LabelTransfer>
            <Checkbox
              checked={props.objTransfer.one_transfer}
              onChange={props.btnOneTransfer}
            />
            <TextTransfer>1 пересадки</TextTransfer>
          </LabelTransfer>
        </li>
        <li>
          <LabelTransfer>
            <Checkbox
              checked={props.objTransfer.two_transfer}
              onChange={props.btnTwoTransfer}
            />
            <TextTransfer>2 пересадки</TextTransfer>
          </LabelTransfer>
        </li>
        <li>
          <LabelTransfer>
            <Checkbox
              checked={props.objTransfer.three_transfer}
              onChange={props.btnThreeTransfer}
            />
            <TextTransfer>3 пересадки</TextTransfer>
          </LabelTransfer>
        </li>
      </List>
    </ContainerTransfer>
  );
};

export default Transfer;
