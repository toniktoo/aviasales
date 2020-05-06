import React from "react";
import styled from "styled-components";

import Header from "./components/header/Header.jsx";
import Transfer from "./components/transfer/Transfer.jsx";
import CheapFast from "./components/btn_cheap_fast/CheapFast.jsx";
import TicketsWrap from "./components/tickets/TicketsWrap.jsx";
import Loader from "react-loader-spinner";
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
  const renderTickets = () => {
    return props.isLoading ? (
      <TicketsWrap arr_tickets={props.tickets} />
    ) : (
      <LoaderWrap>
        <Loader type="Bars" color="#2196f3" height={75} width={75} />
      </LoaderWrap>
    );
  };
  return (
    <Container>
      <Header />
      <ContainerContent>
        <Transfer
          btnAllTransfer={props.btnAllTransfer}
          btnNoTransfer={props.btnNoTransfer}
          btnOneTransfer={props.btnOneTransfer}
          btnTwoTransfer={props.btnTwoTransfer}
          btnThreeTransfer={props.btnThreeTransfer}
          objTransfer={props.objTransfer}
        />
        <CheapFast
          btnCheap={props.btnCheap}
          btnFast={props.btnFast}
          isActiveBtn={props.isActiveBtn}
        />
        {renderTickets()}
      </ContainerContent>
    </Container>
  );
}

export default App;
