import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Transfer from './Transfer';

const ContainerTransfer = (props) => {
  const [all, setAll] = useState(true);
  const [zero, setZero] = useState(false);
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  const { setFiltred, transfer, setTransfer } = props;

  const filterStops = (name, count) => {
    if (!name) {
      if (all) {
        setTransfer([count]);
      } else {
        setTransfer([...transfer, count]);
      }
    } else {
      setTransfer(transfer.filter((item) => item !== count));
    }
    setAll(false);
    setFiltred([]);
  };

  const handleChangeTransfer = (event) => {
    switch (event.currentTarget.dataset.id) {
      case 'all':
        if (!all) {
          setZero(false);
          setOne(false);
          setTwo(false);
          setFiltred([]);
          setTransfer([0, 1, 2, 3]);
        } else {
          setFiltred([]);
          setTransfer([]);
        }
        setAll(!all);
        break;
      case 'zero':
        filterStops(zero, 0);
        setZero(!zero);
        break;
      case 'one':
        filterStops(one, 1);
        setOne(!one);
        break;
      case 'two':
        filterStops(two, 2);
        setTwo(!two);
        break;
      case 'three':
        filterStops(three, 3);
        setThree(!three);
        break;
      default:
        break;
    }
  };

  return (
    <Transfer
      all={all}
      zero={zero}
      one={one}
      two={two}
      three={three}
      handleChangeTransfer={handleChangeTransfer}
    />
  );
};

ContainerTransfer.propTypes = {
  setFiltred: PropTypes.func.isRequired,
  transfer: PropTypes.arrayOf(PropTypes.number).isRequired,
  setTransfer: PropTypes.func.isRequired,
};

export default ContainerTransfer;
