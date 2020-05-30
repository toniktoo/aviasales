import React from 'react';
import styled from 'styled-components';
import { format, addMinutes } from 'date-fns';
import PropTypes from 'prop-types';
import Text from '../../styled_components/Text';

const ContainerTicket = styled.div`
  width: 100%;
  height: 192px;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 20px;
  box-sizing: border-box;
  display: grid;
  padding-left: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
const Box = styled.div`
  grid-area: ${(props) => props.gridArea};
  &.boxEmpty {
    grid-area: 1 / 3 / 2 / 4;
    display: flex;
    align-items: center;
  }
`;
const Img = styled.div`
  width: 110px;
  height: 36px;
  background-image: url(${(props) => props.urlImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const Ticket = (props) => {
  const { data } = props;
  const { price, carrier, segments } = data;
  const flightTo = segments[0];
  const flightFrom = segments[1];
  const thousandPrice = price.toString().substr(0, 2);
  const hundredPrice = price.toString().substr(2);

  const renderCountTransfer = (arr) => {
    switch (arr.stops.length) {
      case 0:
        return 'без пересадок';
      case 1:
        return '1 пересадка';
      default:
        return `${arr.stops.length} пересадки`;
    }
  };
  const renderTime = (arr) => `${format(new Date(arr.date), 'HH:mm')} – ${format(
    addMinutes(new Date(arr.date), arr.duration),
    'HH:mm',
  )}`;
  const renderFlight = (arr) => `${arr.origin} - ${arr.destination}`;
  const renderCountTime = (arr) => `${Math.trunc(arr.duration / 60)}ч ${arr.duration % 60}м`;

  const renderPrice = () => `${thousandPrice} ${hundredPrice} P`;

  return (
    <ContainerTicket>
      <Box gridArea="1 / 1 / 2 / 2">
        <Text color="#2196F3" fontSize="24px">
          {renderPrice()}
        </Text>
      </Box>
      <Box gridArea="2 / 1 / 3 / 2">
        <Text color="#A0B0B9">{renderFlight(flightTo)}</Text>
        <Text>{renderTime(flightTo)}</Text>
      </Box>
      <Box gridArea="3 / 1 / 4 / 2">
        <Text color="#A0B0B9">{renderFlight(flightFrom)}</Text>
        <Text>{renderTime(flightFrom)}</Text>
      </Box>
      <Box gridArea="1 / 2 / 2 / 3" />
      <Box gridArea="2 / 2 / 3 / 3">
        <Text color="#A0B0B9">В пути</Text>
        <Text>{renderCountTime(flightTo)}</Text>
      </Box>
      <Box gridArea="3 / 2 / 4 / 3">
        <Text color="#A0B0B9">В пути</Text>
        <Text>{renderCountTime(flightFrom)}</Text>
      </Box>
      <Box gridArea="1 / 1 / 2 / 2" className="boxEmpty">
        <Img urlImg={`http://pics.avs.io/99/36/${carrier}.png`} />
      </Box>
      <Box gridArea="2 / 3 / 3 / 4">
        <Text color="#A0B0B9">{renderCountTransfer(flightTo)}</Text>
        <Text>
          {flightTo.stops.map((stop, index) => (index + 1 === flightTo.stops.length ? `${stop} ` : `${stop}, `))}
        </Text>
      </Box>
      <Box gridArea="3 / 3 / 4 / 4">
        <Text color="#A0B0B9">{renderCountTransfer(flightFrom)}</Text>
        <Text>
          {flightFrom.stops.map((stop, index) => (index + 1 === flightFrom.stops.length ? `${stop} ` : `${stop}, `))}
        </Text>
      </Box>
    </ContainerTicket>
  );
};

Ticket.propTypes = {
  data: PropTypes.shape({
    price: PropTypes.number,
    carrier: PropTypes.string,
    segments: PropTypes.array.isRequired,
  }).isRequired,
};
export default Ticket;
