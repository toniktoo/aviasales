import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Header from './components/header/Header';
import ContainerTransfer from './components/transfer/ContainerTransfer';
import ContainerBtnSort from './components/btn_sort/ContainerBtnSort';
import ContainerTicket from './components/tickets/ContainerTicket';

const Container = styled.div`
  max-width: 750px;
  width: 100%;
  margin: auto;
  margin-top: 50px;
`;

const ContainerContent = styled(Container)`
  height: 400px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const LoaderWrap = styled.div`
  width: 502px;
  height: 100%;
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
`;

function App(props) {
  const {
    isLoading,
    filtredTickets,
    setFiltredTickets,
    setActiveBtnSort,
    activeBtnSort,
    transfer,
    setTransfer,
  } = props;
  const renderTickets = () => (isLoading ? (
    <ContainerTicket filtredTickets={filtredTickets} />
  ) : (
    <LoaderWrap>
      <Loader type="Bars" color="#2196f3" height={75} width={75} />
    </LoaderWrap>
  ));
  return (
    <Container>
      <Header />
      <ContainerContent>
        <ContainerTransfer
          filtredTickets={filtredTickets}
          setFiltredTickets={setFiltredTickets}
          transfer={transfer}
          setTransfer={setTransfer}
        />
        <ContainerBtnSort
          activeBtnSort={activeBtnSort}
          setFiltredTickets={setFiltredTickets}
          filtredTickets={filtredTickets}
          setActiveBtnSort={setActiveBtnSort}
        />
        {renderTickets()}
      </ContainerContent>
    </Container>
  );
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  filtredTickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFiltredTickets: PropTypes.func.isRequired,
  setActiveBtnSort: PropTypes.func.isRequired,
  activeBtnSort: PropTypes.string.isRequired,
  transfer: PropTypes.arrayOf(PropTypes.number).isRequired,
  setTransfer: PropTypes.func.isRequired,
};

export default App;
