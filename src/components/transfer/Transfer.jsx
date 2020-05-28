import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../styled_components/Text';
import Checkbox from '../../styled_components/Checkbox';

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
  const {
    handleChangeTransfer, all, zero, one, two, three,
  } = props;
  return (
    <ContainerTransfer>
      <Text style={{ marginTop: 0 }}>Количество пересадок</Text>
      <List>
        <li>
          <LabelTransfer>
            <Checkbox data-id="all" onChange={handleChangeTransfer} checked={all} />
            <TextTransfer>Все</TextTransfer>
          </LabelTransfer>
        </li>
        <li>
          <LabelTransfer>
            <Checkbox data-id="zero" onChange={handleChangeTransfer} checked={zero} />
            <TextTransfer>Без пересадок</TextTransfer>
          </LabelTransfer>
        </li>
        <li>
          <LabelTransfer>
            <Checkbox data-id="one" onChange={handleChangeTransfer} checked={one} />
            <TextTransfer>1 пересадка</TextTransfer>
          </LabelTransfer>
        </li>
        <li>
          <LabelTransfer>
            <Checkbox data-id="two" onChange={handleChangeTransfer} checked={two} />
            <TextTransfer>2 пересадки</TextTransfer>
          </LabelTransfer>
        </li>
        <li>
          <LabelTransfer>
            <Checkbox data-id="three" onChange={handleChangeTransfer} checked={three} />
            <TextTransfer>3 пересадки</TextTransfer>
          </LabelTransfer>
        </li>
      </List>
    </ContainerTransfer>
  );
};

Transfer.propTypes = {
  all: PropTypes.bool.isRequired,
  zero: PropTypes.bool.isRequired,
  one: PropTypes.bool.isRequired,
  two: PropTypes.bool.isRequired,
  three: PropTypes.bool.isRequired,
  handleChangeTransfer: PropTypes.func.isRequired,
};

export default Transfer;
