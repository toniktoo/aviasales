import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Transfer from './Transfer';

const ContainerTransfer = (props) => {
  const [checkAll, setCheckAll] = useState(true);
  const [checkZero, setCheckZero] = useState(false);
  const [checkOne, setCheckOne] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);
  const [checkThree, setCheckThree] = useState(false);

  const { setFiltredTickets, transfer, setTransfer } = props;

  const setChecked = (name, count) => {
    if (name) {
      setTransfer(transfer.filter((item) => item !== count));
    } else if (checkAll) {
      setTransfer([count]);
    } else {
      setTransfer([...transfer, count]);
    }
    setCheckAll(false);
    setFiltredTickets([]);
  };

  const setAll = () => {
    setCheckZero(false);
    setCheckOne(false);
    setCheckTwo(false);
    setCheckThree(false);
  };

  const handleChangeTransfer = (event) => {
    const checkedTransfer = event.currentTarget.dataset.id;
    switch (checkedTransfer) {
      case 'all':
        if (checkAll) {
          setFiltredTickets([]);
          setTransfer([]);
        } else {
          setAll();
          setFiltredTickets([]);
          setTransfer([0, 1, 2, 3]);
        }
        setCheckAll(!checkAll);
        break;
      case 'zero':
        setChecked(checkZero, 0);
        setCheckZero(!checkZero);
        break;
      case 'one':
        setChecked(checkOne, 1);
        setCheckOne(!checkOne);
        break;
      case 'two':
        setChecked(checkTwo, 2);
        setCheckTwo(!checkTwo);
        break;
      case 'three':
        setChecked(checkThree, 3);
        setCheckThree(!checkThree);
        break;
      default:
        break;
    }
  };

  return (
    <Transfer
      checkAll={checkAll}
      checkZero={checkZero}
      checkOne={checkOne}
      checkTwo={checkTwo}
      checkThree={checkThree}
      handleChangeTransfer={handleChangeTransfer}
    />
  );
};

ContainerTransfer.propTypes = {
  setFiltredTickets: PropTypes.func.isRequired,
  transfer: PropTypes.arrayOf(PropTypes.number).isRequired,
  setTransfer: PropTypes.func.isRequired,
};

export default ContainerTransfer;
