import React from "react";
import styled from "styled-components";
import Logo from "../../styled_components/Logo";

const ContainerHeader = styled.div`
  width: 100%;
  height: 60px;
`;

const LogoHeader = styled(Logo)`
  width: 60px;
  height: 60px;
  margin: auto;
  background-image: url("./img/plane-logo.svg");
`;

const Header = () => {
  return (
    <ContainerHeader>
      <LogoHeader />
    </ContainerHeader>
  );
};

export default Header;
