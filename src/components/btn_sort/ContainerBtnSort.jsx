import React from 'react';
import PropTypes from 'prop-types';
import BtnSort from './BtnSort';
import { CHEAP, FAST } from '../../constants';
import { orderTickets } from '../../utils/orderTickets';

const ContainerBtnSort = (props) => {
  const {
    setFiltred, filtred, setActiveBtnSort, activeBtnSort,
  } = props;

  // кнопки сортировки по цене билета и скорости
  const handleSort_cheap_or_fast = (event) => {
    switch (event.currentTarget.dataset.id) {
      case CHEAP:
        setFiltred(orderTickets([...filtred], ['price'], ['asc']));
        setActiveBtnSort(CHEAP);
        break;
      case FAST:
        setFiltred(orderTickets([...filtred], ['segments[0].duration'], ['asc']));
        setActiveBtnSort(FAST);
        break;
      default:
    }
  };

  return (
    <BtnSort
      handleSort_cheap_or_fast={handleSort_cheap_or_fast}
      activeBtnSort={activeBtnSort}
    />
  );
};

ContainerBtnSort.propTypes = {
  filtred: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFiltred: PropTypes.func.isRequired,
  setActiveBtnSort: PropTypes.func.isRequired,
  activeBtnSort: PropTypes.string.isRequired,
};

export default ContainerBtnSort;
