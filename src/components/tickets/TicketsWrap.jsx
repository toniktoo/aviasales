import React from "react";
import styled from "styled-components";

import Ticket from "./Ticket";
import uuid from "react-uuid";

const ContainerTickets = styled.div`
  width: 502px;
  height: 100%;
  grid-area: 2 / 2 / 3 / 3;
`;

const TicketsWrap = (props) => {
  const renderTickets = () => {
    return props.arr_tickets
      .filter((ticket, index) => index < 5)
      .map((ticket) => <Ticket key={uuid()} data={ticket} />);
  };
  return <ContainerTickets>{renderTickets()}</ContainerTickets>;
};

export default TicketsWrap;
