/* eslint-disable no-case-declarations */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import BtnSort from './BtnSort';
import { CHEAP, FAST } from '../../constants';

const ContainerBtnSort = (props) => {
  const {
    setFiltredTickets, filtredTickets, setActiveBtnSort, activeBtnSort,
  } = props;

  // кнопки сортировки по цене билета и скорости
  const handleSort_cheap_or_fast = (event) => {
    switch (event.currentTarget.dataset.id) {
      case CHEAP:
        setFiltredTickets(_.sortBy([...filtredTickets], ['price']));
        setActiveBtnSort(CHEAP);
        break;
      case FAST:
        const sortedTickets = [...filtredTickets].sort((a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration));
        setFiltredTickets(sortedTickets);
        setActiveBtnSort(FAST);
        break;
      default:
    }
  };

  return (
    <BtnSort handleSort_cheap_or_fast={handleSort_cheap_or_fast} activeBtnSort={activeBtnSort} />
  );
};

ContainerBtnSort.propTypes = {
  filtredTickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFiltredTickets: PropTypes.func.isRequired,
  setActiveBtnSort: PropTypes.func.isRequired,
  activeBtnSort: PropTypes.string.isRequired,
};

export default ContainerBtnSort;
