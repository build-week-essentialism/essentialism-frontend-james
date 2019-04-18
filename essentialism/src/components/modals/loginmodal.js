import React from 'react';
import styled from 'styled-components';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  background-color: black;
  color: white;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const LoginModal = props => {
  return (
    <DivWrapper>
      <h1>This is the LoginModal Component</h1>
    </DivWrapper>
  );
};

export default LoginModal;
