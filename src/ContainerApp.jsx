import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import App from './App';
import { fetchApi } from './api/fetchApi';
import { CHEAP, FAST } from './constants';

const ContainerApp = () => {
  const [activeBtnSort, setActiveBtnSort] = useState('cheap');
  const [ticketsFromApi, setTicketsFromApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filtredTickets, setFiltredTickets] = useState([]);
  const [transfer, setTransfer] = useState([]);
  const [id, setId] = useState(null);

  // запрашиваем id
  useEffect(() => {
    const fetchId = async () => {
      try {
        const response = await fetchApi('https://front-test.beta.aviasales.ru/search');
        const ID = await response.data.searchId;
        setId(ID);
      } catch (e) {
        console.log('Ошибка в получении id');
      }
    };
    fetchId();
  }, []);

  // запрашиваем билеты
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetchApi(
          `https://front-test.beta.aviasales.ru/tickets?searchId=${id}`,
        );
        // Добавляем id каждому билету
        let count = 0;
        const ticketsWithId = response.data.tickets.map((ticket) => {
          count += 1;
          return { id: count, ...ticket };
        });
        setTicketsFromApi([...ticketsFromApi.concat(ticketsWithId)]);
        if (response.data.stop === true) {
          setIsLoading(false);
          setTransfer([0, 1, 2, 3]);
        }
      } catch (err) {
        if (err.response.status === 500) {
          fetchTickets();
        }
      }
    };

    if (isLoading && id !== null) {
      fetchTickets();
    }
  }, [id, ticketsFromApi, isLoading, setTicketsFromApi, setIsLoading, setTransfer]);

  // отрисовываем в зависимости от кол-во пересадок
  useEffect(() => {
    const ticketsFilterTransfer = transfer.reduce((sort, currentSort) => {
      const result = ticketsFromApi.filter((item) => item.segments[0].stops.length === currentSort);
      return [...sort, ...result];
    }, []);

    if (activeBtnSort === CHEAP) {
      setFiltredTickets(_.sortBy([...ticketsFilterTransfer], ['price']));
    }
    if (activeBtnSort === FAST) {
      const sortedTickets = [...ticketsFilterTransfer].sort(
        (a, b) => a.segments[0].duration
          + a.segments[1].duration
          - (b.segments[0].duration + b.segments[1].duration),
      );
      setFiltredTickets(sortedTickets);
    }
  }, [transfer]);

  return (
    <App
      filtredTickets={filtredTickets}
      setFiltredTickets={setFiltredTickets}
      transfer={transfer}
      setTransfer={setTransfer}
      isLoading={!isLoading}
      activeBtnSort={activeBtnSort}
      setActiveBtnSort={setActiveBtnSort}
    />
  );
};
export default ContainerApp;
