import React from 'react';
import styled from 'styled-components';
import Logo from '../../styled_components/Logo';
import logo from './logo.svg';

const ContainerHeader = styled.div`
  width: 100%;
  height: 60px;
`;

const LogoHeader = styled(Logo)`
  width: 60px;
  height: 60px;
  margin: auto;
  background-image: url(${logo});
`;

const Header = () => (
  <ContainerHeader>
    <LogoHeader />
  </ContainerHeader>
);

export default Header;
