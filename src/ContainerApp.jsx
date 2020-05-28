import React, { useState, useEffect } from 'react';
import App from './App';
import { useFetch } from './api/useFetch';
import { CHEAP, FAST } from './constants';
import { orderTickets } from './utils/orderTickets';

const ContainerApp = () => {
  const [activeBtnSort, setActiveBtnSort] = useState('cheap');
  const [all_tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filtred, setFiltred] = useState([]);
  const [transfer, setTransfer] = useState([]);

  // запрашиваем билеты
  useFetch(setTickets, all_tickets, setIsLoading, isLoading, setTransfer);

  // отрисовываем в зависимости от кол-во пересадок
  useEffect(() => {
    const newTikects = transfer.reduce((sort, currentSort) => {
      const result = all_tickets.filter((item) => item.segments[0].stops.length === currentSort);
      return [...sort, ...result];
    }, []);

    if (activeBtnSort === CHEAP) {
      setFiltred(orderTickets([...filtred, ...newTikects], ['price'], ['asc']));
    }
    if (activeBtnSort === FAST) {
      setFiltred(orderTickets([...filtred, ...newTikects], ['segments[0].duration'], ['asc']));
    }
  }, [transfer]);

  return (
    <App
      filtred={filtred}
      setFiltred={setFiltred}
      transfer={transfer}
      setTransfer={setTransfer}
      isLoading={!isLoading}
      activeBtnSort={activeBtnSort}
      setActiveBtnSort={setActiveBtnSort}
    />
  );
};
export default ContainerApp;
