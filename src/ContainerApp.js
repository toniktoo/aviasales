import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import App from "./App.jsx";

// TODO:
// 1. Обратботать ошибки
// 2. решить проблему с кол - вом пересадок
// 3. отрефакторить

const ContainerApp = () => {
  const [id, setId] = useState(null);
  const [fetchTickets, setFetchTickets] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [fetchStop, setFetchStop] = useState(false);
  const [countRequest, setCountRequest] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isActiveBtn, setActiveBtn] = useState("cheap");

  const [objTransfer, setObjTransfer] = useState({
    all_transfer: true,
    no_transfer: false,
    one_transfer: false,
    two_transfer: false,
    three_transfer: false,
  });

  useEffect(() => {
    const getTickets = async () => {
      try {
        if (id === null) {
          const resId = await axios.get(
            "https://front-test.beta.aviasales.ru/search"
          );
          setId(resId.data.searchId);
        }
        if (id !== null) {
          let resTickets = await axios.get(
            `https://front-test.beta.aviasales.ru/tickets?searchId=${id}`
          );
          setFetchTickets(
            orderTickets(
              [...fetchTickets.concat(resTickets.data.tickets)],
              ["price"],
              ["asc"]
            )
          );
          if (resTickets.data.stop) {
            setFetchStop(true);
            setIsLoading(true);
            setTickets(orderTickets([...fetchTickets], ["price"], ["asc"]));
          }
        }
      } catch (err) {
        if (err.response.status === 500) {
          setCountRequest((count) => (count += 1));
        }
      }
    };

    if (fetchStop !== true) {
      getTickets();
    }
  }, [id, countRequest, fetchStop, fetchTickets]);

  useEffect(() => {
    const sortTransfer = () => {
      let getStops_one = (ticket) => ticket.segments[0].stops.length;
      let getStops_two = (ticket) => ticket.segments[1].stops.length;

      if (objTransfer.all_transfer) {
        setTickets([...fetchTickets]);
      }
      if (objTransfer.no_transfer) {
        setTickets(
          [...fetchTickets].filter(
            (ticket) =>
              (getStops_one(ticket) === 0 && getStops_two(ticket)) === 0
          )
        );
      }
      if (objTransfer.one_transfer) {
        setTickets(
          [...fetchTickets].filter((ticket) => {
            return getStops_one(ticket) === 1 && getStops_two(ticket) === 1;
          })
        );
      }
      if (objTransfer.two_transfer) {
        setTickets(
          [...fetchTickets].filter((ticket) => {
            return getStops_one(ticket) === 2 && getStops_two(ticket) === 2;
          })
        );
      }
      if (objTransfer.three_transfer) {
        setTickets(
          [...fetchTickets].filter((ticket) => {
            return getStops_one(ticket) === 3 && getStops_two(ticket) === 3;
          })
        );
      }
    };

    if (fetchStop) {
      sortTransfer();
    }
  }, [fetchStop, objTransfer, fetchTickets]);
  //метод сортировки
  const orderTickets = (arr, options, direction) => {
    return _.orderBy(arr, options, direction);
  };

  const btnCheap = () => {
    setTickets(orderTickets([...tickets], ["price"], ["asc"]));
    setActiveBtn("cheap");
  };
  const btnFast = () => {
    setTickets(orderTickets([...tickets], ["segments[0].duration"], ["asc"]));
    setActiveBtn("fast");
  };

  const btnAllTransfer = () => {
    setObjTransfer({
      ...objTransfer,
      all_transfer: !objTransfer.all_transfer,
    });
  };
  const btnNoTransfer = () => {
    setObjTransfer({
      ...objTransfer,
      no_transfer: !objTransfer.no_transfer,
    });
  };
  const btnOneTransfer = () => {
    return setObjTransfer({
      ...objTransfer,
      one_transfer: !objTransfer.one_transfer,
    });
  };
  const btnTwoTransfer = () => {
    return setObjTransfer({
      ...objTransfer,
      two_transfer: !objTransfer.two_transfer,
    });
  };
  const btnThreeTransfer = () => {
    return setObjTransfer({
      ...objTransfer,
      three_transfer: !objTransfer.three_transfer,
    });
  };

  return (
    <App
      btnAllTransfer={btnAllTransfer}
      btnNoTransfer={btnNoTransfer}
      btnOneTransfer={btnOneTransfer}
      btnTwoTransfer={btnTwoTransfer}
      btnThreeTransfer={btnThreeTransfer}
      objTransfer={objTransfer}
      tickets={tickets}
      isLoading={isLoading}
      isActiveBtn={isActiveBtn}
      btnCheap={btnCheap}
      btnFast={btnFast}
    ></App>
  );
};

export default ContainerApp;
