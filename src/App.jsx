import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Header from './components/header/Header';
import ContainerTransfer from './components/transfer/ContainerTransfer';
import ContainerBtnSort from './components/btn_sort/ContainerBtnSort';
import TicketsWrap from './components/tickets/TicketsWrap';

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
    filtred,
    setFiltred,
    setActiveBtnSort,
    activeBtnSort,
    handleChangeTransfer,
    transfer,
    setTransfer,
  } = props;
  const renderTickets = () => (isLoading ? (
    <TicketsWrap arr_tickets={filtred} />
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
          handleChangeTransfer={handleChangeTransfer}
          filtred={filtred}
          setFiltred={setFiltred}
          transfer={transfer}
          setTransfer={setTransfer}
        />
        <ContainerBtnSort
          activeBtnSort={activeBtnSort}
          setFiltred={setFiltred}
          filtred={filtred}
          setActiveBtnSort={setActiveBtnSort}
        />
        {renderTickets()}
      </ContainerContent>
    </Container>
  );
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  filtred: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFiltred: PropTypes.func.isRequired,
  setActiveBtnSort: PropTypes.func.isRequired,
  activeBtnSort: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  handleChangeTransfer: PropTypes.func,
  transfer: PropTypes.arrayOf(PropTypes.number).isRequired,
  setTransfer: PropTypes.func.isRequired,
};

export default App;
