//Frameworks
import React from 'react';
import styled from 'styled-components';

//Components
import LoginForm from '../auth/login.js';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const LoginModal = props => {
  return (
    <DivWrapper onClick={ev => props.closeLoginModal(ev)}>
      <LoginForm
        isLoggedIn={props.isLoggedIn}
        closeLoginModal={props.closeLoginModal}
      />
    </DivWrapper>
  );
};

export default LoginModal;
