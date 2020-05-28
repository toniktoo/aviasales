import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../styled_components/Text';
import { CHEAP, FAST } from '../../constants';

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
  align-items: center;
  :focus {
    outline: none;
  }
`;

const ButtonCheap = styled(Button)`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: ${(props) => (props.activeBtnSort === CHEAP ? '#2196f3' : '#fff')};
`;

const ButtonFast = styled(Button)`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${(props) => (props.activeBtnSort === FAST ? '#2196f3' : '#fff')};
`;

const TextBtnCheap = styled(Text)`
  color: ${(props) => (props.activeBtnSort === CHEAP ? '#fff' : '#000')};
`;

const TextBtnFast = styled(Text)`
  color: ${(props) => (props.activeBtnSort === FAST ? '#fff' : '#000')};
`;

const BtnSort = (props) => {
  const { activeBtnSort, handleSort_cheap_or_fast } = props;
  return (
    <Container>
      <ButtonCheap
        data-id="cheap"
        activeBtnSort={activeBtnSort}
        onClick={handleSort_cheap_or_fast}
      >
        <TextBtnCheap activeBtnSort={activeBtnSort}>Самый дешевый</TextBtnCheap>
      </ButtonCheap>
      <ButtonFast
        data-id="fast"
        activeBtnSort={activeBtnSort}
        onClick={handleSort_cheap_or_fast}
      >
        <TextBtnFast activeBtnSort={activeBtnSort}>Самый быстрый</TextBtnFast>
      </ButtonFast>
    </Container>
  );
};

BtnSort.propTypes = {
  activeBtnSort: PropTypes.string.isRequired,
  handleSort_cheap_or_fast: PropTypes.func.isRequired,
};

export default BtnSort;
