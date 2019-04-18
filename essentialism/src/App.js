import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

/***************************************************************************************************
 ********************************************* Variables *******************************************
 **************************************************************************************************/
const isTestServerOn = false;
const server = isTestServerOn
  ? 'http://localhost:5000'
  : 'https://essentialism.herokuapp.com';
export const server_url = `${server}/`

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/

const DivWrapper = styled.div`
display: flex;
`;

const GlobalStyle = createGlobalStyle`
html,
body,
#root {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  background-color: ${props =>
    props.isModelRaised === 'true'
      ? `rgba(0, 0, 0, 0.3)`
      : `rgb(243, 243, 243)`};
  min-height: 100vh;
}
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      isModelRaised: false
    };
  }

  setModelIsRaised = () => {
    this.setState({ isModelRaised: true });
  };

  setModelNotRaised = () => {
    this.setState({ isModelRaised: false });
  };

  isLoggedIn() {
    return (localStorage.getItem('token') && localStorage.getItem('id')) ? true : false
  };

  render() {
    return (
      <DivWrapper>
        <GlobalStyle isModelRaised={this.state.isModelRaised.toString()} />
        <h1>Hello World</h1>
      </DivWrapper>
    );
  }
}

export default App;
