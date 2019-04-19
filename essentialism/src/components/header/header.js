//Frameworks
import React from 'react';
import styled from 'styled-components';

//Components
import TopNav from './topnav.js';
import { headerHeight } from '../../globals/styles.js';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  height: ${headerHeight};
  z-index: 3;
`;

const H1Title = styled.h1`
  margin: 0.67em;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Header = props => {
  return (
    <DivWrapper>
      <H1Title>Essentialism</H1Title>
      <TopNav
        isLoggedIn={props.isLoggedIn}
        logout={props.logout}
        raiseLoginModal={props.raiseLoginModal}
        homeLink={props.homeLink}
      />
    </DivWrapper>
  );
};

export default Header;
