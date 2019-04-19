//Frameworks
import React from 'react';
import styled from 'styled-components';

//Components
import HomeSignIn from '../components/homesignin.js';
import HomeContent from '../components/homecontent.js';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Home = props => {
  const loggedIN = props.isLoggedIn();
  return (
    <DivWrapper>
      <h1>Welcome</h1>
      {loggedIN ? (
        <HomeContent />
      ) : (
        <HomeSignIn raiseLoginModal={props.raiseLoginModal} />
      )}
    </DivWrapper>
  );
};

export default Home;
