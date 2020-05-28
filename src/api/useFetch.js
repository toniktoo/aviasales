import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = (
  setTickets,
  all_tickets,
  setIsLoading,
  isLoading,
  setTransfer
) => {
  const [id, setId] = useState(null);
  useEffect(() => {
    //запрашиваем id
    const fetchId = async () => {
      try {
        const response = await axios.get(
          'https://front-test.beta.aviasales.ru/search'
        );
        const id = await response.data.searchId;
        setId(id);
      } catch (e) {
        console.log('Ошибка в получении id');
      }
    };
    //запрашимаем билеты
    const fetchTickets = async () => {
      try {
        const response = await axios.get(
          `https://front-test.beta.aviasales.ru/tickets?searchId=${id}`
        );
        setTickets([...all_tickets.concat(response.data.tickets)]);
        if (response.data.stop === true) {
          setIsLoading(false);
          setTransfer([0, 1, 2, 3]);
        }
      } catch (e) {
        if (e.response.status === 500) {
          fetchTickets();
        }
      }
    };

    const getTickets = async () => {
      //fetch id
      if (id === null) {
        fetchId();
      }
      //fetch teckets
      if (id !== null) {
        fetchTickets();
      }
    };

    if (isLoading) {
      getTickets();
    }
  }, [id, all_tickets, isLoading, setTickets, setIsLoading, setTransfer]);
};
