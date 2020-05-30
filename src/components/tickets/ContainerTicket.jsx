import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Ticket from './Ticket';

const TicketsWrap = styled.div`
  width: 502px;
  height: 100%;
  grid-area: 2 / 2 / 3 / 3;
`;

const ContainerTicket = (props) => {
  const renderTickets = () => props.filtredTickets.slice(0, 5).map((ticket) => <Ticket key={ticket.id} data={ticket} />);
  return <TicketsWrap>{renderTickets()}</TicketsWrap>;
};

ContainerTicket.propTypes = {
  filtredTickets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContainerTicket;
