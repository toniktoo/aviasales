import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import Ticket from './Ticket';

const ContainerTickets = styled.div`
  width: 502px;
  height: 100%;
  grid-area: 2 / 2 / 3 / 3;
`;

const TicketsWrap = (props) => {
  const renderTickets = () => props.arr_tickets
    .filter((ticket, index) => index < 5)
    .map((ticket) => <Ticket key={uuid()} data={ticket} />);
  return <ContainerTickets>{renderTickets()}</ContainerTickets>;
};

TicketsWrap.propTypes = {
  arr_tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TicketsWrap;