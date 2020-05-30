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
  padding: 20px 0;
  box-sizing: border-box;
`;

const LabelTransfer = styled.label`
  align-items: center;
  display: flex;
  cursor: pointer;
  padding: 0 20px;
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
`;

const TextTransfer = styled(Text)`
  margin-left: 8px;
`;

const Item = styled.li`
  :hover {
    background-color: #e6edf7;
  }
`;

const Transfer = (props) => {
  const {
    handleChangeTransfer, checkAll, checkZero, checkOne, checkTwo, checkThree,
  } = props;
  const transfer = [
    { id: 'all', title: 'Все пересадки', value: checkAll },
    { id: 'zero', title: '0 пересадок ', value: checkZero },
    { id: 'one', title: '1 пересадка', value: checkOne },
    { id: 'two', title: '2 пересадки', value: checkTwo },
    { id: 'three', title: '3 пересадки', value: checkThree },
  ];
  const renderTransfer = () => transfer.map((item) => (
    <Item key={item.id}>
      <LabelTransfer>
        <Checkbox data-id={item.id} onChange={handleChangeTransfer} checked={item.value} />
        <TextTransfer>{item.title}</TextTransfer>
      </LabelTransfer>
    </Item>
  ));
  return (
    <ContainerTransfer>
      <Text style={{ marginTop: 0, padding: '0 20px' }}>Количество пересадок</Text>
      <List>{renderTransfer()}</List>
    </ContainerTransfer>
  );
};

Transfer.propTypes = {
  checkAll: PropTypes.bool.isRequired,
  checkZero: PropTypes.bool.isRequired,
  checkOne: PropTypes.bool.isRequired,
  checkTwo: PropTypes.bool.isRequired,
  checkThree: PropTypes.bool.isRequired,
  handleChangeTransfer: PropTypes.func.isRequired,
};

export default Transfer;
