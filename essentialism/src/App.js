//Frameworks
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

//Components
import Header from './components/header/header.js';
import LoginModal from './components/modals/loginmodal.js';

/***************************************************************************************************
 ********************************************* Variables *******************************************
 **************************************************************************************************/
const isTestServerOn = false;
const server = isTestServerOn
  ? 'http://localhost:5000'
  : 'https://essentialism.herokuapp.com';
export const server_url = `${server}/`;

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/

const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
html,
body,
#root {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  background-color: rgb(243, 243, 243);
  min-height: 100vh;
}
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoginModalRaised: false
    };
  }

  raiseLoginModal = ev => {
    ev.stopPropagation();
    this.setState({ isLoginModalRaised: true });
  };

  closeLoginModal = ev => {
    ev.stopPropagation();
    this.setState({ isLoginModalRaised: false });
  };

  isLoggedIn() {
    return localStorage.getItem('token') && localStorage.getItem('id')
      ? true
      : false;
  }

  render() {
    return (
      <DivWrapper>
        <GlobalStyle />
        <Header
          isLoggedIn={this.isLoggedIn}
          raiseLoginModal={this.raiseLoginModal}
        />
        <h1>Hello World</h1>
        {this.state.isLoginModalRaised && (
          <LoginModal closeLoginModal={this.closeLoginModal} />
        )}
      </DivWrapper>
    );
  }
}

export default App;
